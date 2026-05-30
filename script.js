/* ---------- Cursor ---------- */
const dot  = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
(function animRing(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing);})();

/* ---------- Navbar ---------- */
const nav = document.getElementById('navbar');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>60);});

const ham  = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');
ham.addEventListener('click',()=>{ham.classList.toggle('open');menu.classList.toggle('open');});
function closeMenu(){ham.classList.remove('open');menu.classList.remove('open');}

/* ---------- Particles ---------- */
const cvs = document.getElementById('particleCanvas');
const ctx = cvs.getContext('2d');
let W,H,pts=[];
function resize(){W=cvs.width=innerWidth;H=cvs.height=innerHeight;}
resize(); window.addEventListener('resize',resize);
for(let i=0;i<90;i++){
  pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.5+.5,col:['rgba(0,245,255','rgba(122,0,255','rgba(0,255,204'][Math.floor(Math.random()*3)]});
}
function drawParticles(){
  ctx.clearRect(0,0,W,H);
  pts.forEach(p=>{
    p.x+=p.vx;p.y+=p.vy;
    if(p.x<0||p.x>W)p.vx*=-1;
    if(p.y<0||p.y>H)p.vy*=-1;
    ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle=p.col+',.7)';ctx.shadowBlur=6;ctx.shadowColor=p.col+',.5)';ctx.fill();
  });
  for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
    const d=Math.hypot(pts[i].x-pts[j].x,pts[i].y-pts[j].y);
    if(d<110){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle=`rgba(0,245,255,${.18*(1-d/110)})`;ctx.lineWidth=.6;ctx.stroke();}
  }
  requestAnimationFrame(drawParticles);
}
drawParticles();

/* ---------- Typing Effect ---------- */
const phrases=['Neural Intelligence','Cyber Defense','AI Fusion','Quantum Security'];
let pi=0,ci=0,del=false;
const typedEl=document.getElementById('typed-text');
function type(){
  const cur=phrases[pi];
  if(!del){typedEl.textContent=cur.slice(0,++ci);if(ci===cur.length){del=true;setTimeout(type,1800);return;}}
  else{typedEl.textContent=cur.slice(0,--ci);if(ci===0){del=false;pi=(pi+1)%phrases.length;}}
  setTimeout(type,del?60:100);
}
setTimeout(type,800);

/* ---------- Scroll Reveal ---------- */
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');}});
},{threshold:.12});
document.querySelectorAll('.reveal,.feat-card,.tech-panel,.about-visual,.about-text').forEach(el=>observer.observe(el));

/* ---------- Feature Card Tilt ---------- */
document.querySelectorAll('.feat-card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    card.style.setProperty('--mx',(e.clientX-r.left)/r.width*100+'%');
    card.style.setProperty('--my',(e.clientY-r.top)/r.height*100+'%');
  });
});

/* ---------- Progress Bars ---------- */
const progObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      ['p1','p2','p3','p4'].forEach(id=>{
        const bar=document.getElementById(id);
        const valEl=document.getElementById(id+'-val');
        const target=+bar.dataset.target;
        let cur=0;
        bar.style.width=target+'%';
        const iv=setInterval(()=>{if(cur>=target){clearInterval(iv);return;}cur++;valEl.textContent=cur+'%';},14);
      });
      progObs.disconnect();
    }
  });
},{threshold:.3});
const pp=document.getElementById('progressPanel');
if(pp) progObs.observe(pp);

/* ---------- Log Stream ---------- */
const logEl=document.getElementById('logStream');
const logs=[
  {t:'INFO', m:'Neural anomaly scan initiated'},
  {t:'OK',   m:'Perimeter firewall: active'},
  {t:'WARN', m:'Port scan detected from 203.45.x.x'},
  {t:'OK',   m:'Quantum key rotation complete'},
  {t:'INFO', m:'Behavioral model updated v4.7.2'},
  {t:'OK',   m:'Threat neutralized in 0.38ms'},
  {t:'INFO', m:'24,391 events processed'},
  {t:'WARN', m:'Anomalous traffic pattern flagged'},
  {t:'OK',   m:'Honeypot trap deployed'},
  {t:'INFO', m:'Federated sync: 12,048 nodes'},
];
let li=0;
function addLog(){
  const l=logs[li%logs.length];
  const cls={'OK':'log-type-ok','WARN':'log-type-warn','INFO':'log-type-info'}[l.t];
  const now=new Date();
  const ts=now.toTimeString().slice(0,8);
  const div=document.createElement('div');
  div.className='log-line';
  div.innerHTML=`<span class="log-time">${ts}</span><span class="${cls}">[${l.t}]</span><span class="log-msg">${l.m}</span>`;
  logEl.appendChild(div);
  if(logEl.children.length>7)logEl.removeChild(logEl.firstChild);
  li++;
}
addLog();
setInterval(addLog,1800);

/* ---------- Network Canvas ---------- */
const nc=document.getElementById('networkCanvas');
if(nc){
  const nx=nc.getContext('2d');
  const nw=nc.width,nh=nc.height;
  const nodes=[];
  for(let i=0;i<18;i++){
    nodes.push({x:Math.random()*nw,y:Math.random()*nh,vx:(Math.random()-.5)*.6,vy:(Math.random()-.5)*.6,r:Math.random()*3+2});
  }
  function drawNet(){
    nx.clearRect(0,0,nw,nh);
    nx.fillStyle='rgba(15,23,42,0)';nx.fillRect(0,0,nw,nh);
    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const d=Math.hypot(nodes[i].x-nodes[j].x,nodes[i].y-nodes[j].y);
        if(d<90){nx.beginPath();nx.moveTo(nodes[i].x,nodes[i].y);nx.lineTo(nodes[j].x,nodes[j].y);nx.strokeStyle=`rgba(0,245,255,${.3*(1-d/90)})`;nx.lineWidth=.8;nx.stroke();}
      }
    }
    nodes.forEach(n=>{
      n.x+=n.vx;n.y+=n.vy;
      if(n.x<0||n.x>nw)n.vx*=-1;if(n.y<0||n.y>nh)n.vy*=-1;
      nx.beginPath();nx.arc(n.x,n.y,n.r,0,Math.PI*2);
      nx.fillStyle='rgba(0,245,255,.8)';nx.shadowBlur=8;nx.shadowColor='rgba(0,245,255,.6)';nx.fill();
    });
    requestAnimationFrame(drawNet);
  }
  drawNet();
}

/* ---------- Smooth Scroll ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const t=document.querySelector(a.getAttribute('href'));
    if(t)t.scrollIntoView({behavior:'smooth'});
  });
});