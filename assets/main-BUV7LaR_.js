import{s as w,a as R,d as O,b as W,g as F,c as N,f as _,e as G}from"./storage-D3wuKbZV.js";const m=document.querySelector("#app"),L=[{id:"1hour",emoji:"🌱",title:"1 小時",schedule:"25 + 5",description:"小試身手<br>熱身時間",buttonLabel:"出發囉",videos:[{id:"default-1hour",name:"【Study with me】1hour Let's study together / Tokyo night view✨ / Pomodoro(25/5)",url:"https://www.youtube.com/watch?v=kMCbva2SvMU",isDefault:!0}],tomatoCount:2,tomatoSize:"small",tomatoLabel:"2 小顆",cardClass:"border-pink-200",titleClass:"text-pink-600",scheduleClass:"text-pink-400",buttonClass:"bg-pink-100 text-pink-500",saveButtonClass:"bg-pink-500",ringClass:"card-selected-pink"},{id:"2hour",emoji:"☁️",title:"2 小時",schedule:"25 + 5",description:"進入狀態<br>穩定發揮",buttonLabel:"一起努力",videos:[{id:"default-2hour",name:"2-HOUR STUDY WITH ME 🍂 / calm lofi / Golden Morning in Tokyo / Pomodoro 25-5",url:"https://www.youtube.com/watch?v=OS8lnKZdJYc",isDefault:!0}],tomatoCount:4,tomatoSize:"small",tomatoLabel:"4 小顆",cardClass:"border-orange-200",titleClass:"text-orange-500",scheduleClass:"text-orange-400",buttonClass:"bg-orange-100 text-orange-500",saveButtonClass:"bg-orange-500",ringClass:"card-selected-orange"},{id:"3hour",emoji:"🐥",title:"3 小時",schedule:"50 + 10",description:"深度專注<br>成果豐碩",buttonLabel:"超級專心",videos:[{id:"default-3hour",name:"3-HOUR STUDY WITH ME / calm piano / Golden Morning in Tokyo / Pomodoro 50-10",url:"https://www.youtube.com/watch?v=XcoFHz5i8T0",isDefault:!0}],tomatoCount:3,tomatoSize:"large",tomatoLabel:"3 大顆",cardClass:"border-yellow-200",titleClass:"text-yellow-600",scheduleClass:"text-yellow-500",buttonClass:"bg-yellow-100 text-yellow-600",saveButtonClass:"bg-yellow-500",ringClass:"card-selected-yellow"},{id:"4hour",emoji:"🍀",title:"4 小時",schedule:"25 + 5",description:"挑戰自我<br>效率全開",buttonLabel:"戰鬥模式",videos:[{id:"default-4hour",name:"4-HOUR STUDY WITH ME 🛟 / calm lofi / Peaceful Sunrise in Coastal Japan / Pomodoro 25-5",url:"https://www.youtube.com/watch?v=z-j6jsLtgjs",isDefault:!0}],tomatoCount:8,tomatoSize:"small",tomatoLabel:"8 小顆",cardClass:"border-green-200",titleClass:"text-green-600",scheduleClass:"text-green-500",buttonClass:"bg-green-100 text-green-600",saveButtonClass:"bg-green-500",ringClass:"card-selected-green"},{id:"5hour",emoji:"🌈",title:"5 小時",schedule:"50 + 10",description:"究極進化<br>最強學霸",buttonLabel:"巔峰時刻",videos:[{id:"default-5hour",name:"5-HOUR STUDY WITH ME🌦️ / ambient ver. / A Rainy Day in Shinjuku, Tokyo / Pomodoro 50-10",url:"https://www.youtube.com/watch?v=E-U7Tv1srxs",isDefault:!0}],tomatoCount:5,tomatoSize:"large",tomatoLabel:"5 大顆",cardClass:"border-blue-200",titleClass:"text-blue-600",scheduleClass:"text-blue-500",buttonClass:"bg-blue-100 text-blue-600",saveButtonClass:"bg-blue-500",ringClass:"card-selected-blue"},{id:"6hour",emoji:"💎",title:"6 小時",schedule:"50 + 10",description:"意志挑戰<br>不懈努力",buttonLabel:"終極專注",videos:[{id:"default-6hour",name:"6-HOUR STUDY WITH ME ⛈️ / ambient ver. / A Rainy Day in Shibuya Crossing / Pomodoro 50-10",url:"https://www.youtube.com/watch?v=86CFyZDqiAI",isDefault:!0}],tomatoCount:6,tomatoSize:"large",tomatoLabel:"6 大顆",cardClass:"border-purple-200",titleClass:"text-purple-600",scheduleClass:"text-purple-500",buttonClass:"bg-purple-100 text-purple-600",saveButtonClass:"bg-purple-500",ringClass:"card-selected-purple"}];let x=null,k="",u="",p=!1,T=!1,b=L[0].id,g="",d="",y=!1;function i(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Y(t){try{const e=new URL(t),o=e.hostname.replace(/^www\./,"");if(o==="youtu.be")return e.pathname.slice(1)||null;if(o==="youtube.com"||o==="m.youtube.com"){if(e.pathname==="/watch")return e.searchParams.get("v");if(e.pathname.startsWith("/embed/"))return e.pathname.split("/")[2]||null}}catch{return null}return null}function J(t){const e=Y(t);return e?`https://www.youtube.com/watch?v=${e}`:null}function Z(t){const e=Y(t);return e?`https://www.youtube.com/embed/${e}`:t}async function K(t){const e=await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(t)}&format=json`);if(!e.ok)throw new Error("無法取得影片標題");const o=await e.json(),a=typeof o.title=="string"?o.title.trim():"";if(!a)throw new Error("影片標題為空");return a}function f(){const t=F();return L.map(e=>({...e,videos:[...e.videos,...Array.isArray(t[e.id])?t[e.id]:[]]}))}function v(t,e=f()){return e.find(o=>o.id===t)??null}function P(t=f()){return v(x,t)}function h(t){if(!t)return null;const o=N()[t.id];return t.videos.find(a=>a.id===o)??t.videos[0]??null}function A(t){return t.startsWith("請")||t.startsWith("新增失敗")?"text-rose-500":"text-green-500"}function X(t=x??L[0].id){b=t,g="",d="",T=!0}function B(){T=!1,g="",d="",y=!1}function Q(){const t=P(),e=h(t);if(!t||!e)return null;const o=new Date,{dateLabel:a,timeLabel:$}=_(o),C=k.trim()||G(o);return{id:o.toISOString(),title:C,date:a,time:$,durationLabel:t.title,tomatoCount:t.tomatoCount,tomatoSize:t.tomatoSize,tomatoLabel:t.tomatoLabel,videoName:e.name,videoUrl:e.url,videoSrc:e.url}}function ee(t,e){return!t||!p?"":`
    <section class="video-picker-panel rounded-[1.5rem] border border-pink-100 bg-pink-50/70 p-4 md:p-5 mb-5">
      <div class="flex items-center justify-between gap-3 flex-wrap mb-4">
        <div>
          <p class="text-sm md:text-base text-pink-400 font-bold">換影片</p>
          <p class="text-base md:text-lg text-gray-500">${t.title} 目前有 ${t.videos.length} 部可選影片</p>
        </div>
        <button id="close-picker" type="button" class="history-link rounded-full bg-white text-pink-500 text-base font-bold px-4 py-2 border-2 border-pink-200">收起</button>
      </div>
      <div class="grid gap-3 md:grid-cols-2">
        ${t.videos.map(o=>`
              <button
                type="button"
                data-video-id="${i(o.id)}"
                class="video-option w-full rounded-[1.25rem] border-2 px-4 py-4 text-left ${(e==null?void 0:e.id)===o.id?"border-pink-400 bg-white shadow-sm":"border-pink-100 bg-white/80"}"
              >
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <p class="text-lg font-bold text-gray-700">${i(o.name)}</p>
                    <p class="text-sm text-gray-400 mt-1 break-all">${i(o.url)}</p>
                  </div>
                  ${o.isDefault?'<span class="rounded-full bg-pink-100 text-pink-500 text-xs font-bold px-3 py-1">預設</span>':""}
                </div>
              </button>
            `).join("")}
      </div>
    </section>
  `}function te(t){if(!T)return"";const e=v(b,t)??t[0],o=h(e);return`
    <section class="modal-overlay fixed inset-0 z-40 flex items-center justify-center p-4 md:p-6">
      <div class="modal-backdrop absolute inset-0" data-close-manager="true"></div>
      <div class="modal-card relative z-10 w-full max-w-4xl rounded-[2rem] border-4 ${e.cardClass} bg-white p-5 md:p-7 shadow-2xl">
        <div class="flex items-start justify-between gap-4 flex-wrap mb-6">
          <div>
            <p class="text-sm md:text-base text-pink-400 font-bold mb-2">管理影片</p>
            <h3 class="text-3xl md:text-4xl font-bold ${e.titleClass}">設定不同時長的影片清單</h3>
          </div>
          <button id="close-manager" type="button" class="history-link rounded-full bg-white text-pink-500 text-base md:text-lg font-bold px-5 py-2 border-2 border-pink-200">關閉</button>
        </div>

        <div class="grid gap-4 md:grid-cols-[220px_minmax(0,1fr)_auto] items-end mb-6">
          <label class="text-left">
            <span class="block text-base md:text-lg text-gray-500 mb-2">對應番茄鐘</span>
            <select id="manage-duration" class="record-input w-full rounded-2xl border-2 border-pink-100 bg-pink-50/60 px-4 py-3 text-lg text-gray-700 outline-none">
              ${t.map(a=>`<option value="${i(a.id)}" ${a.id===e.id?"selected":""}>${i(a.title)}</option>`).join("")}
            </select>
          </label>
          <label class="text-left">
            <span class="block text-base md:text-lg text-gray-500 mb-2">YouTube 連結</span>
            <input
              id="manage-video-url"
              type="url"
              value="${i(g)}"
              placeholder="貼上 YouTube 連結後會自動抓影片名稱"
              class="record-input w-full rounded-2xl border-2 border-pink-100 bg-pink-50/60 px-4 py-3 text-lg text-gray-700 outline-none"
            />
          </label>
          <button id="add-video" type="button" class="save-button rounded-full bg-pink-500 text-white text-lg font-bold px-6 py-3 ${y?"opacity-70":""}" ${y?"disabled":""}>${y?"新增中...":"新增影片"}</button>
        </div>

        <p class="text-base md:text-lg text-gray-400 mb-4">新增時會直接使用 YouTube 的影片標題。</p>
        ${d?`<p class="text-base md:text-lg font-bold mb-5 ${A(d)}">${i(d)}</p>`:""}

        <div class="space-y-3 max-h-[55vh] overflow-y-auto pr-1">
          ${e.videos.map(a=>`
                <article class="rounded-[1.25rem] border border-pink-100 bg-pink-50/40 px-4 py-4 flex items-center justify-between gap-4 flex-wrap">
                  <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-2 flex-wrap mb-1">
                      <h4 class="text-lg md:text-xl font-bold text-gray-700 break-words">${i(a.name)}</h4>
                      ${a.isDefault?'<span class="rounded-full bg-white text-pink-500 text-xs font-bold px-3 py-1 border border-pink-100">預設影片</span>':""}
                      ${(o==null?void 0:o.id)===a.id?'<span class="rounded-full bg-pink-500 text-white text-xs font-bold px-3 py-1">目前播放</span>':""}
                    </div>
                    <p class="text-sm md:text-base text-gray-400 break-all">${i(a.url)}</p>
                  </div>
                  <div class="flex items-center gap-2 flex-wrap">
                    ${(o==null?void 0:o.id)===a.id?"":`<button type="button" data-set-video="${i(a.id)}" class="history-link rounded-full bg-white text-pink-500 text-sm md:text-base font-bold px-4 py-2 border-2 border-pink-200">設為播放影片</button>`}
                    ${a.isDefault?"":`<button type="button" data-delete-video="${i(a.id)}" class="delete-button rounded-full bg-rose-50 text-rose-500 text-sm md:text-base font-bold px-4 py-2 border-2 border-rose-100">刪除</button>`}
                  </div>
                </article>
              `).join("")}
        </div>
      </div>
    </section>
  `}function n(){const t=f(),e=P(t),o=h(e),a=ee(e,o),$=te(t),C=e?`
      <section id="video-player" class="player-panel w-full max-w-5xl mt-10 bg-white rounded-[2rem] border-4 ${e.cardClass} shadow-lg p-5 md:p-7">
        <div class="flex items-center justify-between gap-4 flex-wrap mb-4">
          <div>
            <p class="text-base md:text-lg text-gray-400 mb-1">目前播放</p>
            <h3 class="text-3xl md:text-4xl font-bold ${e.titleClass}">${e.title} 番茄鐘</h3>
          </div>
          <div class="px-4 py-2 rounded-full text-base md:text-lg font-bold ${e.buttonClass}">${e.schedule}</div>
        </div>
        <div class="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_auto] items-end mb-4">
          <label class="text-left">
            <span class="block text-base md:text-lg text-gray-500 mb-2">這次番茄鐘名稱（可選）</span>
            <input
              id="session-title"
              type="text"
              value="${i(k)}"
              placeholder="例如：統計學複習 / 報告整理"
              class="record-input w-full rounded-2xl border-2 border-pink-100 bg-pink-50/60 px-4 py-3 text-lg text-gray-700 outline-none"
            />
          </label>
          <button id="toggle-picker" type="button" class="history-link rounded-full bg-white text-pink-500 text-lg font-bold px-6 py-3 border-2 border-pink-200 text-center">${p?"收起換影片":"換影片"}</button>
          <button id="save-record" type="button" class="save-button rounded-full text-white text-lg font-bold px-6 py-3 ${e.saveButtonClass}">完成並記錄</button>
        </div>
        <div class="flex items-center justify-between gap-3 flex-wrap mb-4">
          <div>
            <p class="text-sm md:text-base text-gray-400">目前影片</p>
            <p class="text-lg md:text-xl font-bold text-gray-700">${o?i(o.name):"尚未選擇影片"}</p>
          </div>
          <p class="text-base md:text-lg text-gray-400">本次完成會記錄為 ${e.tomatoLabel}</p>
        </div>
        ${u?`<p class="text-base md:text-lg font-bold mb-4 ${A(u)}">${i(u)}</p>`:""}
        ${a}
        <iframe
          class="player-video aspect-video w-full rounded-[1.5rem] bg-black"
          src="${o?Z(o.url):""}"
          title="${i(e.title)} 番茄鐘影片"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
    `:`
      <section id="video-player" class="player-placeholder w-full max-w-5xl mt-10 rounded-[2rem] border-4 border-dashed border-pink-200 bg-white p-10 text-center text-gray-500 shadow-sm">
        <div class="text-5xl mb-4">🎬</div>
        <h3 class="text-3xl md:text-4xl font-bold text-pink-500 mb-3">選一個時段開始播放</h3>
        <p class="text-lg md:text-xl">點上方任一張番茄鐘卡片，就會直接播放該時長目前設定的專注影片。</p>
        <p class="text-base md:text-lg mt-5">想調整片單的話，可以直接使用右上角的管理影片。</p>
      </section>
    `;m.innerHTML=`
    <main class="bg-pattern relative z-10 min-h-screen flex flex-col items-center justify-center p-6 overflow-x-clip">
      <section class="hero-header w-full max-w-7xl mb-12 relative">
        <div class="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p class="text-pink-400 text-lg md:text-xl mb-2">Tomato Time</p>
            <h1 class="hero-title text-5xl md:text-7xl font-bold text-pink-500 title-font mb-4 drop-shadow-sm">專注小時光<span class="hero-title-sparkle floating" style="animation-delay: 1s;">✨</span></h1>
            <p class="text-gray-500 text-xl md:text-2xl">選一個時段，讓我們一起變厲害吧！</p>
          </div>
          <div class="flex items-center gap-3 flex-wrap">
            <a href="./history.html" class="save-button rounded-full bg-pink-500 text-white text-lg font-bold px-6 py-3 shadow-sm">查看紀錄</a>
            <button id="open-manager-header" type="button" class="danger-button rounded-full bg-white text-pink-300 text-lg font-bold px-6 py-3 border-2 border-pink-100">管理影片</button>
          </div>
        </div>
      </section>

      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 w-full max-w-7xl">
        ${t.map((l,s)=>{h(l);const r=(e==null?void 0:e.id)===l.id,c=r?`${l.ringClass} card-selected`:"";return`
              <button
                type="button"
                data-card-index="${s}"
                aria-pressed="${r}"
                class="card-hover bg-white rounded-3xl p-6 flex flex-col items-center border-4 shadow-lg text-center cursor-pointer w-full ${l.cardClass} ${c}"
              >
                <div class="text-6xl mb-4">${l.emoji}</div>
                <h2 class="text-3xl font-bold mb-2 ${l.titleClass}">${l.title}</h2>
                <div class="font-bold text-lg mb-3 ${l.scheduleClass}">${l.schedule}</div>
                <p class="text-gray-400 text-lg leading-relaxed">${l.description}</p>
                <div class="mt-5 px-4 py-2 rounded-full text-base font-bold ${l.buttonClass}">${l.buttonLabel}</div>
              </button>
            `}).join("")}
      </section>

      ${C}
      ${$}

      <footer class="mt-16 text-pink-300 text-lg">
        做個可愛的番茄鐘女孩 (๑•̀ㅂ•́)و✧
      </footer>
    </main>
  `,m.querySelectorAll("[data-card-index]").forEach(l=>{l.addEventListener("click",()=>{var c;const s=Number(l.dataset.cardIndex);x=((c=t[s])==null?void 0:c.id)??null,u="",p=!1,n();const r=document.querySelector("#video-player");r&&r.scrollIntoView({behavior:"smooth",block:"start"})})});const E=document.querySelector("#session-title");E&&E.addEventListener("input",l=>{k=l.target.value});const j=document.querySelector("#toggle-picker");j&&e&&j.addEventListener("click",()=>{p=!p,n()});const I=document.querySelector("#close-picker");I&&I.addEventListener("click",()=>{p=!1,n()}),m.querySelectorAll("[data-video-id]").forEach(l=>{l.addEventListener("click",()=>{if(!e)return;const s=l.dataset.videoId;s&&(w(e.id,s),p=!1,u="已切換影片。",n())})});const M=document.querySelector("#open-manager-header");M&&M.addEventListener("click",()=>{X(e==null?void 0:e.id),n()});const D=document.querySelector("#close-manager");D&&D.addEventListener("click",()=>{B(),n()}),m.querySelectorAll("[data-close-manager]").forEach(l=>{l.addEventListener("click",()=>{B(),n()})});const q=document.querySelector("#manage-duration");q&&q.addEventListener("change",l=>{b=l.target.value,d="",n()});const U=document.querySelector("#manage-video-url");U&&U.addEventListener("input",l=>{g=l.target.value});const H=document.querySelector("#add-video");H&&H.addEventListener("click",async()=>{const l=v(b,f()),s=J(g.trim());if(!l){d="找不到對應的番茄鐘時長。",n();return}if(!s){d="請輸入有效的 YouTube 連結。",n();return}y=!0,d="",n();try{const r=await K(s),c={id:`custom-${Date.now()}`,name:r,url:s,isDefault:!1};R(l.id,c),w(l.id,c.id),x===l.id&&(u=`已新增並切換成：${r}`),g="",d=`已新增影片：${r}`}catch{d="新增失敗，暫時無法取得 YouTube 影片名稱。"}finally{y=!1,n()}}),m.querySelectorAll("[data-set-video]").forEach(l=>{l.addEventListener("click",()=>{const s=l.dataset.setVideo;s&&(w(b,s),d="已更新這個時長的播放影片。",x===b&&(u="已切換目前播放影片。"),n())})}),m.querySelectorAll("[data-delete-video]").forEach(l=>{l.addEventListener("click",()=>{const s=l.dataset.deleteVideo,r=v(b,f()),c=h(r);if(!(!s||!r)){if(O(r.id,s),(c==null?void 0:c.id)===s){const S=v(r.id,f()),z=(S==null?void 0:S.videos[0])??null;z&&w(r.id,z.id)}d="已刪除影片。",x===r.id&&(u="已更新目前影片清單。"),n()}})});const V=document.querySelector("#save-record");V&&V.addEventListener("click",()=>{const l=Q();if(!l)return;W(l),u=`已記錄：${l.title} (${l.tomatoLabel})`,k="",n();const s=document.querySelector("#video-player");s&&s.scrollIntoView({behavior:"smooth",block:"start"})})}function le(){let t=document.querySelector("#sparkle-layer");t||(t=document.createElement("div"),t.id="sparkle-layer",t.className="sparkle-layer",document.body.appendChild(t)),t.innerHTML="";for(let e=0;e<20;e+=1){const o=document.createElement("div");o.innerHTML="✨",o.className="sparkle text-xl",o.style.left=`${Math.random()*100}vw`,o.style.top=`${Math.random()*100}vh`,o.style.animationDelay=`${Math.random()*5}s`,t.appendChild(o)}}n();le();
