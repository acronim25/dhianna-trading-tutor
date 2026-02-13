let current=1,completed=JSON.parse(localStorage.getItem('dtt_c')||'[]'),quizProgress=JSON.parse(localStorage.getItem('dtt_quiz')||'{}');
const navEl=document.getElementById('lessonNav'),contentEl=document.getElementById('mainContent'),fill=document.getElementById('progressFill'),text=document.getElementById('progressText');

// Discord Webhook pentru notificări
const DISCORD_WEBHOOK='https://discord.com/api/webhooks/1471215105503920153/nsbwhEQOTKVHF1NOvCK6nErAgh95gacaJqhVYIBY2u3s-D5J2Ozu5XWgDYCpFHnIEWzO';

// Capitole blocate - doar primul e deschis
const UNLOCKED_LESSONS=[1,2,3,4];

function init(){renderNav();load(current);updateP();}

async function sendDiscordNotification(data){
try{
await fetch(DISCORD_WEBHOOK,{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify(data)
});
}catch(e){console.log('Webhook error:',e);}
}

function renderNav(){navEl.innerHTML=lessons.map(l=>{
const done=completed.includes(l.id),active=current===l.id,unlocked=UNLOCKED_LESSONS.includes(l.id);
if(!unlocked){
return`<button class="lesson-btn locked" disabled title="Disponibil în curând"><div class="lesson-number">Lecția ${l.id}</div><div class="lesson-title-short">🔒 ${l.shortTitle}</div><div style="font-size:0.65rem;color:#666;margin-top:4px;">SOON</div></button>`;
}
return`<button class="lesson-btn ${active?'active':''} ${done?'completed':''}" onclick="go(${l.id})"><div class="lesson-number">Lecția ${l.id}</div><div class="lesson-title-short">${l.shortTitle}</div></button>`;
}).join('');}

function go(id){if(!UNLOCKED_LESSONS.includes(id))return;current=id;renderNav();load(id);window.scrollTo({top:0,behavior:'smooth'});}

function load(id){
if(!UNLOCKED_LESSONS.includes(id))return;
const l=lessons.find(x=>x.id===id),prev=lessons.find(x=>x.id===id-1&&UNLOCKED_LESSONS.includes(x.id)),next=lessons.find(x=>x.id===id+1&&UNLOCKED_LESSONS.includes(x.id)),done=completed.includes(id);
let quizHtml='';
if(l.quiz){
if(Array.isArray(l.quiz.question)){
const saved=quizProgress[id]||{currentQ:0,answers:[],completed:false,sentNotification:false};
if(saved.completed){
const correct=l.quiz.correct;
let score=0;
saved.answers.forEach((ans,idx)=>{if(ans===correct[idx])score++;});

// Send Discord notification if not already sent
if(!saved.sentNotification){
const timestamp=new Date().toLocaleString('ro-RO');
const details=l.quiz.question.map((q,idx)=>{
const userAns=saved.answers[idx];
const correctAns=correct[idx];
const isCorrect=userAns===correctAns;
return`**Î${idx+1}:** ${q.substring(0,80)}...\n✏️ Răspuns: ${l.quiz.options[idx][userAns]} ${isCorrect?'✅':'❌'}\n✓ Corect: ${l.quiz.options[idx][correctAns]}`;
}).join('\n\n');

sendDiscordNotification({
content:'@everyone 🎯 **Dhianna a terminat Quiz-ul!**',
embeds:[{
title:`📚 ${l.title}`,
description:`**Scor: ${score}/${l.quiz.question.length}** ${score>=7?'🎉 Excelent!':'📚 Mai studiază!'}`,
color:score>=7?0x00ff88:0xff6600,
fields:[
{name:'✅ Corecte',value:`${score}`,inline:true},
{name:'❌ Greșite',value:`${l.quiz.question.length-score}`,inline:true},
{name:'📊 Procentaj',value:`${Math.round((score/l.quiz.question.length)*100)}%`,inline:true},
{name:'🕐 Data',value:timestamp,inline:true}
],
footer:{text:'Dhianna Trading Tutor - Monitorizare Quiz'}
}]
});

// Also send detailed answers as second message
setTimeout(()=>{
sendDiscordNotification({
content:`📋 **Detalii Răspunsuri:**\n\n${details}`
});
},500);

// Mark as sent
quizProgress[id].sentNotification=true;
localStorage.setItem('dtt_quiz',JSON.stringify(quizProgress));
}

quizHtml=`<div class="quiz-container"><h3>📝 Quiz Completat!</h3><div class="quiz-result ${score>=7?'pass':'fail'}">Scor: ${score}/${l.quiz.question.length} ${score>=7?'✅ Excelent!':'❶ Mai încearcă!'}</div><div style="margin-top:20px;">${l.quiz.question.map((q,idx)=>{
const userAns=saved.answers[idx];
const correctAns=correct[idx];
const isCorrect=userAns===correctAns;
return`<div style="margin:15px 0;padding:15px;background:${isCorrect?'rgba(0,255,136,0.1)':'rgba(255,0,68,0.1)'};border-left:4px solid ${isCorrect?'#00ff88':'#ff0044'};border-radius:0 8px 8px 0;"><strong>Întrebarea ${idx+1}:</strong> ${q}<br><span style="color:${isCorrect?'#00ff88':'#ff0044'}">Răspunsul tău: ${l.quiz.options[idx][userAns]} ${isCorrect?'✓':'✗'}</span><br><span style="color:#00ff88">Corect: ${l.quiz.options[idx][correctAns]}</span></div>`;
}).join('')}<button class="btn btn-primary" onclick="resetQuiz(${id})" style="margin-top:20px;">Reia Quiz</button></div></div>`;
}else{
const qIndex=saved.currentQ;
const qText=l.quiz.question[qIndex];
const opts=l.quiz.options[qIndex];
const answered=saved.answers[qIndex]!==undefined;
quizHtml=`<div class="quiz-container" id="quiz-${id}"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;"><h3>📝 Întrebarea ${qIndex+1}/${l.quiz.question.length}</h3><span style="color:var(--text-dim);font-size:0.9rem;">${qIndex+1} din ${l.quiz.question.length}</span></div><p class="quiz-question" style="font-size:1.2rem;margin-bottom:25px;">${qText}</p><div class="quiz-options">${opts.map((opt,optIdx)=>{
if(answered){
const isCorrect=optIdx===l.quiz.correct[qIndex];
const isSelected=optIdx===saved.answers[qIndex];
return`<div class="quiz-option ${isCorrect?'correct':isSelected?'wrong':''}">${opt} ${isCorrect?'✅':isSelected?'❌':''}</div>`;
}
return`<div class="quiz-option" onclick="answerQ(${id},${qIndex},${optIdx})">${opt}</div>`;
}).join('')}</div>${answered?`<div class="quiz-result ${saved.answers[qIndex]===l.quiz.correct[qIndex]?'pass':'fail'}">${saved.answers[qIndex]===l.quiz.correct[qIndex]?'✅ Corect!':'❌ Greșit! Răspunsul corect este marcat.'}</div><button class="btn btn-primary" onclick="nextQ(${id})" style="margin-top:20px;width:100%;">${qIndex+1<l.quiz.question.length?'Următoarea Întrebare →':'Vezi Rezultate'}</button>`:''}</div>`;
}
}else{
const result=quizProgress[id];
if(result!==undefined){
const ok=result===l.quiz.correct;
quizHtml=`<div class="quiz-container"><h3>📝 Quiz</h3><p class="quiz-question">${l.quiz.question}</p><div class="quiz-options">${l.quiz.options.map((o,i)=>`<div class="quiz-option ${i===l.quiz.correct?'correct':i===result?'wrong':''}">${o}${i===l.quiz.correct?'✅':i===result?'❌':''}</div>`).join('')}</div><div class="quiz-result ${ok?'pass':'fail'}">${ok?'✅ Corect!':'❌ Aproape!'}</div></div>`;
}else{
quizHtml=`<div class="quiz-container" id="quiz-${id}"><h3>📝 Quiz</h3><p class="quiz-question">${l.quiz.question}</p><div class="quiz-options">${l.quiz.options.map((o,i)=>`<div class="quiz-option" onclick="answer(${id},${i})">${o}</div>`).join('')}</div></div>`;
}
}
}

contentEl.innerHTML=`<article class="lesson-content">${l.content}${quizHtml}<div class="nav-buttons"><button class="btn btn-secondary" ${!prev?'disabled':''} onclick="go(${id-1})">← Anterioară</button><button class="btn btn-primary" id="doneBtn" ${done?'disabled':''} onclick="mark(${id})">${done?'✓ Completat':'Marchează Terminat'}</button><button class="btn btn-secondary" ${!next?'disabled':''} onclick="go(${id+1})">Următoare →</button></div></article>`;
}

