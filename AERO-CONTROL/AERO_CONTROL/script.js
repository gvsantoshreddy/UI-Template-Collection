const flights=[
 {id:'AI 684',from:'MAA',to:'DEL',time:'07:40',arrive:'08:10',type:'departure',status:'ON TIME',gate:'A12',city:'Delhi'},
 {id:'6E 721',from:'BLR',to:'MAA',time:'08:05',arrive:'09:15',type:'arrival',status:'LANDED',gate:'B06',city:'Bengaluru'},
 {id:'EK 542',from:'DXB',to:'MAA',time:'09:20',arrive:'14:30',type:'arrival',status:'ON TIME',gate:'C04',city:'Dubai'},
 {id:'SQ 528',from:'SIN',to:'MAA',time:'10:10',arrive:'12:05',type:'arrival',status:'EARLY',gate:'D02',city:'Singapore'},
 {id:'UK 839',from:'MAA',to:'BOM',time:'11:25',arrive:'13:20',type:'departure',status:'BOARDING',gate:'A08',city:'Mumbai'},
 {id:'6E 903',from:'MAA',to:'HYD',time:'12:15',arrive:'13:35',type:'departure',status:'ON TIME',gate:'A16',city:'Hyderabad'},
 {id:'AI 571',from:'MAA',to:'CCU',time:'13:05',arrive:'15:25',type:'departure',status:'ON TIME',gate:'B12',city:'Kolkata'},
 {id:'LH 759',from:'FRA',to:'MAA',time:'14:10',arrive:'02:35',type:'arrival',status:'ON TIME',gate:'E01',city:'Frankfurt'}
];
let currentFilter='all', mode='passenger';
const $=s=>document.querySelector(s);
function renderFlights(){const q=($('#flightSearch')?.value||'').toLowerCase();const list=flights.filter(f=>(currentFilter==='all'||f.type===currentFilter||(currentFilter==='boarding'&&f.status==='BOARDING')) && `${f.id} ${f.from} ${f.to} ${f.gate} ${f.city}`.toLowerCase().includes(q));$('#flightsGrid').innerHTML=list.map(f=>`<article class="flight" onclick="openFlight('${f.id}')"><div class="flighttop"><span>${f.type.toUpperCase()}</span><span>GATE ${f.gate}</span></div><h3>${f.id}</h3><div class="route"><strong>${f.from}</strong><span class="arrow">→</span><strong>${f.to}</strong></div><p>${f.city} · ${f.time} departure · ${f.arrive} arrival</p><span class="status ${f.status==='BOARDING'?'boardingStatus':''}">${f.status}</span></article>`).join('')||'<div class="empty">No flights match that search.</div>'}
function setFilter(type){currentFilter=type;document.querySelectorAll('.filters button').forEach(b=>b.classList.toggle('active',b.dataset.filter===type));renderFlights()}
document.querySelectorAll('.filters button').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));
function openFlight(id){const f=flights.find(x=>x.id===id)||flights[0];showPanel(`Flight ${f.id}`,`${f.from} → ${f.to} · Gate ${f.gate} · ${f.status}. Scheduled departure ${f.time}. ${f.status==='BOARDING'?'Boarding is in progress.':'No action is currently required.'}`)}
function showPanel(title,text){$('#modalTitle').textContent=title;$('#modalText').textContent=text;$('#modal').classList.add('show')}
function closeModal(){$('#modal').classList.remove('show')}
function showBoardingPass(){scrollToId('journey');setTimeout(()=>showPanel('Digital boarding pass','AI 684 · Chennai (MAA) → Delhi (DEL) · Seat 14A · Gate A12 · Boarding 07:40 · Zone 2.'),300)}
function journeyInfo(n){const data=[['Check-in','Check-in is complete. Your boarding pass is ready.'],['Security','Lane B is currently fastest at 11 minutes.'],['Gate A12','Gate A12 is open and 6 minutes from security.'],['Boarding','Boarding begins at 07:40. Zone 2 is called first.'],['Takeoff','Scheduled takeoff is 08:10.']];showPanel(data[n][0],data[n][1])}
function setMode(next){mode=next;$('#passengerMode').classList.toggle('active',next==='passenger');$('#opsMode').classList.toggle('active',next==='ops');$('#opsPanel').classList.toggle('opsMode',next==='ops');showToast(next==='ops'?'Operations control enabled':'Passenger mode enabled')}
function showToast(text){const t=$('#toast');t.textContent=text;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),1800)}
function scrollToId(id){document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})}
function toggleMobileNav(){$('nav').classList.toggle('open')}
document.querySelectorAll('.nav').forEach(n=>n.addEventListener('click',()=>{scrollToId(n.dataset.target);document.querySelectorAll('.nav').forEach(x=>x.classList.remove('active'));n.classList.add('active');$('nav').classList.remove('open')}));
$('#modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
function clock(){const d=new Date();$('#clock').textContent=d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit',second:'2-digit'})}setInterval(clock,1000);clock();renderFlights();
