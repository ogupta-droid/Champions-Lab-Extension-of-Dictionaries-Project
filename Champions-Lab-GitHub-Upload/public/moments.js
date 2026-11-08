// Editorial video selection; official publishers retain all rights.
const UCL_MOMENTS=[
  {
    "id": "anfield",
    "year": 2019,
    "title": "The impossible night at Anfield",
    "match": "Liverpool 4–0 Barcelona",
    "category": "Comebacks",
    "score": "4—0",
    "note": "Two goals each from Origi and Wijnaldum turned a three-goal first-leg deficit into a place in the final.",
    "youtube": "27GHT7nAF8A",
    "url": "https://www.youtube.com/watch?v=27GHT7nAF8A",
    "color": "#ad233c"
  },
  {
    "id": "amsterdam",
    "year": 2019,
    "title": "Lucas. The last breath.",
    "match": "Ajax 2–3 Tottenham",
    "category": "Comebacks",
    "score": "2—3",
    "note": "Lucas Moura completed his hat-trick in stoppage time. Tottenham advanced on away goals after a 3–3 aggregate draw.",
    "youtube": "uGuQiSSBPkg",
    "url": "https://www.youtube.com/watch?v=uGuQiSSBPkg",
    "color": "#7b86ce"
  },
  {
    "id": "istanbul",
    "year": 2005,
    "title": "Six minutes that changed everything",
    "match": "Liverpool vs Milan · Istanbul final",
    "category": "Finals",
    "score": "3—3",
    "note": "From 3–0 down at half-time to champions on penalties. UEFA tells the story of the Miracle of Istanbul.",
    "url": "https://www.uefa.com/uefachampionsleague/video/01ac-0e661d0c62c1-2bbed053ff02-1000--liverpool-v-milan-the-full-story-of-the-2005-final/",
    "color": "#b73242"
  },
  {
    "id": "zidane",
    "year": 2002,
    "title": "One swing. Immortality.",
    "match": "Zidane’s volley · Glasgow final",
    "category": "Great goals",
    "score": "ZIZOU",
    "note": "Watch Zidane’s winning left-foot volley against Leverkusen from every angle in UEFA’s official video.",
    "url": "https://www.uefa.com/uefachampionsleague/history/video/0245-0e688b90e35e-885eda5dd623-1000--zidane-s-2002-volley-watch-it-from-every-angle/",
    "color": "#506cc8"
  },
  {
    "id": "barcelona99",
    "year": 1999,
    "title": "Never leave before the whistle",
    "match": "Manchester United 2–1 Bayern",
    "category": "Finals",
    "score": "90+3′",
    "note": "Sheringham and Solskjær scored in added time to turn defeat into a European title. Official final highlights.",
    "url": "https://www.uefa.com/uefachampionsleague/history/video/027d-171d9c400c75-2b5846ebab69-1000--1999-champions-league-final-highlights-man-united-2-1-bayern/",
    "color": "#a03545"
  },
  {
    "id": "milan89",
    "year": 1989,
    "title": "Milan’s masterclass",
    "match": "Milan 4–0 Steaua",
    "category": "Finals",
    "score": "4—0",
    "note": "Gullit and Van Basten scored twice each as Milan claimed the European Cup in Barcelona.",
    "url": "https://www.uefa.com/uefachampionsleague/history/video/0232-0e67969b3a85-fbaedea4afc7-1000--1989-european-cup-final-highlights-milan-4-0-steaua/",
    "color": "#24344c"
  },
  {
    "id": "juve96",
    "year": 1996,
    "title": "Juventus hold their nerve",
    "match": "Ajax 1–1 Juventus · Juventus win on penalties",
    "category": "Finals",
    "score": "1—1",
    "note": "Revisit the Rome final, where Juventus overcame defending champions Ajax in a penalty shoot-out.",
    "url": "https://www.uefa.com/uefachampionsleague/history/video/0250-0e69003b087b-ef78df1b3a77-1000--1996-champions-league-final-ajax-v-juventus/",
    "color": "#24344c"
  },
  {
    "id": "milan07",
    "year": 2007,
    "title": "Inzaghi’s night in Athens",
    "match": "Milan 2–1 Liverpool",
    "category": "Finals",
    "score": "2—1",
    "note": "Two goals from Filippo Inzaghi secured Milan’s seventh European Cup, two years after Istanbul.",
    "url": "https://www.uefa.com/uefachampionsleague/history/video/0232-0e67a3dd0a93-f124e174d051-1000--2007-final-highlights-milan-2-1-liverpool/",
    "color": "#24344c"
  },
  {
    "id": "inter10",
    "year": 2010,
    "title": "Milito completes the treble",
    "match": "Inter 2–0 Bayern",
    "category": "Finals",
    "score": "2—0",
    "note": "Diego Milito scored both goals in Madrid as Inter completed a historic season under José Mourinho.",
    "url": "https://www.uefa.com/uefachampionsleague/history/video/0253-0d7ad4002db3-b3b86ec9621f-1000--inter-s-2010-champions-league-glory/",
    "color": "#24344c"
  },
  {
    "id": "chelsea12",
    "year": 2012,
    "title": "Chelsea’s first European crown",
    "match": "Bayern 1–1 Chelsea · Chelsea win on penalties",
    "category": "Finals",
    "score": "1—1",
    "note": "Drogba’s late equaliser and the deciding penalty made a remarkable Munich final. Watch UEFA’s full story.",
    "url": "https://www.uefa.com/uefachampionsleague/history/video/0200-0e6622185924-5178626bcc88-1000--chelsea-v-bayern-the-full-story-of-the-2012-final/",
    "color": "#24344c"
  },
  {
    "id": "barca17",
    "year": 2017,
    "title": "The six-goal comeback",
    "match": "Barcelona 6–1 Paris",
    "category": "Comebacks",
    "score": "6—1",
    "note": "Barcelona overturned a 4–0 first-leg defeat, with Sergi Roberto scoring the decisive goal in stoppage time.",
    "url": "https://www.uefa.com/uefachampionsleague/history/video/024e-0e68e6f45b38-092f8ca29e52-1000--barcelona-s-amazing-2017-round-of-16-comeback/",
    "color": "#24344c"
  },
  {
    "id": "madrid18",
    "year": 2018,
    "title": "Bale takes flight",
    "match": "Real Madrid 3–1 Liverpool",
    "category": "Great goals",
    "score": "3—1",
    "note": "Gareth Bale came off the bench to score twice, including an overhead kick. Watch the 2018 final highlights.",
    "url": "https://www.uefa.com/uefachampionsleague/history/video/0267-11d5828f056b-7ffbc6b15078-1000--2018-champions-league-final-highlights-real-madrid-3-1-live/",
    "color": "#24344c"
  },
  {
    "id": "bayern20",
    "year": 2020,
    "title": "Coman decides the final",
    "match": "Paris 0–1 Bayern",
    "category": "Finals",
    "score": "0—1",
    "note": "Kingsley Coman’s header settled the Lisbon final as Bayern completed another treble.",
    "url": "https://www.uefa.com/uefachampionsleague/history/video/0261-107b5edb8d03-87374919f511-1000--2020-champions-league-final-highlights-paris-0-1-bayern/",
    "color": "#24344c"
  }
];
const Moments=(()=>{
let category='All',era='all',search='';
const matching=()=>UCL_MOMENTS.filter(m=>(category==='All'||m.category===category)&&(era==='all'||Math.floor(m.year/10)*10===Number(era))&&(m.title+' '+m.match+' '+m.note).toLowerCase().includes(search.toLowerCase()));
function card(m,i){return `<article class="moment-card" style="--moment-color:${m.color};--moment-order:${i}"><button class="moment-poster" data-moment="${m.id}" aria-label="Watch ${m.title}">${m.youtube?`<img src="https://i.ytimg.com/vi/${m.youtube}/hqdefault.jpg" alt="${m.match} official video thumbnail" loading="lazy">`:''}<span class="moment-year">${m.year} / ${m.category}</span><strong class="moment-score">${m.score}</strong><span class="moment-play" aria-hidden="true">▶</span><span class="moment-provider">UEFA OFFICIAL VIDEO ↗</span></button><div class="moment-copy"><button class="btn small" data-open-record="m:${m.id}">Save to watchlist ☆</button><p class="eyebrow">${m.match}</p><h2>${m.title}</h2><p>${m.note}</p><button class="btn" data-moment="${m.id}">${m.youtube?'Watch highlights':'Open video details'} ↗</button></div></article>`}
function grid(){return matching().map(card).join('')||'<p class="empty">No videos match these filters. Try another era or clear your search.</p>'}
function page(){return heading('Watch / European football','The highlights library.','Decisive goals, famous finals and remarkable comebacks. Selected from official UEFA videos.')+`<section class="screening-summary"><div><span class="eyebrow">CURATED COLLECTION</span><h2>European nights, worth revisiting.</h2></div><p><strong>${UCL_MOMENTS.length}</strong> official videos <span>1989—2020</span></p></section><div class="toolbar moments-toolbar"><label>Search the collection<input type="search" id="moment-search" placeholder="Club, player or moment" value="${esc(search)}"></label><label>Era<select id="moment-era"><option value="all">All decades</option>${[1980,1990,2000,2010,2020].map(y=>`<option value="${y}" ${era===String(y)?'selected':''}>${y}s</option>`).join('')}</select></label><span id="moment-count" class="sub" aria-live="polite">${matching().length} videos</span></div><div class="moment-filters" role="group" aria-label="Video category">${['All','Comebacks','Finals','Great goals'].map(c=>`<button class="btn" data-moment-filter="${c}" aria-pressed="${category===c}">${c}</button>`).join('')}</div><div class="moments-grid" id="moments-grid">${grid()}</div><p class="snapshot-caption">Editorial selection · real historical matches. Videos open on official UEFA or UEFA’s YouTube channel. Internet required; availability may vary by region.</p>`}
function open(id){const m=UCL_MOMENTS.find(m=>m.id===id);if(!m)return;const d=$('#editor');d.className='moment-dialog';d.innerHTML=`<div class="profile-header"><div><span class="eyebrow">${m.year} · ${m.category}</span><h2 id="editor-title">${m.title}</h2></div><button class="btn" id="close-moment">Close ×</button></div>${m.embeddable?`<div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${m.youtube}?rel=0" title="${m.match} — official UEFA highlights" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`:`<div class="video-link-poster" style="--moment-color:${m.color}"><span>▶</span><strong>${m.match}</strong><p>This official video plays on ${m.youtube?"UEFA’s YouTube channel":"UEFA’s website"}.</p></div>`}<p>${m.note}</p><a class="btn primary" href="${m.url}" target="_blank" rel="noopener noreferrer">${m.youtube?'Watch on YouTube ↗':'Watch on UEFA ↗'}</a><p class="sub">Opens the official publisher in a new tab.</p>`;d.onclose=()=>{d.innerHTML='';d.className=''};d.showModal();$('#close-moment').onclick=()=>d.close()}
function bindCards(){document.querySelectorAll(".moment-copy [data-open-record]").forEach(b=>b.onclick=()=>Play.open(b.dataset.openRecord));document.querySelectorAll('[data-moment]').forEach(b=>b.onclick=()=>open(b.dataset.moment));document.querySelectorAll('.moment-poster img').forEach(img=>img.onerror=()=>img.remove())}
function refresh(){const g=$('#moments-grid');if(!g)return;g.innerHTML=grid();$('#moment-count').textContent=matching().length+(matching().length===1?' video':' videos');bindCards()}
function mount(){bindCards();document.querySelectorAll('[data-moment-filter]').forEach(b=>b.onclick=()=>{category=b.dataset.momentFilter;document.querySelectorAll('[data-moment-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.momentFilter===category)));refresh()});if($('#moment-search'))$('#moment-search').oninput=e=>{search=e.target.value;refresh()};if($('#moment-era'))$('#moment-era').onchange=e=>{era=e.target.value;refresh()}}
return {page,mount};})();
if(typeof module!=='undefined')module.exports=UCL_MOMENTS;
