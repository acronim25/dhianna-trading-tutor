let current=1,completed=JSON.parse(localStorage.getItem('dtt_c')||'[]'),quiz=JSON.parse(localStorage.getItem('dtt_q')||'{}');
const nav=document.getElementById('lessonNav'),content=document.getElementById('mainContent'),fill=document.getElementById('progressFill'),text=document.getElementById('progressText');
function init(){renderNav();load(current);updateP();}
function renderNav(){nav.innerHTML=lessons.map(l=>{
const d=completed.includes(l.id),a=current===l.id;
return`<button class="lesson-btn ${a?'active':''} ${d?'completed':''}" onclick="go(${l.id})"><div class="lesson-number">Lecția ${l.id}</div><div class="lesson-title-short">${l.shortTitle}</div></button>`;
}).join('');}
function go(id){current=id;renderNav();load(id);window.scrollTo({top:0,behavior:'smooth'});}
function load(id){
const l=lessons.find(x=>x.id===id),p=lessons.find(x=>x.id===id-1),n=lessons.find(x=>x.id===id+1),d=completed.includes(id);
content.innerHTML=`<article class="lesson-content">${l.content}${l.quiz?renderQ(l.quiz,id):''}<div class="nav-buttons"><button class="btn btn-secondary" ${!p?'disabled':''} onclick="go(${id-1})">← Anterioară</button><button class="btn btn-primary" id="doneBtn" ${d?'disabled':''} onclick="mark(${id})">${d?'✓ Completat':'Marchează Terminat'}</button><button class="btn btn-secondary" ${!n?'disabled':''} onclick="go(${id+1})">Următoare →</button></div></article>`;
}
function renderQ(q,id){
const r=quiz[id];
if(r!==undefined){const ok=r===q.correct;return`<div class="quiz-container"><h3>📝 Quiz</h3><p class="quiz-question">${q.question}</p><div class="quiz-options">${q.options.map((o,i)=>`<div class="quiz-option ${i===q.correct?'correct':i===r?'wrong':''}">${o}${i===q.correct?'✅':i===r?'❌':''}</div>`).join('')}</div><div class="quiz-result ${ok?'pass':'fail'}">${ok?'✅ Corect!':'❌ Aproape!'}</div></div>`;}
return`<div class="quiz-container" id="q-${id}"><h3>📝 Quiz</h3><p class="quiz-question">${q.question}</p><div class="quiz-options">${q.options.map((o,i)=>`<div class="quiz-option" onclick="ans(${id},${i})">${o}</div>`).join('')}</div></div>`;
}
function ans(id,a){
const l=lessons.find(x=>x.id===id),ok=a===l.quiz.correct;
quiz[id]=a;localStorage.setItem('dtt_q',JSON.stringify(quiz));
document.getElementById(`q-${id}`).innerHTML=`<h3>📝 Quiz</h3><p class="quiz-question">${l.quiz.question}</p><div class="quiz-options">${l.quiz.options.map((o,i)=>`<div class="quiz-option ${i===l.quiz.correct?'correct':i===a?'wrong':''}">${o}${i===l.quiz.correct?'✅':i===a?'❌':''}</div>`).join('')}</div><div class="quiz-result ${ok?'pass':'fail'}">${ok?'✅ Corect!':'❌ Aproape!'}</div>`;
if(ok&&!completed.includes(id))mark(id,false);
}
function mark(id,reload=true){
if(!completed.includes(id)){completed.push(id);completed.sort((a,b)=>a-b);localStorage.setItem('dtt_c',JSON.stringify(completed));updateP();renderNav();
if(reload){const b=document.getElementById('doneBtn');if(b){b.textContent='✓ Completat';b.disabled=true;}}
if(completed.length===lessons.length)setTimeout(()=>alert('🎉 Felicitări! Ai completat toate lecțiile!'),300);
}}
function updateP(){const p=(completed.length/lessons.length)*100;fill.style.width=`${p}%`;text.textContent=`${Math.round(p)}% (${completed.length}/${lessons.length})`;}
document.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'&&current>1)go(current-1);if(e.key==='ArrowRight'&&current<lessons.length)go(current+1);});
init();
