import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const preloaderPath = path.join(root, "assets/offline-preloader.js");
const source = fs.readFileSync(preloaderPath, "utf8");
const prefix = "  var INLINE = ";
const suffix = ";\n  var BASE_DIR";
const start = source.indexOf(prefix);
const end = source.indexOf(suffix, start);
if (start < 0 || end < 0) throw new Error("Could not locate the inline catalogue bundle");

const inline = JSON.parse(source.slice(start + prefix.length, end));
for (const relative of [
  "content/i18n/sw-TZ/texts.json",
  "content/i18n/sw-TZ/audios.json",
  "content/i18n/sw-TZ/timecode/timecode_output.json",
]) {
  inline[`./${relative}`] = JSON.parse(fs.readFileSync(path.join(root, relative), "utf8"));
}

const updated = source.slice(0, start) + prefix + JSON.stringify(inline) + source.slice(end);
fs.writeFileSync(preloaderPath, updated);
console.log("Synchronized text, audio, and timing catalogues in the offline preloader.");
