/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

document.addEventListener('DOMContentLoaded', () => {
  let currentTimeRange = '30d';
  let comparePrevious = true;
  let isLiveActive = true;
  let liveUsers = 14280;

  // Live telemetry counter
  setInterval(() => {
    if (isLiveActive) {
      liveUsers += Math.floor(Math.random() * 7) - 3;
      const el = document.getElementById('live-users-count');
      if (el) el.textContent = liveUsers.toLocaleString();
    }
  }, 3000);

  // Data generator based on range
  function getData() {
    const mult = currentTimeRange === '7d' ? 0.35 : currentTimeRange === '30d' ? 1.0 : currentTimeRange === '90d' ? 2.8 : currentTimeRange === '6m' ? 5.2 : 10.5;
    return {
      totalUsers: Math.round(48290 * mult),
      dau: liveUsers,
      mau: Math.round(38400 * mult),
      newUsers: Math.round(8420 * mult),
      returning: Math.round(39870 * mult),
      sessions: Math.round(124800 * mult),
      events: Math.round(942150 * mult)
    };
  }

  // Render KPIs
  function renderKPIs() {
    const d = getData();
    const topKpisEl = document.getElementById('top-kpis');
    topKpisEl.innerHTML = `
      <div class="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/60">
        <span class="text-xs font-semibold text-slate-500 uppercase">Total Users</span>
        <h3 class="text-2xl font-bold text-slate-900 tabular-nums mt-2">${d.totalUsers.toLocaleString()}</h3>
        ${comparePrevious ? '<span class="text-xs font-medium text-emerald-600 mt-1 block">↗ +14.2% vs prev</span>' : ''}
      </div>
      <div class="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/60">
        <span class="text-xs font-semibold text-slate-500 uppercase">Active Users (DAU)</span>
        <h3 class="text-2xl font-bold text-slate-900 tabular-nums mt-2">${d.dau.toLocaleString()}</h3>
        ${comparePrevious ? '<span class="text-xs font-medium text-emerald-600 mt-1 block">↗ +8.6% vs prev</span>' : ''}
      </div>
      <div class="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/60">
        <span class="text-xs font-semibold text-slate-500 uppercase">Monthly Active (MAU)</span>
        <h3 class="text-2xl font-bold text-slate-900 tabular-nums mt-2">${d.mau.toLocaleString()}</h3>
        ${comparePrevious ? '<span class="text-xs font-medium text-emerald-600 mt-1 block">↗ +11.8% vs prev</span>' : ''}
      </div>
      <div class="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/60">
        <span class="text-xs font-semibold text-slate-500 uppercase">New / Returning</span>
        <h3 class="text-xl font-bold text-slate-900 tabular-nums mt-2">${d.newUsers.toLocaleString()} <span class="text-xs font-normal text-slate-400">new</span></h3>
        <span class="text-xs text-slate-500 mt-1 block">${d.returning.toLocaleString()} returning users</span>
      </div>
    `;

    const secKpisEl = document.getElementById('secondary-kpis');
    secKpisEl.innerHTML = `
      <div class="bg-white rounded-xl p-4 shadow-xs border border-slate-200/60"><span class="text-[11px] font-medium text-slate-400 block mb-1">Engagement Rate</span><span class="text-lg font-bold text-slate-900">68.4%</span><span class="text-[10px] text-emerald-600 block mt-0.5">+2.4%</span></div>
      <div class="bg-white rounded-xl p-4 shadow-xs border border-slate-200/60"><span class="text-[11px] font-medium text-slate-400 block mb-1">Retention Rate</span><span class="text-lg font-bold text-slate-900">84.2%</span><span class="text-[10px] text-emerald-600 block mt-0.5">+1.2%</span></div>
      <div class="bg-white rounded-xl p-4 shadow-xs border border-slate-200/60"><span class="text-[11px] font-medium text-slate-400 block mb-1">Churn Rate</span><span class="text-lg font-bold text-slate-900">2.8%</span><span class="text-[10px] text-emerald-600 block mt-0.5">-0.5%</span></div>
      <div class="bg-white rounded-xl p-4 shadow-xs border border-slate-200/60"><span class="text-[11px] font-medium text-slate-400 block mb-1">Avg Session Duration</span><span class="text-lg font-bold text-slate-900">4m 18s</span><span class="text-[10px] text-emerald-600 block mt-0.5">+14s</span></div>
      <div class="bg-white rounded-xl p-4 shadow-xs border border-slate-200/60"><span class="text-[11px] font-medium text-slate-400 block mb-1">Total Sessions</span><span class="text-lg font-bold text-slate-900">${d.sessions.toLocaleString()}</span><span class="text-[10px] text-emerald-600 block mt-0.5">+9.3%</span></div>
      <div class="bg-white rounded-xl p-4 shadow-xs border border-slate-200/60"><span class="text-[11px] font-medium text-slate-400 block mb-1">Total Events</span><span class="text-lg font-bold text-slate-900">${(d.events / 1000).toFixed(1)}k</span><span class="text-[10px] text-emerald-600 block mt-0.5">+16.4%</span></div>
    `;
  }

  // Render Chart
  function renderChart() {
    const container = document.getElementById('chart-container');
    container.innerHTML = `
      <svg class="w-full h-full overflow-visible" viewBox="0 0 700 240" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="700" y2="0" stroke="#f1f5f9" stroke-width="1" />
        <line x1="0" y1="60" x2="700" y2="60" stroke="#f1f5f9" stroke-width="1" />
        <line x1="0" y1="120" x2="700" y2="120" stroke="#f1f5f9" stroke-width="1" />
        <line x1="0" y1="180" x2="700" y2="180" stroke="#f1f5f9" stroke-width="1" />
        <path d="M0,150 Q175,100 350,80 T700,40 L700,240 L0,240 Z" fill="rgba(37,99,235,0.1)" />
        <path d="M0,150 Q175,100 350,80 T700,40" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" />
        <circle cx="0" cy="150" r="6" class="fill-white stroke-blue-600 stroke-[3px]" />
        <circle cx="233" cy="110" r="6" class="fill-white stroke-blue-600 stroke-[3px]" />
        <circle cx="466" cy="80" r="6" class="fill-white stroke-blue-600 stroke-[3px]" />
        <circle cx="700" cy="40" r="6" class="fill-white stroke-blue-600 stroke-[3px]" />
      </svg>
      <div class="flex justify-between text-xs text-slate-400 mt-3 px-1">
        <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Current</span>
      </div>
    `;
  }

  // Render Acquisition & Funnel
  function renderAcquisitionAndFunnel() {
    const acq = [
      { name: 'Organic Search', users: '20,280', pct: 42 },
      { name: 'Direct Traffic', users: '13,520', pct: 28 },
      { name: 'Social Referrals', users: '8,690', pct: 18 },
      { name: 'Paid Campaigns', users: '5,800', pct: 12 }
    ];
    document.getElementById('acquisition-list').innerHTML = acq.map(a => `
      <div class="space-y-1.5">
        <div class="flex justify-between text-xs"><span class="font-medium text-slate-700">${a.name}</span><span class="font-semibold text-slate-950">${a.users} (${a.pct}%)</span></div>
        <div class="h-2 w-full bg-slate-100 rounded-full overflow-hidden"><div class="h-full bg-blue-600 rounded-full" style="width: ${a.pct}%"></div></div>
      </div>
    `).join('');

    const funnel = [
      { step: '1. Landing Visitors', count: '100,000', rate: '100%' },
      { step: '2. Sign-Up Initiated', count: '48,290', rate: '48.3%' },
      { step: '3. Onboarding Completed', count: '36,400', rate: '36.4%' },
      { step: '4. Active Power User', count: '14,850', rate: '14.8%' }
    ];
    document.getElementById('funnel-list').innerHTML = funnel.map(f => `
      <div class="flex items-center justify-between text-xs p-2.5 bg-slate-50 rounded-xl">
        <span class="font-medium text-slate-700">${f.step}</span>
        <div class="flex items-center gap-3"><span class="text-slate-500">${f.count}</span><span class="font-bold text-blue-600">${f.rate}</span></div>
      </div>
    `).join('');
  }

  // Render Cohorts
  function renderCohorts() {
    const rows = [
      { cohort: 'Feb 24 - Mar 02', users: '2,410', w0: '100%', w1: '82%', w2: '74%', w3: '68%', w4: '65%' },
      { cohort: 'Mar 03 - Mar 09', users: '2,840', w0: '100%', w1: '85%', w2: '78%', w3: '72%', w4: '70%' },
      { cohort: 'Mar 10 - Mar 16', users: '3,120', w0: '100%', w1: '88%', w2: '81%', w3: '76%', w4: '—' },
      { cohort: 'Mar 17 - Mar 23', users: '2,950', w0: '100%', w1: '84%', w2: '77%', w3: '—', w4: '—' },
      { cohort: 'Mar 24 - Mar 30', users: '3,420', w0: '100%', w1: '89%', w2: '—', w3: '—', w4: '—' }
    ];
    document.getElementById('cohort-table-body').innerHTML = rows.map(r => `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-3 font-semibold text-slate-800">${r.cohort}</td>
        <td class="py-3 text-slate-500">${r.users}</td>
        <td class="py-3 font-medium text-blue-600 bg-blue-50/55 px-2 rounded">${r.w0}</td>
        <td class="py-3 font-medium text-emerald-700 bg-emerald-50/70 px-2 rounded">${r.w1}</td>
        <td class="py-3 font-medium text-emerald-600 bg-emerald-50/40 px-2 rounded">${r.w2}</td>
        <td class="py-3 font-medium text-slate-600">${r.w3}</td>
        <td class="py-3 font-medium text-slate-600">${r.w4}</td>
      </tr>
    `).join('');
  }

  // Render Geo & Segments
  function renderGeoAndSegments() {
    const geo = [
      { country: 'United States', users: '21,400', share: '44%', eng: '74.2%' },
      { country: 'Germany', users: '8,900', share: '18%', eng: '69.5%' },
      { country: 'United Kingdom', users: '7,200', share: '15%', eng: '71.0%' },
      { country: 'Japan', users: '5,100', share: '11%', eng: '65.8%' }
    ];
    document.getElementById('geo-list').innerHTML = geo.map(g => `
      <div class="p-3 rounded-xl border bg-slate-50 border-slate-100">
        <div class="flex items-center justify-between mb-1">
          <span class="text-xs font-bold text-slate-800">${g.country}</span>
          <span class="text-xs font-bold text-slate-900">${g.users}</span>
        </div>
        <div class="flex items-center justify-between text-[11px] text-slate-500">
          <span>Share: ${g.share}</span><span>Engagement: <strong class="text-emerald-600">${g.eng}</strong></span>
        </div>
      </div>
    `).join('');

    const segs = [
      { title: 'New Users', count: '8,420', desc: 'Registered in last 30 days', dot: 'bg-blue-600' },
      { title: 'Returning Users', count: '39,870', desc: 'Visited 2+ times this month', dot: 'bg-emerald-600' },
      { title: 'Highly Engaged', count: '14,250', desc: 'DAU / active >20 days/mo', dot: 'bg-indigo-600' },
      { title: 'At Risk', count: '3,120', desc: 'No login in past 14 days', dot: 'bg-amber-600' },
      { title: 'Churned', count: '1,240', desc: 'Cancelled or inactive 60d+', dot: 'bg-rose-600' }
    ];
    document.getElementById('segments-grid').innerHTML = segs.map(s => `
      <div class="bg-slate-50 rounded-xl p-4 border border-slate-100">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold text-slate-900">${s.title}</span>
          <span class="w-2.5 h-2.5 rounded-full ${s.dot}"></span>
        </div>
        <div class="text-xl font-bold text-slate-900 mb-1">${s.count}</div>
        <p class="text-[11px] text-slate-500">${s.desc}</p>
      </div>
    `).join('');
  }

  // Render Activity Log
  function renderActivityLog() {
    const act = [
      { user: 'Sarah Jenkins', email: 'sarah.j@acme.co', action: 'Upgraded subscription', target: 'Enterprise Tier', time: '2 mins ago', status: 'success' },
      { user: 'Marcus Chen', email: 'm.chen@fintech.io', action: 'Completed onboarding', target: 'Workspace Setup', time: '7 mins ago', status: 'success' },
      { user: 'Elena Rostova', email: 'elena@designlab.xyz', action: 'Exported analytics report', target: 'Q3 Cohort.csv', time: '14 mins ago', status: 'success' },
      { user: 'David Kim', email: 'dkim@nexus.org', action: 'Invited team members', target: '4 seats added', time: '25 mins ago', status: 'success' }
    ];
    document.getElementById('activity-list').innerHTML = act.map(a => `
      <div class="py-3 flex items-center justify-between hover:bg-slate-50/80 px-2 rounded-xl transition-all cursor-pointer">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs flex items-center justify-center">${a.user[0]}</div>
          <div>
            <div class="flex items-center gap-2"><span class="text-xs font-semibold text-slate-900">${a.user}</span><span class="text-slate-300">·</span><span class="text-xs text-slate-500">${a.action}</span></div>
            <div class="text-[11px] text-slate-400 mt-0.5">${a.email} · <span class="text-blue-600 font-medium">${a.target}</span></div>
          </div>
        </div>
        <div class="text-right">
          <span class="text-[11px] text-slate-400 block">${a.time}</span>
          <span class="text-[10px] uppercase font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">${a.status}</span>
        </div>
      </div>
    `).join('');
  }

  // Event Listeners
  document.querySelectorAll('#timerange-buttons button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('#timerange-buttons button').forEach(b => b.className = 'px-3 py-1.5 rounded-lg transition-all text-slate-600 hover:text-slate-900');
      e.target.className = 'px-3 py-1.5 rounded-lg transition-all bg-white text-slate-900 shadow-xs font-semibold';
      currentTimeRange = e.target.getAttribute('data-range');
      document.getElementById('kpi-subtitle').textContent = `Showing metrics for ${e.target.textContent} (${comparePrevious ? 'vs previous period' : 'baseline'})`;
      renderKPIs();
    });
  });

  const compareBtn = document.getElementById('compare-btn');
  compareBtn.addEventListener('click', () => {
    comparePrevious = !comparePrevious;
    compareBtn.className = comparePrevious ? 'flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border bg-blue-50 border-blue-200 text-blue-700 transition-all' : 'flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border bg-slate-50 border-slate-200 text-slate-600 transition-all';
    compareBtn.innerHTML = `<span>Compare: ${comparePrevious ? 'On' : 'Off'}</span>`;
    renderKPIs();
  });

  const liveBtn = document.getElementById('live-btn');
  liveBtn.addEventListener('click', () => {
    isLiveActive = !isLiveActive;
    liveBtn.className = isLiveActive ? 'flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border bg-emerald-50 border-emerald-200 text-emerald-700 transition-all' : 'flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border bg-slate-50 border-slate-200 text-slate-600 transition-all';
    liveBtn.innerHTML = `<span class="w-2 h-2 rounded-full ${isLiveActive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}"></span><span>${isLiveActive ? 'Live' : 'Paused'}</span>`;
  });

  const exportBtn = document.getElementById('export-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const exportModal = document.getElementById('export-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');

  exportBtn.addEventListener('click', () => {
    modalBackdrop.classList.remove('hidden');
    exportModal.classList.remove('hidden');
  });

  closeModalBtn.addEventListener('click', () => {
    modalBackdrop.classList.add('hidden');
    exportModal.classList.add('hidden');
  });

  document.getElementById('confirm-export-btn').addEventListener('click', () => {
    alert('Export downloaded successfully!');
    modalBackdrop.classList.add('hidden');
    exportModal.classList.add('hidden');
  });

  // Initial Render
  renderKPIs();
  renderChart();
  renderAcquisitionAndFunnel();
  renderCohorts();
  renderGeoAndSegments();
  renderActivityLog();
});