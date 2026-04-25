import{a as p,f as m,g as x}from"./storage-7sl7wi_q.js";const c=document.querySelector("#app"),b=[{emoji:"🌱",title:"1 小時",schedule:"25 + 5",description:"小試身手<br>熱身時間",buttonLabel:"出發囉",videoSrc:"/videos/1hour.webm",tomatoCount:2,tomatoSize:"small",tomatoLabel:"2 小顆",cardClass:"border-pink-200",titleClass:"text-pink-600",scheduleClass:"text-pink-400",buttonClass:"bg-pink-100 text-pink-500",saveButtonClass:"bg-pink-500",ringClass:"card-selected-pink"},{emoji:"☁️",title:"2 小時",schedule:"25 + 5",description:"進入狀態<br>穩定發揮",buttonLabel:"一起努力",videoSrc:"/videos/2hour.webm",tomatoCount:4,tomatoSize:"small",tomatoLabel:"4 小顆",cardClass:"border-orange-200",titleClass:"text-orange-500",scheduleClass:"text-orange-400",buttonClass:"bg-orange-100 text-orange-500",saveButtonClass:"bg-orange-500",ringClass:"card-selected-orange"},{emoji:"🐥",title:"3 小時",schedule:"50 + 10",description:"深度專注<br>成果豐碩",buttonLabel:"超級專心",videoSrc:"/videos/3hour.webm",tomatoCount:3,tomatoSize:"large",tomatoLabel:"3 大顆",cardClass:"border-yellow-200",titleClass:"text-yellow-600",scheduleClass:"text-yellow-500",buttonClass:"bg-yellow-100 text-yellow-600",saveButtonClass:"bg-yellow-500",ringClass:"card-selected-yellow"},{emoji:"🍀",title:"4 小時",schedule:"25 + 5",description:"挑戰自我<br>效率全開",buttonLabel:"戰鬥模式",videoSrc:"/videos/4hour.webm",tomatoCount:8,tomatoSize:"small",tomatoLabel:"8 小顆",cardClass:"border-green-200",titleClass:"text-green-600",scheduleClass:"text-green-500",buttonClass:"bg-green-100 text-green-600",saveButtonClass:"bg-green-500",ringClass:"card-selected-green"},{emoji:"🌈",title:"5 小時",schedule:"50 + 10",description:"究極進化<br>最強學霸",buttonLabel:"巔峰時刻",videoSrc:"/videos/5hour.webm",tomatoCount:5,tomatoSize:"large",tomatoLabel:"5 大顆",cardClass:"border-blue-200",titleClass:"text-blue-600",scheduleClass:"text-blue-500",buttonClass:"bg-blue-100 text-blue-600",saveButtonClass:"bg-blue-500",ringClass:"card-selected-blue"},{emoji:"💎",title:"6 小時",schedule:"50 + 10",description:"意志挑戰<br>不懈努力",buttonLabel:"終極專注",videoSrc:"/videos/6hour.webm",tomatoCount:6,tomatoSize:"large",tomatoLabel:"6 大顆",cardClass:"border-purple-200",titleClass:"text-purple-600",scheduleClass:"text-purple-500",buttonClass:"bg-purple-100 text-purple-600",saveButtonClass:"bg-purple-500",ringClass:"card-selected-purple"}];let t=null,n="",i="";function g(l){return l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function v(){if(!t)return null;const l=new Date,{dateLabel:s,timeLabel:o}=m(l),e=n.trim()||x(l);return{id:l.toISOString(),title:e,date:s,time:o,durationLabel:t.title,tomatoCount:t.tomatoCount,tomatoSize:t.tomatoSize,tomatoLabel:t.tomatoLabel,videoSrc:t.videoSrc}}function d(){const l=t?`
      <section id="video-player" class="player-panel w-full max-w-5xl mt-10 bg-white rounded-[2rem] border-4 ${t.cardClass} shadow-lg p-5 md:p-7">
        <div class="flex items-center justify-between gap-4 flex-wrap mb-4">
          <div>
            <p class="text-base md:text-lg text-gray-400 mb-1">目前播放</p>
            <h3 class="text-3xl md:text-4xl font-bold ${t.titleClass}">${t.title} 番茄鐘</h3>
          </div>
          <div class="px-4 py-2 rounded-full text-base md:text-lg font-bold ${t.buttonClass}">${t.schedule}</div>
        </div>
        <div class="grid gap-4 md:grid-cols-[1fr_auto_auto] items-end mb-5">
          <label class="text-left">
            <span class="block text-base md:text-lg text-gray-500 mb-2">這次番茄鐘名稱（可選）</span>
            <input
              id="session-title"
              type="text"
              value="${g(n)}"
              placeholder="例如：統計學複習 / 報告整理"
              class="record-input w-full rounded-2xl border-2 border-pink-100 bg-pink-50/60 px-4 py-3 text-lg text-gray-700 outline-none"
            />
          </label>
          <a href="/history.html" class="history-link rounded-full bg-white text-pink-500 text-lg font-bold px-6 py-3 border-2 border-pink-200 text-center">查看紀錄</a>
          <button id="save-record" type="button" class="save-button rounded-full text-white text-lg font-bold px-6 py-3 ${t.saveButtonClass}">
            完成並記錄
          </button>
        </div>
        <p class="text-base md:text-lg text-gray-400 mb-4">本次完成會記錄為 ${t.tomatoLabel}</p>
        ${i?`<p class="text-base md:text-lg text-green-500 font-bold mb-4">${i}</p>`:""}
        <video class="player-video w-full rounded-[1.5rem] bg-black" controls preload="metadata">
          <source src="${t.videoSrc}" type="video/webm" />
          你的瀏覽器目前不支援 webm 影片播放。
        </video>
      </section>
    `:`
      <section id="video-player" class="player-placeholder w-full max-w-5xl mt-10 rounded-[2rem] border-4 border-dashed border-pink-200 bg-white p-10 text-center text-gray-500 shadow-sm">
        <div class="text-5xl mb-4">🎬</div>
        <h3 class="text-3xl md:text-4xl font-bold text-pink-500 mb-3">選一個時段開始播放</h3>
        <p class="text-lg md:text-xl">點上方任一張番茄鐘卡片，就會在這裡顯示對應的本地影片。</p>
        <a href="/history.html" class="history-link inline-block mt-5 rounded-full bg-white text-pink-500 text-lg font-bold px-6 py-3 border-2 border-pink-200">查看紀錄</a>
      </section>
    `;c.innerHTML=`
    <main class="bg-pattern relative z-10 min-h-screen flex flex-col items-center justify-center p-6 overflow-x-clip">
      <section class="text-center mb-12 relative">
        <div class="absolute -top-2 -left-10 text-4xl floating" style="animation-delay: 0s;">🍅</div>
        <div class="absolute -top-5 -right-10 text-4xl floating" style="animation-delay: 1s;">✨</div>
        <h1 class="text-6xl md:text-7xl font-bold text-pink-500 title-font mb-5 drop-shadow-sm">
          專注小時光
        </h1>
        <p class="text-gray-500 text-xl md:text-2xl">選一個時段，讓我們一起變厲害吧！</p>
      </section>

      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 w-full max-w-7xl">
        ${b.map((e,a)=>{const r=(t==null?void 0:t.videoSrc)===e.videoSrc,u=r?`${e.ringClass} card-selected`:"";return`
              <button
                type="button"
                data-card-index="${a}"
                aria-pressed="${r}"
                class="card-hover bg-white rounded-3xl p-6 flex flex-col items-center border-4 shadow-lg text-center cursor-pointer w-full ${e.cardClass} ${u}"
              >
                <div class="text-6xl mb-4">${e.emoji}</div>
                <h2 class="text-3xl font-bold mb-2 ${e.titleClass}">${e.title}</h2>
                <div class="font-bold text-lg mb-3 ${e.scheduleClass}">${e.schedule}</div>
                <p class="text-gray-400 text-lg leading-relaxed">${e.description}</p>
                <div class="mt-5 px-4 py-2 rounded-full text-base font-bold ${e.buttonClass}">${e.buttonLabel}</div>
              </button>
            `}).join("")}
      </section>

      ${l}

      <footer class="mt-16 text-pink-300 text-lg">
        做個可愛的番茄鐘女孩 (๑•̀ㅂ•́)و✧
      </footer>
    </main>
  `,c.querySelectorAll("[data-card-index]").forEach(e=>{e.addEventListener("click",()=>{const a=Number(e.dataset.cardIndex);t=b[a],i="",d();const r=document.querySelector("#video-player");r&&r.scrollIntoView({behavior:"smooth",block:"start"})})});const s=document.querySelector("#session-title");s&&s.addEventListener("input",e=>{n=e.target.value});const o=document.querySelector("#save-record");o&&o.addEventListener("click",()=>{const e=v();if(!e)return;p(e),i=`已記錄：${e.title} (${e.tomatoLabel})`,n="",d();const a=document.querySelector("#video-player");a&&a.scrollIntoView({behavior:"smooth",block:"start"})})}function h(){let l=document.querySelector("#sparkle-layer");l||(l=document.createElement("div"),l.id="sparkle-layer",l.className="sparkle-layer",document.body.appendChild(l)),l.innerHTML="";for(let s=0;s<20;s+=1){const o=document.createElement("div");o.innerHTML="✨",o.className="sparkle text-xl",o.style.left=`${Math.random()*100}vw`,o.style.top=`${Math.random()*100}vh`,o.style.animationDelay=`${Math.random()*5}s`,l.appendChild(o)}}d();h();
