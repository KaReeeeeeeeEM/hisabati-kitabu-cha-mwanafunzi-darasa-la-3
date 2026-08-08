import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");

const replacements = {
  "pg121_sec001.html": [["<link href=\"./assets/fonts.css\" rel=\"stylesheet\">", "<style>math { font-size: 1.5em; }</style>\n    <link href=\"./assets/fonts.css\" rel=\"stylesheet\">"]],
  "pg124_sec001.html": [["<link href=\"./assets/fonts.css\" rel=\"stylesheet\">", "<style>math { font-size: 1.35em; }</style>\n    <link href=\"./assets/fonts.css\" rel=\"stylesheet\">"]],
  "pg129_sec001.html": [["<link href=\"./assets/fonts.css\" rel=\"stylesheet\">", "<style>math { font-size: 1.35em; }</style>\n    <link href=\"./assets/fonts.css\" rel=\"stylesheet\">"]],
  "pg133_sec001.html": [["<link href=\"./assets/fonts.css\" rel=\"stylesheet\">", "<style>math { font-size: 1.35em; }</style>\n    <link href=\"./assets/fonts.css\" rel=\"stylesheet\">"]],
  "pg135_sec001.html": [["<link href=\"./assets/fonts.css\" rel=\"stylesheet\">", "<style>math { font-size: 1.35em; }</style>\n    <link href=\"./assets/fonts.css\" rel=\"stylesheet\">"]],
  "pg013_sec001.html": [[" ,", ","], [" .", "."]],
  "pg014_sec001.html": [["Pigia mstari kwenye tarakimu yenye thamani ya nafasi ya mamia katika namba zifuatazo:", "Pigia mstari/tambua tarakimu yenye thamani ya nafasi ya mamia katika namba zifuatazo:"]],
  "pg017_sec001.html": [["<div class=\"flex justify-center gap-6 max-sm:gap-4 text-gray-800 font-semibold flex-wrap\"><span data-id=\"pg017_n0006\">Maelfu</span><span data-id=\"pg017_n0007\">Mamia</span><span data-id=\"pg017_n0008\">Makumi</span><span data-id=\"pg017_n0009\">Mamoja</span></div>", ""]],
  "pg024_sec001.html": [["Soma namba zifuatazo:", "Sikiliza na utambue namba zifuatazo:"]],
  "pg025_sec001.html": [["Soma namba zilizomo katika jedwali lifuatalo:", "Tambua na soma namba zilizomo katika jedwali lifuatalo:"]],
  "pg026_sec001.html": [["Soma namba zifuatazo kwa ulalo na kwa wima:", "Soma/tambua namba zifuatazo kwa ulalo na kwa wima:"]],
  "pg031_sec001.html": [["(a) Weka alama ya vema (&#x2713;) iwapo ni sahihi au weka alama ya mkasi (&#x2717;) iwapo sio sahihi katika jedwali lifuatalo.", "(a) Tambua iwapo kila jibu ni sahihi. Weka alama ya vema (&#x2713;) ikiwa ni sahihi au alama ya mkasi (&#x2717;) ikiwa si sahihi katika jedwali lifuatalo."]],
  "pg039_sec001.html": [["Je, kati yao nani ana kadi yenye namba <input", "Je, kati yao nani ana kadi yenye namba kubwa zaidi? <input"], ["Je, nani kati yao ana kadi iliyoandikwa namba <input", "Je, nani kati yao ana kadi iliyoandikwa namba ndogo zaidi? <input"]],
  "pg041_sec001.html": [["Fungu A lina vizibo 2, Fungu B lina vizibo 5.", "Fungu A lina vizibo viwili, Fungu B lina vizibo vitano."], ["Fungu C lina vizibo 8.", "Fungu C lina vizibo vinane."], ["Kutoka Fungu A kwenda B vinaongezeka vizibo 3.", "Kutoka Fungu A kwenda B vinaongezeka kwa vizibo vitatu."], ["Vilevile, kutoka Fungu B kwenda Fungu C vinaongezeka vizibo 3.", "Vilevile, kutoka Fungu B kwenda Fungu C vinaongezeka kwa vizibo vitatu."]],
  "pg051_sec001.html": [["Linganisha namba hizi kwa kutumia alama ya &lt; , = au &gt;.", "Husianisha namba hizi kwa kutumia alama ya &lt;, = au &gt;."]],
  "pg057_sec001.html": [["4561 + 17", "4561 + 1717"], ["2141 + 42", "2141 + 4242"], ["6138 + 1", "6138 + 1234"]],
  "pg071_sec001.html": [["20 1000005", "20. 1000005"]],
  "pg072_sec001.html": [["adt-body font-medium tracking-wide border-b border-neutral-500 pb-1\"><span data-id=\"pg072_n0029\"", "adt-body font-medium tracking-wide\"><span data-id=\"pg072_n0029\""]],
  "pg073_sec001.html": [["grid grid-cols-3 gap-x-10 gap-y-8 max-sm:grid-cols-1", "grid grid-cols-1 gap-y-6 max-w-2xl mx-auto"]],
  "pg081_sec001.html": [["Baada ya kukokotoa, rejea swali na jibu swali kwa maneno", "Baada ya kukokotoa, rejea swali na toa jibu."], ["&#x2212; 27", "&#x2212; 2727"], ["8937 toa 27", "8937 toa 2727"]],
  "pg082_sec001.html": [["grid grid-cols-2 gap-x-16 gap-y-4 max-sm:grid-cols-1 max-sm:gap-y-3", "grid grid-cols-1 gap-y-4 max-w-2xl mx-auto"], ["8912 + 88", "8912 + 888"]],
  "pg084_sec001.html": [["Mwambie mwenzako naye apime na kurekodi urefu wa darasa kwa kutumia hatua za miguu.", "Tambua/onesha kwa kushirikiana na mwenzako; naye apime na kurekodi urefu wa darasa kwa kutumia hatua za miguu."]],
  "pg094_sec001.html": [["mililita(mL)", "mililita (mL)"]],
  "pg095_sec001.html": [["Bainisha vitu vitatu kati ya vyote ulivyoviona.", "Bainisha vitu vitatu kati ya vyote ulivyovitambua."]],
  "pg095_sec001.html": [["Bainisha vitu vitatu kati ya vyote ulivyoviona.", "Bainisha vitu vitatu kati ya vyote ulivyovitambua."], ["alt=\"(a) (b)\" data-id=\"pg095_im001\"", "alt=\"Kikombe cha kupimia kina maji hadi alama ya mililita 300.\" data-id=\"pg095_im001\""], ["alt=\"(a) (b)\" data-id=\"pg095_im002\"", "alt=\"Jagi la kupimia lina maji hadi alama ya lita 2.\" data-id=\"pg095_im002\""]],
  "pg100_sec001.html": [["&#x2194;EF au &#x2194;EF", "&#x2194;EF au &#x2194;FE"]],
  "pg102_sec001.html": [["Mfano wa I", "Mfano wa kwanza"]],
  "pg111_sec001.html": [
    ["class=\"adt-body italic leading-none text-neutral-800\" data-id=\"pg111_n0008\"", "class=\"hidden\" data-id=\"pg111_n0008\""],
    ["class=\"adt-body italic leading-none text-neutral-800\" data-id=\"pg111_n0010\"", "class=\"hidden\" data-id=\"pg111_n0010\""],
    ["class=\"adt-body italic leading-none text-neutral-800\" data-id=\"pg111_n0012\"", "class=\"hidden\" data-id=\"pg111_n0012\""],
    ["class=\"adt-body italic leading-none text-neutral-800\" data-id=\"pg111_n0014\"", "class=\"hidden\" data-id=\"pg111_n0014\""],
    ["class=\"adt-body italic leading-none text-neutral-800\" data-id=\"pg111_n0016\"", "class=\"hidden\" data-id=\"pg111_n0016\""],
    ["class=\"adt-body italic leading-none text-neutral-800\" data-id=\"pg111_n0018\"", "class=\"hidden\" data-id=\"pg111_n0018\""],
    ["class=\"adt-body italic leading-none text-neutral-800\" data-id=\"pg111_n0020\"", "class=\"hidden\" data-id=\"pg111_n0020\""],
    ["class=\"adt-body italic leading-none text-neutral-800\" data-id=\"pg111_n0022\"", "class=\"hidden\" data-id=\"pg111_n0022\""],
    ["class=\"adt-body italic leading-none text-neutral-800\" data-id=\"pg111_n0024\"", "class=\"hidden\" data-id=\"pg111_n0024\""],
    ["class=\"adt-body italic leading-none text-neutral-800\" data-id=\"pg111_n0026\"", "class=\"hidden\" data-id=\"pg111_n0026\""]
  ],
  "pg117_sec001.html": [["images/pg117_im002.jpg", "images/pg117_im002_fixed.svg"], ["images/pg117_im003.jpg", "images/pg117_im003_fixed.svg"], ["images/pg117_im004.jpg", "images/pg117_im004_fixed.svg"], ["images/pg117_im006.jpg", "images/pg117_im006_fixed.svg"]],
  "pg123_sec001.html": [["<mfrac><mn>0</mn><mn>5</mn></mfrac><mo>+</mo><mfrac><mn>2</mn><mn>5</mn></mfrac>", "<mfrac><mn>1</mn><mn>5</mn></mfrac><mo>+</mo><mfrac><mn>2</mn><mn>5</mn></mfrac>"], ["<span class=\"border-b-2 border-slate-800 px-3 pb-1\">0</span><span class=\"px-3 pt-1\">5</span>", "<span class=\"border-b-2 border-slate-800 px-3 pb-1\">1</span><span class=\"px-3 pt-1\">5</span>"]],
  "pg153_sec001.html": [["data-id=\"pg153_im002\" src=\"images/pg153_im002.png\" alt=\"Jedwali la majina ya miezi\"", "data-id=\"pg153_im002\" src=\"images/pg153_im002.png\" alt=\"Januari ni mwezi wa 1 na una siku 31. Februari ni mwezi wa 2 na una siku 28 au 29, Machi ni mwezi wa 3 na una siku 31, na Aprili ni mwezi wa 4 na una siku 30.\""], ["data-id=\"pg153_im003\" src=\"images/pg153_im003.png\" alt=\"Jedwali la majina ya miezi\"", "data-id=\"pg153_im003\" src=\"images/pg153_im003.png\" alt=\"Mei ni mwezi wa 5 na una siku 31. Juni ni mwezi wa 6 na una siku 30, Julai ni mwezi wa 7 na una siku 31, na Agosti ni mwezi wa 8 na una siku 31.\""], ["data-id=\"pg153_im004\" src=\"images/pg153_im004.png\" alt=\"Jedwali la majina ya miezi\"", "data-id=\"pg153_im004\" src=\"images/pg153_im004.png\" alt=\"Septemba ni mwezi wa 9 na una siku 30. Oktoba ni mwezi wa 10 na una siku 31, Novemba ni mwezi wa 11 na una siku 30, na Desemba ni mwezi wa 12 na una siku 31.\""]],
  "pg162_sec001.html": [["data-id=\"pg162_im001\" src=\"images/pg162_im001.jpg\" alt=\"Mfano\"", "data-id=\"pg162_im001\" src=\"images/pg162_im001.jpg\" alt=\"Noti ya shilingi 1000 ya Tanzania. Mbele kuna picha ya uso wa mtu na namba 1000.\""], ["data-id=\"pg162_im002\" src=\"images/pg162_im002.jpg\" alt=\"Mfano\"", "data-id=\"pg162_im002\" src=\"images/pg162_im002.jpg\" alt=\"Nyuma ya noti ya shilingi 1000 ya Tanzania. Kuna picha ya jengo kubwa.\""], ["data-id=\"pg162_im003\" src=\"images/pg162_im003.jpg\" alt=\"Mfano\"", "data-id=\"pg162_im003\" src=\"images/pg162_im003.jpg\" alt=\"Noti ya shilingi 2000 ya Tanzania. Mbele kuna picha ya simba na namba 2000.\""], ["data-id=\"pg162_im004\" src=\"images/pg162_im004.jpg\" alt=\"Mfano\"", "data-id=\"pg162_im004\" src=\"images/pg162_im004.jpg\" alt=\"Nyuma ya noti ya shilingi 2000 ya Tanzania. Kuna jengo la kale na miti pembeni.\""]],
  "pg181_sec001.html": [["alt=\"Mchoro wa zoezi katika ukurasa 181\" data-id=\"pg181_im001\"", "alt=\"Noti ya Benki ya Tanzania ya shilingi elfu kumi, yenye picha ya majengo marefu na namba 10000.\" data-id=\"pg181_im001\""]],
  "pg165_sec001.html": [["(b) Sh 1200 na senti 70 kwa kifupi huandikwa sh 1200 na senti 70.", "(b) Sh 1200 na senti 70 kwa kifupi huandikwa Sh 1200 st 70."]],
  "pg169_sec001.html": [["sh 625 st 45 + 364 20", "sh 625 st 45 + sh 364 st 20"], ["sh 5001 st 80 + 4999 45", "sh 5001 st 80 + sh 4999 st 45"], ["sh 1060 st 05 + 2175 15", "sh 1060 st 05 + sh 2175 st 15"], ["sh 714370 st 80 + 3056 35", "sh 714370 st 80 + sh 3056 st 35"], ["sh 433270 st 55 + 433865 45", "sh 433270 st 55 + sh 433865 st 45"], ["sh 385534 st 05 + 453057 45", "sh 385534 st 05 + sh 453057 st 45"]],
  "pg172_sec001.html": [["Andika st 50 katika nafasi ya senti", "Andika st 45 katika nafasi ya senti"]],
};

