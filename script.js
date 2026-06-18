const msgs=[
'Привет, Настя ❤️','Сегодня доступ открыт только для тебя.',
'Обычного поздравления сегодня не будет :)',
'Спасибо, что ты есть. С днем рождения! 🎉',
'Настоящий подарок ждет тебя при встрече 🎁'
];
let i=0;
function type(txt){let e=document.getElementById('t');e.textContent='';let j=0;let id=setInterval(()=>{e.textContent+=txt[j++]||'';if(j>txt.length)clearInterval(id)},35)}
type('Подключение... Поиск именинницы...');
function next(){const c=document.getElementById('content'); if(i<msgs.length){c.className='fade'; c.innerHTML='<p>'+msgs[i++]+'</p>';} else {c.innerHTML='<h2>❤️ С Днем рождения! ❤️</h2><p>Замени этот текст, добавь свои фото, музыку и видео.</p>';}}