function answerQ(id,qIdx,ans){
const l=lessons.find(x=>x.id===id);
if(!quizProgress[id])quizProgress[id]={currentQ:0,answers:[],completed:false,sentNotification:false};
quizProgress[id].answers[qIdx]=ans;
localStorage.setItem('dtt_quiz',JSON.stringify(quizProgress));
load(id);
}

function nextQ(id){
const l=lessons.find(x=>x.id===id);
if(!quizProgress[id])quizProgress[id]={currentQ:0,answers:[],completed:false,sentNotification:false};
quizProgress[id].currentQ++;
if(quizProgress[id].currentQ>=l.quiz.question.length){
quizProgress[id].completed=true;
let allCorrect=true;
quizProgress[id].answers.forEach((ans,idx)=>{
if(ans!==l.quiz.correct[idx])allCorrect=false;
});
if(allCorrect&&!completed.includes(id))mark(id,false);
}
localStorage.setItem('dtt_quiz',JSON.stringify(quizProgress));
load(id);
}

function resetQuiz(id){
delete quizProgress[id];
localStorage.setItem('dtt_quiz',JSON.stringify(quizProgress));
load(id);
}

function answer(id,ans){
const l=lessons.find(x=>x.id===id);
if(!Array.isArray(l.quiz.question)){
quizProgress[id]=ans;
localStorage.setItem('dtt_quiz',JSON.stringify(quizProgress));
if(ans===l.quiz.correct&&!completed.includes(id))mark(id,false);
load(id);
}
}

function mark(id,reload=true){
if(!completed.includes(id)){completed.push(id);completed.sort((a,b)=>a-b);localStorage.setItem('dtt_c',JSON.stringify(completed));updateP();renderNav();if(reload){const btn=document.getElementById('doneBtn');if(btn){btn.textContent='✓ Completat';btn.disabled=true;}}if(completed.length===lessons.length)setTimeout(()=>alert('🎉 Felicitări! Ai completat toate lecțiile!'),300);}}

function updateP(){const pct=(completed.length/lessons.length)*100;fill.style.width=`${pct}%`;text.textContent=`${Math.round(pct)}% (${completed.length}/${lessons.length})`;}

document.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'&&current>1)go(current-1);if(e.key==='ArrowRight'&&current<lessons.length)go(current+1);});

init();