for (const [file, pairs] of Object.entries(replacements)) {
  const target = path.join(root, file);
  let source = fs.readFileSync(target, "utf8");
  for (const [from, to] of pairs) {
    if (source.includes(to)) continue;
    if (source.includes(from)) source = source.split(from).join(to);
    else throw new Error(`${file}: missing expected text: ${from}`);
  }
  fs.writeFileSync(target, source);
}

const textUpdates = {
  pg014_n0046: "Pigia mstari/tambua tarakimu yenye thamani ya nafasi ya mamia katika namba zifuatazo:",
  pg024_n0016: "Sikiliza na utambue namba zifuatazo:",
  pg025_n0042: "Tambua na soma namba zilizomo katika jedwali lifuatalo:",
  pg026_n0005: "Soma/tambua namba zifuatazo kwa ulalo na kwa wima:",
  pg031_n0024: "(a) Tambua iwapo kila jibu ni sahihi. Weka alama ya vema (✓) ikiwa ni sahihi au alama ya mkasi (✗) ikiwa si sahihi katika jedwali lifuatalo.",
  pg039_n0040: "Je, kati yao nani ana kadi yenye namba kubwa zaidi?",
  pg039_n0045: "Je, nani kati yao ana kadi iliyoandikwa namba ndogo zaidi?",
  pg041_n0002: "Fungu A lina vizibo viwili, Fungu B lina vizibo vitano.",
  pg041_n0003: "Fungu C lina vizibo vinane.",
  pg041_n0005: "Kutoka Fungu A kwenda B vinaongezeka kwa vizibo vitatu.",
  pg041_n0006: "Vilevile, kutoka Fungu B kwenda Fungu C vinaongezeka kwa vizibo vitatu.",
  pg051_n0012: "Husianisha namba hizi kwa kutumia alama ya <, = au >.",
  pg057_n0005: "1. 4561 + 1717 =",
  pg057_n0017: "7. 2141 + 4242 =",
  pg057_n0023: "10. 6138 + 1234 =",
  pg060_n0003: "Kujumlisha namba nzima kwa kubadili ni kujumlisha tarakimu katika kila nafasi na kubadili makundi ya kumi kuwa kundi moja katika nafasi inayofuata.",
  pg071_n0024: "20. 1000005 – 2 =",
  pg081_n0028: "Baada ya kukokotoa, rejea swali na toa jibu.",
  pg081_n0038: "− 2727",
  pg082_n0015: "8912 + 888 =",
  pg084_n0011: "Tambua/onesha kwa kushirikiana na mwenzako; naye apime na kurekodi urefu wa darasa kwa kutumia hatua za miguu.",
  pg094_n0005: "Vipimo vya ujazo vinavyotumika mara kwa mara ni lita (L) na mililita (mL).",
  pg095_n0027: "Bainisha vitu vitatu kati ya vyote ulivyovitambua.",
  pg100_n0018: "Kwa hiyo, ↔EF au ↔FE ni kifupi cha mstari mnyoofu EF au FE.",
  pg102_n0017: "Mfano wa kwanza",
  pg123_n0017: "1 5 + 2 5 =",
  pg165_n0023: "(b) Sh 1200 na senti 70 kwa kifupi huandikwa Sh 1200 st 70.",
  pg169_n0022: "sh 625 st 45 + sh 364 st 20 =",
  pg169_n0024: "sh 5001 st 80 + sh 4999 st 45 =",
  pg169_n0026: "sh 1060 st 05 + sh 2175 st 15 =",
  pg169_n0028: "sh 714370 st 80 + sh 3056 st 35 =",
  pg169_n0030: "sh 433270 st 55 + sh 433865 st 45 =",
  pg169_n0032: "sh 385534 st 05 + sh 453057 st 45 =",
  pg172_n0028: "Andika st 45 katika nafasi ya senti",
};

const textsPath = path.join(root, "content/i18n/sw-TZ/texts.json");
const texts = JSON.parse(fs.readFileSync(textsPath, "utf8"));
Object.assign(texts, textUpdates);
for (const id of ["pg013_n0007", "pg013_n0010", "pg013_n0013", "pg013_n0016", "pg013_n0019", "pg013_n0022", "pg013_n0025", "pg013_n0028", "pg013_n0031", "pg013_n0034", "pg013_n0037", "pg013_n0040", "pg013_n0043"]) {
  if (typeof texts[id] === "string") texts[id] = texts[id].replaceAll(" ,", ",").replaceAll(" .", ".");
}
fs.writeFileSync(textsPath, `${JSON.stringify(texts, null, 2)}\n`);

console.log(`Applied validation fixes to ${Object.keys(replacements).length} pages and ${Object.keys(textUpdates).length} text entries.`);
