(() => {
  const page = Number(document.querySelector('meta[name="page-section-id"]')?.content || 0);

  const numberTree = (label, center, values) => `
    <div class="book-number-tree" aria-label="Mchoro ${label}">
      <div class="book-tree-label">(${label})</div>
      <div class="book-tree-diagram">
        <div class="book-tree-center">${center}</div>
        <svg class="book-tree-lines" viewBox="0 0 360 160" aria-hidden="true">
          <line x1="180" y1="18" x2="42" y2="145"/><line x1="180" y1="18" x2="134" y2="145"/>
          <line x1="180" y1="18" x2="226" y2="145"/><line x1="180" y1="18" x2="318" y2="145"/>
        </svg>
        <div class="book-tree-values">${values.map(value => `<span>${value}</span>`).join('')}</div>
      </div>
    </div>`;

  const renderPage16 = () => {
    const content = document.querySelector('#content');
    if (!content) return;
    content.className = 'book-page book-page-16 book-after-page15 opacity-100 visible';
    content.innerHTML = `
      <section class="book-exercise-sheet" data-section-id="pg022_sec001">
        <h1 class="book-exercise-title">Zoezi la 4</h1>
        <div class="book-question book-question-one">
          <span class="book-question-number">1.</span>
          <div class="book-question-body">
            <p>Andika namba nzima zifuatazo kwa kifupi:</p>
            <div class="book-option-list">
              <p><span>(a)</span>9000 + 800 + 70 + 2 =</p><p><span>(b)</span>8000 + 800 + 80 + 0 =</p>
              <p><span>(c)</span>1000 + 0 + 0 + 6 =</p><p><span>(d)</span>5000 + 600 + 50 + 8 =</p>
              <p><span>(e)</span>9000 + 700 + 0 + 2 =</p>
            </div>
          </div>
        </div>
        <div class="book-question book-question-two">
          <span class="book-question-number">2.</span>
          <div class="book-question-body">
            <p>Kamilisha jedwali lifuatalo. Mstari wa kwanza ni mfano.</p>
            <table class="book-expansion-table" aria-label="Jedwali la kufafanua namba">
              <tbody>
                <tr><th>8543</th><td>=</td><td class="blue">8000</td><td>+</td><td class="yellow">500</td><td>+</td><td class="blue">40</td><td>+</td><td class="gold">3</td></tr>
                <tr><th>3891</th><td>=</td><td></td><td>+</td><td></td><td>+</td><td></td><td>+</td><td></td></tr>
                <tr><th>1654</th><td>=</td><td></td><td>+</td><td></td><td>+</td><td></td><td>+</td><td></td></tr>
                <tr><th>4200</th><td>=</td><td></td><td>+</td><td></td><td>+</td><td></td><td>+</td><td></td></tr>
                <tr><th>2901</th><td>=</td><td></td><td>+</td><td></td><td>+</td><td></td><td>+</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="book-question book-question-three">
          <span class="book-question-number">3.</span>
          <div class="book-question-body">
            <p>Katika michoro (a) hadi (f), duara moja lina matawi manne yenye duara. Jumla ya thamani ya tarakimu zilizopo kwenye matawi ni sawa na namba nzima kwa kifupi. Jaza namba nzima zinazokosekana katika michoro hiyo. Swali la 3(a) ni mfano.</p>
            <div class="book-number-trees">
              ${numberTree('a', '7241', ['7000', '200', '40', '1'])}
              ${numberTree('b', '', ['1000', '700', '20', '8'])}
            </div>
          </div>
        </div>
      </section>`;
  };

  const renderPage17 = () => {
    const content = document.querySelector('#content');
    if (!content) return;
    content.className = 'book-page book-page-17 book-after-page15 opacity-100 visible';
    content.innerHTML = `
      <section data-section-id="pg023_sec001">
        <div class="book-exercise-sheet book-page17-exercise">
          <div class="book-number-trees book-page17-trees">
            ${numberTree('c', '9082', ['9000', '', '', '2'])}
            ${numberTree('d', '8671', ['', '600', '70', ''])}
            ${numberTree('e', '4000', ['4000', '', '', '0'])}
            ${numberTree('f', '3899', ['3000', '', '90', '9'])}
          </div>
          <div class="book-question book-page17-question4">
            <span class="book-question-number">4.</span>
            <div class="book-question-body">
              <p>Fafanua namba zifuatazo:</p>
              <div class="book-page17-options">
                <p><span>(a)</span>7889</p><p><span>(b)</span>2043</p><p><span>(c)</span>8075</p>
                <p><span>(d)</span>9690</p><p><span>(e)</span>3245</p><p><span>(f)</span>9770</p>
                <p><span>(g)</span>3891</p><p><span>(h)</span>1654</p>
              </div>
            </div>
          </div>
        </div>
        <div class="book-page17-reading">
          <h1>Kusoma na kuandika namba nzima</h1>
          <p>Kusoma na kuandika namba nzima ni msingi wa kujifunza hisabati. Uandishi huo unahusisha kuandika namba kwa numerali ili kuwakilisha idadi ya vitu. Hapa utajifunza kusoma na kuandika namba nzima.</p>
          <h2>Kusoma namba nzima</h2>
          <p>Kusoma namba nzima hutegemea wingi wa tarakimu hizo katika namba inayohusika. Anza kwa kubainisha mamoja, makumi, mamia, maelfu na kuendelea. Kisha soma kwa kuanzia</p>
        </div>
      </section>`;
  };

  const renderPage18 = () => {
    const content = document.querySelector('#content');
    if (!content) return;
    const rows = Array.from({ length: 10 }, (_, row) =>
      `<tr>${Array.from({ length: 10 }, (_, col) => `<td>${1001 + row * 10 + col}</td>`).join('')}</tr>`
    ).join('');
    content.className = 'book-page book-page-18 book-after-page15 opacity-100 visible';
    content.innerHTML = `
      <section data-section-id="pg024_sec001">
        <p class="book-page18-continuation">kushoto kwenda kulia kwa kuzingatia thamani ya tarakimu iliyo kubwa. Kwa maana nyingine, anza na tarakimu iliyopo kwenye thamani ya nafasi kubwa kuliko zote.</p>
        <div class="book-example-card book-page18-example">
          <div class="book-example-label">Mfano wa 1</div>
          <p>Soma namba zifuatazo:</p>
          <div class="book-page18-example-options"><span>(a) &nbsp; 1001</span><span>(b) &nbsp; 1086</span><span>(c) &nbsp; 1100</span></div>
          <div class="book-example-answer-heading">Jibu</div>
          <div class="book-page18-answers"><p>(a) &nbsp; 1001 husomwa elfu moja na moja.</p><p>(b) &nbsp; 1086 husomwa elfu moja na themanini na sita.</p><p>(c) &nbsp; 1100 husomwa elfu moja na mia moja.</p></div>
        </div>
        <div class="book-exercise-sheet book-page18-exercise">
          <h1 class="book-exercise-title">Zoezi la 5</h1>
          <p>Soma namba zifuatazo:</p>
          <table class="book-page18-number-table" aria-label="Namba 1001 hadi 1100"><tbody>${rows}</tbody></table>
        </div>
      </section>`;
  };

  const renderPage19 = () => {
    const content = document.querySelector('#content');
    if (!content) return;
    const rows = Array.from({ length: 9 }, (_, row) =>
      `<tr>${Array.from({ length: 10 }, (_, col) => `<td>${1100 + row * 1000 + col * 100}</td>`).join('')}</tr>`
    ).join('');
    content.className = 'book-page book-page-19 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML = `
      <section data-section-id="pg025_sec001">
        <div class="book-example-card book-page19-example">
          <div class="book-example-label">Mfano wa 2</div>
          <p>Soma namba zifuatazo:</p>
          <div class="book-page19-example-options"><span>(a) &nbsp; 1350</span><span>(b) &nbsp; 1572</span><span>(c) &nbsp; 9700</span><span>(d) &nbsp; 9540</span><span>(e) &nbsp; 9998</span></div>
          <div class="book-example-answer-heading">Jibu</div>
          <div class="book-page19-answers">
            <p>(a) &nbsp; 1350 husomwa elfu moja mia tatu hamsini.</p>
            <p>(b) &nbsp; 1572 husomwa elfu moja mia tano sabini na mbili.</p>
            <p>(c) &nbsp; 9700 husomwa elfu tisa mia saba.</p>
            <p>(d) &nbsp; 9540 husomwa elfu tisa mia tano arobaini.</p>
            <p>(e) &nbsp; 9998 husomwa elfu tisa mia tisa tisini na nane.</p>
          </div>
        </div>
        <div class="book-exercise-sheet book-page19-exercise">
          <h1 class="book-exercise-title">Zoezi la 6</h1>
          <p>Soma namba zilizomo katika jedwali lifuatalo:</p>
          <table class="book-page19-number-table" aria-label="Namba 1100 hadi 10000"><tbody>${rows}</tbody></table>
        </div>
      </section>`;
  };

  const renderPage20 = () => {
    const content = document.querySelector('#content');
    if (!content) return;
    const makeTable = (start, step) => Array.from({ length: 9 }, (_, row) =>
      `<tr>${Array.from({ length: 10 }, (_, col) => `<td>${start + (row * 10 + col) * step}</td>`).join('')}</tr>`
    ).join('');
    content.className = 'book-page book-page-20 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML = `
      <section data-section-id="pg026_sec001">
        <div class="book-exercise-sheet book-page20-exercise">
          <h1 class="book-exercise-title">Zoezi la 7</h1>
          <div class="book-page20-question"><p><span>1.</span>Soma namba zifuatazo kwa ulalo na kwa wima:</p><table aria-label="Namba 1110 hadi 2000"><tbody>${makeTable(1110, 10)}</tbody></table></div>
          <div class="book-page20-question"><p><span>2.</span>Soma namba zote zilizopo kwenye jedwali lifuatalo:</p><table aria-label="Namba 1111 hadi 1200"><tbody>${makeTable(1111, 1)}</tbody></table></div>
        </div>
      </section>`;
  };

  const renderPage21 = () => {
    const content = document.querySelector('#content');
    if (!content) return;
    content.className = 'book-page book-page-21 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML = `
      <section data-section-id="pg027_sec001">
        <div class="book-exercise-sheet book-page21-q3">
          <div class="book-question"><span class="book-question-number">3.</span><div class="book-question-body"><p>Soma namba zifuatazo:</p><div class="book-page21-q3-options"><span>(a) &nbsp; 6546</span><span>(b) &nbsp; 7865</span><span>(c) &nbsp; 2755</span><span>(d) &nbsp; 9118</span><span>(e) &nbsp; 4006</span><span>(f) &nbsp; 8009</span><span>(g) &nbsp; 7016</span><span>(h) &nbsp; 9468</span></div></div></div>
        </div>
        <div class="book-page21-intro"><h1>Kuandika namba nzima</h1><p>Namba nzima huandikwa kuanzia kushoto kwenda kulia kwa kuzingatia thamani ya nafasi ya tarakimu. Namba nzima huandikwa kwa numerali au kwa maneno. Namba kwa numerali huonesha tarakimu zote na thamani ya nafasi ya kila tarakimu kwenye namba nzima husika.</p></div>
        <div class="book-example-card book-page21-example">
          <div class="book-example-label">Mfano wa 1</div>
          <p>Andika namba zifuatazo kwa maneno:</p>
          <div class="book-page21-options"><span>(a) &nbsp; 1000</span><span>(b) &nbsp; 1001</span><span>(c) &nbsp; 1002</span><span>(d) &nbsp; 1003</span><span>(e) &nbsp; 1004</span><span>(f) &nbsp; 1005</span><span>(g) &nbsp; 1006</span><span>(h) &nbsp; 1007</span><span>(i) &nbsp; 1008</span><span>(j) &nbsp; 1009</span><span>(k) &nbsp; 1010</span></div>
          <div class="book-example-answer-heading">Jibu</div>
          <table class="book-page21-answer-table"><thead><tr><th></th><th>Namba kwa numerali</th><th>Namba kwa maneno</th></tr></thead><tbody><tr><td>(a)</td><td>1000</td><td>Elfu moja</td></tr><tr><td>(b)</td><td>1001</td><td>Elfu moja na moja</td></tr><tr><td>(c)</td><td>1002</td><td>Elfu moja na mbili</td></tr><tr><td>(d)</td><td>1003</td><td>Elfu moja na tatu</td></tr></tbody></table>
        </div>
      </section>`;
  };

  const renderPage22 = () => {
    const content = document.querySelector('#content');
    if (!content) return;
    content.className = 'book-page book-page-22 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML = `
      <section data-section-id="pg028_sec001">
        <table class="book-page22-continuation"><tbody>
          <tr><td>(e)</td><td>1004</td><td>Elfu moja na nne</td></tr><tr><td>(f)</td><td>1005</td><td>Elfu moja na tano</td></tr><tr><td>(g)</td><td>1006</td><td>Elfu moja na sita</td></tr><tr><td>(h)</td><td>1007</td><td>Elfu moja na saba</td></tr><tr><td>(i)</td><td>1008</td><td>Elfu moja na nane</td></tr><tr><td>(j)</td><td>1009</td><td>Elfu moja na tisa</td></tr><tr><td>(k)</td><td>1010</td><td>Elfu moja na kumi</td></tr>
        </tbody></table>
        <div class="book-example-card book-page22-example">
          <div class="book-example-label">Mfano wa 2</div><p>Andika namba zifuatazo kwa maneno:</p>
          <div class="book-page22-three"><span>(a) &nbsp; 1018</span><span>(b) &nbsp; 4216</span><span>(c) &nbsp; 5691</span></div>
          <div class="book-example-answer-heading">Jibu</div><div class="book-page22-answers"><p>(a) &nbsp; Elfu moja na kumi na nane</p><p>(b) &nbsp; Elfu nne mia mbili kumi na sita</p><p>(c) &nbsp; Elfu tano mia sita tisini na moja</p></div>
        </div>
        <div class="book-example-card book-page22-example">
          <div class="book-example-label">Mfano wa 3</div><p>Andika namba zifuatazo kwa numerali:</p>
          <div class="book-page22-prompts"><p>(a) &nbsp; Elfu tatu mia moja hamsini na tano</p><p>(b) &nbsp; Elfu tatu mia sita na nane</p><p>(c) &nbsp; Elfu tisa mia nne kumi na mbili</p></div>
          <div class="book-example-answer-heading">Jibu</div><div class="book-page22-three"><span>(a) &nbsp; 3155</span><span>(b) &nbsp; 3608</span><span>(c) &nbsp; 9412</span></div>
        </div>
      </section>`;
  };

  const renderPage23 = () => {
    const content = document.querySelector('#content'); if (!content) return;
    const row = (cells, sample = false) => `<tr class="${sample ? 'sample' : ''}">${cells.map(cell => `<td>${cell}</td>`).join('')}</tr>`;
    content.className = 'book-page book-page-23 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML = `<section data-section-id="pg029_sec001"><div class="book-exercise-sheet book-page23-exercise"><h1 class="book-exercise-title">Zoezi la 8</h1><div class="book-page23-question"><span>1.</span><div><p>Chunguza jedwali lifuatalo kisha jaza nafasi zilizowazi.<br>Mstari wa kwanza wa ulalo ni mfano.</p><table class="book-page23-table"><thead><tr><th>Maelfu</th><th>Mamia</th><th>Makumi</th><th>Mamoja</th><th>Namba kwa numerali</th><th>Namba kwa maneno</th></tr></thead><tbody>${row(['1','0','0','1','1001','Elfu moja na moja'],true)}${row(['','','','','1019',''])}${row(['','','','','7070',''])}${row(['','','','','','Elfu moja mia tatu hamsini'])}${row(['','','','','1572',''])}${row(['','','','','9540',''])}${row(['9','9','9','8','',''])}${row(['','','','','1086',''])}${row(['1','1','0','0','',''])}${row(['','','','','5102','Elfu tano mia moja na mbili'])}</tbody></table></div></div><div class="book-page23-question book-page23-q2"><span>2.</span><div><p>Andika namba zifuatazo kwa maneno:</p><div class="book-page23-options">${[['a','1250'],['b','1393'],['c','7288'],['d','3425'],['e','4537'],['f','7998'],['g','9663'],['h','8888'],['i','9999'],['j','6660'],['k','3618'],['l','2222'],['m','9768'],['n','7808'],['o','3030']].map(([l,n])=>`<span>(${l}) &nbsp; ${n}</span>`).join('')}</div></div></div></div></section>`;
  };

  const renderPage24 = () => {
    const content = document.querySelector('#content'); if (!content) return;
    const words = ['Elfu moja na kumi','Elfu mbili mia moja sitini','Elfu tatu mia sita kumi na nane','Elfu nne mia saba sitini na tatu','Elfu tano mia sita themanini na tatu','Elfu saba','Elfu tisa mia mbili thelathini na tano','Elfu sita mia moja ishirini na mbili','Elfu tisa mia tisa sabini na tatu','Elfu nane','Elfu nane mia nane tisini na mbili','Elfu tatu mia tano themanini na saba'];
    const labels='abcdefghijkl'.split('');
    const q4=[['','Elfu moja na hamsini na mbili'],['1201',''],['','Elfu mbili'],['3000',''],['','Elfu nne mia tatu'],['4506',''],['','Elfu tano mia tano hamsini'],['6000','']];
    content.className='book-page book-page-24 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg030_sec001"><div class="book-exercise-sheet book-page24-sheet"><div class="book-page24-question"><span>3.</span><div><p>Andika namba zifuatazo kwa numerali:</p><table class="book-page24-q3"><tbody>${words.map((w,i)=>`<tr><td>(${labels[i]})</td><td>${w}</td><td></td></tr>`).join('')}</tbody></table></div></div><div class="book-page24-question"><span>4.</span><div><p>Jaza nafasi zilizoachwa wazi katika jedwali lifuatalo:</p><table class="book-page24-q4"><thead><tr><th>Namba kwa numerali</th><th>Namba kwa maneno</th></tr></thead><tbody>${q4.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</tbody></table></div></div></div></section>`;
  };

  const renderPage25 = () => {
    const content=document.querySelector('#content'); if(!content)return;
    const checks=[['6000','Elfu sita','✓'],['3618','Elfu tatu mia sita kumi na nane',''],['7288','Elfu saba mia nane ishirini na nane',''],['3435','Elfu tatu mia nne hamsini na tatu',''],['5633','Elfu tano mia sita thelathini na tatu',''],['9009','Mia tisa na elfu tisa',''],['6660','Elfu sita sitini na mia sita',''],['2086','Elfu 2 na themanini na sita',''],['3239','Elfu tatu ishirini na tatu na tisa',''],['2776','Elfu mbili mia saba sabini na sita',''],['7304','Elfu saba na nne','']];
    content.className='book-page book-page-25 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg031_sec001"><div class="book-exercise-sheet book-page25-sheet"><table class="book-page25-cont"><tbody><tr><td></td><td>Elfu sita mia sita</td></tr><tr><td>7001</td><td></td></tr><tr><td></td><td>Elfu nne na themanini</td></tr><tr><td>9010</td><td></td></tr><tr><td></td><td>Elfu tisa mia saba</td></tr></tbody></table><div class="book-page25-question"><span>5.</span><div><p>(a) Weka alama ya vema (✓) iwapo ni sahihi au weka alama ya mkasi (X) iwapo sio sahihi katika jedwali lifuatalo. Mstari wa kwanza wa ulalo ni mfano.</p><table class="book-page25-check"><thead><tr><th>Namba kwa numerali</th><th>Namba kwa maneno</th><th>Alama</th></tr></thead><tbody>${checks.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table><p class="book-page25-b">(b) &nbsp; Andika kwa usahihi namba ulizoweka alama (X) katika swali la 5(a).</p></div></div></div></section>`;
  };

  const renderPage26 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-26 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg032_sec001"><div class="book-exercise-sheet book-page26-sheet"><div class="book-page26-question"><span>6.</span><div><p>Chunguza kielelezo namba 1 na 2, soma maelezo yake, kisha jibu maswali yanayofuata.</p><figure><img src="images/pg032_im001.jpg" alt="Jengo la Ngome Kongwe Zanzibar"><figcaption><strong>Kielelezo namba 1:</strong> Jengo la Ngome Kongwe lililopo Zanzibar lilijengwa mwaka elfu moja mia sita tisini na tisa</figcaption></figure><figure><img src="images/pg032_im002.jpg" alt="Mlima Kilimanjaro"><figcaption><strong>Kielelezo namba 2:</strong> Mlima Kilimanjaro una urefu wa meta elfu tano mia nane tisini na tano</figcaption></figure></div></div></div></section>`;
  };

  const renderPage27 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-27 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg033_sec001"><div class="book-exercise-sheet book-page27-questions"><h1>Maswali</h1><p>(a) &nbsp; Andika kwa numerali namba ulizosoma.</p><p>(b) &nbsp; Andika thamani ya nafasi ya kila tarakimu ya namba ulizosoma.</p></div><div class="book-page27-intro"><h1>Kusoma na kuandika namba nzima zinazozidi<br>10000</h1><p>Idadi ya vitu inayozidi 10000 inaweza kuhesabiwa kwa urahisi kwa kutumia mafungu. Vilevile, ili kusoma na kuandika namba nzima zinazozidi elfu kumi kwa urahisi anza kubaini thamani ya nafasi ya kila tarakimu katika namba nzima husika.</p></div><div class="book-example-card book-page27-example"><div class="book-example-label">Mfano wa 1</div><p>Andika thamani ya nafasi ya kila tarakimu katika namba 61270, kisha andika namba hiyo kwa maneno.</p><div class="book-example-answer-heading">Jibu</div><div class="book-page27-answer"><p>0 ipo thamani ya nafasi ya mamoja,</p><p>7 ipo thamani ya nafasi ya makumi,</p><p>2 ipo thamani ya nafasi ya mamia,</p><p>1 ipo thamani ya nafasi ya maelfu,</p><p>6 ipo thamani ya nafasi ya makumi elfu.</p><p class="conclusion">Kwa hiyo, namba 61270 inaandikwa sitini na moja elfu mia mbili sabini.</p></div></div></section>`;
  };

  const renderPage28 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const example=(number,prompt,lines,conclusion)=>`<div class="book-example-card book-page28-example"><div class="book-example-label">Mfano wa ${number}</div><p>${prompt}</p><div class="book-example-answer-heading">Jibu</div><div class="book-page28-lines">${lines.map(line=>`<p>${line}</p>`).join('')}<p class="conclusion">${conclusion}</p></div></div>`;
    content.className='book-page book-page-28 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg034_sec001">${example(2,'Andika namba 876543 kwa thamani ya nafasi ya kila tarakimu, kisha andika namba hiyo kwa maneno.',['3 ipo thamani ya nafasi ya mamoja,','4 ipo thamani ya nafasi ya makumi,','5 ipo thamani ya nafasi ya mamia,','6 ipo thamani ya nafasi ya maelfu,','7 ipo thamani ya nafasi ya makumi elfu,','8 ipo thamani ya nafasi ya mamia elfu.'],'Kwa hiyo, namba 876543 inaandikwa mia nane sabini na sita elfu mia tano arobaini na tatu.')}${example(3,'Andika thamani ya nafasi ya tarakimu katika namba 9261514 kisha andika kwa maneno.',['4 ipo thamani ya nafasi ya mamoja,','1 ipo thamani ya nafasi ya makumi,','5 ipo thamani ya nafasi ya mamia,','1 ipo thamani ya nafasi ya maelfu,','6 ipo thamani ya nafasi ya makumi elfu,','2 ipo thamani ya nafasi ya mamia elfu,','9 ipo thamani ya nafasi ya mamilioni.'],'Kwa hiyo, namba 9261514 inasomwa milioni tisa mia mbili sitini na moja elfu mia tano kumi na nne.')}</section>`;
  };

  const renderPage29 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-29 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg035_sec001"><div class="book-example-card book-page29-example"><div class="book-example-label">Mfano wa 4</div><p>Andika namba zifuatazo kwa kirefu:</p><div class="book-page29-three"><span>(a) &nbsp; 24765</span><span>(b) &nbsp; 273453</span><span>(c) &nbsp; 2261514</span></div><div class="book-example-answer-heading">Jibu</div><div class="book-page29-answers"><p>(a) &nbsp; 24765 = 20000 + 4000 + 700 + 60 + 5.</p><p>(b) &nbsp; 273453 = 200000 + 70000 + 3000 + 400 + 50 + 3.</p><p>(c) &nbsp; 2261514 = 2000000 + 200000 + 60000 + 1000 + 500 + 10 + 4.</p></div></div><div class="book-example-card book-page29-example"><div class="book-example-label">Mfano wa 5</div><p>Andika namba zifuatazo kwa numerali:</p><div class="book-page29-prompts"><p>(a) &nbsp; Kumi na tatu elfu mia moja hamsini na tano</p><p>(b) &nbsp; Milioni moja mia tisa themanini elfu mia tatu tisini na tano</p></div><div class="book-example-answer-heading">Jibu</div><div class="book-page29-two"><span>(a) &nbsp; 13155</span><span>(b) &nbsp; 1980395</span></div></div><div class="book-example-card book-page29-example book-page29-last"><div class="book-example-label">Mfano wa 6</div><p>Andika namba 9876543 kwa kutumia thamani ya kila tarakimu</p><div class="book-example-answer-heading">Njia</div><table><thead><tr><th>Namba nzima</th><th>Tarakimu</th><th>Thamani ya tarakimu</th></tr></thead><tbody>${[['9','9000000'],['8','800000'],['7','70000'],['6','6000'],['5','500'],['4','40'],['3','3']].map((r,i)=>`<tr>${i===0?'<td rowspan="7">9876543</td>':''}<td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</tbody></table></div></section>`;
  };

  const renderPage30 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const q1=['28749','38951','76187','97000','311008','7896246','89365','50050','821834','31425','200512','3437000'];
    const q2=['Thelathini na tano elfu mia sita kumi na moja','Elfu sabini','Tisini elfu mia tisa na nane','Themanini elfu mia mbili na saba','Mia moja ishirini na saba elfu mia tisa','Mia nane elfu na nane','Milioni nane mia saba tisini elfu mia saba sabini na tisa','Milioni moja na mia tatu arobaini','Milioni tano mia tisa tisini na tisa elfu mia nne hamsini na sita'];
    content.className='book-page book-page-30 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg036_sec001"><div class="book-exercise-sheet book-page30-sheet"><h1 class="book-exercise-title">Zoezi la 9</h1><div class="book-page30-question"><span>1.</span><div><p>Andika namba zifuatazo kwa maneno:</p><div class="book-page30-q1">${q1.map((n,i)=>`<span>(${String.fromCharCode(97+i)}) &nbsp; ${n}</span>`).join('')}</div></div></div><div class="book-page30-question"><span>2.</span><div><p>Andika namba zifuatazo kwa numerali:</p><div class="book-page30-q2">${q2.map((n,i)=>`<p>(${String.fromCharCode(97+i)}) &nbsp; ${n}</p>`).join('')}</div></div></div><div class="book-page30-question book-page30-q3"><span>3.</span><div><p>Tumia mchoro ya abakasi ifuatayo kuandika namba zinazowakilishwa na michoro hiyo:</p><span>(a)</span><img src="images/pg036_im001_transparent.png" alt="Abakasi yenye nguzo sita"></div></div></div></section>`;
  };

  const renderPage31 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const grid=(items,cols=3)=>`<div class="book-page31-grid cols-${cols}">${items.map(x=>`<span>${x}</span>`).join('')}</div>`;
    content.className='book-page book-page-31 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg037_sec001"><div class="book-exercise-sheet book-page31-sheet"><div class="book-page31-abacus"><span>(b)</span><img src="images/pg037_im001_transparent.png" alt="Abakasi yenye nguzo saba"></div><div class="book-page31-question"><span>4.</span><div><p>Andika thamani ya nafasi ya 6 katika namba zifuatazo:</p>${grid(['(a) &nbsp; 645218','(b) &nbsp; 446128','(c) &nbsp; 21610','(d) &nbsp; 699222','(e) &nbsp; 364974','(f) &nbsp; 239364'])}</div></div><div class="book-page31-question"><span>5.</span><div><p>Andika thamani ya tarakimu iliyopigiwa mstari katika namba zifuatazo:</p>${grid(['(a) &nbsp; 4<u>9</u>002','(b) &nbsp; 6<u>2</u>49356','(c) &nbsp; 54<u>1</u>341','(d) &nbsp; <u>4</u>755964','(e) &nbsp; <u>7</u>215549','(f) &nbsp; <u>3</u>6314'])}</div></div><div class="book-page31-question"><span>6.</span><div><p>Fafanua namba zifuatazo:</p>${grid(['(a) &nbsp; 79684','(b) &nbsp; 645218','(c) &nbsp; 8321483'])}</div></div><div class="book-page31-question"><span>7.</span><div><p>Andika namba zifuatazo kwa kifupi:</p><div class="book-page31-lines"><p>(a) &nbsp; 60000 + 5000 + 400 + 30 + 2</p><p>(b) &nbsp; 800000 + 70000 + 6000 + 0 + 20 + 9</p><p>(c) &nbsp; 7000000 + 600000 + 40000 + 5000 + 400 + 30 + 7</p></div></div></div><div class="book-page31-question last"><span>8.</span><div><p>Andika thamani ya nafasi ya tarakimu iliyopigiwa mstari katika namba zifuatazo:</p>${grid(['(a) &nbsp; 6<u>4</u>371','(b) &nbsp; 8<u>9</u>2161','(c) &nbsp; <u>2</u>464313','(d) &nbsp; <u>6</u>72314'],2)}</div></div></div></section>`;
  };

  const renderPage32 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-32 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg038_sec001"><div class="book-page32-intro"><h1>Kulinganisha namba nzima</h1><p>Namba nzima zinaweza kulinganishwa iwapo zipo sawa, kubwa kuliko au ndogo kuliko nyingine. Usawa wa namba huoneshwa kwa alama (=). Namba “kubwa kuliko” huoneshwa kwa alama (&gt;) na namba “ndogo kuliko” huoneshwa kwa alama (&lt;).</p></div><div class="book-example-card book-page32-example"><div class="book-example-label">Mfano</div><p>Tumia alama &lt;, = na &gt; kulinganisha namba nzima hizi</p><div class="book-page32-pairs"><span>(a) &nbsp; 8900 _____ 8090</span><span>(b) &nbsp; 3220 _____ 3220</span><span>(c) &nbsp; 3240 _____ 3420</span><span>(d) &nbsp; 715 _____ 517</span></div><div class="book-example-answer-heading">Jibu</div><div class="book-page32-pairs"><span>(a) &nbsp; 8900 &gt; 8090</span><span>(b) &nbsp; 3220 = 3220</span><span>(c) &nbsp; 3240 &lt; 3420</span><span>(d) &nbsp; 715 &gt; 517</span></div></div><div class="book-exercise-sheet book-page32-exercise"><h1 class="book-exercise-title">Zoezi la 10</h1><div class="book-page32-question"><span>1.</span><div><p>Tumia alama &lt;, = na &gt; kulinganisha namba zifuatazo. Swali 1(a) ni mfano.</p><div class="book-page32-boxes">${[['a','12','<','21'],['b','15','','20'],['c','14','','7'],['d','20','','10'],['e','18','','13'],['f','19','','91']].map(r=>`<div><span>(${r[0]})</span><b>${r[1]}</b><i>${r[2]}</i><b>${r[3]}</b></div>`).join('')}</div></div></div><div class="book-page32-question"><span>2.</span><div><p>Tumia alama &lt;, = na &gt; kulinganisha namba zifuatazo.</p><div class="book-page32-q2"><span>(a) &nbsp; 2968 _____ 8962</span><span>(b) &nbsp; 972 _____ 972</span><span>(c) &nbsp; 3932 _____ 3239</span><span>(d) &nbsp; 999 _____ 1000</span></div></div></div></div></section>`;
  };

  const renderPage33 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-33 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg039_sec001"><div class="book-exercise-sheet book-page33-sheet"><div class="book-page33-cont"><span>(e) &nbsp; 8671 _____ 8761</span><span>(f) &nbsp; 5678 _____ 5678</span><span>(g) &nbsp; 9002 _____ 902</span><span>(h) &nbsp; 1000 _____ 100</span></div><div class="book-page33-question"><span>3.</span><p>Tony alipata alama 91, John alipata alama 78 na Emma alipata alama 85 katika mtihani wa Hisabati. Tumia alama ya ndogo kuliko (&lt;) kulinganisha alama za Tony na John, kisha alama za John na Emma.</p></div><div class="book-page33-question"><span>4.</span><div><p>Jedwali lifuatalo linaonesha matunda mbalimbali na idadi yake.</p><table><tbody><tr><th>Aina ya matunda</th><td>Machungwa</td><td>Nanasi</td><td>Ndizi</td></tr><tr><th>Idadi ya matunda</th><td>6851</td><td>1685</td><td>8516</td></tr></tbody></table><p>Tumia alama &lt;, &gt; au = kulinganisha idadi ya matunda haya kama ifuatavyo:</p><div class="book-page33-lines"><p>(a) &nbsp; Machungwa ( ______ ) ndizi</p><p>(b) &nbsp; Machungwa ( ______ ) nanasi</p><p>(c) &nbsp; Ndizi ( ______ ) machungwa ( ______ ) nanasi</p></div></div></div><div class="book-page33-question"><span>5.</span><p>Baraka ana kadi yenye namba elfu tisa mia tano arobaini. Furaha ana kadi yenye namba 9450. Je, kati yao nani ana kadi yenye namba ndogo?</p></div><div class="book-page33-question last"><span>6.</span><p>Halima ana kadi iliyoandikwa 2010. Kadi ya Yusufu imeandikwa 1577. Je, nani kati yao ana kadi iliyoandikwa namba kubwa?</p></div></div></section>`;
  };

  const renderPage34 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-34 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg040_sec001"><div class="book-exercise-sheet book-page34-sheet"><div class="book-page34-question"><span>7.</span><div><p>Chunguza picha zifutazo, kisha jibu maswali yanayofuata:</p><div class="book-page34-pencils"><figure><img src="images/pg040_im001.png" alt="Penseli saba"><figcaption>Sanduku A</figcaption></figure><figure><img src="images/pg040_im002.png" alt="Penseli tano"><figcaption>Sanduku B</figcaption></figure></div><div class="book-page34-questions"><p>(a) &nbsp; Je, kuna penseli ngapi kwenye sanduku A?</p><p>(b) &nbsp; Je, kuna penseli ngapi kwenye sanduku B?</p><p>(c) &nbsp; Je, ni sanduku gani lina idadi kubwa ya penseli kuliko lingine?</p><p>(d) &nbsp; Tumia alama =, &lt; au &gt; kulinganisha idadi ya penseli.</p></div></div></div></div><div class="book-page34-intro"><h1>Mfuatano katika namba nzima</h1><p>Namba nzima zinaweza kupangwa kwa utaratibu maalumu. Mfululizo wa namba nzima unaozingatia mpangilio fulani au utaratibu maalumu hujulikana kama mfuatano katika namba nzima. Tunaweza kuchunguza na kutambua namba nzima inayofuata katika mfululizo wa namba nzima.</p><p>Chunguza idadi ya vizibo katika fungu A, B, na C.</p><div class="book-page34-groups"><figure><img src="images/pg040_im007.png" alt="Vizibo viwili"><figcaption>Fungu A</figcaption></figure><figure><img src="images/pg040_im008_crop1.png" alt="Vizibo vitano"><figcaption>Fungu B</figcaption></figure><figure><img src="images/pg040_im009.png" alt="Vizibo vinane"><figcaption>Fungu C</figcaption></figure></div></div></section>`;
  };

  const renderPage35 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-35 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg041_sec001"><p class="book-page35-intro">Fungu A lina vizibo 2, Fungu B lina vizibo 5. Fungu C lina vizibo 8. Namba ya idadi ya vizibo katika mafungu hayo zinaweza kuorodheshwa; 2, 5, 8. Kutoka Fungu A kwenda B vinaongezeka vizibo 3. Vilevile, kutoka Fungu B kwenda Fungu C vinaongezeka vizibo 3. Hii ina maana kwamba 2, 5, 8 ni mfuatano wa namba nzima. Iwapo utaunda fungu jingine kufuata utaratibu huo, fungu hilo litakuwa na vizibo 11. Yaani, 8 + 3 = 11. Mfuatano wa namba nzima utakuwa 2, 5, 8, 11.</p><div class="book-example-card book-page35-example"><div class="book-example-label">Mfano wa 1</div><p>Taja namba nzima zinazofuata katika mfuatano wa namba zifuatazo: 1, 4, 7, 10, 13, 16, 19, ____, ____</p><div class="book-example-answer-heading">Njia</div><p>Namba inayofuata inapatikana kwa kujumlisha 3 kwenye namba iliyotangulia.</p><div class="book-page35-working"><span>1 + 3 = 4</span><span>4 + 3 = 7</span><span>7 + 3 = 10</span><span>10 + 3 = 13</span><span>13 + 3 = 16</span><span>16 + 3 = 19</span><span>19 + 3 = 22</span><span>22 + 3 = 25</span></div><p class="conclusion">Kwa hiyo, jibu ni 1, 4, 7, 10, 13, 16, 19, <u>22</u>, <u>25</u>.</p></div></section>`;
  };

  const renderPage36 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const ex=(n,prompt,method,steps,answer)=>`<div class="book-example-card book-page36-example"><div class="book-example-label">Mfano wa ${n}</div><p>${prompt}</p><div class="book-example-answer-heading">Njia</div><p>${method}</p><div class="book-page36-working">${steps.map(s=>`<span>${s}</span>`).join('')}</div><p class="conclusion">${answer}</p></div>`;
    content.className='book-page book-page-36 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg042_sec001">${ex(2,'Jaza namba nzima zinazofuata katika mfuatano wa namba zifuatazo: 1, 3, 5, 7, 9, ____, ____','Namba nzima inayofuata inapatikana kwa kujumlisha 2 kwenye namba iliyotangulia.',['1 + 2 = 3','3 + 2 = 5','5 + 2 = 7','7 + 2 = 9','9 + 2 = 11','11 + 2 = 13'],'Kwa hiyo, jibu ni 1, 3, 5, 7, 9, <u>11</u>, <u>13</u>.')}${ex(3,'Jaza namba nzima zinazofuata katika mfuatano wa namba hizi: 25, 23, 21, ____, ____','Namba nzima inayofuata katika mpangilio huu inapatikana kwa kutoa 2 kutoka namba iliyotangulia.',['25 − 2 = 23','23 − 2 = 21','21 − 2 = 19','19 − 2 = 17'],'Kwa hiyo, jibu ni 25, 23, 21, <u>19</u>, <u>17</u>.')}</section>`;
  };

  const renderPage37 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const ex=(n,prompt,method,steps,answer)=>`<div class="book-example-card book-page36-example"><div class="book-example-label">Mfano wa ${n}</div><p>${prompt}</p><div class="book-example-answer-heading">Njia</div><p>${method}</p><div class="book-page36-working wide">${steps.map(s=>`<span>${s}</span>`).join('')}</div><p class="conclusion">${answer}</p></div>`;
    content.className='book-page book-page-36 book-page-37 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg043_sec001">${ex(4,'Jaza namba nzima inayofuata katika mfuatano wa namba zifuatazo: 750, 600, 450, 300, 150, ____','Namba nzima inayofuata katika mpangilio huu inapatikana kwa kutoa 150 kutoka namba iliyotangulia.',['750 − 150 = 600','600 − 150 = 450','450 − 150 = 300','300 − 150 = 150','150 − 150 = 0'],'Kwa hiyo, jibu ni 750, 600, 450, 300, 150, <u>0</u>.')}${ex(5,'Jaza namba nzima inayokosekana katika mfuatano wa namba zifuatazo: 45, 41, 37, 33, ____','Namba nzima inayofuata katika mpangilio huu inapatikana kwa kutoa 4 kutoka namba iliyotangulia.',['45 − 4 = 41','41 − 4 = 37','37 − 4 = 33','33 − 4 = 29'],'Kwa hiyo, jibu ni 45, 41, 37, 33, <u>29</u>.')}</section>`;
  };

  const renderPage38 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const seq=(label,text)=>`<p><span>(${label})</span>${text}</p>`;
    content.className='book-page book-page-38 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg044_sec001"><div class="book-exercise-sheet book-page38-sheet"><h1 class="book-exercise-title">Zoezi la 11</h1><div class="book-page38-question"><span>1.</span><div><p>Andika namba zilizopo kwenye jedwali kwa mpangilio unaofuatana kwa kuongezeka.</p><table class="peach"><tbody><tr>${[22,7,15,14,10].map(n=>`<td>${n}</td>`).join('')}</tr><tr>${[11,28,18,20,24].map(n=>`<td>${n}</td>`).join('')}</tr></tbody></table><p class="answer">7, ____, ____, ____, ____, ____, ____, ____, ____, ____</p></div></div><div class="book-page38-question"><span>2.</span><div><p>Andika namba zilizopo kwenye jedwali kwa mpangilio unaofuatana kwa kupungua.</p><table class="green"><tbody><tr>${[29,23,37,41,35].map(n=>`<td>${n}</td>`).join('')}</tr><tr>${[16,20,26,44,32].map(n=>`<td>${n}</td>`).join('')}</tr></tbody></table><p class="answer">44, ____, ____, ____, ____, ____, ____, ____, ____, ____</p></div></div><div class="book-page38-question"><span>3.</span><div><p>Andika namba nzima zinazofuata kwa kila mfuatano:</p><div class="sequences">${seq('a','0, 2, 4, 6, ____, ____, ____')}${seq('b','11, 22, 33, 44, ____, ____, ____')}${seq('c','2, 6, 10, 14, 18, ____, ____, ____')}${seq('d','3, 8, 13, 18, 23, 28, 33, ____, ____, ____')}${seq('e','465, 466, 467, ____, ____, ____')}${seq('f','210, 220, 230, 240, 250, 260, ____, ____, ____')}</div></div></div><div class="book-page38-question last"><span>4.</span><div><p>Andika namba nzima zinazofuata kwa kila mfuatano wa namba zifuatazo:</p><div class="sequences">${seq('a','14, 12, 10, 8, ____, ____, ____')}${seq('b','23, 20, 17, 14, 11, ____, ____')}${seq('c','56, 54, 52, ____, ____, ____')}${seq('d','69, 60, 51, 42, 33, ____, ____, ____')}${seq('e','95, 85, 75, 65, 55, 45, ____, ____, ____')}${seq('f','260, 250, 240, 230, 220, 210, ____, ____, ____')}</div></div></div></div></section>`;
  };

  const renderPage39 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const seqs=['(a) &nbsp; 500, 600, ____, ____, 900, ____','(b) &nbsp; 433, 430, ____, 424, ____, 418, 415, ____','(c) &nbsp; 1027, 1023, ____, 1015, ____, 1007, ____','(d) &nbsp; 4, 10, ____, 22, ____, 34, 40, 46, ____, 58','(e) &nbsp; 415, 418, ____, 424, ____, 430, 433, ____','(f) &nbsp; 1011, 1014, ____, 1020, 1023, ____, 1029'];
    content.className='book-page book-page-39 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg045_sec001"><div class="book-exercise-sheet book-page39-sheet"><div class="book-page39-question"><span>5.</span><div><p>Andika namba nzima zinazokosekana katika mfuatano ifuatayo:</p><div class="book-page39-seqs">${seqs.map(s=>`<p>${s}</p>`).join('')}</div></div></div><div class="book-page39-question"><span>6.</span><div><p>Chunguza namba nzima katika mfuatano uliopewa katika jedwali lifuatalo kisha andika tendo lililotumika. Swali la 6(a) ni mfano.</p><table><thead><tr><th></th><th>Mfuatano wa namba</th><th>Tendo lililotumika</th></tr></thead><tbody><tr><td>(a)</td><td>1, 3, 5, 7, 9, 11, 13,<br>15, 17, 19</td><td>Namba nzima kuongezeka kwa 2 katika kila hatua</td></tr><tr><td>(b)</td><td>30, 25, 20, 15, 10, 5</td><td></td></tr><tr><td>(c)</td><td>10, 20, 30, 40, 50, 60, 70</td><td></td></tr><tr><td>(d)</td><td>500, 600, 700, 800</td><td></td></tr></tbody></table></div></div><div class="book-page39-question"><span>7.</span><p>Urefu wa milima minne ulirekodiwa kama ifuatavyo: Shira ulikuwa na meta 3626, Oldeani meta 3188, Meru meta 4566 na Klute meta 3952. Pangilia urefu wa milima kuanzia mlima mfupi zaidi hadi mrefu zaidi.</p></div><div class="book-page39-question"><span>8.</span><p>Majura aliuza vikombe 15 vya maziwa siku ya kwanza, aliendelea kuuza vikombe 8 zaidi ya siku iliyotangulia. Je, aliuza vikombe vingapi vya maziwa siku ya nne?</p></div><div class="book-page39-question last"><span>9.</span><p>Kiwanda kilichapisha vitabu 50 siku ya kwanza. Vitabu viliongezeka 20 kila siku. Je, vitabu vingapi vilichapishwa siku ya tatu?</p></div></div></section>`;
  };

  const renderPage40 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-40 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg046_sec001"><div class="book-exercise-sheet book-page40-problems"><div><span>10.</span><p>Pamela alinunua maembe matatu siku ya kwanza, kisha aliendelea kununua maembe mawili zaidi ya siku iliyotangulia. Alinunua maembe mangapi siku ya nne?</p></div><div><span>11.</span><p>Mkeya ana watoto watano. Tofauti ya umri kati ya kila watoto wawili wanaofuatana ni miaka minne. Ikiwa mtoto wa kwanza ana miaka 39, je mtoto wa mwisho ana umri gani?</p></div></div><div class="book-page40-work"><h1>Kazi ya kufanya</h1><p>Kujifunza namba nzima kwa njia ya masomo ya mtandaoni</p><h2>Maelezo</h2><p>Tumia masomo ya mtandaoni kujifunza zaidi jinsi ya kusoma, kuandika, kutafuta thamani ya nafasi ya tarakimu, thamani ya tarakimu, kutengeneza mfuatano wa namba na kulinganisha namba nzima.</p></div><div class="book-page40-reminder"><h1>Jikumbushe</h1><ol><li>Namba nzima huandikwa kwa namna mbili, yaani kwa numerali na kwa maneno</li><li>Katika kusoma namba nzima zingatia thamani ya nafasi na thamani ya tarakimu katika namba nzima</li><li>Alama za usawa (=), kubwa kuliko (&gt;) na ndogo kuliko (&lt;) zinatumika katika hisabati kuonesha uhusiano wa thamani kati ya vitu au namba nzima</li><li>Mfuatano wa namba nzima hufuata utaratibu maalumu</li><li>Ni muhimu kutambua tendo lililotumika kwa kila mfuatano wa namba nzima ili kupata mfuatano ulio sahihi</li></ol></div></section>`;
  };

  const renderPage41 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const option=(letter,text)=>`<p><span>(${letter})</span><span>${text}</span></p>`;
    content.className='book-page book-page-41 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg047_sec001"><div class="book-page41-vocab"><h1>Msamiati</h1><dl><dt>Mfuatano</dt><dd>mfululizo wa vitu au namba unaozingatia<br>utaratibu maalumu</dd><dt>Numerali</dt><dd>namba inayoandikwa kwa kutumia tarakimu</dd><dt>Tarakimu</dt><dd>namba kumi za mwanzo&nbsp; 0, 1, 2, 3, 4, 5, 6,<br>7, 8, na&nbsp; 9</dd></dl></div><div class="book-page41-review"><h1>Zoezi la Marudio</h1><div class="book-page41-review-body"><div class="book-page41-question"><span>1.</span><div><p>Andika namba nzima inayotokana na thamani ya nafasi zifuatazo:</p><div class="book-page41-options">${option('a','Maelfu saba, mamia sita, makumi mbili na mamoja mbili')}${option('b','Makumi elfu saba, maelfu sifuri, mamia sita, makumi nane na mamoja tatu')}${option('c','Makumi elfu mbili, maelfu tatu, mamia nne, makumi sita na mamoja sita')}${option('d','Mamia elfu nne, makumi elfu mbili, maelfu saba, mamia tatu, makumi moja na mamoja nne')}${option('e','Mamilioni moja, mamia elfu saba, makumi elfu nne, maelfu moja, mamia moja, makumi mbili na mamoja sifuri')}${option('f','Mamilioni tatu, mamia elfu saba, makumi elfu sita, maelfu tano, mamia tatu, makumi moja na mamoja tatu')}</div></div></div><div class="book-page41-question second"><span>2.</span><div><p>Andika namba zifuatazo kwa kifupi.</p><div class="book-page41-sums"><p>(a) &nbsp;&nbsp; 4000 + 200 + 50 + 1 =</p><p>(b) &nbsp;&nbsp; 9000 + 800 + 30 + 3 =</p><p>(c) &nbsp;&nbsp; 30000 + 3000 + 300 + 30 + 3 =</p></div></div></div></div></div></section>`;
  };

  const renderPage42 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const line=(l,t)=>`<p><span>(${l})</span><span>${t}</span></p>`;
    content.className='book-page book-page-42 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg048_sec001"><div class="book-page42-sheet"><div class="book-page42-top">${line('d','600000 + 40000 + 4000 + 300 + 0 + 2 =')}${line('e','2000000 + 600000 + 40000 + 0 + 700 + 90 + 9 =')}</div><div class="book-page42-question"><span>3.</span><div><p>Jaza tarakimu ya namba nzima zifuatazo katika sehemu husika kwa kuzingatia thamani yake:</p><div class="book-page42-place">${line('a','2063 &nbsp; ina maelfu ____, mamia____, makumi____na<br>mamoja____.')}${line('b','8544 &nbsp; ina maelfu____, mamia____, makumi____na<br>mamoja____.')}${line('c','3090 &nbsp; ina maelfu____, mamia____, makumi____ na<br>mamoja____.')}${line('d','5713 &nbsp; ina maelfu____, mamia____, makumi____na<br>mamoja____.')}${line('e','7226 &nbsp; ina maelfu____, mamia____ , makumi____na<br>mamoja____.')}</div></div></div><div class="book-page42-question"><span>4.</span><div><p>Andika namba zifuatazo kwa numerali:</p><div class="book-page42-lines">${line('a','Elfu moja na saba')}${line('b','Elfu tano mia tano na tatu')}${line('c','Elfu sita mia sita tisini na tisa')}${line('d','Mia moja themanini elfu mia tano arobaini na moja')}${line('e','Milioni mbili mia sita tisini na nane elfu mia sita<br>hamsini na mbili')}</div></div></div><div class="book-page42-question"><span>5.</span><div><p>Andika namba zifuatazo kwa maneno:</p><div class="book-page42-grid"><span>(a) &nbsp; 2022</span><span>(b) &nbsp; 4969</span><span>(c) &nbsp; 8008</span><span>(d) &nbsp; 291649</span><span>(e) &nbsp; 1889 773</span></div></div></div><div class="book-page42-question last"><span>6.</span><div><p>Fafanua namba zifuatazo:</p><div class="book-page42-grid"><span>(a) &nbsp; 7007</span><span>(b) &nbsp; 5712</span><span>(c) &nbsp; 9669</span><span>(d) &nbsp; 64645</span><span>(e) &nbsp; 303067</span></div></div></div></div></section>`;
  };

  const renderPage43 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const line=(l,t)=>`<p><span>(${l})</span><span>${t}</span></p>`;
    content.className='book-page book-page-43 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg049_sec001"><div class="book-page43-sheet"><div class="book-page43-question"><span>7.</span><div><p>Panga namba zifuatazo kwa kuanza na namba ndogo hadi kubwa zaidi.</p><div class="book-page43-lines">${line('a','5, 2, 6, 12, 19, 3, 1, 20, 17')}${line('b','36, 21, 15, 7, 10, 28, 45, 11')}${line('c','789, 63, 32, 981, 252, 172, 426')}</div></div></div><div class="book-page43-question"><span>8.</span><div><p>Panga namba zifuatazo kwa mfuatano kuanza na namba kubwa hadi ndogo zaidi.</p><div class="book-page43-lines">${line('a','125, 78, 111, 89, 305, 32, 120, 360, 115, 92, 412, 76,<br>61, 27, 56')}${line('b','200, 903, 730, 341, 81, 199, 189, 800, 463, 72, 326, 247')}${line('c','2500, 1 200, 5 000, 3 300, 4 500, 1 300, 6 000, 4600')}</div></div></div><div class="book-page43-question abacus"><span>9.</span><div><p>Andika namba nzima inayowakilishwa katika kila abakasi:</p><p class="label">(a)</p><figure><div class="book-page43-abacus-labels"><span>Makumi elfu</span><span>Maelfu</span><span>Mamia</span><span>Makumi</span><span>Mamoja</span></div><img src="images/pg049_im001_transparent.png" alt="Abakasi yenye tarakimu 34334"></figure></div></div></div></section>`;
  };

  const renderPage44 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const labels='<div class="book-page44-labels"><span>Mamia elfu</span><span>Makumi elfu</span><span>Maelfu</span><span>Mamia</span><span>Makumi</span><span>Mamoja</span></div>';
    const fig=(letter,src,alt)=>`<figure><figcaption>(${letter})</figcaption>${labels}<img src="images/${src}" alt="${alt}"></figure>`;
    content.className='book-page book-page-44 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg050_sec001"><div class="book-page44-sheet">${fig('b','pg050_im001_transparent.png','Abakasi ya tarakimu sita')}${fig('c','pg050_im002_transparent.png','Abakasi ya tarakimu sita')}</div></section>`;
  };

  const renderPage45 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const line=(l,t)=>`<p><span>(${l})</span><span>${t}</span></p>`;
    content.className='book-page book-page-45 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg051_sec001"><div class="book-page45-sheet"><figure><figcaption>(d)</figcaption><div class="book-page45-labels"><span>Mamilioni</span><span>Mamia elfu</span><span>Makumi elfu</span><span>Maelfu</span><span>Mamia</span><span>Makumi</span><span>Mamoja</span></div><img src="images/pg051_im001_transparent.png" alt="Abakasi ya tarakimu saba"></figure><div class="book-page45-question"><span>10.</span><div><p>Linganisha namba hizi kwa kutumia alama ya &lt; , = au &gt;.</p><div class="book-page45-compare">${line('a','8765 na 8576')}${line('b','2341 na 2341')}${line('c','2222 na 222')}${line('d','180541 na 180514')}${line('e','1234 na 2134')}${line('f','23466 na 24366')}</div></div></div><div class="book-page45-question"><span>11.</span><div><p>Jaza namba nzima zinazokosekana katika mfuatano ya namba zifuatazo:</p><div class="book-page45-seqs">${line('a','71, 66, 61, 56, 51, 46, ______, ______, 31')}${line('b','100, 75, ______, 25, ______')}${line('c','100000, ______, 300000, 400000, ______')}${line('d','729600, 729590, ______, ______, ______, 729550')}${line('e','70, 61, 52, 43, 34, ______, ______, ______')}</div></div></div></div></section>`;
  };

  const renderPage46 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const line=(l,t)=>`<p><span>(${l})</span><span>${t}</span></p>`;
    content.className='book-page book-page-46 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg052_sec001"><div class="book-page46-sheet"><div class="book-page46-question"><span>12.</span><div><p>Andika tendo lililotumika kupata mfuatano ya namba zifuatazo. Swali (a) ni mfano.</p><div class="book-page46-lines">${line('a','1, 2, 3, 4, 5, 6, 7, 8 &nbsp;&nbsp; Kujumlisha moja kila hatua')}${line('b','0, 4, 8, 12, 16, 20, 24, 28 ______')}${line('c','68, 60, 52, 44, 36, 28, 20 ______')}${line('d','100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0 ______')}${line('e','1 444, 2 444, 3 444, 4 444, 5 444 ______')}</div></div></div><div class="book-page46-question"><span>13.</span><div><p>Jaza namba nzima zinazokosekana katika mipangilio ifuatayo:</p><div class="book-page46-lines long">${line('a','2398, 2390, 2382, ____, ____, 2358, 2350, ____')}${line('b','52552, 51552, ____, ____, 48552, 47552, ____,<br>45552')}${line('c','____, ____, ____, 840000, ____, 860000, ____')}${line('d','2342, 2350, 2358, ____, ____, 2382, 2390,<br>2398, ____')}${line('e','45562, 46562, ____, ____, 49562, 50562,<br>____, 52562')}</div></div></div><div class="book-page46-question prose"><span>14.</span><p>Mwalimu alipanga namba nzima katika mfuatano kama ifuatavyo: 45, 41, 37, 33, ____, ____. Tafuta namba mbili zilizofuata.</p></div><div class="book-page46-question prose"><span>15.</span><p>Namba nzima ya kwanza katika mfuatano ni 50. Iwapo 3 hupunguzwa katika kila hatua, namba nzima ya tano katika mfuatano itakuwa ngapi?</p></div></div></section>`;
  };

  const renderPage47 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const q=(n,body)=>`<div class="book-page47-question"><span>${n}.</span><div>${body}</div></div>`;
    content.className='book-page book-page-47 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg053_sec001"><div class="book-page47-sheet">${q(16,'<p>Wanafunzi waliandika mfuatano wa namba nzima kwa kuanza na 3. Iwapo waliongeza 5 katika kila hatua, namba nzima ya sita katika mfuatano huo ilikuwa ngapi?</p>')}${q(17,'<p>Andika mfuatano wa namba unaoruka 5 kwa kila hatua kuanzia 0 mpaka 50.</p>')}${q(18,'<p>Andika mfuatano wa namba wenye tofauti ya 6 kwa kila hatua kuanzia 72 mpaka 0.</p>')}${q(19,'<p>Mahudhurio ya wanafunzi wa darasa la tatu huongezeka kwa wanafunzi watatu kila wiki. Ikiwa wiki ya kwanza walikuwa 123, wiki ya nne walihudhuria wanafunzi wangapi?</p>')}${q(20,'<p>Tumia namba 895674 kuandika:</p><div class="book-page47-options"><p>(a) &nbsp;&nbsp; thamani ya nafasi ya kila tarakimu.</p><p>(b) &nbsp;&nbsp; thamani ya kila tarakimu.</p></div>')}</div></section>`;
  };

  const renderPage48 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-48 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg054_sec001"><header class="book-page48-chapter"><h2>Sura ya Pili</h2><h1>Kujumlisha na kutoa namba nzima</h1></header><div class="book-page48-intro"><h2>Utangulizi</h2><p>Katika sura hii, utajifunza kujumlisha na kutoa namba nzima kwa ulalo na wima. Pia, utajifunza kufumbua mafumbo mbalimbali yenye dhana ya matendo ya kujumlisha na kutoa. Umahiri utakaoujenga utakuwezesha kupata jumla au tofauti ya idadi ya vitu mbalimbali.</p></div><div class="book-page48-copy"><h2>Kujumlisha namba nzima</h2><p>Namba nzima zinaweza kujumlishwa bila kubadili au kwa kubadili kutegemeana na aina ya namba zinazojumlishwa.</p><h2>Kujumlisha namba nzima bila kubadili</h2><p>Unapojumlisha namba nzima, hakikisha unazingatia thamani ya nafasi ya kila tarakimu katika namba nzima. Anza kujumlisha mamoja, makumi, mamia, maelfu, makumi elfu, mamia elfu na kuendelea.</p><h3>Kujumlisha namba nzima kwa ulalo</h3></div><div class="book-example-card book-page48-example"><div class="book-example-label">Mfano wa 1</div><p>3246 + 2312 =</p><div class="book-example-answer-heading">Njia</div><p>Panga namba kwa kufuata thamani ya kila tarakimu. Mpangilio huo ni kama ifuatavyo:</p></div></section>`;
  };

  const renderPage49 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const placeTable=(digits)=>`<table><thead><tr><th>Maelfu</th><th>Mamia</th><th>Makumi</th><th>Mamoja</th></tr></thead><tbody><tr>${digits.map(d=>`<td>${d}</td>`).join('')}</tr></tbody></table>`;
    content.className='book-page book-page-49 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg055_sec001"><div class="book-example-card book-page49-example first"><div class="book-page49-tables">${placeTable([3,2,4,6])}<b>+</b>${placeTable([2,3,1,2])}</div><h2>Hatua</h2><ol><li>Jumlisha mamoja na andika jibu katika nafasi ya mamoja.</li><li>Jumlisha makumi na andika jibu katika nafasi ya makumi.</li><li>Jumlisha mamia na andika jibu katika nafasi ya mamia.</li><li>Jumlisha maelfu na andika jibu katika nafasi ya maelfu.</li></ol><div class="book-page49-sum"><span>3</span><span>2</span><span>4</span><span>6</span><b>+</b><span>2</span><span>3</span><span>1</span><span>2</span><b>=</b><span>5</span><span>5</span><span>5</span><span>8</span></div><p class="conclusion">Kwa hiyo, 3246 + 2312 = 5558.</p></div><div class="book-example-card book-page49-example second"><div class="book-example-label">Mfano wa 2</div><p>68942 + 30051 =</p><h2>Hatua</h2><p>Jumlisha tarakimu kutoka kulia kuelekea kushoto.</p><ol><li>Jumlisha mamoja: 2 + 1 = 3. Andika 3 katika nafasi ya mamoja.</li><li>Jumlisha makumi: 4 + 5 = 9. Andika 9 katika nafasi ya makumi.</li><li>Jumlisha mamia: 9 + 0 = 9. Andika 9 katika nafasi ya mamia.</li><li>Jumlisha maelfu: 8 + 0 = 8. Andika 8 katika nafasi ya maelfu.</li><li>Jumlisha makumi elfu: 6 + 3 = 9. Andika 9 katika nafasi ya makumi elfu.</li></ol></div></section>`;
  };

  const renderPage50 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-50 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg056_sec001"><div class="book-example-card book-page50-cont"><div class="book-page50-equation">6&nbsp; 8&nbsp; 9&nbsp; 4&nbsp; 2 &nbsp;+&nbsp; 3&nbsp; 0&nbsp; 0&nbsp; 5&nbsp; 1 &nbsp;=&nbsp; 9&nbsp; 8&nbsp; 9&nbsp; 9&nbsp; 3</div><div class="book-page50-connectors"></div><p>Kwa hiyo, 68942 + 30051 = 98993.</p></div><div class="book-example-card book-page50-example"><div class="book-example-label">Mfano wa 3</div><p>352411 + 136587 =</p><h2>Hatua</h2><ol><li>Jumlisha mamoja na andika jibu katika nafasi ya mamoja.</li><li>Jumlisha makumi na andika jibu katika nafasi ya makumi.</li><li>Jumlisha mamia na andika jibu katika nafasi ya mamia.</li><li>Jumlisha maelfu na andika jibu katika nafasi ya maelfu.</li><li>Jumlisha makumi elfu na andika jibu katika nafasi ya makumi elfu.</li><li>Jumlisha mamia elfu na andika jibu katika nafasi ya mamia elfu.</li></ol><div class="book-page50-equation lower">3&nbsp; 5&nbsp; 2&nbsp; 4&nbsp; 1&nbsp; 1 &nbsp;+&nbsp; 1&nbsp; 3&nbsp; 6&nbsp; 5&nbsp; 8&nbsp; 7 &nbsp;=&nbsp; 4&nbsp; 8&nbsp; 8&nbsp; 9&nbsp; 9&nbsp; 8</div><div class="book-page50-connectors lower"></div><p class="conclusion">Kwa hiyo, 352411 + 136587 = 488998.</p></div></section>`;
  };

  const renderPage51 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const qs=['4561 + 117 =','9111 + 888 =','705 + 1261 =','2016 + 2161 =','54622 + 44245 =','53999 + 2000 =','2141 + 42 =','2411 + 136 =','1418 + 2361 =','6138 + 1 =','631594 + 246305 =','230000 + 144348 =','80021 + 17734 =','54622 + 44245 =','54351 + 12045 ='];
    content.className='book-page book-page-51 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg057_sec001"><div class="book-exercise-sheet book-page51-exercise"><h1 class="book-exercise-title">Zoezi la 1</h1><div class="book-page51-grid">${qs.map((q,i)=>`<p><span>${i+1}.</span><span>${q}</span></p>`).join('')}</div></div><h2 class="book-page51-heading">Kujumlisha namba nzima kwa wima</h2><div class="book-example-card book-page51-example"><div class="book-example-label">Mfano wa 1</div><div class="book-page51-stack"><span>6118</span><span>+ 1211</span><span></span></div><h2>Njia</h2><p>Panga namba kwa kuzingatia thamani ya nafasi ya kila tarakimu, kisha fuata hatua zifuatazo:</p><h2>Hatua</h2><ol><li>Jumlisha mamoja: 8 + 1 = 9. Andika 9 katika nafasi ya mamoja.</li><li>Jumlisha makumi: 1 + 1 = 2. Andika 2 katika nafasi ya makumi.</li><li>Jumlisha mamia: 1 + 2 = 3. Andika 3 katika nafasi ya mamia.</li><li>Jumlisha maelfu: 6 + 1 = 7. Andika 7 katika nafasi ya maelfu.<br>Kwa hiyo, jibu ni 7329.</li></ol></div></section>`;
  };

  const renderPage52 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-52 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg058_sec001"><div class="book-example-card book-page52-example"><div class="book-example-label">Mfano wa 2</div><div class="book-page52-stack"><span>45248</span><span>+ 20231</span><span></span></div><h2>Njia</h2><p>Panga namba kwa kuzingatia thamani ya nafasi ya kila tarakimu, kisha fuata hatua zifuatazo:</p><h2>Hatua</h2><ol><li>Jumlisha mamoja: 8 + 1 = 9. Andika 9 katika nafasi ya mamoja.</li><li>Jumlisha makumi: 4 + 3 = 7. Andika 7 katika nafasi ya makumi.</li><li>Jumlisha mamia: 2 + 2 = 4. Andika 4 katika nafasi ya mamia.</li><li>Jumlisha maelfu: 5 + 0 = 5. Andika 5 katika nafasi ya maelfu.</li><li>Jumlisha makumi elfu: 4 + 2 = 6. Andika 6 katika nafasi ya makumi elfu.<br>Kwa hiyo, jibu ni 65 479.</li></ol></div><div class="book-example-card book-page52-example second"><div class="book-example-label">Mfano wa 3</div><div class="book-page52-stack"><span>162792</span><span>+ 531203</span><span></span></div><h2>Njia</h2><p>Panga namba kwa wima kama ifuatavyo:</p><table><thead><tr><th>Mamia<br>elfu</th><th>Makumi<br>elfu</th><th>Maelfu</th><th>Mamia</th><th>Makumi</th><th>Mamoja</th></tr></thead><tbody><tr><td>1</td><td>6</td><td>2</td><td>7</td><td>9</td><td>2</td></tr><tr><td>5</td><td>3</td><td>1</td><td>2</td><td>0</td><td>3</td></tr><tr><td>6</td><td>9</td><td>3</td><td>9</td><td>9</td><td>5</td></tr></tbody></table><p>Kwa hiyo, jibu ni 693995.</p></div></section>`;
  };

  const renderPage53 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const sums=[[4612,1321],[3592,401],[2227,12],[2363,2111],[4350,5646],[82350,5213],[59261,40712],[84743,12251],[54721,33222],[818819,71110],[834532,154063],[140546,221121],[679448,110301],[789660,10118],[751210,12166],[323456,1676543],[1456317,333572],[999879,110],[751201,128780],[2013424,1976365]];
    const stack=(n,a,b)=>`<div class="book-page53-item"><span class="num">${n}.</span><div><span>${a}</span><span>+ &nbsp;${b}</span><i></i><i></i></div></div>`;
    content.className='book-page book-page-53 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg059_sec001"><div class="book-example-card book-page53-example"><div class="book-example-label">Mfano wa 4</div><div class="book-page53-example-grid"><div class="book-page53-stack"><span>1222221</span><span>+ &nbsp;777777</span><i></i><i></i></div><h2>Njia</h2><div class="book-page53-stack"><span>1 222221</span><span>+ &nbsp;777777</span><i></i><span>1999998</span><i></i></div></div></div><div class="book-exercise-sheet book-page53-exercise"><h1 class="book-exercise-title">Zoezi la 2</h1><div class="book-page53-grid">${sums.map((s,i)=>stack(i+1,s[0],s[1])).join('')}</div></div></section>`;
  };

  const renderPage54 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-54 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg060_sec001"><header class="book-page54-head"><h1>Kujumlisha namba nzima kwa kubadili</h1><h2>Kujumlisha namba nzima kwa ulalo</h2></header><div class="book-example-card book-page54-example"><div class="book-example-label">Mfano wa 1</div><p>6327 + 3496 =</p><h2>Njia</h2><p>Jumlisha tarakimu kuanzia kulia kuelekea kushoto.</p><h2>Hatua</h2><ol><li>Jumlisha mamoja: 7 + 6 = 13. Andika 3 katika nafasi ya mamoja. Badili mamoja 10 kuwa makumi 1. Peleka makumi 1 kwenye nafasi ya makumi.</li><li>Jumlisha makumi: 1 + 2 + 9 = 12. Andika 2 katika nafasi ya makumi. Badili makumi 10 kuwa mamia 1. Peleka mamia moja kwenye nafasi ya mamia.</li><li>Jumlisha mamia: 1 + 3 + 4 = 8. Andika 8 katika nafasi ya mamia.</li><li>Jumlisha maelfu: 6 + 3 = 9. Andika 9 katika nafasi ya maelfu.</li></ol><div class="book-page54-equation">⁶&nbsp; ³&nbsp; ²&nbsp; ⁷ &nbsp;+&nbsp; ³&nbsp; ⁴&nbsp; ⁹&nbsp; ⁶ &nbsp;=&nbsp; ⁹&nbsp; ⁸&nbsp; ²&nbsp; ³</div><div class="book-page54-lines"></div><p class="conclusion">Kwa hiyo, &nbsp;6327 + 3496 = 9823.</p></div></section>`;
  };

  const renderPage55 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-55 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg061_sec001"><div class="book-example-card book-page55-example"><div class="book-example-label">Mfano wa 2</div><p>58271 + 32989 =</p><h2>Njia</h2><p>Jumlisha tarakimu kuanzia kulia kuelekea kushoto.</p><h2>Hatua</h2><ol><li>Jumlisha mamoja: 1 + 9 = 10. Andika 0 katika nafasi ya mamoja. Badili mamoja 10 kuwa makumi 1. Peleka makumi 1 kwenye nafasi ya makumi.</li><li>Jumlisha makumi: 1 + 7 + 8 = 16. Andika 6 katika nafasi ya makumi. Badili makumi 10 kuwa mamia 1. Peleka mamia 1 kwenye nafasi ya mamia.</li><li>Jumlisha mamia: 1 + 2 + 9 = 12. Andika 2 katika nafasi ya mamia. Badili mamia 10 kuwa maelfu 1. Peleka maelfu 1 kwenye nafasi ya maelfu.</li><li>Jumlisha maelfu: 1 + 8 + 2 = 11. Andika 1 katika nafasi ya maelfu. Badili maelfu 10 kuwa makumi elfu 1. Peleka makumi elfu 1 kwenye nafasi ya makumi elfu.</li><li>Jumlisha makumi elfu: 1 + 5 + 3 = 9. Andika 9 katika nafasi ya makumi elfu.</li></ol><div class="book-page55-equation">⁵&nbsp; ⁸&nbsp; ²&nbsp; ⁷&nbsp; ¹ &nbsp;+&nbsp; ³&nbsp; ²&nbsp; ⁹&nbsp; ⁸&nbsp; ⁹ &nbsp;=&nbsp; ⁹&nbsp; ¹&nbsp; ²&nbsp; ⁶&nbsp; ⁰</div><div class="book-page55-lines"></div><p class="conclusion">Kwa hiyo, 58271 + 32989 = 91260.</p></div></section>`;
  };

  const renderPage56 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const qs=['7256 + 1796 =','7531 + 1929 =','8595 + 914 =','3598 + 179 =','4513 + 3299 =','2643 + 993 =','4951 + 1891 =','7536 + 19 =','768 + 7861 =','7816 + 1832 =','1576 + 817 =','2619 + 1786 =','1745 + 899 =','1652 + 476 =','15433 + 798 =','53415 + 21045 =','64124 + 16283 =','75520 + 9221 =','66612 + 24588 =','162845 + 134027 =','293586 + 26323 =','567183 + 484921 =','943573 + 56327 =','720852 + 279168 =','2964 + 298576 ='];
    content.className='book-page book-page-56 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg062_sec001"><div class="book-example-card book-page56-example"><div class="book-example-label">Mfano wa 3</div><p>472395 + 134826 =</p><h2>Njia</h2><div class="book-page56-equation">4&nbsp; 7&nbsp; 2&nbsp; 3&nbsp; 9&nbsp; 5 &nbsp;+&nbsp; 1&nbsp; 3&nbsp; 4&nbsp; 8&nbsp; 2&nbsp; 6 &nbsp;=&nbsp; 6&nbsp; 0&nbsp; 7&nbsp; 2&nbsp; 2&nbsp; 1</div><div class="book-page56-lines"></div><p>Kwa hiyo, 472395 + 134826 = 607221.</p></div><div class="book-exercise-sheet book-page56-exercise"><h1 class="book-exercise-title">Zoezi la 3</h1><div class="book-page56-grid">${qs.map((q,i)=>`<p><span>${i+1}.</span><span>${q}</span></p>`).join('')}</div></div></section>`;
  };

  const renderPage57 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const work=(carry,result)=>`<div class="book-page57-work"><b>${carry}</b><span>2361</span><span>+ 3899</span><i></i><span>${result}</span></div>`;
    content.className='book-page book-page-57 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg063_sec001"><h1 class="book-page57-heading">Kujumlisha namba nzima kwa wima</h1><div class="book-example-card book-page57-example"><div class="book-example-label">Mfano wa 1</div><div class="book-page57-stack"><span>2361</span><span>+ 3899</span><i></i><i></i></div><h2>Njia</h2><p>Panga namba kwa wima kwa kuzingatia thamani ya nafasi ya kila tarakimu.</p><h2>Hatua</h2><div class="book-page57-table"><div class="text"><span>1.</span><p>Jumlisha mamoja: &nbsp;1 + 9 =10.<br>Andika 0 katika nafasi ya mamoja.<br>Badili mamoja 10 kuwa makumi 1.<br>Peleka makumi 1 kwenye nafasi ya makumi.</p></div>${work('1','0')}<div class="text"><span>2.</span><p>Jumlisha makumi: &nbsp;1+ 6 + 9 =16.<br>Andika 6 katika nafasi ya makumi.<br>Badili makumi 10 kuwa mamia 1.<br>Peleka mamia 1 kwenye nafasi ya mamia.</p></div>${work('11','60')}<div class="text"><span>3.</span><p>Jumlisha mamia: &nbsp;1 + 3 + 8 =12.<br>Andika 2 katika nafasi ya mamia.<br>Badili mamia 10 kuwa maelfu 1.<br>Peleka maelfu 1 kwenye nafasi ya maelfu.</p></div>${work('111','260')}<div class="text"><p>Jumlisha maelfu: 1 + 2 + 3 = 6. Andika 6 katika nafasi ya maelfu.</p></div>${work('111','6 260')}</div><p class="conclusion">Kwa hiyo, jibu ni 6260.</p></div></section>`;
  };

  const renderPage58 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-58 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg064_sec001"><div class="book-example-card book-page58-example"><div class="book-example-label">Mfano wa 2</div><div class="book-page58-stack"><span>228186</span><span>+ 374899</span><i></i><i></i></div><h2>Hatua</h2><ol><li>Jumlisha mamoja: 6 + 9 = 15. Andika 5 katika nafasi ya mamoja. Badili mamoja 10 kuwa makumi 1. Peleka makumi 1 kwenye nafasi ya makumi.</li><li>Jumlisha makumi: 1 + 8 + 9 = 18. Andika 8 katika nafasi ya makumi. Badili makumi 10 kuwa mamia 1. Peleka mamia 1 kwenye nafasi ya mamia.</li><li>Jumlisha mamia: 1 + 1 + 8 = 10. Andika 0 katika nafasi ya mamia. Badili mamia 10 kuwa maelfu 1. Peleka maelfu 1 kwenye nafasi ya maelfu.</li><li>Jumlisha maelfu: 1 + 8 + 4 = 13. Andika 3 katika nafasi ya maelfu. Badili maelfu 10 kuwa makumi elfu 1. Peleka makumi elfu 1 kwenye nafasi ya makumi elfu.</li><li>Jumlisha makumi elfu: 1 + 2 + 7 = 10. Andika 0 katika nafasi ya makumi elfu. Badili makumi elfu 10 kuwa mamia elfu 1. Peleka mamia elfu 1 kwenye nafasi ya mamia elfu.</li><li>Jumlisha mamia elfu: 1 + 2 + 3 = 6. Andika 6 katika nafasi ya mamia elfu.</li></ol><p class="conclusion">Kwa hiyo, jibu ni 603085.</p></div></section>`;
  };

  const renderPage59 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const sums=[[6027,1784],[57336,12217],[48289,3457],[85519,2719],[856956,134689],[88456,154689],[489765,94538],[365284,476329],[624872,9341],[872146,34987],[167426,594],[877925,98]];
    const stack=(n,a,b)=>`<div class="book-page59-item"><span>${n}.</span><div class="book-page59-stack ${Math.max(String(a).length,String(b).length)>4?'wide':''}"><span>${a}</span><span>+ &nbsp;${b}</span><i></i><i></i></div></div>`;
    content.className='book-page book-page-59 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg065_sec001"><div class="book-page59-top"><p>Pia, kwa kutumia kadi ya namba unaweza kupanga namba hizo kama ifuatavyo:</p><img class="book-page59-place-value" src="images/pg065_place_value_arrows.png" alt="Mpangilio wa thamani za nafasi wenye mishale ya kubadili na tarakimu zilizozungushiwa duara"><p>Kwa hiyo, jibu ni 603085.</p></div><div class="book-exercise-sheet book-page59-exercise"><h1 class="book-exercise-title">Zoezi la 4</h1><div class="book-page59-grid">${sums.map((s,i)=>stack(i+1,s[0],s[1])).join('')}</div></div></section>`;
  };

  const renderPage60 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const sums=[[100009,9991],[89725,9999],[80298,19712],[998456,154689],[6024872,3975127],[8925778,7897987],[1000009,999991],[199001,950999]];
    const stack=(n,a,b)=>`<div class="book-page60-item"><span>${n}.</span><div class="book-page60-stack ${Math.max(String(a).length,String(b).length)>4?'wide':''}"><span>${a}</span><span>+ &nbsp;${b}</span><i></i><i></i></div></div>`;
    content.className='book-page book-page-60 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg066_sec001"><div class="book-exercise-sheet book-page60-sheet"><div class="book-page60-grid">${sums.map((s,i)=>stack(i+13,s[0],s[1])).join('')}</div><div class="book-page60-question"><span>21.</span><div><p>Chunguza njia walizotumia Ali, Rose na Dule kujumlisha 2792 na 1213. Tumia njia nyingine iliyo rahisi kwako kujumlisha namba hizo.</p><div class="book-page60-methods"><div class="name">Ali:</div><div class="ali"><p>2792 + 1213 =</p><p>Jumlisha mamoja: 3 + 2 = 5.</p><p>Jumlisha makumi: 9 + 1 = 10.</p><p>Jumlisha mamia: 1 + 7 + 2 = 10.</p><p>Jumlisha maelfu: 1 + 2 + 1 = 4.</p><p>Kwa hiyo, 2792 + 1213 = 4005.</p></div><div class="name rose-name">Rose:</div><div class="rose"><p>2792 + 1213 =</p><p>Alivunja namba hizo kama ifuatavyo:</p><p>2792 + 1213 = 2700 + 2 + 3 +1 210</p><p class="indent">= &nbsp;2700 + 90 + 2 + 3 + 10 + 1200</p><p class="indent">= &nbsp;2700 + 1200 + 90 + 2 + 3 + 10</p><p class="indent">= &nbsp;3900 + 100 + 5 = 4005</p><p>Kwa hiyo, 2792 + 1213 = 4005.</p></div></div></div></div></div></section>`;
  };

  const renderPage61 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-61 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg067_sec001"><div class="book-page61-dule"><h2>Dule:</h2><div><p>2792 + 1213 =</p><p>Alifafanua namba hizo kama ifuatavyo:</p><p>2792 + 1213</p><p>= 2000 + 700 + 90 + 2 + 1 000 + 200 + 10 + 3</p><p>= 2000 + 1000 + 700 + 200 + 90 + 10 + 2 + 3</p><p>= 3000 + 900 + 100 + 5 = 4005</p><p>Kwa hiyo, 2792 + 1213 = 4005.</p></div></div><h1 class="book-page61-title">Mafumbo yenye dhana ya kujumlisha namba nzima</h1><div class="book-example-card book-page61-example"><div class="book-example-label">Mfano wa 1</div><p>Kiwanda cha kuchakata nyama kilinunua ng’ombe 137,527 mwaka juzi na ng’ombe 222,062 mwaka jana. Kiwanda hicho kilinunua ng’ombe wangapi kwa miaka yote miwili?</p><h2>Njia</h2><div class="book-page61-solution"><p><span>Idadi ya ng’ombe walionunuliwa mwaka juzi:</span><b>137527</b></p><p><span>Idadi ya ng’ombe walionunuliwa mwaka jana:</span><b>+ 222062</b></p><p><span>Jumla ya ng’ombe walionunuliwa kwa miaka yote miwili:</span><b>359589</b></p></div><p>Kwa hiyo, kiwanda kilinunua jumla ya ng’ombe 359,589 kwa miaka yote miwili.</p></div><div class="book-example-card book-page61-example second"><div class="book-example-label">Mfano wa 2</div><p>Katika mbuga mojawapo ya wanyama nchini Tanzania, kuna pundamilia 78,696 na nyati 2,323. Je, kuna jumla ya wanyama wangapi katika mbuga hiyo?</p></div></section>`;
  };

  const renderPage62 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const qs=['Kampuni mbili za uchapishaji zilizalisha vitabu kwa ajili ya shule za msingi. Kampuni ya kwanza ilitengeneza vitabu 5,900 na nyingine ilitengeneza vitabu 3,600. Je, kampuni hizo zilitengeneza jumla ya vitabu vingapi?','Mfugaji aliuza lita 35,752 za maziwa mwezi Januari. Katika mwezi Februari aliuza lita 27,888 za maziwa. Je, mfugaji aliuza jumla ya lita ngapi za maziwa kwa miezi hiyo miwili?','Mkulima ana miti ya mbao 1,982 na miti ya matunda 7,291. Je, mkulima huyo ana jumla ya miti mingapi?','Wagonjwa 4,618 wa malaria na 689 wa macho walitibiwa katika hospitali fulani. Je, jumla walitibiwa wagonjwa wangapi?','Mkulima alihifadhi kilogramu 25,677 za mahindi msimu wa kwanza wa mavuno. Akahifadhi tena kilogramu 21,913 za mahindi msimu wa pili wa mavuno. Je, mkulima alihifadhi jumla ya kilogramu ngapi za mahindi kwa misimu yote miwili?'];
    content.className='book-page book-page-62 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg068_sec001"><div class="book-example-card book-page62-solution"><h2>Njia</h2><div><p><span>Idadi ya pundamilia:</span><b>78696</b></p><p><span>Idadi ya nyati:</span><b>+ &nbsp;2323</b></p><p><span>Jumla ya wanyama:</span><b>81019</b></p></div><p>Kwa hiyo, jumla ya wanyama ni 81,019.</p></div><div class="book-exercise-sheet book-page62-exercise"><h1 class="book-exercise-title">Zoezi la 5</h1><div class="book-page62-questions">${qs.map((q,i)=>`<div><span>${i+1}.</span><p>${q}</p></div>`).join('')}</div></div></section>`;
  };

  const renderPage63 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const qs=['Katika mwaka fulani, magari 9,436 yalikaguliwa mkoa wa Mtwara. Vilevile, katika mwaka huo huo, magari mengine 10,170 yalikaguliwa katika mkoa wa Ruvuma. Je, magari mangapi yalikaguliwa katika mikoa yote miwili kwa mwaka huo?','Shule ya Msingi Kakali ina madawati 2,588. Shule ya Msingi Dadawa ina madawati 8,813. Shule ya Msingi Rukuku ina madawati 10,554. Je, shule hizo zina jumla ya madawati mangapi?','Juma alivuna maembe 5,630 kutoka mti wa kwanza. Baadaye akavuna maembe 480 kutoka mti wa pili. Je, Juma alivuna jumla ya maembe mangapi?','Basi lilipakia matenga mawili ya machungwa. Tenga la kwanza lilikuwa na machungwa 2,376 na la pili lilikuwa na machungwa 4,638. Je, matenga hayo mawili yalikuwa na jumla ya machungwa mangapi?','Katika mkoa fulani, wanafunzi waliojiunga na kidato cha kwanza mwaka 2015 ni 6,523. Mwaka 2016 walijiunga wanafunzi 7,212 na mwaka 2017 walijiunga wanafunzi 7,430. Je, jumla ya wanafunzi wangapi walijiunga kidato cha kwanza katika miaka hiyo mitatu?'];
    content.className='book-page book-page-63 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg069_sec001"><div class="book-exercise-sheet book-page63-sheet"><div class="book-page63-questions">${qs.map((q,i)=>`<div><span>${i+6}.</span><p>${q}</p></div>`).join('')}</div></div><div class="book-page63-intro"><h1>Kutoa namba nzima</h1><p>Unapotoa namba nzima hakikisha unazingatia thamani ya nafasi ya kila tarakimu katika namba. Anza kutoa mamoja, makumi, mamia na kuendelea.</p></div></section>`;
  };

  const renderPage64 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-64 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg070_sec001"><header class="book-page64-head"><h1>Kutoa namba nzima bila kubadili</h1><h2>Kutoa namba nzima kwa ulalo</h2></header><div class="book-example-card book-page64-example"><div class="book-example-label">Mfano wa 1</div><p>6874 − 2430 =</p><h2>Hatua</h2><ol><li>Toa mamoja: 4 − 0 = 4. Andika 4 katika nafasi ya mamoja.</li><li>Toa makumi: 7 − 3 = 4. Andika 4 katika nafasi ya makumi.</li><li>Toa mamia: 8 − 4 = 4. Andika 4 katika nafasi ya mamia.</li><li>Toa maelfu: 6 − 2 = 4. Andika 4 katika nafasi ya maelfu.</li></ol><div class="book-page64-equation">6&nbsp; 8&nbsp; 7&nbsp; 4 &nbsp;−&nbsp; 2&nbsp; 4&nbsp; 3&nbsp; 0 &nbsp;=&nbsp; 4&nbsp; 4&nbsp; 4&nbsp; 4</div><div class="book-page64-lines"></div><p class="conclusion">Kwa hiyo, 6874 − 2430 = 4444.</p></div><div class="book-example-card book-page64-example second"><div class="book-example-label">Mfano wa 2</div><p>46781 − 1041 =</p><h2>Hatua</h2><ol><li>Toa mamoja: 1 − 1 = 0. Andika 0 katika nafasi ya mamoja.</li><li>Toa makumi: 8 − 4 = 4. Andika 4 katika nafasi ya makumi.</li><li>Toa mamia: 7 − 0 = 7. Andika 7 katika nafasi ya mamia.</li><li>Toa maelfu: 6 − 1 = 5. Andika 5 katika nafasi ya maelfu.</li><li>Toa makumi elfu: 4 − 0 = 4. Andika 4 katika nafasi ya makumi elfu.</li></ol></div></section>`;
  };

  const renderPage65 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const qs=['9942 − 42 =','4376 − 3245 =','3760 − 2550 =','3049 − 2017 =','8973 − 7642 =','4256 − 3132 =','65458 − 21344 =','87999 − 33422 =','623440 − 2010 =','568237 − 18113 =','784969 − 543867 =','987645 − 234 =','2000652 − 331 =','17897988 − 687888 =','6999456 − 2811222 =','3334237 − 2223126 =','9999999 − 7765555 =','1079878 − 17561 =','999789 − 347 =','1000005 − 2 ='];
    content.className='book-page book-page-65 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg071_sec001"><div class="book-example-card book-page65-cont"><div class="book-page65-equation">4&nbsp; 6&nbsp; 7&nbsp; 8&nbsp; 1 &nbsp;−&nbsp; 1&nbsp; 0&nbsp; 4&nbsp; 1 &nbsp;=&nbsp; 4&nbsp; 5&nbsp; 7&nbsp; 4&nbsp; 0</div><div class="book-page65-lines"></div><p>Kwa hiyo, 46781 − 1041 = 45740.</p></div><div class="book-exercise-sheet book-page65-exercise"><h1 class="book-exercise-title">Zoezi la 6</h1><div class="book-page65-grid">${qs.map((q,i)=>`<p><span>${i+1}.</span><span>${q}</span></p>`).join('')}</div></div><h2 class="book-page65-heading">Kutoa namba nzima kwa wima</h2><div class="book-example-card book-page65-example"><div class="book-example-label">Mfano wa 1</div><div class="book-page65-stack"><span>9854</span><span>− &nbsp;8743</span><i></i><i></i></div><h2>Njia</h2><p>Panga namba nzima kwa kufuata thamani ya nafasi ya kila tarakimu katika namba. Mpangilio huo ni kama ulivyooneshwa kwenye jedwali lifuatalo:</p></div></section>`;
  };

  const renderPage66 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-66 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg072_sec001"><div class="book-example-card book-page66-cont"><table><thead><tr><th>Maelfu</th><th>Mamia</th><th>Makumi</th><th>Mamoja</th></tr></thead><tbody><tr><td>9</td><td>8</td><td>5</td><td>4</td></tr><tr><td>8</td><td>7</td><td>4</td><td>3</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td></tr></tbody></table><p>Kwa hiyo, jibu ni 1111.</p></div><div class="book-example-card book-page66-example"><div class="book-example-label">Mfano wa 2</div><div class="book-page66-stack"><span>86597</span><span>− &nbsp;54326</span><i></i><i></i></div><h2>Hatua</h2><ol><li>Toa mamoja: 7 − 6 =1. Andika 1 katika nafasi ya mamoja.</li><li>Toa makumi: 9 − 2 = 7. Andika 7 katika nafasi ya makumi.</li><li>Toa mamia: 5 − 3 = 2. Andika 2 katika nafasi ya mamia.</li><li>Toa maelfu: 6 − 4 = 2. Andika 2 katika nafasi ya maelfu.</li><li>Toa makumi elfu: 8 − 5 =3. Andika 3 katika nafasi ya makumi elfu.<br>Kwa hiyo, jibu ni 32271.</li></ol></div><div class="book-example-card book-page66-example third"><div class="book-example-label">Mfano wa 3</div><div class="book-page66-stack"><span>984265</span><span>− &nbsp;632143</span><i></i><i></i></div><h2>Njia</h2><p>Hatua za kutoa kwa wima zinafanana na zile za ulalo. Anza kutoa mamoja, mamia hadi mamia elfu.</p><div class="book-page66-stack answer"><span>984265</span><span>− &nbsp;632143</span><i></i><span>352122</span><i></i></div><p>Kwa hiyo, jibu ni 352122.</p></div></section>`;
  };

  const renderPage67 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const sums=[[7824,5612],[4851,3720],[4343,3231],[8899,8768],[6533,6322],[7291,3231],[69635,58313],[75757,25252],[99991,4340],[237972,112451],[823574,1230],[912345,810212],[695872,34751],[987672,34521],[652437,410316]];
    const stack=(n,a,b)=>`<div class="book-page67-item"><span>${n}.</span><div><span>${a}</span><span>− &nbsp;${b}</span><i></i><i></i></div></div>`;
    content.className='book-page book-page-67 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg073_sec001"><div class="book-exercise-sheet book-page67-exercise"><h1 class="book-exercise-title">Zoezi la 7</h1><div class="book-page67-grid">${sums.map((s,i)=>stack(i+1,s[0],s[1])).join('')}</div></div><header class="book-page67-head"><h1>Kutoa namba nzima kwa kubadili</h1><h2>Kutoa namba nzima kwa ulalo</h2></header><div class="book-example-card book-page67-example"><div class="book-example-label">Mfano wa 1</div><p>5371 − 3282 =</p><h2>Hatua</h2><div class="book-page67-step"><span>1.</span><p>Toa mamoja: 1 − 2, 1 haitoshelezi kutoa 2. Chukua makumi 1 kutoka kwenye makumi 7, badili kuwa mamoja 10 kisha jumlisha na mamoja 1: 10 + 1 =11.</p></div></div></section>`;
  };

  const renderPage68 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-68 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg074_sec001"><div class="book-example-card book-page68-cont"><div class="book-page68-follow"><span></span><p>Hivyo, 11 − 2 = 9. Andika 9 katika nafasi ya mamoja. Kumbuka, kwenye makumi umechukua makumi 1. Hivyo, umebakiwa na makumi 6.</p><span>2.</span><p>Toa makumi: 6 − 8, 6 haitoshelezi kutoa 8. Chukua mamia moja 1 kutoka kwenye mamia 3, badili kuwa makumi 10 kisha jumlisha na makumi 6: 10 + 6 = 16. Hivyo, 16 − 8 = 8. Andika 8 katika nafasi ya makumi. Kumbuka, kwenye mamia umechukua mamia 1. Hivyo, umebakiwa na mamia 2.</p><span>3.</span><p>Toa mamia: 2 − 2 = 0. Andika 0 katika nafasi ya mamia.</p><span>4.</span><p>Toa maelfu: 5 − 3 = 2. Andika 2 katika nafasi ya maelfu.<br>Kwa hiyo, &nbsp;5371 − 3282 = 2089.</p></div></div><div class="book-example-card book-page68-example"><div class="book-example-label">Mfano wa 2</div><p>982140 − 771671 =</p><h2>Hatua</h2><div class="book-page68-steps"><span>1.</span><p>Toa mamoja: 0 − 1, 0 haitoshelezi kutoa 1. Chukua makumi 1 kutoka kwenye makumi 4, badili kuwa mamoja 10 kisha jumlisha na mamoja 0: 10 + 0 =10. Hivyo, 10 − 1 = 9. Andika 9 katika nafasi ya mamoja. Kumbuka, kwenye makumi umechukua makumi 1. Hivyo, umebakiwa na makumi 3.</p><span>2.</span><p>Toa makumi: 3 − 7, 3 haitoshelezi kutoa 7. Chukua mamia 1 kutoka kwenye mamia 1, badili kuwa makumi 10 kisha jumlisha na makumi 3: 10 + 3 =13. Hivyo, 13 − 7 = 6. Andika 6 katika nafasi ya makumi. Kumbuka, kwenye mamia umechukua mamia 1. Hivyo, umebakiwa na mamia 0.</p></div></div></section>`;
  };

  const renderPage69 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const qs=['7100 − 4291=','68721 − 6667 =','6816 − 5824 =','4133 − 2145 =','65458 − 26344 =','9026 − 3146 =','7761 − 3872 =','3465 − 1456 =','84223 − 5843 =','85446 − 2254 =','44346 − 37016 =','672354 − 51132 =','976540 − 888666 =','164945 − 99 =','876124 − 697982 ='];
    content.className='book-page book-page-69 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg075_sec001"><div class="book-example-card book-page69-cont"><div class="book-page69-steps"><span>3.</span><p>Toa mamia: 0 − 6, haitoshelezi. Chukua maelfu 1 kutoka kwenye maelfu 2, badili kuwa mamia 10 kisha jumlisha na mamia 0: 10 + 0 =10. Hivyo, 10 − 6 = 4. Andika 4 katika nafasi ya mamia. Kumbuka, kwenye maelfu umechukua maelfu 1. Hivyo, umebakiwa na maelfu 1.</p><span>4.</span><p>Toa maelfu: 1 − 1 = 0. Andika 0 katika nafasi ya maelfu.</p><span>5.</span><p>Toa makumi elfu: 8 − 7 = 1. Andika 1 katika nafasi ya makumi elfu.</p><span>6.</span><p>Toa mamia elfu: 9 − 7 = 2. Andika 2 katika nafasi ya mamia elfu.<br><br>Kwa hiyo, 982140 − 771671 = 210469.</p></div></div><div class="book-exercise-sheet book-page69-exercise"><h1 class="book-exercise-title">Zoezi la 8</h1><div class="book-page69-grid">${qs.map((q,i)=>`<p><span>${i+1}.</span><span>${q}</span></p>`).join('')}</div></div></section>`;
  };

  const renderPage70 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const work=(carry,result)=>`<div class="book-page70-work"><b>${carry}</b><span>6854</span><span>− 3887</span><i></i><span>${result}</span><i></i></div>`;
    content.className='book-page book-page-70 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg076_sec001"><h1 class="book-page70-heading">Kutoa namba nzima kwa wima</h1><div class="book-example-card book-page70-example"><div class="book-example-label">Mfano wa 1</div><div class="book-page70-stack"><span>6854</span><span>− &nbsp;3887</span><i></i><i></i></div><div class="book-page70-table"><h2>Hatua</h2><div></div><p>Toa mamoja: 4 − 7, 4 haitoshelezi kutoa 7. Chukua makumi 1 kutoka kwenye makumi 5, badili kuwa makumi 10 kisha jumlisha na mamoja 4: 10 + 4 = 14. Hivyo, 14 − 7 = 7. Andika 7 katika nafasi ya mamoja. Kumbuka, kwenye makumi umechukua makumi 1. Hivyo, umebakiwa na makumi 4.</p>${work('4 14','7')}<p>Toa makumi: 4 − 8, 4 haitoshelezi kutoa 8. Chukua mamia 1 kwenye mamia 8, badili kuwa makumi 10 kisha jumlisha na makumi 4: 10 + 4 =14. Hivyo, 14 − 8 = 6. Andika 6 katika nafasi ya makumi. Kumbuka, kwenye mamia umechukua mamia 1. Hivyo, umebakiwa na mamia 7.</p>${work('14','67')}<p>Toa mamia: 7 − 8, 7 haitoshelezi kutoa 8. Chukua maelfu 1 kutoka kwenye maelfu 6, badili kuwa mamia 10 kisha jumlisha na mamia 7: 10 + 7 = 17. Hivyo, 17 − 8 = 9. Andika 9 katika nafasi ya mamia. Kumbuka, kwenye maelfu umechukua maelfu 1. Hivyo, umebakiwa na maelfu 5.</p>${work('17 14','967')}</div></div></section>`;
  };

  const renderPage71 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const sums=[[3822,1713],[1245,158],[45385,34392],[2083,1976],[30405,1992],[8433,6377]];
    const stack=(n,a,b)=>`<div class="book-page71-item"><span>${n}.</span><div><span>${a}</span><span>− &nbsp;${b}</span><i></i><i></i></div></div>`;
    content.className='book-page book-page-71 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg077_sec001"><div class="book-example-card book-page71-cont"><div class="book-page71-row"><p>Toa maelfu: 5 − 3 = 2. Andika 2 katika nafasi ya maelfu.</p><div class="book-page71-work"><b>17 14</b><span>6854</span><span>−3887</span><i></i><span>2967</span><i></i></div></div><p>Kwa hiyo, jibu ni 2967.</p></div><div class="book-example-card book-page71-example"><div class="book-example-label">Mfano wa 2</div><div class="book-page71-stack"><span>87964</span><span>− &nbsp;49897</span><i></i><i></i></div><h2>Njia</h2><p>Hatua za kutoa kwa wima zinafanana na zile za mfano wa 1. Anza kutoa mamoja hadi makumi elfu.</p><div class="book-page71-stack answer"><span>87964</span><span>− &nbsp;49897</span><i></i><span>38067</span><i></i></div><p>Kwa hiyo, jibu ni 38067.</p></div><div class="book-exercise-sheet book-page71-exercise"><h1 class="book-exercise-title">Zoezi la 9</h1><div class="book-page71-grid">${sums.map((s,i)=>stack(i+1,s[0],s[1])).join('')}</div></div></section>`;
  };

  const renderPage72 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const sums=[[3005,1992],[64536,58323],[55376,25445],[873977,762582],[682165,8987],[875924,683678],[600000,54164],[87625,9734],[666666,78947]];
    const stack=(n,a,b)=>`<div class="book-page72-item"><span>${n}.</span><div><span>${a}</span><span>− &nbsp;${b}</span><i></i><i></i></div></div>`;
    content.className='book-page book-page-72 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg078_sec001"><div class="book-exercise-sheet book-page72-sheet"><div class="book-page72-grid">${sums.map((s,i)=>stack(i+7,s[0],s[1])).join('')}</div></div><h1 class="book-page72-title">Mafumbo yenye dhana ya kutoa namba nzima</h1><div class="book-example-card book-page72-example"><div class="book-example-label">Mfano wa 1</div><p>Jumla ya ng’ombe na mbuzi katika wilaya fulani ni 2,139,500. Ikiwa ng’ombe ni 1,104,563, je wilaya hiyo ina mbuzi wangapi?</p><h2>Njia</h2><div class="book-page72-solution"><p><span>Jumla ya ng’ombe na mbuzi:</span><b>2139500</b></p><p><span>Idadi ya ng’ombe:</span><b>− &nbsp;1104563</b></p><p><span>Idadi ya mbuzi:</span><b>1034937</b></p></div><p class="conclusion">Kwa hiyo, wilaya ina mbuzi 1,034,937.</p></div></section>`;
  };

  const renderPage73 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const qs=['Duka la Maria lina simu za mkononi na mezani 2,972. Ikiwa simu za mkononi ni 1,235, je, simu za mezani ni ngapi?','Muuza maembe alikuwa na maembe elfu nne mia tatu kumi na nane. Alimuuzia mfanyabiashara maembe elfu moja mia nne thelathini na tano. Je, alibakiwa na maembe mangapi?','Mvuvi alivua samaki elfu saba mia tatu themanini na moja. Aliuza samaki elfu tano mia saba tisini na mbili. Je, alibakiwa na samaki wangapi?','Remi alinunua matenga mawili yenye nyanya elfu sita mia nne arobaini. Nyanya elfu moja mia tatu na mbili zilikuwa zimeoza. Je, ni nyanya ngapi zilikuwa nzima?','Shule inahitaji madawati elfu tatu mia saba arobaini na tisa. Wazazi walichangia madawati elfu mbili mia tisa tisini na saba. Je, shule ina upungufu wa madawati mangapi?'];
    content.className='book-page book-page-73 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg079_sec001"><div class="book-example-card book-page73-example"><div class="book-example-label">Mfano wa 2</div><p>Waoka mikate huoka mikate 72,324 kila siku. Siku moja walioka mikate 45458 tu. Je, mikate mingapi haikuokwa siku hiyo?</p><h2>Njia</h2><div class="book-page73-solution"><p><span>Idadi ya mikate inayo okwa kwa siku:</span><b>72324</b></p><p><span>Mikate iliyookwa siku hiyo:</span><b>− &nbsp;45458</b></p><p><span>Mikate ambayo haikuokwa siku hiyo:</span><b>26866</b></p></div><p>Kwa hiyo, mikate ambayo haikuokwa siku hiyo ni 26,866.</p></div><div class="book-exercise-sheet book-page73-exercise"><h1 class="book-exercise-title">Zoezi la 10</h1><div class="book-page73-questions">${qs.map((q,i)=>`<div><span>${i+1}.</span><p>${q}</p></div>`).join('')}</div></div></section>`;
  };

  const renderPage74 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const qs=['Shule ilinunua madaftari elfu saba mia mbili hamsini na mbili. Juma na Tatu waliombwa kubeba madaftari hayo kuyapeleka stoo. Juma alibeba madaftari elfu tatu na thelathini na tisa. Je, Tatu alibeba madaftari mangapi?','Katika mwaka fulani wanafunzi walipanda miti elfu tatu mia nne themanini. Baada ya miaka miwili, miti mia tano themanini na saba ilikauka. Je, miti mingapi ilibaki kipindi hicho?','Chama cha ushirika kilifyatua matofali 287,891 kati ya mahitaji ya matofali 482,674. Ni matofali mangapi hayakufyatuliwa?','Fundi alilipwa shilingi 845,750 kwa ujenzi wa choo cha shule. Gharama za ufundi zilikuwa shilingi 974,500. Je, zilipungua shilingi ngapi kukamilisha malipo yake?','Kata fulani ina wapiga kura elfu sita mia nane sabini na nne. Wapiga kura elfu tatu na themanini na saba walijitokeza kupiga kura. Je, ni wapiga kura wangapi hawakujitokeza kupiga kura?','Kampuni moja iliagizwa kuleta shuleni mabati elfu mbili mia nane na saba. Kampuni hiyo ilileta mabati elfu mbili mia tatu tisini na nane. Je, mabati mangapi hayakuletwa?','Kulwa alivuna magunia elfu tano na arobaini na saba ya maharage mwaka wa kwanza. Pia, alivuna magunia elfu tatu mia nne thelathini na nane ya maharage mwaka wa pili. Je, mwaka wa pili alivuna magunia mangapi pungufu ukilinganisha na mwaka wa kwanza?'];
    content.className='book-page book-page-74 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg080_sec001"><div class="book-exercise-sheet book-page74-sheet"><div class="book-page74-questions">${qs.map((q,i)=>`<div><span>${i+6}.</span><p>${q}</p></div>`).join('')}</div></div></section>`;
  };

  const renderPage75 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const sums=[[61142,'+',4226],[8937,'−',27],[55394,'+',1295],[47326,'−',32198],[2696,'+',2398],[638345,'−',225221]];
    const stack=(n,a,op,b)=>`<div class="book-page75-item"><span>${n}.</span><div><span>${a}</span><span>${op} &nbsp;${b}</span><i></i><i></i></div></div>`;
    content.className='book-page book-page-75 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg081_sec001"><div class="book-page75-work"><h1>Kazi ya kufanya</h1><p>Kujifunza zaidi kubaini matendo ya kujumlisha na kutoa namba nzima kwa njia ya masomo ya mtandaoni</p><h2>Maelezo</h2><p>Chunguza mifano mbalimbali ya kujumlisha na kutoa namba nzima kwa njia ya masomo ya mtandaoni.</p></div><div class="book-page75-reminder"><h1>Jikumbushe</h1><ol><li>Unapojumlisha au kutoa namba nzima, panga tarakimu kwa wima au ulalo. Anza kujumlisha au kutoa mamoja, makumi, mamia, maelfu, makumi elfu, mamia elfu na kuendelea</li><li>Unapofumbua mafumbo:<div><p>(a) &nbsp; Tafsiri maelezo kupata tendo litakalotumika</p><p>(b) &nbsp; Chambua maelezo kupata hesabu inayohusika</p><p>(c) &nbsp; Baada ya kukokotoa, rejea swali na jibu swali kwa maneno</p></div></li></ol></div><div class="book-page75-review"><h1>Zoezi la marudio</h1><div class="book-page75-grid">${sums.map((s,i)=>stack(i+1,s[0],s[1],s[2])).join('')}</div></div></section>`;
  };

  const renderPage76 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const words=[['17.','Salum anahitaji matofali elfu nne na mia tano sabini kujenga nyumba yake. Kwa sasa anayo matofali elfu moja mia mbili sabini. Je, anahitaji kuongeza matofali mangapi zaidi ili kujenga nyumba yake?'],['18.','Wananchi wa Tabora waliotesha miti elfu tisa mia tisa tisini katika miaka miwili. Ikiwa mwaka wa kwanza waliotesha miti elfu tano na sabini, je mwaka wa pili waliotesha miti mingapi?'],['19.','Mwalimu Mponela alikuwa na madaftari 7,568. Ikiwa aliwapatia wanafunzi wake madaftari 5,368, je alibakiwa na madaftari mangapi?'],['20.','Shule ina jumla ya wanafunzi 3,270. Kati yao wasichana ni 1,560. Je, shule hiyo ina wavulana wangapi?'],['21.','Kata moja ina wakazi 6,328 na kata nyingine ina wakazi 2,590. Je, kata zote mbili zina jumla ya wakazi wangapi?'],['22.','John anafuga kuku 4,569 na Ashura anafuga kuku 5,200. Je, wote kwa pamoja wana jumla ya kuku wangapi?']];
    content.className='book-page book-page-76 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg082_sec001"><div class="book-page76-sheet"><div class="book-page76-stacks"><div><span>7.</span><div><span>55394</span><span>+ &nbsp;1295</span><i></i><i></i></div></div><div><span>8.</span><div><span>7623</span><span>− &nbsp;278</span><i></i><i></i></div></div></div><div class="book-page76-short">${[['9.','6145 + 312 ='],['10.','8912 + 88 ='],['11.','54273 + 12632 ='],['12.','76832 + 2126 ='],['13.','9051 − 4030 ='],['14.','4177 − 408 ='],['15.','548123 − 253700 ='],['16.','59635 − 926 =']].map(x=>`<p><span>${x[0]}</span><span>${x[1]}</span></p>`).join('')}</div><div class="book-page76-words">${words.map(x=>`<div><span>${x[0]}</span><p>${x[1]}</p></div>`).join('')}</div></div></section>`;
  };

  const renderPage77 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-77 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg083_sec001"><header class="book-page77-chapter"><h2>Sura ya Tatu</h2><h1>Vipimo vya urefu, uzani na ujazo</h1></header><div class="book-page77-intro"><h2>Utangulizi</h2><p>Katika sura hii utajifunza vipimo vya urefu, uzani na ujazo. Utaweza kukadiria na kulinganisha urefu, uzani na ujazo wa vitu mbalimbali. Umahiri utakaoujenga utakuwezesha kupima urefu, uzani na ujazo na kutumia vitu kulingana na mahitaji.</p></div><div class="book-page77-copy"><h2>Vipimo vya urefu</h2><p>Urefu ni umbali kutoka sehemu moja hadi nyingine. Urefu unaweza kupimwa kwa kutumia vipimio visivyo rasmi na vipimio rasmi vya urefu.</p><h2>Vipimio visivyo rasmi vya urefu</h2><p>Vipimio visivyo rasmi hutumiwa kulingana na aina ya vitu vinavyopimwa. Mfano kupima urefu wa ubao au meza unaweza kutumia vipimio visivyo rasmi kama vile hatua za miguu, fimbo, kamba na kiganja cha mkono. Vipimio hivyo visivyo rasmi hutoa majibu yasiyofanana kila vinapotumika. Sababu ya kutofautiana ni kwamba urefu wa kitu utategemea urefu wa kiganja cha mkono. Watu wawili wenye urefu tofauti wa viganja vya mikono hutoa majibu tofauti. Picha ifuatayo inaonesha mwanafunzi akipima urefu wa meza kwa kutumia kiganja cha mkono.</p></div></section>`;
  };

  const renderPage78 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-78 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg084_sec001"><figure class="book-page78-figure"><img src="images/pg084_im001_transparent.png" alt="Wanafunzi wakipima urefu wa meza kwa viganja"></figure><div class="book-page78-work"><h1><b>Kazi ya kufanya 1:</b> Kupima urefu wa darasa</h1><ol><li>Pima urefu wa darasa kwa kutumia hatua za miguu.</li><li>Rekodi urefu wa darasa.</li><li>Mwambie mwenzako naye apime na kurekodi urefu wa darasa kwa kutumia hatua za miguu.</li><li>Linganisha hatua za miguu zilizorekodiwa kutoka 2 na 3.</li><li>Je, idadi ya hatua mlizopima zinatofautiana? Eleza sababu ya jibu lako.</li></ol></div><div class="book-page78-copy"><h1>Vipimio rasmi vya urefu</h1><p>Vipimio rasmi vya urefu vinakubalika na vinatoa majibu yanayofanana mahali popote vinapotumika. Vipimio hivyo ni pamoja na rula na futikamba. Vipimio hivi hupima urefu katika vipimo kama vile milimeta (mm), sentimeta (sm), meta (m) na kilometa (km).</p></div></section>`;
  };

  const renderPage79 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-79 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg085_sec001"><p class="book-page79-lead">Picha ifuatayo inaonesha baadhi ya vipimio rasmi vya urefu.</p><div class="book-page79-tools"><figure class="ruler"><img src="images/pg085_im001_transparent.png" alt="Rula"><figcaption>Rula</figcaption></figure><div class="tapes"><img src="images/pg085_im002_transparent.png" alt="Futikamba ya kushona"><img src="images/pg085_im003_transparent.png" alt="Futikamba ya kujivuta"><img src="images/pg085_im004_transparent.png" alt="Futikamba ya mviringo"></div><p>Futikamba mbalimbali</p></div><div class="book-page79-work"><h1><b>Kazi ya kufanya 2:</b> Kupima urefu wa vitu mbalimbali</h1><ol><li>Bainisha vitu mbalimbali vinavyoweza kupimwa kwa vipimio rasmi na visivyo rasmi.</li><li>Pima na kurekodi urefu wa kitu kimoja kwa vipimio rasmi na visivyo rasmi.</li><li>Rekodi matokeo ya vipimo vilivyopatikana kwa kutumia vipimio rasmi na visivyo rasmi. Je, vipimo hivyo vinalingana vipi?</li></ol></div><div class="book-page79-work second"><h1><b>Kazi ya kufanya 3:</b> Kupima urefu wa daftari</h1><ol><li>Pima urefu wa daftari lako kwa kutumia rula yenye kipimo cha sentimeta.</li><li>Rekodi urefu ulioupata katika hatua ya 1.</li><li>Rudia hatua ya 1 kwa kutumia futikamba.</li></ol></div></section>`;
  };

  const renderPage80 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-80 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg086_sec001"><div class="book-page80-work"><ol start="4"><li>Rekodi urefu uliopata kwa sentimeta katika hatua ya 3.</li><li>Linganisha vipimo ulivyopata katika hatua ya 3 na 4.</li><li>Eleza ulichogundua katika hatua ya 5.</li></ol></div><div class="book-page80-copy"><h1>Vipimo vya milimeta na sentimeta</h1><p>Vipimo vya milimeta na sentimeta hutumika mara nyingi tunapopima vitu kwa kutumia rula. Rula hupima urefu katika sentimeta na milimeta. Sentimeta moja ni sawa na milimeta 10. Kipimo kidogo cha rula ni milimeta.</p></div><div class="book-example-card book-page80-example"><div class="book-example-label">Mfano wa 1</div><p>Kipande cha kitambaa kilichopimwa katika picha ifuatayo kina urefu gani?</p><img src="images/pg086_im001_transparent.png" alt="Kitambaa kilichopimwa kwa rula"><h2>Jibu</h2><p>Urefu wa kipande cha kitambaa ni sm 5.</p></div><div class="book-example-card book-page80-example second"><div class="book-example-label">Mfano wa 2</div><p>Kipande cha ubao kilichopimwa katika picha ifuatayo kina urefu gani?</p><img src="images/pg086_im002_transparent.png" alt="Ubao uliopimwa kwa rula"><h2>Jibu</h2><p>Urefu wa kipande cha ubao ni sm 3 na mm 5.</p></div></section>`;
  };

  const renderPage81 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-81 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg087_sec001"><div class="book-exercise-sheet book-page81-exercise"><h1 class="book-exercise-title">Zoezi la 1</h1><p>Pima na rekodi urefu wa vitu vifuatavyo katika sm na mm:</p><div>${['Meza','Dawati','Kalamu','Daftari','Rula','Kitabu','Ufutio','Mkebe'].map((x,i)=>`<span>${i+1}. &nbsp; ${x}</span>`).join('')}</div></div><div class="book-page81-copy"><h1>Kipimo cha meta</h1><p>Kipimo cha meta ni cha msingi katika kupima urefu. Kipimo hiki hutumika kupima vitu kama vile urefu wa chumba cha darasa. Urefu wa meta moja ni sawa na sentimeta 100, au kwa kifupi ni m 1 = sm 100. Mchoro ufuatao unaonesha rula yenye urefu wa sentimeta 100 au meta moja.</p><img src="images/pg087_im001_transparent.png" alt="Rula yenye urefu wa sentimeta 100"></div><div class="book-page81-work"><h1><b>Kazi ya kufanya 4:</b> Kupima urefu wa vitu katika meta</h1><ol><li>Pima vitu vifuatavyo katika meta na sentimeta.<table><thead><tr><th></th><th>Kitu</th><th>Urefu</th></tr></thead><tbody><tr><td>(a)</td><td>Meza ya mwalimu</td><td></td></tr><tr><td>(b)</td><td>Mlango wa darasa</td><td></td></tr><tr><td>(c)</td><td>Dawati</td><td></td></tr></tbody></table></li><li>Rekodi urefu wa kila kitu ulichopima.</li><li>Je, ni kitu gani kirefu kuliko vyote? Andika thamani yake.</li></ol></div></section>`;
  };

  const renderPage82 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-82 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg088_sec001"><div class="book-page82-copy"><h1>Kipimo cha kilometa</h1><p>Kipimo cha kilometa hutumika katika kupima urefu mkubwa zaidi. Hii ni pamoja na umbali wa sehemu mbili zilizo mbali Kwa mfano, umbali kutoka mji mmoja hadi mwingine hupimwa kwa kilometa. Umbali wa kilometa moja ni sawa na meta elfu moja. Kwa kifupi km 1 = m 1000.</p></div><div class="book-exercise-sheet book-page82-exercise"><h1 class="book-exercise-title">Zoezi la 2</h1><div class="book-page82-questions"><div><span>1.</span><div><p>Utatumia kipimo gani kati ya sm, m, na km kupima vitu vifuatavyo?</p><p>(a) &nbsp; Urefu wako</p><p>(b) &nbsp; Umbali kutoka darasa hadi choo cha shule</p><p>(c) &nbsp; Umbali kutoka nyumbani hadi shuleni</p><p>(d) &nbsp; Urefu wa kipande cha chaki</p></div></div><div><span>2.</span><p>Amina alipima ubao kwa kutumia rula. John alipima ubao huohuo kwa kutumia kiganja cha mkono. Je, ni nani aliyepata jibu lenye usahihi zaidi? Eleza sababu ya jibu lako?</p></div><div><span>3.</span><p>Umbali kutoka shuleni hadi zahanati ni m 800. Umbali kutoka shule hiyo hadi sokoni ni km 1. Kati ya zahanati na sokoni, wapi ni mbali zaidi kutoka shuleni?</p></div><div><span>4.</span><div><p>Andika urefu wa kalamu katika mchoro huu.</p><img src="images/pg088_im001_transparent.png" alt="Kalamu iliyowekwa juu ya rula"></div></div></div></div></section>`;
  };

  const renderPage83 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-83 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg089_sec001"><div class="book-page83-copy"><h1>Vipimo vya uzani</h1><p>Uzani ni kipimo cha uzito wa vitu. Uzani wa kitu unaweza kupimwa kwa kutumia vipimio rasmi na visivyo rasmi vya uzani.</p><h1>Vipimio visivyo rasmi vya uzani</h1><p>Vipimo visivyo rasmi vya uzani ni kama vikombe, vijiko, debe, magunia, ndoo na makasha. Picha ifuatayo inaonesha ndoo mbili zenye mchele.</p><div class="book-page83-buckets"><figure><img src="images/pg089_im001_transparent.png" alt="Ndoo yenye mchele"><figcaption>Ndoo A</figcaption></figure><figure><img src="images/pg089_im002_transparent.png" alt="Ndoo iliyojaa mchele"><figcaption>Ndoo B</figcaption></figure></div><p>Je, ni ndoo ipi ina uzani mkubwa wa mchele? Eleza sababu ya jibu lako.</p><h1>Vipimio rasmi vya uzani</h1><p>Vipimio rasmi vya uzani wa vitu mbalimbali ni mizani. Vipimio hivyo hutambulika kitaifa na kimataifa. Picha zifuatazo zinaonesha baadhi ya mizani.</p><div class="book-page83-scales"><img src="images/pg089_im003_transparent.png" alt="Mizani ya kawaida"><img src="images/pg089_im004_transparent.png" alt="Mizani ya kupimia uzani"><img src="images/pg089_im005_transparent.png" alt="Mizani ya kidijitali"></div></div></section>`;
  };

  const renderPage84 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-84 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg090_sec001"><div class="book-page84-copy"><h1>Kilogramu na gramu</h1><p>Uzani wa vitu mbalimbali hurekodiwa mara kwa mara kwa kutumia vipimo vya gramu na kilogramu. Kipimo cha gramu ni kidogo kuliko kilogramu. Uhusiano wa kilogramu na gramu ni kama ifuatavyo:</p><p>Kilogramu (kg) 1 = gramu (g) 1 000<br>Nusu kilogramu = gramu 500<br>Robo kilogramu = gramu 250</p></div><div class="book-page84-work"><h1><b>Kazi ya kufanya 5:</b> Kupima uzani wa vitu katika gramu na kilogramu</h1><ol><li>Andaa vitu mbalimbali katika mazingira yako vinavyoweza kupimwa kwa uzani.</li><li>Chagua vitu viwili na pima uzani wake.</li><li>Pima kiasi cha gramu 750 za kitu cha kwanza, kisha pima kilogramu moja ya kitu cha pili.</li><li>Kati ya vitu viwili ulivyopima, kipi ni kizito kuliko kingine?</li></ol></div><div class="book-exercise-sheet book-page84-exercise"><h1 class="book-exercise-title">Zoezi la 3</h1><div><span>1.</span><div><p>Kipimo kipi kati ya gramu na kilogramu kinaweza kutumika kupima vitu vifuatavyo?</p>${['Uzani wa kitabu cha Hisabati','Gunia la mchele','Nyama','Uzani wa mwanafunzi','Beji la madaftari','Kipande cha chaki'].map((x,i)=>`<p>(${String.fromCharCode(97+i)}) &nbsp;&nbsp; ${x}</p>`).join('')}</div></div></div></section>`;
  };

  const renderPage85 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const q=(n,html)=>`<div class="book-page85-question"><span>${n}.</span><div>${html}</div></div>`;
    content.className='book-page book-page-85 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg091_sec001"><div class="book-exercise-sheet book-page85-exercise">${q(2,'<p>Pima uzani wa vitu vifuatavyo:</p><p>(a) &nbsp; Chupa tupu ya soda</p><p>(b) &nbsp; Daftari</p><p>(c) &nbsp; Mkebe wa vifaa vya kihisabati</p>')}${q(3,'<p>Katika vitu ulivyopima katika swali la pili:</p><p>(a) &nbsp; Kipi kina uzani mdogo zaidi?</p><p>(b) &nbsp; Kipi kina uzani mkubwa zaidi?</p>')}${q(4,'<p>Orodhesha vitu vingine vitano vinavyopimwa kwa kutumia vipimio rasmi vya uzani.</p>')}${q(5,'<p>Panga vipimo vifuatavyo kutoka uzani mkubwa kwenda mdogo: g 1600, g 500, kg 250, kg 155 na g 650.</p>')}${q(6,'<p>Zipora anasema uzani wa gramu 1,000 ni mkubwa kuliko ule wa kilogramu moja. Je, Zipora yuko sahihi? Eleza jibu lako.</p>')}</div><div class="book-page85-copy"><h1>Vipimo vya ujazo</h1><p>Ujazo ni kiasi cha nafasi kinachochukuliwa na kitu. Ujazo unaweza kupimwa kwa kutumia vipimio rasmi na visivyo rasmi.</p><h1>Vipimio visivyo rasmi vya ujazo</h1><p>Vipimio visivyo rasmi vya ujazo ni kama vijiko, vikombe na ndoo. Picha ifuatayo inaonesha wanafunzi wanapima ujazo wa maji kwa kutumia vikombe na ndoo.</p><p>Wanafunzi wanajaza maji katika ndoo mbili zilizo sawa. Kila mtoto anajaza ndoo yake kwa kutumia kikombe. Watoto hao wamejaza idadi sawa za vikombe vya maji katika ndoo zao.</p></div></section>`;
  };

  const renderPage86 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-86 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg092_sec001"><div class="book-page86-copy"><p>Je, ndoo hizo zitakuwa na kiwango sawa cha maji? Eleza sababu ya jibu lako.</p><img src="images/pg092_im001_transparent.png" alt="Wanafunzi wakipima ujazo wa maji kwa vikombe na ndoo"></div><div class="book-page86-work"><h1><b>Kazi ya kufanya 6:</b> Kupima ujazo wa maji</h1><ol><li>Andaa vyombo viwili vya ujazo vilivyo sawa.</li><li>Jaza maji katika vyombo hivyo ukihesabu idadi ya vikombe.</li><li>Mwambie rafiki yako ajaze maji katika vyombo hivyo hivyo akihesabu idadi ya vikombe pia.</li><li>Rekodi idadi ya vikombe vilivyotumika kujaza chombo chako na cha rafiki yako.</li><li>Je, idadi ya vikombe vilivyojaza vyombo vinatofautiana?<br>Eleza sababu ya jibu lako.</li><li>Bainisha vitu vingine vitatu katika mazingira yako unavyoweza kupima.</li></ol></div></section>`;
  };

  const renderPage87 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const rows=[['pg093_im001_transparent.png','bika'],['pg093_im002_transparent.png','silinda kipimo'],['pg093_im003_transparent.png','chupa yenye vipimo']];
    content.className='book-page book-page-87 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg093_sec001"><div class="book-page87-copy"><h1>Vipimio rasmi vya ujazo</h1><p>Vipimio rasmi vya ujazo havitofautiani katika kutoa majibu mahali popote vinapotumika. Vipimio hivyo ni kama bika, silinda kipimo na chupa yenye vipimo.</p><p>Picha zifuatazo zinaonesha baadhi ya vipimio rasmi vya ujazo</p><table><thead><tr><th>Kipimio</th><th>Jina</th></tr></thead><tbody>${rows.map(([src,name])=>`<tr><td><img src="images/${src}" alt="${name}"></td><td>${name}</td></tr>`).join('')}</tbody></table></div></section>`;
  };

  const renderPage88 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-88 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg094_sec001"><div class="book-page88-copy"><h1>Vipimo vya lita na mililita</h1><p>Vipimo vya ujazo vinavyotumika mara kwa mara ni lita (L) na mililita (mL). Kipimo cha mililita ni kidogo kuliko lita. Vipimo vyote hivyo hutumika kupima ujazo. Uhusiano wa lita na mililita ni kama ifuatavyo:</p><p>Lita (L) 1 = mililita (mL) 1000<br>Nusu lita = mililita 500<br>Robo lita = mililita 250</p></div><div class="book-page88-work"><h1><b>Kazi ya kufanya 7:</b> Kupima ujazo wa maji</h1><ol><li>Andaa silinda za kupimia.</li><li>Jaza maji kwenye silinda mpaka nusu ya ujazo wake.</li><li>Soma ujazo wake.</li></ol></div><div class="book-exercise-sheet book-page88-exercise"><h1 class="book-exercise-title">Zoezi la 4</h1><div class="book-page88-question"><span>1.</span><p>Panga vipimo vifuatavyo kuanzia kipimo kidogo kwenda kikubwa; mL 450, mL 40, L 2 na mL 4.</p></div><div class="book-page88-question"><span>2.</span><div><p>Chunguza jedwali lifuatalo kisha jibu maswali yanayofuata:</p><table><tbody><tr><td>Jagi</td><td>Lita</td><td>Chupa</td><td>Mizani msawazo</td></tr><tr><td>Rula ndefu</td><td>Boksi</td><td>Bomba la sindano</td><td>Ndoo</td></tr></tbody></table><p>(a) &nbsp; Vipimio vipi vinatumika kupima ujazo?</p><p>(b) &nbsp; Kipimo kipi kinapima ujazo?</p><p>(c) &nbsp; Orodhesha vipimio vinavyopima ujazo mkubwa.</p><p>(d) &nbsp; Orodhesha vipimio vinavyopima ujazo mdogo.</p></div></div></div></section>`;
  };

  const renderPage89 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-89 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg095_sec001"><div class="book-exercise-sheet book-page89-exercise"><div class="book-page89-question"><span>3.</span><div><p>Chunguza vipimio vifuatavyo kisha andika kiasi kilichopo kwenye kila kipimio.</p><div class="book-page89-measures"><figure><figcaption>(a)</figcaption><img src="images/pg095_im001_transparent.png" alt="Kikombe cha mililita"></figure><figure><figcaption>(b)</figcaption><img src="images/pg095_im002_transparent.png" alt="Jagi la lita"></figure></div></div></div><div class="book-page89-question"><span>4.</span><p>Ng’ombe hutoa lita 20 za maziwa kila siku. Hutoa lita ngapi za maziwa kwa siku tatu?</p></div><div class="book-page89-question"><span>5.</span><p>Faraja alinunua sharubati yenye ujazo wa lita moja. Kisha akamimina mL 500 kwenye chupa na kumpa rafiki yake. Je, Faraja alibakiwa na kiasi gani cha sharubati?</p></div></div><div class="book-page89-work"><h1><b>Kazi ya kufanya 8:</b> Chunguza vipimio mbalimbali katika maisha ya kila siku</h1><ol><li>Tembelea duka lililokaribu yako linalouza vitu mbalimbali.</li><li>Bainisha jinsi wanavyopima urefu, uzani na ujazo.</li><li>Bainisha vitu vitatu kati ya vyote ulivyovitambua.</li><li>Je, vitu gani hutumika kupima urefu, uzani na ujazo katika vitu ulivyovibainisha katika hatua ya 3?</li><li>Rekodi urefu, uzani na ujazo wa vitu ulivyovibainisha.</li></ol></div><div class="book-page89-work second"><h1><b>Kazi ya kufanya 9</b></h1><p>Kujifunza zaidi vipimo vya urefu, uzani na ujazo kwa njia ya masomo ya mtandaoni</p><h2>Maelezo</h2><p>Tumia masomo ya mtandaoni kujifunza zaidi juu ya vipimo vya urefu, uzani na ujazo katika masomo ya mtandaoni.</p></div></section>`;
  };

  const renderPage90 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-90 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg096_sec001"><div class="book-page90-reminder"><h1>Jikumbushe</h1><ol><li>Kipimo cha msingi cha urefu ni meta (m)</li><li>Kipimo cha msingi cha uzani ni gramu (g)</li><li>Kipimo cha msingi cha ujazo ni lita (L)</li><li>Uhusiano wa meta na sentimeta ni m 1 = sm 100</li><li>Uhusiano wa kilogramu na gramu ni kg 1 = g 1000</li><li>Uhusiano wa lita na mililita ni L 1 = mL 1000</li></ol></div><div class="book-page90-vocab"><h1>Msamiati</h1><dl><dt>Urefu</dt><dd>Umbali kutoka sehemu moja hadi nyingine.</dd><dt>Kipimio</dt><dd>namba inayoandikwa kwa kutumia tarakimu</dd><dt>Uzani</dt><dd>Uzito wa kitu.</dd><dt>Ujazo</dt><dd>Kiasi cha nafasi kilichochukuliwa na kitu.</dd></dl></div><div class="book-page90-review"><h1>Zoezi la Marudio</h1><div><span>1.</span><div><p>Chagua kipimo kinachoweza kuwa sahihi kutoka fungu B kupima urefu katika fungu A.</p><h2>Fungu A</h2><p>(a) &nbsp; Urefu wa ofisi ya walimu ______</p><p>(b) &nbsp; Urefu wa kipande cha chaki ______</p><p>(c) &nbsp; Urefu wa barabara kutoka Dodoma hadi Dar es Salaam ni ______</p><h2>Fungu B</h2><table><tbody><tr><td>Meta (m)</td><td>Sentimeta (sm)</td><td>Kilometa (km)</td></tr><tr><td>Kilogramu (kg)</td><td>Mililita (mL)</td><td>Lita (L)</td></tr></tbody></table></div></div></div></section>`;
  };

  const renderPage91 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const rows=[['a','pg097_im001_transparent.png','Yai','Gramu'],['b','pg097_im002_transparent.png','Kizibo','__________'],['c','pg097_im003_transparent.png','Ng’ombe','__________'],['d','pg097_im006_seg004_v1_transparent.png','Penseli','__________']];
    content.className='book-page book-page-91 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg097_sec001"><div class="book-page91-sheet"><div class="book-page91-q"><span>2.</span><div><p>Kipi kati ya bidhaa zifuatazo kinaweza kukadiriwa kuwa na uzani wa kilogramu moja?</p><p>(a) &nbsp; Baiskeli</p><p>(b) &nbsp; nanasi</p><p>(c) &nbsp; kipande cha karatasi</p></div></div><div class="book-page91-q"><span>3.</span><div><p>Katika picha zifuatazo andika vipimo vya uzani unaoweza kukadiria kati ya kilogramu au gramu. Swali (a) ni mfano</p><table><thead><tr><th></th><th>Picha</th><th>Uzani unakadiriwa katika gramu au kilogramu</th></tr></thead><tbody>${rows.map(([a,src,name,answer])=>`<tr><td>(${a})</td><td><img src="images/${src}" alt="${name}"><span>${name}</span></td><td>${answer}</td></tr>`).join('')}</tbody></table></div></div></div></section>`;
  };

  const renderPage92 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const qs=['Iwapo mawe mawili yenye uzani wa g 500 na g 250 yalitumika kulinganisha uzani wa mchele. Je, mchele una uzani gani?','Umepewa mawe mawili yenye uzani wa g 250 na moja lenye uzani wa g 500. Je, utafanyaje kupima kilogramu moja?','Iwapo umepewa vipimio vyenye ujazo wa mL 150, mL 400 na mL 500. Je, utatumia vipimio gani kupima mililita 550?','Mzee Kinene amebakiwa na dawa ya ng’ombe ya mL 750 kwenye chupa ya mL 1000. Je, anahitaji mililita ngapi ili aweze kujaza chupa hiyo ya dawa?','Mlonganile alinunua chupa ya maji ya lita moja. Iwapo alikunywa mL 500 wakati wa chakula, je alibakiwa na kiasi gani cha maji?','Aisha aliambiwa apime urefu wa uwanja wa mpira wa pete. Kipi kati ya vipimo vifuatavyo kinafaa zaidi kuwakilisha umbali huu: sm, m au km? Eleza sababu ya jibu lako.','Rula ya Kamene imevunjika na inaanzia katika alama ya sm 3. Kamene anataka kuchora kipande cha mstari wenye urefu wa sm 5. Je, ataishia kwenye alama ipi kwenye rula hiyo?','Utatumia kipimo gani kati ya gramu na kilogramu kupima uzani wa chungwa?','Ikiwa gunia la viazi lina uzani wa g 2000 na gunia la mchele lina uzani wa kg 1. Je, ni gunia gani lenye uzani mkubwa kuliko lingine?','Clara alinunua mafuta ya kupikia yenye ujazo wa mL 500. Alitumia mafuta yenye ujazo wa mL 250. Je, alibakiwa na mafuta ya ujazo wa kiasi gani?'];
    content.className='book-page book-page-92 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg098_sec001"><div class="book-page92-sheet">${qs.map((q,i)=>`<div><span>${i+4}.</span><p>${q}</p></div>`).join('')}</div></section>`;
  };

  const renderPage93 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-93 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg099_sec001"><header class="book-page93-chapter"><h2>Sura ya Nne</h2><h1>Maumbo</h1></header><div class="book-page93-intro"><h2>Utangulizi</h2><p>Katika sura hii utajifunza maumbo ya aina mbalimbali. Utajifunza nukta, mstari, kipande cha mstari na mwale. Utajifunza kuunda maumbo bapa kwa kutumia nukta, mstari na kipande cha mstari. Umahiri utakaoujenga utakuwezesha kutumia maumbo katika shughuli mbalimbali kama vile upishi, ushoni, ujenzi, useremala, uchoraji na utengenezaji wa vitu mbalimbali.</p></div><div class="book-page93-copy"><h1>Nukta, mstari, kipande cha mstari na mwale</h1><p>Nukta, mstari, kipande cha mstari na mwale ni maumbo ya msingi katika uhusiano wa maumbo mbalimbali.</p><h2>Nukta</h2><p>Nukta ni umbo ambalo halina ukubwa linaloonesha mahali. Nukta haina urefu wala upana na huwakilishwa na herufi kubwa. Ifuatayo ni mifano inayoonesha nukta A, B na C.</p><div class="book-page93-points"><span class="a">A<i></i></span><span class="b">B<i></i></span><span class="c">C<i></i></span></div><p>Katika mifano hii, nukta A, B, na C zinaonesha mahali tofauti.</p></div></section>`;
  };

  const renderPage94 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-94 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg100_sec001"><div class="book-page94-work"><h1><b>Kazi ya kufanya 1:</b> Kuonesha mahali kwa kutumia nukta</h1><ol><li>Tumia penseli kuweka nukta tano tofauti kwenye karatasi.</li><li>Andika majina ya nukta hizo kwa kutumia herufi kubwa.</li></ol></div><div class="book-page94-copy"><h1>Mstari</h1><p>Mstari huundwa na seti ya nukta zilizounganishwa pamoja na kuendelezwa pande mbili tofauti bila kuwa na mwisho. Mara nyingi mstari huoneshwa kwa kutumia mstari mnyoofu ambao huwekewa alama ya ↔ kila upande ili kuonesha kuwa hauna mwisho. Mstari huweza kuoneshwa kwa kutumia nukta mbili zilizopo kwenye huo mstari. Kielelezo kifuatacho ni mifano ya mistari minyoofu.</p><div class="book-page94-lines"><img src="images/pg100_im005_transparent.png" alt="Mstari EF"><span class="vertical">↕<i>C</i><b>D</b></span><span class="horizontal">↔<i>A</i><b>B</b></span></div><p>Kwa hiyo, ↔EF au ↔FE ni kifupi cha mstari mnyoofu EF au FE. Vilevile, ↔AB au ↔BA na ↔CD au ↔DC ni mistari minyoofu.</p></div><div class="book-example-card book-page94-example"><div class="book-example-label">Mfano</div><p>Chora mstari, kisha weka nukta A na B zenye umbali wa sm 10 kutoka nukta A hadi nukta B.</p><h2>Jibu</h2><p>Mstari wenye nukta A na B zenye umbali wa sm10 kutoka nukta A hadi B.</p><div class="book-page94-answer">←────────A<span>sm 10</span>B────────→</div></div></section>`;
  };

  const renderPage95 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const points='<div class="book-page95-points"><span class="a">A<i></i></span><span class="b">B<i></i></span><span class="c">C<i></i></span><span class="d">D<i></i></span><span class="e">E<i></i></span><span class="f">F<i></i></span></div>';
    content.className='book-page book-page-95 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg101_sec001"><div class="book-page95-copy"><h1>Kipande cha mstari</h1><p>Kipande cha mstari ni mstari mnyoofu unaounganisha nukta mbili tofauti. Kipande cha mstari kinaweza kupimwa urefu wake kupitia umbali uliopo kati ya nukta mbili za mwisho. Kipande cha mstari kinachounganisha nukta A na B huandikwa <span class="overline">AB</span> au <span class="overline">BA</span>.</p></div><div class="book-page95-work"><h1><b>Kazi ya kufanya 2:</b> Kuchora kipande cha mstari</h1><div class="book-page95-question"><span>1.</span><div><p>Unganisha nukta A na B, C na D, na E na F kwa kutumia penseli bila rula.</p>${points}</div></div><div class="book-page95-question"><span>2.</span><div><p>Unganisha nukta A na B, C na D, na E na F kwa kutumia penseli na rula</p>${points}</div></div><div class="book-page95-question"><span>3.</span><p>Umegundua nini katika hatua ya 1 na ya 2?</p></div></div></section>`;
  };

  const renderPage96 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-96 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg102_sec001"><div class="book-page96-work"><p><b>4.</b> Ni katika kazi ipi mistari ifuatayo imetengenezwa?</p><div class="book-page96-segments"><span>A──────B</span><span>F╱────E</span><span>C│<br>&nbsp;│<br>&nbsp;D</span></div></div><div class="book-page96-copy"><h1>Sifa za kipande cha mstari</h1><p>Kipande cha mstari kina sifa zifuatazo:</p><p>(a) &nbsp; Kimenyooka<br>(b) &nbsp; Hakina unene<br>(c) &nbsp; Kina mwanzo katika nukta moja na mwisho kwenye nukta nyingine</p></div><div class="book-example-card book-page96-example"><div class="book-example-label">Mfano wa 1</div><p>Katika michoro ifuatayo bainisha mstari, kipande cha mstari au siyo mstari wala kipande cha mstari.</p><div class="book-page96-drawings"><span>(a) &nbsp; ←──────→<i>A&nbsp;&nbsp;&nbsp;B</i></span><span>(b) &nbsp; ├──────┤<i>A&nbsp;&nbsp;&nbsp;B</i></span><span>(c) &nbsp; ←──────┤<i>L</i></span></div><h2>Jibu</h2><p>(a) &nbsp; Ni mstari kwa sababu hauna nukta ya mwisho katika pande zote mbili.<br>(b) &nbsp; Ni kipande cha mstari kwa sababu kina pande mbili zenye nukta mwishoni.<br>(c) &nbsp; Si kipande cha mstari kwa sababu ina upande unaoanza na nukta na upande mmoja umewekewa mshale.</p></div></section>`;
  };

  const renderPage97 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-97 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg103_sec001"><div class="book-example-card book-page97-example"><div class="book-example-label">Mfano wa 2</div><p>Andika jina la kila kipande cha mstari katika michoro ifuatayo:</p><div class="book-page97-three"><figure><figcaption>(a)</figcaption><img src="images/pg103_im001_transparent.png" alt="Kipande DQ"></figure><figure><figcaption>(b)</figcaption><img src="images/pg103_im002_transparent.png" alt="Kipande CD"></figure><figure><figcaption>(c)</figcaption><img src="images/pg103_im003_transparent.png" alt="Kipande AB"></figure></div><h2>Jibu</h2><p>(a) &nbsp; <span class="overline">DQ</span> &nbsp;&nbsp;&nbsp;&nbsp; (b) &nbsp; <span class="overline">CD</span> &nbsp;&nbsp;&nbsp;&nbsp; (c) &nbsp; <span class="overline">AB</span></p></div><div class="book-example-card book-page97-example second"><div class="book-example-label">Mfano wa 3</div><p>Andika vipande vyote vya mstari kutoka kwenye mchoro ufuatao:</p><div class="book-page97-abcd">●────●────●────●────●<span>A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D</span></div><h2>Jibu</h2><p><span class="overline">AB</span>, <span class="overline">AC</span>, <span class="overline">AD</span>, <span class="overline">BC</span>, <span class="overline">BD</span> na <span class="overline">CD</span></p></div><div class="book-example-card book-page97-example third"><div class="book-example-label">Mfano wa 4</div><p>Kuna vipande vingapi vya mstari katika mchoro ufuatao:</p><img src="images/pg103_im004_transparent.png" alt="Nyota yenye vipande vinane"><h2>Jibu</h2><p>Kuna vipande 8 vya mistari.</p></div></section>`;
  };

  const renderPage98 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-98 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg104_sec001"><div class="book-exercise-sheet book-page98-exercise"><h1 class="book-exercise-title">Zoezi la 1</h1><div class="book-page98-q"><span>1.</span><div><p>Chora vipande vya mistari vyenye urefu ufuatao:</p><div class="book-page98-lengths"><span>(a) &nbsp; <span class="overline">PQ</span> = sm 4</span><span>(b) &nbsp; <span class="overline">CD</span> = sm 5</span><span>(c) &nbsp; <span class="overline">LM</span> = sm 6</span><span>(d) &nbsp; <span class="overline">JK</span> = sm 7</span><span>(e) &nbsp; <span class="overline">XY</span> = sm 8</span><span>(f) &nbsp; <span class="overline">EF</span> = sm 9</span><span>(g) &nbsp; <span class="overline">MN</span> = sm 10</span></div></div></div><div class="book-page98-q"><span>2.</span><p>Umbo mraba lina vipande vya mstari vingapi?</p></div><div class="book-page98-q"><span>3.</span><div><p>Kipi kati ya vifuatavyo kina wakilisha kipande cha mstari?</p><p>(a) &nbsp; →AB &nbsp;&nbsp;&nbsp; (b) &nbsp; ↔AB &nbsp;&nbsp;&nbsp; (c) &nbsp; ←AB &nbsp;&nbsp;&nbsp; (d) &nbsp; <span class="overline">AB</span></p></div></div><div class="book-page98-q"><span>4.</span><p>Ipi ni mifano ya vipande vya mstari katika maisha yetu ya kila siku?</p></div></div><div class="book-page98-copy"><h1>Mwale</h1><p>Mwale ni kipande cha mstari kinachoendelezwa upande mmoja bila kikomo. Upande unaoendelea bila kikomo huwekewa mshale. Mifano ya miale ni kama inavyooneshwa katika kielelezo kifuatacho:</p><img src="images/pg104_im001_transparent.png" alt="Miale AB, CD na EF"><p>Mwale huandikwa na alama → inayowakilisha mwale. Kwa mfano mwale AB huandikwa <span class="overline">AB</span> na mwale BA huandikwa <span class="overline">BA</span>.</p></div></section>`;
  };

  const renderPage99 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const example=(n,question,img,answer)=>`<div class="book-example-card book-page99-example"><div class="book-example-label">Mfano wa ${n}</div><p>${question}</p><img src="images/${img}" alt="Mchoro wa miale"><h2>Jibu</h2><p>${answer}</p></div>`;
    content.className='book-page book-page-99 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg105_sec001"><div class="book-page99-work"><h1><b>Kazi ya kufanya 3:</b> Kuchora mwale</h1><ol><li>Tumia rula kuchora kipande cha mstari AB.</li><li>Endeleza kipande cha mstari AB upande wa kushoto au kulia, kisha kiwekee mshale kuonesha uelekeo.</li><li>Rudia hatua ya 1 na 2 kuchora miale mitatu, kisha andika majina yake.</li></ol></div>${example(1,'Katika mchoro ufuatao ipi ni nukta ya mwisho wa mwale AC?','pg105_im001_transparent.png','Kwa kuwa nukta ya mwanzo katika mwale vilevile huitwa nukta ya mwisho, hivyo basi nukta A ni nukta ya mwisho ya mwale AC.')}${example(2,'Miale ipi ni kinyume cha mingine katika mchoro ufuatao?','pg105_im002_transparent.png','Mwale AB na mwale AE ipo kinyume cha mwingine katika mchoro. Miale yote miwili inaanzia katika nukta A na kuendelea upande kinyume unaofanya mstari mnyoofu EB.')}</section>`;
  };

  const renderPage100 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const qs=['Chora vipande viwili vya mistari na utaje majina yake.','Chora mistari minyoofu mitatu, kisha taja majina yake.','Taja tofauti kati ya kipande cha mstari na mstari mnyoofu.','Je, unaweza kuchora kipande cha mstari cha sm 4 bila kutumia rula? Eleza sababu ya jibu lako.','Chora mwale XY na mwale YX.','Taja tofauti kati ya kipande cha mstari na mwale.'];
    content.className='book-page book-page-100 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg106_sec001"><div class="book-example-card book-page100-example"><div class="book-example-label">Mfano wa 3</div><p>Andika majina ya miale yote katika mchoro ufuatao.</p><img src="images/pg106_im001_transparent.png" alt="Mchoro wa miale kutoka nukta A"><h2>Jibu</h2><p>Katika mchoro huu kuna miale ifuatayo:<br><span class="overline">AB</span>, <span class="overline">AC</span>, <span class="overline">BC</span>, <span class="overline">AD</span>, <span class="overline">AE</span>, <span class="overline">DE</span>, <span class="overline">AF</span>, <span class="overline">AG</span> na <span class="overline">FG</span>.</p></div><div class="book-page100-work"><h1><b>Kazi ya kufanya 4:</b> Kuchora mstari mnyoofu</h1><ol><li>Tumia rula kuchora miale miwili; mmoja ukielekea kushoto na mwingine kuelekea kulia.</li><li>Unganisha nukta za mwanzo za miale miwili katika hatua ya 1 ili kupata mstari ulionyooka.</li></ol></div><div class="book-exercise-sheet book-page100-exercise"><h1 class="book-exercise-title">Zoezi la 2</h1>${qs.map((q,i)=>`<div><span>${i+1}.</span><p>${q}</p></div>`).join('')}</div></section>`;
  };

  const renderPage101 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const qs=['Urefu wa kipande cha mstari chenye urefu wa sm 5 huweza kupimwa kwa kutumia kifaa gani?','Taja idadi ya vipande vya mistari katika mstari ufuatao:','Chora kipande cha mstari PQ, kisha taja idadi ya nukta za mwishoni.','Unganisha mwisho wa vipande vitatu vya mistari AB, BC na CA, kisha andika jina la umbo linalopatikana.','Je, unaweza kuchora miale mingapi kutoka kwenye nukta moja?','Taja mifano mitatu katika maisha ya kila siku ambayo inaweza kuwakilisha mwale.'];
    content.className='book-page book-page-101 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg107_sec001"><div class="book-exercise-sheet book-page101-exercise">${qs.map((q,i)=>`<div><span>${i+7}.</span><div><p>${q}</p>${i===1?'<p class="book-page101-line">←───●──────●──────●───→<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;N</p>':''}</div></div>`).join('')}</div><div class="book-page101-copy"><h1>Kuunda maumbo bapa</h1><p>Umbo bapa ni umbo lenye pande mbili za urefu na upana tu. Halina unene au kimo. Kuna aina nyingi za maumbo bapa ikiwemo mraba, mstatili, pembetatu, duara na mviringo.</p></div><div class="book-page101-work"><h1><b>Kazi ya kufanya 5:</b> Kuunda maumbo bapa kwa kutumia nukta</h1><p>1. &nbsp; Chunguza kwa makini nukta zifuatazo:</p><div class="book-page101-points"><span class="a">A<i></i></span><span class="b">B<i></i></span><span class="c">C<i></i></span><span class="d">D<i></i></span></div></div></section>`;
  };

  const renderPage102 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-102 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg108_sec001"><div class="book-page102-work"><ol start="2"><li>Tumia penseli na rula kuunganisha nukta A na nukta B, C na D, A na D, na B na C.</li><li>Pima na kurekodi urefu wa vipande vya mistari <span class="overline">AB</span>, <span class="overline">AD</span>, <span class="overline">CD</span> na <span class="overline">BC</span>.</li><li>Andika jina la umbo linalopatikana katika hatua ya 2.</li></ol></div><div class="book-exercise-sheet book-page102-exercise"><h1 class="book-exercise-title">Zoezi la 3</h1><div class="book-page102-q"><span>1.</span><p>Kuna vipande vya mstari vingapi katika umbo la pembetatu?</p></div><div class="book-page102-q"><span>2.</span><div><p>Unganisha nukta E, F, G na H ili kutengeneza maumbo bapa yafuatayo:</p><p>(a) &nbsp; Pembetatu mbili.</p><p>(b) &nbsp; Pembetatu nne.</p><div class="book-page102-points"><span class="e">E<i></i></span><span class="f">F<i></i></span><span class="g">G<i></i></span><span class="h">H<i></i></span></div></div></div><div class="book-page102-q"><span>3.</span><p>Tiara inaundwa kwa vipande vingapi vya mstari?</p></div><div class="book-page102-q"><span>4.</span><div><p>Mchoro ufuatao una vipande vya mstari vingapi?</p><img src="images/pg108_im001_transparent.png" alt="Kipande cha mstari chenye nukta A, B, C na D"></div></div></div></section>`;
  };

  const renderPage103 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const shapes=[['pg109_im004_seg001_v1_transparent.png','Pembetatu'],['pg109_im004_seg002_v1_transparent.png','Mraba'],['pg109_im002_transparent.png','Mstatili'],['pg109_im003_transparent.png','Duara'],['pg109_im006_transparent.png','Pentagoni'],['pg109_im005_transparent.png','Heksagoni']];
    content.className='book-page book-page-103 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg109_sec001"><div class="book-page103-copy"><h1>Majina ya maumbo bapa</h1><p>Maumbo bapa hupewa majina kutokana na muundo, pembe au pande zake. Michoro ifuatayo inaonesha baadhi ya maumbo bapa na majina yake:</p><div class="book-page103-shapes">${shapes.map(([src,name])=>`<figure><img src="images/${src}" alt="${name}"><figcaption>${name}</figcaption></figure>`).join('')}</div><p>Mraba na mstatili ni maumbo bapa ambayo kila moja lina pande nne. Utofauti wa maumbo haya ni kuwa pande zote za mraba zina urefu unaolingana. Katika mstatili, pande zinazotazamana zina urefu unaolingana.</p></div></section>`;
  };

  const renderPage104 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const signs=[['pg110_im002_transparent.png','a'],['pg110_im003_transparent.png','b'],['pg110_im001_transparent.png','c'],['pg110_im004_transparent.png','d']];
    content.className='book-page book-page-104 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg110_sec001"><div class="book-page104-work"><h1><b>Kazi ya kufanya 6:</b> Kuchora maumbo bapa kwa kutumia TEHAMA<br>(Teknolojia ya Habari na Mawasiliano)</h1><ol><li>Bainisha programu yoyote ya kompyuta inayotumika kuchora maumbo bapa.</li><li>Tumia programu uliyoibainisha katika hatua ya 1 kuchora maumbo ya mraba, pembetatu, duara na mstatili.</li><li>Chora maumbo bapa matano tofauti yenye pande tano.</li><li>Chora maumbo mengi zaidi kuimarisha umahiri wako.</li></ol></div><div class="book-example-card book-page104-example"><div class="book-example-label">Mfano</div><p>Chunguza michoro ifuatayo, kisha taja jina la umbo bapa linalohusika:</p><div class="book-page104-signs">${signs.map(([src,l])=>`<figure><figcaption>(${l})</figcaption><img src="images/${src}" alt="Alama ya barabarani ${l}"></figure>`).join('')}</div><h2>Majibu</h2><p>(a) &nbsp; Umbo lina pande nane linaitwa oktagoni.<br>(b) &nbsp; Umbo lina pande nne linaitwa mstatili.<br>(c) &nbsp; Umbo lina pande tatu linaitwa pembetatu.<br>(d) &nbsp; Umbo linaitwa duara.</p></div></section>`;
  };

  const renderPage105 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const files=['pg111_im004_seg001_v1_crop1','pg111_im004_seg002_v1','pg111_im004_seg003_v1','pg111_im004_seg004_v1_crop1_crop1','pg111_im004_seg005_v1_crop1','pg111_im006_seg001_v1_crop1','pg111_im006_seg002_v1_crop1','pg111_im005','pg111_im007','pg111_im008'];
    content.className='book-page book-page-105 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg111_sec001"><div class="book-exercise-sheet book-page105-exercise"><h1 class="book-exercise-title">Zoezi la 4</h1><div class="book-page105-q"><span>1.</span><div><p>Chunguza maumbo bapa a hadi j, kisha jibu maswali yanayofuata.</p><div class="book-page105-shapes">${files.map((f,i)=>`<figure><img src="images/${f}_transparent.png" alt="Umbo ${String.fromCharCode(97+i)}"><figcaption>${String.fromCharCode(97+i)}</figcaption></figure>`).join('')}</div><p>(a) &nbsp; Chora maumbo yote yenye pembe nne.</p><p>(b) &nbsp; Maumbo mangapi ni pembetatu?</p><p>(c) &nbsp; Taja maumbo ambayo ni duara.</p><p>(d) &nbsp; Tengeneza maumbo yaliyoainishwa kwa herufi a, b, d, e na f kwa kukata karatasi au manila.</p></div></div><div class="book-page105-q"><span>2.</span><div><p>Mchoro ufuatao ni kielelezo cha nyumba iliyotengenezwa kwa maumbo bapa. Chora maumbo bapa yote yaliyopo kwenye mchoro.</p><img class="book-page105-house" src="images/pg111_im001_transparent.png" alt="Nyumba iliyotengenezwa kwa maumbo bapa"></div></div></div></section>`;
  };

  const renderPage106 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-106 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg112_sec001"><div class="book-page106-work"><h1>Kazi ya kufanya 7</h1><p>Kujifunza zaidi kutambua maumbo kwa kutumia masomo ya mtandaoni</p><h2>Maelezo</h2><p>Tumia masomo ya mtandaoni kama vile video na michezo kutambua aina mbalimbali za maumbo bapa na kuyafananisha na vitu halisi vinavyopatikana katika mazingira yako.</p></div><div class="book-page106-reminder"><h1>Jikumbushe</h1><ol><li>Maumbo bapa ni pamoja na mraba, mstatili, pembetatu na heksagoni</li><li>Pande zote za mraba zina urefu ulio sawa. Pande zinazotazamana katika mstatili zina urefu ulio sawa</li><li>Kipande cha mstari huchorwa kwa kuunganisha nukta mbili tofauti</li><li>Mwale una nukta ya kuanzia na unaendelea bila kikomo kwa kuwekewa mshale kuonesha uelekeo</li></ol></div><div class="book-page106-vocab"><h1>Msamiati</h1><dl><dt>Heksagoni</dt><dd>Umbo lenye pembe sita na pande sita zinazofanana.</dd><dt>Mraba</dt><dd>Umbo la pembe nne ambalo pande zake zote zinalingana.</dd><dt>Mstatili</dt><dd>Umbo lenye pembe nne ambalo pande mbili zinazotazamana zina urefu unaolingana.</dd></dl></div></section>`;
  };

  const renderPage107 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-107 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg113_sec001"><div class="book-page107-review"><h1>Zoezi la marudio</h1><div class="book-page107-q"><span>1.</span><p>Chora vipande viwili vya mistari vyenye urefu wa sm 4 na sm 5.</p></div><div class="book-page107-q"><span>2.</span><p>Chora mwale PQ.</p></div><div class="book-page107-q"><span>3.</span><p>Mwale una nukta ngapi za kikomo?</p></div><div class="book-page107-q image"><span>4.</span><div><p>Andika majina ya miale inayopatikana katika mchoro ufuatao.</p><img src="images/pg113_im003_transparent.png" alt="Miale kutoka nukta C"></div></div><div class="book-page107-q image"><span>5.</span><div><p>Umbo lifuatalo lina mistari minyoofu mingapi?</p><img src="images/pg113_im002_transparent.png" alt="Mistari mitatu"></div></div><div class="book-page107-q image"><span>6.</span><div><p>Andika majina ya mistari minyoofu katika mchoro ufuatao.</p><img src="images/pg113_im001_transparent.png" alt="Mchoro wa mistari minyoofu"></div></div><div class="book-page107-q"><span>7.</span><div><p>Maumbo yafuatayo yana pembe ngapi?</p><p>(a) &nbsp; Pembetatu &nbsp;&nbsp;&nbsp; (b) &nbsp; Pentagoni<br>(c) &nbsp; Heksagoni</p></div></div></div></section>`;
  };

  const renderPage108 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const shapes=['pg114_im004_transparent.png','pg114_im005_transparent.png','pg114_im006_transparent.png','pg114_im002_transparent.png'];
    content.className='book-page book-page-108 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg114_sec001"><div class="book-page108-review"><div class="book-page108-q"><span>8.</span><p>Chora maumbo bapa mawili.</p></div><div class="book-page108-q"><span>9.</span><div><p>Katika michoro ifuatayo, maumbo gani siyo mstatili? Andika sababu ya jibu lako.</p><div class="book-page108-shapes">${shapes.map((src,i)=>`<figure><figcaption>(${String.fromCharCode(97+i)})</figcaption><img src="images/${src}" alt="Umbo ${String.fromCharCode(97+i)}"></figure>`).join('')}</div></div></div><div class="book-page108-q"><span>10.</span><div><p>Kuna pembetatu ngapi katika umbo lifuatalo?</p><img class="book-page108-triangle" src="images/pg114_im003_transparent.png" alt="Umbo lenye pembetatu nyingi"></div></div></div></section>`;
  };

  const renderPage109 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-109 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg115_sec001"><div class="book-page109-review"><div class="book-page109-q"><span>11.</span><div><p>Chunguza mchoro ufuatao, kisha jibu maswali yanayofuata.</p><img src="images/pg115_im003_transparent.png" alt="Nyumba yenye maumbo"><p>(a) &nbsp; Kuna vipande vya mistari vingapi katika mchoro?</p><p>(b) &nbsp; Taja majina ya maumbo bapa yanayopatikana katika mchoro.</p></div></div><div class="book-page109-q"><span>12.</span><div><p>Chunguza mchoro ufuatao, kisha jibu maswali yanayofuata:</p><img src="images/pg115_im001_transparent.png" alt="Mchoro wa nukta, vipande, miale na mistari"><p>(a) &nbsp; Taja majina ya nukta.</p><p>(b) &nbsp; Taja majina ya vipande vya mistari.</p><p>(c) &nbsp; Taja majina ya miale.</p><p>(d) &nbsp; Taja majina ya mistari minyoofu.</p></div></div></div></section>`;
  };

  const renderPage110 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-110 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg116_sec001"><header class="book-page110-chapter"><h2>Sura ya Tano</h2><h1>Sehemu</h1></header><div class="book-page110-intro"><h2>Utangulizi</h2><p>Katika sura hii utatumia mgawanyo wa vitu au makundi kujifunza sehemu. Aidha, utajumlisha na kutoa sehemu zenye asili moja. Umahiri utakaoujenga utakusaidia kugawa vitu mbalimbali kama vile dawa, vyakula na fedha, pamoja na kupata jumla au tofauti za sehemu.</p></div><div class="book-page110-copy"><h1>Kutambua sehemu</h1><p>Sehemu ni vipande vinavyounda kitu kizima. Kwa mfano, unapokata chungwa katika vipande na kuwagawia rafiki zako. Kila kipande huitwa sehemu. Sehemu huandikwa kama hivi, <span class="book-fraction"><b>1</b><i>2</i></span>, <span class="book-fraction"><b>1</b><i>3</i></span> au <span class="book-fraction"><b>2</b><i>5</i></span>. Namba ya juu huitwa kiasi na namba ya chini huitwa asili.</p></div><div class="book-page110-work"><h1><b>Kazi ya kufanya 1:</b> Utambuzi wa sehemu</h1><h2>Hatua</h2><ol><li>Andaa kisu, kalamu za rashasha na chungwa au tikitimaji.</li><li>Tumia kisu kukata chungwa au tikitimaji katika vipande vilivyo sawa. Anza kwa kukata chungwa au tikitimaji katika vipande viwili, kisha kata vipande vinne vilivyo sawa.</li><li>Hesabu idadi ya vipande ulivyopata katika hatua ya 2.</li><li>Tumia kalamu ya rashasha kuweka alama katika kila kipande kulingana na sehemu yake.</li><li>Rudia hatua ya 2, 3 na 4 kukata machungwa au tikitimaji katika sehemu tofauti. Mfano robo, theluthi au moja ya tano.</li></ol></div></section>`;
  };

  const renderPage111 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-111 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg117_sec001"><div class="book-example-card book-page111-example"><div class="book-example-label">Mfano wa 1</div><p>Andika kwa numerali sehemu ya kila umbo iliyotiwa kivuli.</p><div class="book-page111-figures">${[1,2,3,4,5,6].map((n,i)=>`<figure><figcaption>(${String.fromCharCode(97+i)})</figcaption><img src="images/pg117_im00${n}_transparent.png" alt="Sehemu ${String.fromCharCode(97+i)}"></figure>`).join('')}</div><h2>Jibu</h2><p class="book-page111-answers">(a) ½ &nbsp;&nbsp; (b) ⅓ &nbsp;&nbsp; (c) ⅔ &nbsp;&nbsp; (d) ⅛ &nbsp;&nbsp; (e) ⁴⁄₄ &nbsp;&nbsp; (f) ⅜</p></div><div class="book-example-card book-page111-example second"><div class="book-example-label">Mfano wa 2</div><p>Mama aliwapa watoto wake watatu maembe kama ifuatavyo: Rashidi alipata maembe 2, Upendo 2 na Likweme 2. Je, maembe aliyopata Rashidi ni sehemu gani ya maembe yote?</p><h2>Njia</h2><p>Rashidi maembe 2<br>Upendo maembe 2<br>Likweme maembe 2<br>Jumla ya maembe: 2 + 2 + 2 = 6<br>Kwa hiyo, Rashidi alipata ²⁄₆ ya maembe yote.</p></div></section>`;
  };

  const renderPage112 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-112 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg118_sec001"><div class="book-exercise-sheet book-page112-exercise"><h1 class="book-exercise-title">Zoezi la 1</h1><div class="book-page112-q"><span>1.</span><div><p>Chora duara, kisha ligawanye na utie kivuli kuonesha sehemu zifuatazo:</p><p>(a) &nbsp; ⅛ &nbsp;&nbsp;&nbsp;&nbsp; (b) &nbsp; ⅔ &nbsp;&nbsp;&nbsp;&nbsp; (c) &nbsp; ¾</p></div></div><div class="book-page112-q"><span>2.</span><p>Kuna ⅓ ngapi katika kitu kizima?</p></div><div class="book-page112-q"><span>3.</span><p>Kuna ⅕ ngapi katika kitu kizima?</p></div><div class="book-page112-q"><span>4.</span><div><p>Musa alikata chungwa katika vipande viwili vilivyo sawa kama ilivyooneshwa kwenye mchoro ufuatao. Alimpa dada yake Neema kipande kimoja. Je, kila mmoja alipata sehemu gani ya chungwa?</p><img src="images/pg118_im001_transparent.png" alt="Musa akimpa Neema nusu ya chungwa"></div></div></div></section>`;
  };

  const renderPage113 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const fr=['2/4','1/3','6/8','3/5','5/12'];
    content.className='book-page book-page-113 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg119_sec001"><div class="book-exercise-sheet book-page113-exercise"><div class="book-page113-q"><span>5.</span><div><p>Tia kivuli katika mchoro (a) hadi (e) kuonesha sehemu husika</p><table><tbody>${[6,4,5,1,3].map((n,i)=>`<tr><td>(${String.fromCharCode(97+i)})</td><td><img src="images/pg119_im00${n}_transparent.png" alt="Mchoro wa sehemu ${fr[i]}"></td><td>${fr[i]}</td></tr>`).join('')}</tbody></table></div></div><div class="book-page113-q"><span>6.</span><div><p>Andika jina la sehemu iliyotiwa kivuli katika michoro (a) hadi (d):</p><div class="book-page113-a"><span>(a)</span><div class="book-page113-circles">● ○ ● ○ ● ● ●</div></div></div></div></div></section>`;
  };

  const renderPage114 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const qs=['Musa aligawanya mche wa sabuni katika sehemu nne zilizo sawa. Alimpa dada yake kipande kimoja. Je, alimpa sehemu gani ya mche huo?','Mbuzi wawili ni sehemu gani ya mbuzi sita?','Kuna maembe manane, kati ya hayo mawili ni mabovu. Maembe mabovu ni sehemu gani ya maembe yote?','Mkulima amechuma mapapai sita anataka kuwagawia watoto wake watatu kwa usawa. Je, kila mtoto atapata sehemu gani ya mapapai yote?','Selemani alikuwa na papai moja. Aliamua agawane papai hilo na rafiki zake wawili katika vipande vilivyo sawa. Je, kila moja alipata sehemu gani ya papai hilo?','Sadiki ana ndizi ishirini. Anataka kuwapa ndizi watoto wake wanne kwa usawa. Je, kila mtoto atapata sehemu gani ya ndizi zote?'];
    content.className='book-page book-page-114 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg120_sec001"><div class="book-exercise-sheet book-page114-exercise"><div class="book-page114-diagrams">${[3,2,1].map((n,i)=>`<figure><figcaption>(${String.fromCharCode(98+i)})</figcaption><img src="images/pg120_im00${n}_transparent.png" alt="Mchoro wa sehemu ${String.fromCharCode(98+i)}"></figure>`).join('')}</div>${qs.map((q,i)=>`<div class="book-page114-q"><span>${i+7}.</span><p>${q}</p></div>`).join('')}</div></section>`;
  };

  const renderPage115 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-115 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg121_sec001"><div class="book-page115-copy"><h1>Kujumlisha sehemu zenye asili moja</h1><p>Ili kuongeza sehemu zenye asili moja, ongeza kiasi tu na asili isibadilike.</p></div><div class="book-example-card book-page115-example"><div class="book-example-label">Mfano wa 1</div><p>Tumia michoro kujibu swali lifuatalo: ¾ + ¼ =</p><h2>Hatua</h2><ol><li>Chora robo tatu ya duara na tia kivuli.</li><li>Andika sehemu iliyotiwa kivuli kwa numerali.</li><li>Chora robo duara na tia kivuli.</li><li>Andika kwa numerali sehemu iliyotiwa kivuli.</li><li>Jumlisha idadi ya sehemu zilizotiwa kivuli kupata umbo la duara.</li><li>Chora na tia kivuli kuonesha jumla ya robo tatu na robo.</li><li>Andika sehemu iliyotiwa kivuli kwa numerali.</li></ol><img src="images/pg121_im001_transparent.png" alt="Mchoro wa kujumlisha robo"><p>Jibu ni duara moja lililotiwa kivuli na kugawanywa katika sehemu nne zilizo sawa. Kujumlisha sehemu zenye asili moja, jumlisha kiasi kama unavyojumlisha namba za kawaida. Asili haibadiliki kwa kuwa sehemu zinaunda kitu kimoja.</p><p>Hivyo, ¾ + ¼ = (3 + 1)/4 = ⁴⁄₄.</p><p>Kwa hiyo, ¾ + ¼ = ⁴⁄₄.</p></div></section>`;
  };

  const renderPage116 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const sums=['⅖ + ⅖ =','⅗ + ⅝ =','¼ + ¼ =','⅗ + ⅖ =','⅕ + ⅖ =','⅝ + ⅛ =','³⁄₁₀ + ⁵⁄₁₀ =','⅐ + ⁵⁄₇ =','½ + ½ =','⅓ + ⅔ ='];
    content.className='book-page book-page-116 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg122_sec001"><div class="book-example-card book-page116-example"><div class="book-example-label">Mfano wa 2</div><p>¹³⁄₂₇ + ⁷⁄₂₇ =</p><h2>Njia</h2><p>Jumlisha namba za kiasi kama unavyojumlisha namba za kawaida, asili haibadiliki.</p><p>Hivyo, ¹³⁄₂₇ + ⁷⁄₂₇ = (13 + 7)/27 = ²⁰⁄₂₇.</p><p>Kwa hiyo, ¹³⁄₂₇ + ⁷⁄₂₇ = ²⁰⁄₂₇.</p></div><div class="book-exercise-sheet book-page116-exercise"><h1 class="book-exercise-title">Zoezi la 2</h1><div class="book-page116-q"><span>1.</span><div><p>Jibu maswali yafuatayo bila kutumia michoro:</p><div class="book-page116-sums">${sums.map((s,i)=>`<p>(${String.fromCharCode(97+i)}) &nbsp; ${s}</p>`).join('')}</div></div></div></div></section>`;
  };

  const renderPage117 = () => {
    const content=document.querySelector('#content');if(!content)return;
    const a=['¼ + ²⁄₄ =','¹⁄₁₅ + ⁶⁄₁₅ =','³⁄₉ + ⁴⁄₉ =','⅗ + ⅗ =','⁰⁄₅ + ⅖ =','⅓ + ⅓ =','⅖ + ⁴⁄₇ =','¹¹⁄₂₀ + ⁷⁄₂₀ =','¹⁄₁₀ + ³⁄₁₀ =','¹⁶⁄₃₅ + ⁹⁄₃₅ ='];
    const b=['²⁄₄ + ⁰⁄₄ =','⅓ + ⅓ =','⅜ + ⅛ =','⅖ + ⅕ =','⁴⁄₆ + ²⁄₆ =','⁵⁄₇ + ⅐ =','²⁄₁₀ + ⁵⁄₁₀ =','⁴⁄₉ + ³⁄₉ =','⁵⁄₁₅ + ⁷⁄₁₅ =','⁶⁄₂₀ + ³⁄₂₀ ='];
    content.className='book-page book-page-117 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg123_sec001"><div class="book-exercise-sheet book-page117-exercise"><div class="book-page117-sums">${a.map((s,i)=>`<p>(${String.fromCharCode(107+i)}) &nbsp; ${s}</p>`).join('')}</div><div class="book-page117-q"><span>2.</span><div><p>Jibu maswali yafuatayo kwa kutumia michoro:</p><div class="book-page117-sums">${b.map((s,i)=>`<p>(${String.fromCharCode(97+i)}) &nbsp; ${s}</p>`).join('')}</div></div></div></div></section>`;
  };

  const renderPage118 = () => {
    const content=document.querySelector('#content');if(!content)return;
    content.className='book-page book-page-118 book-after-page15 book-after-page18 opacity-100 visible';
    content.innerHTML=`<section data-section-id="pg124_sec001"><h1 class="book-page118-title">Mafumbo yenye dhana ya kujumlisha sehemu</h1><div class="book-example-card book-page118-example"><div class="book-example-label">Mfano wa 1</div><p>Yona alijaza maji ³⁄₉ ya pipa na Halima alijaza ²⁄₉ ya pipa hilo. Je, Yona na Halima kwa pamoja walijaza sehemu gani ya pipa hilo?</p><h2>Njia</h2><p>Yona alijaza maji ³⁄₉ ya pipa</p><p>Halima alijaza maji ²⁄₉ ya pipa</p><p>Wote walijaza: ³⁄₉ + ²⁄₉ = (3 + 2)/9 = ⁵⁄₉.</p><p>Kwa hiyo, Yona na Halima walijaza maji ⁵⁄₉ ya pipa hilo.</p></div><div class="book-example-card book-page118-example second"><div class="book-example-label">Mfano wa 2</div><p>Nyumbani kulikuwa na mfuko mmoja wa sukari. Anna alitumia ⅜ ya sukari na Yahaya alitumia ⁴⁄₈ ya sukari katika mfuko huo. Je, jumla walitumia sehemu gani ya sukari?</p><h2>Njia</h2><p>Anna alitumia ⅜ ya sukari na Yahaya alitumia ⁴⁄₈ ya sukari.</p><p>Jumla walitumia: ⅜ + ⁴⁄₈ = (3 + 4)/8 = ⅞.</p><p>Kwa hiyo, walitumia ⅞ ya sukari katika mfuko huo.</p></div></section>`;
  };

  if (page === 22) renderPage16();
  if (page === 23) renderPage17();
  if (page === 24) renderPage18();
  if (page === 25) renderPage19();
  if (page === 26) renderPage20();
  if (page === 27) renderPage21();
  if (page === 28) renderPage22();
  if (page === 29) renderPage23();
  if (page === 30) renderPage24();
  if (page === 31) renderPage25();
  if (page === 32) renderPage26();
  if (page === 33) renderPage27();
  if (page === 34) renderPage28();
  if (page === 35) renderPage29();
  if (page === 36) renderPage30();
  if (page === 37) renderPage31();
  if (page === 38) renderPage32();
  if (page === 39) renderPage33();
  if (page === 40) renderPage34();
  if (page === 41) renderPage35();
  if (page === 42) renderPage36();
  if (page === 43) renderPage37();
  if (page === 44) renderPage38();
  if (page === 45) renderPage39();
  if (page === 46) renderPage40();
  if (page === 47) renderPage41();
  if (page === 48) renderPage42();
  if (page === 49) renderPage43();
  if (page === 50) renderPage44();
  if (page === 51) renderPage45();
  if (page === 52) renderPage46();
  if (page === 53) renderPage47();
  if (page === 54) renderPage48();
  if (page === 55) renderPage49();
  if (page === 56) renderPage50();
  if (page === 57) renderPage51();
  if (page === 58) renderPage52();
  if (page === 59) renderPage53();
  if (page === 60) renderPage54();
  if (page === 61) renderPage55();
  if (page === 62) renderPage56();
  if (page === 63) renderPage57();
  if (page === 64) renderPage58();
  if (page === 65) renderPage59();
  if (page === 66) renderPage60();
  if (page === 67) renderPage61();
  if (page === 68) renderPage62();
  if (page === 69) renderPage63();
  if (page === 70) renderPage64();
  if (page === 71) renderPage65();
  if (page === 72) renderPage66();
  if (page === 73) renderPage67();
  if (page === 74) renderPage68();
  if (page === 75) renderPage69();
  if (page === 76) renderPage70();
  if (page === 77) renderPage71();
  if (page === 78) renderPage72();
  if (page === 79) renderPage73();
  if (page === 80) renderPage74();
  if (page === 81) renderPage75();
  if (page === 82) renderPage76();
  if (page === 83) renderPage77();
  if (page === 84) renderPage78();
  if (page === 85) renderPage79();
  if (page === 86) renderPage80();
  if (page === 87) renderPage81();
  if (page === 88) renderPage82();
  if (page === 89) renderPage83();
  if (page === 90) renderPage84();
  if (page === 91) renderPage85();
  if (page === 92) renderPage86();
  if (page === 93) renderPage87();
  if (page === 94) renderPage88();
  if (page === 95) renderPage89();
  if (page === 96) renderPage90();
  if (page === 97) renderPage91();
  if (page === 98) renderPage92();
  if (page === 99) renderPage93();
  if (page === 100) renderPage94();
  if (page === 101) renderPage95();
  if (page === 102) renderPage96();
  if (page === 103) renderPage97();
  if (page === 104) renderPage98();
  if (page === 105) renderPage99();
  if (page === 106) renderPage100();
  if (page === 107) renderPage101();
  if (page === 108) renderPage102();
  if (page === 109) renderPage103();
  if (page === 110) renderPage104();
  if (page === 111) renderPage105();
  if (page === 112) renderPage106();
  if (page === 113) renderPage107();
  if (page === 114) renderPage108();
  if (page === 115) renderPage109();
  if (page === 116) renderPage110();
  if (page === 117) renderPage111();
  if (page === 118) renderPage112();
  if (page === 119) renderPage113();
  if (page === 120) renderPage114();
  if (page === 121) renderPage115();
  if (page === 122) renderPage116();
  if (page === 123) renderPage117();
  if (page === 124) renderPage118();

  // Fidelity corrections shared by the addition chapter and repeated layouts.
  if (page === 40) {
    document.querySelectorAll('.book-page34-groups figcaption').forEach((caption) => caption.remove());
  }
  if (page === 55) {
    const sum=document.querySelector('.book-page49-sum');
    if(sum) sum.outerHTML='<img class="book-arithmetic-figure book-page49-figure" src="images/pg055_addition_example1_transparent.png" alt="Mchoro wa kujumlisha 3246 na 2312">';
  }
  if (page === 56) {
    const figures=[
      ['.book-page50-cont .book-page50-equation','images/pg056_addition_example2_transparent.png','Mchoro wa kujumlisha 68942 na 30051'],
      ['.book-page50-example .book-page50-equation','images/pg056_addition_example3_transparent.png','Mchoro wa kujumlisha 352411 na 136587']
    ];
    figures.forEach(([selector,src,alt])=>{
      const equation=document.querySelector(selector);
      if(!equation)return;
      const connectors=equation.nextElementSibling;
      equation.outerHTML=`<img class="book-arithmetic-figure" src="${src}" alt="${alt}">`;
      if(connectors?.classList.contains('book-page50-connectors')) connectors.remove();
    });
  }
  if (page === 57) {
    const stack=document.querySelector('.book-page51-stack');
    if(stack) stack.innerHTML='<span>6118</span><span>+ 1211</span><i></i><i></i>';
  }
  if (page === 58) {
    document.querySelectorAll('.book-page52-stack').forEach((stack)=>{
      const blank=stack.querySelector('span:last-child:empty');
      if(blank) blank.outerHTML='<i></i><i></i>';
    });
  }
  [[60,'pg060_addition_regrouping_transparent.png'],[61,'pg061_addition_regrouping_transparent.png'],[62,'pg062_addition_regrouping_transparent.png']].forEach(([target,src])=>{
    if(page!==target)return;
    const equation=document.querySelector(`[class^="book-page${target-6}-equation"]`);
    if(!equation)return;
    const lines=equation.nextElementSibling;
    equation.outerHTML=`<img class="book-arithmetic-figure book-regrouping-figure" src="images/${src}" alt="Mchoro wa kujumlisha kwa kubadili">`;
    if(lines?.className.includes('lines')) lines.remove();
  });
})();
