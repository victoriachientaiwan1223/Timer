import{b as c,d as p,c as m}from"./storage-7sl7wi_q.js";const d=document.querySelector("#app");function o(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function x(t){return t.reduce((s,e)=>(e.tomatoSize==="small"&&(s.small+=e.tomatoCount),e.tomatoSize==="large"&&(s.large+=e.tomatoCount),s),{small:0,large:0})}function i(t){const[s,e,r]=t.split("/").map(Number),l=new Date(s,e-1,r);return`${t}（${["日","一","二","三","四","五","六"][l.getDay()]}）`}function g(t){const s=Array.from({length:t.tomatoCount},()=>"<span>🍅</span>").join("");return`
    <div class="tomato-icons ${t.tomatoSize==="large"?"tomato-icons-large":"tomato-icons-small"}" aria-label="${o(t.tomatoLabel)}">
      ${s}
    </div>
  `}function b(t){const s=new Map;return t.forEach(e=>{s.has(e.date)||s.set(e.date,[]),s.get(e.date).push(e)}),Array.from(s.entries()).map(([e,r])=>({date:e,items:r}))}function n(){const t=c(),s=x(t),e=b(t);d.innerHTML=`
    <main class="bg-pattern relative z-10 min-h-screen p-6 md:p-10 overflow-x-clip">
      <section class="max-w-6xl mx-auto">
        <div class="flex items-center justify-between gap-4 flex-wrap mb-8">
          <div>
            <p class="text-pink-400 text-lg md:text-xl mb-2">Tomato Log</p>
            <h1 class="text-5xl md:text-6xl font-bold text-pink-500 title-font">番茄鐘紀錄</h1>
          </div>
          <div class="flex items-center gap-3 flex-wrap">
            <a href="/" class="history-link rounded-full bg-pink-500 text-white text-lg font-bold px-6 py-3 shadow-sm">回到主頁</a>
            <button
              id="clear-history"
              type="button"
              class="danger-button rounded-full bg-white text-rose-500 text-lg font-bold px-6 py-3 border-2 border-rose-200"
              ${t.length===0?"disabled":""}
            >
              清空全部紀錄
            </button>
          </div>
        </div>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <article class="stats-card stats-card-total rounded-[1.75rem] bg-white p-6 shadow-sm border-4 border-pink-100">
            <p class="stats-label text-gray-400 text-lg mb-2"><span class="stats-icon-badge">🗂️</span><span>總紀錄次數</span></p>
            <p class="text-4xl font-bold text-pink-500">${t.length}</p>
          </article>
          <article class="stats-card stats-card-small rounded-[1.75rem] bg-white p-6 shadow-sm border-4 border-orange-100">
            <p class="stats-label text-gray-400 text-lg mb-2"><span class="stats-tomato stats-tomato-small">🍅</span><span>小顆總數</span></p>
            <p class="text-4xl font-bold text-orange-500">${s.small}</p>
          </article>
          <article class="stats-card stats-card-large rounded-[1.75rem] bg-white p-6 shadow-sm border-4 border-purple-100">
            <p class="stats-label text-gray-400 text-lg mb-2"><span class="stats-tomato stats-tomato-large">🍅</span><span>大顆總數</span></p>
            <p class="text-4xl font-bold text-purple-500">${s.large}</p>
          </article>
        </section>

        <section class="space-y-8">
          ${e.length>0?e.map(l=>`
                      <section class="space-y-4">
                        <div class="date-group-header flex items-center gap-3">
                          <div class="date-group-line"></div>
                          <h2 class="text-2xl md:text-3xl font-bold text-pink-500">${o(i(l.date))}</h2>
                        </div>
                        <div class="space-y-4">
                          ${l.items.map(a=>`
                                <article class="history-item bg-white rounded-[1.75rem] border border-pink-100 shadow-sm px-5 py-4 md:px-6 md:py-5 flex items-center justify-between gap-4 flex-wrap">
                                  <div class="flex items-center gap-4 min-w-0">
                                    <div class="history-dot ${a.tomatoSize==="small"?"history-dot-small":"history-dot-large"}"></div>
                                    <div class="min-w-0">
                                      <h3 class="text-2xl md:text-3xl font-bold text-gray-700 truncate">${o(a.title)}</h3>
                                      <p class="text-lg md:text-xl text-gray-400 mt-1">${o(a.durationLabel)}番茄鐘</p>
                                      <div class="mt-3">${g(a)}</div>
                                    </div>
                                  </div>
                                  <div class="flex items-center gap-4 ml-auto flex-wrap justify-end">
                                    <div class="text-right text-base md:text-lg text-gray-400">
                                      <p class="font-bold text-pink-400">${o(i(a.date))}</p>
                                      <p class="mt-1">${o(a.time)}</p>
                                    </div>
                                    <button
                                      type="button"
                                      data-delete-id="${o(a.id)}"
                                      class="delete-button rounded-full bg-rose-50 text-rose-500 text-base md:text-lg font-bold px-4 py-2 border-2 border-rose-100"
                                    >
                                      刪除
                                    </button>
                                  </div>
                                </article>
                              `).join("")}
                        </div>
                      </section>
                    `).join(""):`
                <article class="player-placeholder rounded-[2rem] border-4 border-dashed border-pink-200 bg-white p-10 text-center text-gray-500 shadow-sm">
                  <div class="text-5xl mb-4">📝</div>
                  <h2 class="text-3xl md:text-4xl font-bold text-pink-500 mb-3">還沒有任何紀錄</h2>
                  <p class="text-lg md:text-xl">回到主頁完成一次番茄鐘後，就會在這裡看到你的歷史紀錄。</p>
                </article>
              `}
        </section>
      </section>
    </main>
  `,d.querySelectorAll("[data-delete-id]").forEach(l=>{l.addEventListener("click",()=>{const a=l.dataset.deleteId;a&&(p(a),n())})});const r=document.querySelector("#clear-history");r&&r.addEventListener("click",()=>{window.confirm("確定要清空全部紀錄嗎？這個操作無法復原。")&&(m(),n())})}n();
