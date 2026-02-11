const lessons=[
{id:1,title:"Ce Este Trading-ul?",shortTitle:"Introducere",content:`
<h2>🎯 Ce Este Trading-ul?</h2>
<p>Salut, Dhianna! Bine ai venit în lumea trading-ului.</p>
<p>Ca neurochirurg, ești obișnuită cu <strong>precizie</strong>, <strong>decizii rapide sub presiune</strong> și <strong>managementul riscului</strong>. Toate se aplică în trading!</p>
<h3>📖 Definiția</h3>
<p><strong>Trading = A cumpăra și vinde active financiare</strong> pentru a profita de fluctuațiile de preț.</p>
<div class="highlight-box"><strong>Analogie medicală:</strong><br>• Colecționezi date (analizezi chart-ul)<br>• Faci o predicție (intri în trade)<br>• Monitoring post-intervenție (gestionezi poziția)<br>• Știi când să tai pierderea (stop loss)</div>
<h3>🏥 Termeni Cheie</h3>
<ul><li><strong>Long</strong> = Pariezi că prețul va CREȘTE</li><li><strong>Short</strong> = Pariezi că prețul va SCĂDEA</li><li><strong>Leverage</strong> = Împrumuți bani să tranzacționezi mai mult (2x, 5x, 10x...)</li></ul>
<div class="warning-box"><strong>⚠️ Atenție la Leverage!</strong><br>10x leverage = 10% mișcare greșită = PIERZI TOT.<br>Ca începător: <strong>evită leverage mare!</strong></div>
<h3>🌍 Unde Tranzacționăm?</h3>
<ul><li><strong>CEX</strong> (Binance, Bybit) - platforme tradiționale, liquiditate mare</li><li><strong>DEX</strong> (Uniswap) - direct pe blockchain, anonim</li><li><strong>On-chain</strong> - tracking wallet-uri smart money</li></ul>
`,quiz:{question:"Ce se întâmplă dacă deschizi LONG cu 10x leverage și prețul scade 10%?",options:["Pierzi 10%","Pierzi 100% (liquidated)","Primești bani înapoi","Aștepți să crească"],correct:1}},
{id:2,title:"Candlesticks",shortTitle:"Candlesticks",content:`
<h2>🕯️ Candlesticks: Limbajul Prețului</h2>
<p>Chart-urile sunt ca EKG-ul pieței.</p>
<h3>🎂 Structura</h3>
<ul><li><strong>Wick (Fitil)</strong> = Cel mai înalt/jos preț în perioadă</li><li><strong>Body (Corp)</strong> = Preț deschidere vs închidere</li></ul>
<div class="highlight-box"><strong>🟢 Verde (Bullish):</strong> Prețul a crescut<br><strong>🔴 Roșu (Bearish):</strong> Prețul a scăzut</div>
<h3>📊 Timeframes</h3>
<ul><li><strong>1m/5m</strong> = Scalping - NU pentru începători</li><li><strong>15m/1H</strong> = Intraday</li><li><strong>4H/Daily</strong> = Swing trading - RECOMANDAT</li><li><strong>Weekly</strong> = Long-term</li></ul>
<div class="tip-box"><strong>💡 Regula lui Alex:</strong> Verifică MULTIPLE timeframes! Un setup bun pe 1H dar prost pe Daily = capcană.</div>
<h3>🔨 Pattern-uri</h3>
<ul><li><strong>Doji</strong> = Indecizie, posibil reversal</li><li><strong>Hammer</strong> = Posibil bottom</li><li><strong>Engulfing</strong> = Schimbare trend puternică</li></ul>
`,quiz:{question:"Ce indică un candle cu wick lung în jos și corp mic sus?",options:["Creștere puternică","Posibil bottom","Timp de vânzare","Nimic special"],correct:1}},
{id:3,title:"Support și Resistance",shortTitle:"S/R",content:`
<h2>🧱 Support și Resistance</h2>
<p>Cele mai importante concepte în technical analysis.</p>
<h3>📉 Support (Suport)</h3>
<p>Nivel unde <strong>cumpărătorii</strong> opresc scăderea. Ca un <strong>podea</strong>.</p>
<h3>📈 Resistance (Rezistență)</h3>
<p>Nivel unde <strong>vânzătorii</strong> opresc creșterea. Ca un <strong>plafon</strong>.</p>
<div class="highlight-box"><strong>🔄 Rolurile se inversează!</strong><br>Resistance spart → devine support<br>Support spart → devine resistance</div>
<h3>🎯 Cum Identificăm?</h3>
<ul><li>Zone cu multiple atingeri</li><li>Round numbers ($50k, $100k)</li><li>Previous highs/lows</li><li>Volum mare = S/R puternic</li></ul>
<div class="example-trade win"><h4>📗 Exemplu Real</h4>BTC testează $62k (a 4-a oară), volum crește. Long la $62.2k cu SL sub $61.5k. BTC sare la $65k. Profit 45% cu 10x.</div>
`,quiz:{question:"BTC a fost blocat la $70k de 3 ori. A 4-a oară rupe și rămâne deasupra. Ce devine $70k?",options:["Nu mai contează","Resistance mai puternic","Support","Vinzi tot"],correct:2}},
{id:4,title:"Trend și Trendlines",shortTitle:"Trend",content:`
<h2>📈 Trend-ul Este Prietenul Tău</h2>
<p>Regula #1: <strong>"The trend is your friend"</strong>. Nu lupta contra trend-ului!</p>
<h3>🔄 Tipuri de Trend</h3>
<ul><li><strong>Uptrend (Bullish)</strong> = High-uri mai înalte + Low-uri mai înalte → Cumperi dip-uri</li><li><strong>Downtrend (Bearish)</strong> = Low-uri mai joase + High-uri mai joase → Short-ezi bounce-uri sau stai pe margine</li><li><strong>Range</strong> = Oscilează între S/R → Cumperi support, vinzi resistance</li></ul>
<div class="warning-box"><strong>⚠️ Trendline Break:</strong> Când prețul sparge trendline-ul convingător, trendul s-ar putea schimba.</div>
<div class="example-trade loss"><h4>📕 Povestea unei Pierderi</h4>ETH în downtrend clar. Am văzut "oportunitate" de long, convins că "a căzut destul". ETH a căzut încă 15%. <strong>Lesson:</strong> Nu ghici bottom-ul în downtrend!</div>
`,quiz:{question:"ETH face high-uri și low-uri din ce în ce mai joase. Ce trend e?",options:["Uptrend","Downtrend","Sideways","Nu știu"],correct:1}},
{id:5,title:"Risk Management #1",shortTitle:"Risk Mgmt",content:`
<h2>🛡️ Risk Management: Supraviețuirea</h2>
<p><strong>CEL MAI IMPORTANT</strong> modul. Fără RM = gambling.</p>
<h3>📏 Regula 1%</h3>
<p><strong>Niciodată nu riști mai mult de 1-2% din capital pe trade.</strong></p>
<div class="highlight-box">Capital: $10,000 | Risk: 1% = $100<br>10 losing trades la rând = pierzi doar $1,000 (10%), nu tot.</div>
<h3>🧮 Position Sizing</h3>
<div class="highlight-box">Position Size = (Capital × Risk%) ÷ (Entry - SL)</div>
<p>Ex: $10k capital, 1% risk, entry $65k, SL $63k (dif=$2k)<br>Position = $100 ÷ $2,000 = 0.05 BTC (~$3,250)</p>
<h3>🛑 Stop Loss (SL)</h3>
<ul><li>Pune-l la nivel care invalidează setup-ul</li><li>NU muta SL când pierzi!</li><li>Fără SL = gambling</li></ul>
<h3>🎯 Take Profit (TP)</h3>
<ul><li>Risk/Reward minim 1:2 (riști $100, câștigi $200)</li><li>TP1 (50% poziție) la 1:2</li><li>TP2 (25%) la 1:3</li><li>TP3 (25%) cu trailing stop</li></ul>
`,quiz:{question:"Ai $5,000 capital. Cât riști maxim per trade (regula 1%)?",options:["$500","$1,000","$50","Tot"],correct:2}},
{id:6,title:"Risk Management #2 + Leverage",shortTitle:"Leverage",content:`
<h2>⚡ Leverage: Cuțit cu Două Tăișuri</h2>
<div class="highlight-box">Fără leverage: $1,000 în BTC, +10% = $100 profit<br>Cu 10x: $1,000 controlează $10k, +10% = $1,000 profit (100%)</div>
<h3>💀 Liquidation</h3>
<div class="highlight-box"><strong>Nivele Liquidation:</strong><br>2x = 50% | 5x = 20% | 10x = 10% | 50x = 2% | 100x = 1%</div>
<div class="warning-box"><strong>Regula de Aur:</strong> Începători = MAX 2-3x leverage. 50x+ = casino.</div>
<h3>💸 Funding Rates</h3>
<ul><li>Funding pozitiv = Long-urile plătesc short-urilor (bullish)</li><li>Funding negativ = Short-urile plătesc long-urilor (bearish)</li></ul>
<div class="tip-box">Funding extrem pozitiv = posibil top | Funding extrem negativ = posibil bottom</div>
<div class="example-trade loss"><h4>📕 Pierderea de 50k</h4>Am short-at un coin care pompa. Leverage mare, NU am respectat SL. Am mutat mental SL-ul mereu mai sus. Nu s-a oprit. -50k. <strong>Lesson:</strong> Definește invalidarea ÎNAINTE să intri!</div>
`,quiz:{question:"20x leverage = liquidation la cât % mișcare împotriva?",options:["50%","20%","5%","1%"],correct:2}},
{id:7,title:"Psychology",shortTitle:"Psychology",content:`
<h2>🧠 Psihologia Trading-ului</h2>
<p>20% strategy, 80% psychology.</p>
<h3>😰 FOMO</h3>
<p>Teama că "toată lumea câștigă". Simptome: cumperi când vezi +50%, uiți de RM, cumperi top-ul.</p>
<h3>😡 Revenge Trading</h3>
<div class="warning-box">După un loss emoțional, fă pauză. <strong>3 losses = stop trading for the day.</strong></div>
<h3>😊 Euphoria (După Big Win)</h3>
<p>Te simți invincibil. Mărești poziții, ignori regulile.</p>
<div class="example-trade win"><h4>📗 Win de 180k</h4>Am ținut un coin de $0.50 la $5 (10x). Am avut TP-uri în trepte. După win, am crezut că sunt geniu, am mărit următoarele 3 trades = le-am pierdut pe toate. <strong>Lesson:</strong> Big wins nu te fac mai bun. Respectă procesul.</div>
<h3>🎯 Disciplina</h3>
<ol><li>Trading Journal - scrie FIECARE trade</li><li>Trading Plan - reguli înainte de sesiune</li><li>Rutină de dimineață - NU trade imediat după trezire</li><li>Poziții pre-definite - nu improviza</li></ol>
<div class="tip-box"><strong>Cărți:</strong> Thinking in Bets | Alpha Trader | The Hour Between Dog and Wolf</div>
`,quiz:{question:"Ai pierdut 3 trades azi. Ce faci?",options:["Mărești poziția","Pauză, nu tradezi","Schimbi strategia","Te enervezi"],correct:1}},
{id:8,title:"Indicators",shortTitle:"Indicators",content:`
<h2>📊 Indicators: Unelte, Nu Sfinte Grale</h2>
<div class="warning-box">Indicators sunt <strong>lagging</strong> (bazate pe istoric). Nu prezic viitorul!</div>
<h3>📈 RSI (0-100)</h3>
<ul><li>RSI > 70 = Overbought</li><li>RSI < 30 = Oversold</li><li>Divergență = Preț high nou, RSI nu = slăbiciune</li></ul>
<div class="tip-box">În bull market puternic, RSI poate sta >70 săptămâni. Contextul contează!</div>
<h3>🌊 Volume</h3>
<ul><li>Breakout + volum mare = valid</li><li>Breakout + volum mic = fakeout/capcană</li><li>Drop + volum exploziv = posibil bottom</li></ul>
<h3>📐 Moving Averages</h3>
<ul><li>SMA 200 = Trend macro</li><li>SMA 50 = Trend mediu</li><li>EMA 20 = Trend scurt (mai rapid)</li></ul>
<div class="highlight-box"><strong>Golden Cross:</strong> MA50 taie MA200 de jos = bullish<br><strong>Death Cross:</strong> MA50 taie MA200 de sus = bearish</div>
<div class="highlight-box" style="margin-top:30px"><strong>🎉 Felicitări! Ai terminat cursul!</strong><br><br>Start small, manage risk, respect the process. 💰</div>
`,quiz:{question:"BTC breakout la $70k dar volum scăzut. Ce urmează?",options:["Creștere rapidă","Fakeout, revine sub","Volumul nu contează","Cumperi imediat"],correct:1}}];
