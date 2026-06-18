const scenes = ["boot","entry","choice","memory","core","final"];
let current = "boot";
let path = null;
let memoryClicks = 0;
let coreClicks = 0;

function goScene(id){
  document.querySelectorAll(".scene").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  current = id;

  if(id === "memory") initMemory();
  if(id === "core") initCore();
  if(id === "final") showFinal();
}

const bootLines = [
  "booting emotional system...",
  "loading memory fragments...",
  "user detected: her",
  "status: deeply important",
  "initializing..."
];

let i = 0;
function typeBoot(){
  if(i < bootLines.length){
    document.getElementById("bootText").innerText += bootLines[i] + "\n";
    i++;
    setTimeout(typeBoot, 600);
  } else {
    setTimeout(()=>goScene("entry"),1000);
  }
}
typeBoot();

function setPath(p){
  path = p;
  goScene(p);
}

function initMemory(){
  const container = document.getElementById("memoryCards");
  if(container.children.length) return;

  const texts = [
    "ты появилась неожиданно",
    "и система изменилась",
    "это не ошибка",
    "это чувство",
    "ты остаёшься в памяти"
  ];

  texts.forEach(t=>{
    let c = document.createElement("div");
    c.className = "card";
    c.innerText = t;

    c.style.top = Math.random()*80 + "%";
    c.style.left = Math.random()*80 + "%";

    c.onclick = ()=>{
      memoryClicks++;
      c.innerText = "memory unlocked 💗";
      gsap.to(c,{scale:1.2,duration:0.3});
    };

    container.appendChild(c);
  });

  setTimeout(()=>{
    if(memoryClicks >= 2){
      goScene("final");
    }
  }, 5000);
}

function initCore(){
  const core = document.getElementById("coreOrb");

  core.onclick = ()=>{
    coreClicks++;

    gsap.to(core,{
      scale:1 + coreClicks*0.15,
      duration:0.3
    });

    if(coreClicks > 5){
      goScene("final");
    }
  };
}

function showFinal(){
  const el = document.getElementById("finalText");

  if(path === "memory"){
    el.innerText =
`ты выбрала память.

и система это запомнила.

с днём рождения 💗

ты — часть этого мира теперь.`;
  }

  if(path === "core"){
    el.innerText =
`ты выбрала ядро.

система перегрелась от тебя.

и, честно...
ей это понравилось.

с днём рождения 💗`;
  }
}
