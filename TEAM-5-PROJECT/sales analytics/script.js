const salesData = {
  kpis: {
    daily: { totalSales: 34850, salesGrowth: 15.4, totalOrders: 482, ordersGrowth: 9.1, averageOrderValue: 72.30, aovGrowth: 3.5, totalProfit: 12920, profitGrowth: 18.2 },
    weekly: { totalSales: 248590, salesGrowth: 14.2, totalOrders: 3420, ordersGrowth: 8.4, averageOrderValue: 72.68, aovGrowth: 2.1, totalProfit: 92410, profitGrowth: 18.6 },
    monthly: { totalSales: 1120400, salesGrowth: 16.8, totalOrders: 15280, ordersGrowth: 12.3, averageOrderValue: 73.32, aovGrowth: 4.0, totalProfit: 415000, profitGrowth: 21.4 },
    yearly: { totalSales: 12840000, salesGrowth: 24.5, totalOrders: 182400, ordersGrowth: 19.8, averageOrderValue: 70.40, aovGrowth: 4.8, totalProfit: 4750000, profitGrowth: 26.2 }
  },
  charts: {
    daily: [
      { label: '06:00', current: 1200, previous: 950, orders: 18, profit: 450 },
      { label: '09:00', current: 4500, previous: 3800, orders: 62, profit: 1680 },
      { label: '12:00', current: 8200, previous: 7100, orders: 115, profit: 3100 },
      { label: '15:00', current: 7900, previous: 6800, orders: 104, profit: 2950 },
      { label: '18:00', current: 9100, previous: 8000, orders: 128, profit: 3400 },
      { label: '21:00', current: 3950, previous: 3400, orders: 55, profit: 1440 }
    ],
    weekly: [
      { label: 'Mon', current: 32400, previous: 28900, orders: 440, profit: 12100 },
      { label: 'Tue', current: 38100, previous: 34200, orders: 520, profit: 14300 },
      { label: 'Wed', current: 35900, previous: 31500, orders: 490, profit: 13400 },
      { label: 'Thu', current: 41200, previous: 36800, orders: 570, profit: 15400 },
      { label: 'Fri', current: 48500, previous: 41200, orders: 680, profit: 18200 },
      { label: 'Sat', current: 29400, previous: 26500, orders: 390, profit: 11000 },
      { label: 'Sun', current: 23090, previous: 21000, orders: 330, profit: 8010 }
    ],
    monthly: [
      { label: 'Week 1', current: 260000, previous: 230000, orders: 3550, profit: 96000 },
      { label: 'Week 2', current: 285000, previous: 250000, orders: 3900, profit: 105000 },
      { label: 'Week 3', current: 275000, previous: 245000, orders: 3750, profit: 102000 },
      { label: 'Week 4', current: 300400, previous: 260000, orders: 4080, profit: 112000 }
    ],
    yearly: [
      { label: 'Q1', current: 2980000, previous: 2400000, orders: 42000, profit: 1100000 },
      { label: 'Q2', current: 3150000, previous: 2600000, orders: 45000, profit: 1180000 },
      { label: 'Q3', current: 3340000, previous: 2750000, orders: 48000, profit: 1250000 },
      { label: 'Q4', current: 3370000, previous: 2780000, orders: 47400, profit: 1220000 }
    ]
  },
  categories: [
    { category: 'Electronics', revenue: 94460, percentage: 38, itemsSold: 1240, color: '#2563EB' },
    { category: 'Apparel', revenue: 59660, percentage: 24, itemsSold: 1850, color: '#4F46E5' },
    { category: 'Home & Living', revenue: 42260, percentage: 17, itemsSold: 920, color: '#059669' },
    { category: 'Sports & Fitness', revenue: 32310, percentage: 13, itemsSold: 710, color: '#D97706' },
    { category: 'Books', revenue: 19900, percentage: 8, itemsSold: 640, color: '#7C3AED' }
  ],
  regions: [
    { region: 'North America', revenue: 104400, share: 42, growth: 16.5, customers: 1420 },
    { region: 'Europe', revenue: 72090, share: 29, growth: 12.1, customers: 980 },
    { region: 'Asia Pacific', revenue: 44740, share: 18, growth: 22.4, customers: 640 },
    { region: 'Latin America', revenue: 19880, share: 8, growth: 8.9, customers: 280 },
    { region: 'Middle East', revenue: 7380, share: 3, growth: 5.2, customers: 100 }
  ],
  products: [
    { id: 'prod-1', name: 'Nexus Pro Wireless Earbuds', category: 'Electronics', sales: 42300, quantity: 1410, growth: 28.4, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=120&q=80' },
    { id: 'prod-2', name: 'UltraWide Curved Monitor 34"', category: 'Electronics', sales: 38900, quantity: 485, growth: 18.2, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=120&q=80' },
    { id: 'prod-3', name: 'Merino Wool Minimalist Hoodie', category: 'Apparel', sales: 24500, quantity: 612, growth: 14.5, image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=120&q=80' },
    { id: 'prod-4', name: 'Ergonomic Standing Desk Frame', category: 'Home & Living', sales: 21200, quantity: 353, growth: 9.8, image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=120&q=80' },
    { id: 'prod-5', name: 'Titanium Smart Water Bottle', category: 'Sports & Fitness', sales: 15400, quantity: 440, growth: 32.1, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=120&q=80' }
  ],
  transactions: [
    { id: 'TXN-9842', customerName: 'Sarah Jenkins', customerEmail: 's.jenkins@acme.io', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80', productName: 'Nexus Pro Wireless Earbuds', category: 'Electronics', region: 'North America', channel: 'Direct Website', amount: 299.00, date: '2026-10-05 11:42', status: 'Completed' },
    { id: 'TXN-9841', customerName: 'Marcus Chen', customerEmail: 'm.chen@apex.tech', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80', productName: 'UltraWide Curved Monitor 34"', category: 'Electronics', region: 'Asia Pacific', channel: 'B2B Marketplace', amount: 799.00, date: '2026-10-05 10:15', status: 'Completed' },
    { id: 'TXN-9840', customerName: 'Elena Rostova', customerEmail: 'elena@vanguard.co', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80', productName: 'Merino Wool Minimalist Hoodie', category: 'Apparel', region: 'Europe', channel: 'Mobile App', amount: 145.00, date: '2026-10-05 09:28', status: 'Completed' }
  ]
};

let currentFilter = { timeRange: 'weekly', category: 'all', region: 'all', channel: 'all', comparePrevious: true, metric: 'current' };

function formatCurrency(val) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
}

function renderKPIs() {
  const kpi = salesData.kpis[currentFilter.timeRange];
  if (!kpi) return;
  document.getElementById('kpi-sales-val').textContent = formatCurrency(kpi.totalSales);
  document.getElementById('kpi-sales-growth').textContent = `+${kpi.salesGrowth}%`;
  document.getElementById('kpi-orders-val').textContent = kpi.totalOrders.toLocaleString();
  document.getElementById('kpi-orders-growth').textContent = `+${kpi.ordersGrowth}%`;
  document.getElementById('kpi-aov-val').textContent = `$${kpi.averageOrderValue.toFixed(2)}`;
  document.getElementById('kpi-aov-growth').textContent = `+${kpi.aovGrowth}%`;
  document.getElementById('kpi-profit-val').textContent = formatCurrency(kpi.totalProfit);
  document.getElementById('kpi-profit-growth').textContent = `+${kpi.profitGrowth}%`;
  document.getElementById('kpi-growth-val').textContent = `+${kpi.salesGrowth}%`;
}

function renderChart() {
  const data = salesData.charts[currentFilter.timeRange];
  const chartContainer = document.getElementById('chart-bars-container');
  if (!chartContainer || !data) return;
  chartContainer.innerHTML = '';
  const metric = currentFilter.metric;
  let maxVal = 100;
  data.forEach(d => {
    let val = metric === 'orders' ? d.orders * 100 : metric === 'profit' ? d.profit : d.current;
    if (val > maxVal) maxVal = val;
  });
  data.forEach(item => {
    let currVal = metric === 'orders' ? item.orders * 100 : metric === 'profit' ? item.profit : item.current;
    let prevVal = metric === 'orders' ? item.orders * 88 : metric === 'profit' ? item.previous * 0.35 : item.previous;
    let heightPct = Math.min(Math.max((currVal / maxVal) * 100, 10), 100);
    let prevHeightPct = Math.min(Math.max((prevVal / maxVal) * 100, 10), 100);
    let displayVal = metric === 'orders' ? item.orders : formatCurrency(currVal);
    const col = document.createElement('div');
    col.className = 'bar-column';
    col.innerHTML = `
      <div class="chart-tooltip">${item.label}: ${displayVal}</div>
      <div class="bar-pair">
        ${currentFilter.comparePrevious ? `<div class="bar-prev" style="height: ${prevHeightPct}%"></div>` : ''}
        <div class="bar-curr" style="height: ${heightPct}%"></div>
      </div>
      <span class="bar-label tabular-nums">${item.label}</span>
    `;
    chartContainer.appendChild(col);
  });
}

function renderCategories() {
  const container = document.getElementById('category-list-container');
  const stack = document.getElementById('category-stack-bar');
  if (!container || !stack) return;
  const cats = currentFilter.category === 'all' ? salesData.categories : salesData.categories.filter(c => c.category === currentFilter.category);
  stack.innerHTML = '';
  cats.forEach(c => {
    const seg = document.createElement('div');
    seg.className = 'cat-stack-segment';
    seg.style.width = `${c.percentage}%`;
    seg.style.backgroundColor = c.color;
    stack.appendChild(seg);
  });
  container.innerHTML = '';
  cats.forEach(c => {
    const item = document.createElement('div');
    item.className = 'category-item';
    item.innerHTML = `
      <div class="cat-meta">
        <span class="cat-color-dot" style="background-color: ${c.color}"></span>
        <div>
          <div class="cat-name">${c.category}</div>
          <div class="cat-units tabular-nums">${c.itemsSold.toLocaleString()} units sold</div>
        </div>
      </div>
      <div style="text-align: right">
        <div class="cat-rev tabular-nums">${formatCurrency(c.revenue)}</div>
        <div class="cat-share tabular-nums">${c.percentage}% share</div>
      </div>
    `;
    container.appendChild(item);
  });
}

function renderRegions() {
  const container = document.getElementById('region-list-container');
  if (!container) return;
  const regs = currentFilter.region === 'all' ? salesData.regions : salesData.regions.filter(r => r.region === currentFilter.region);
  container.innerHTML = '';
  regs.forEach(r => {
    const item = document.createElement('div');
    item.className = 'region-item';
    item.innerHTML = `
      <div class="region-row-top">
        <span class="region-name">${r.region}</span>
        <span class="region-rev tabular-nums">${formatCurrency(r.revenue)}</span>
      </div>
      <div class="region-bar-bg">
        <div class="region-bar-fill" style="width: ${r.share}%"></div>
      </div>
      <div class="region-row-sub tabular-nums">
        <span>${r.share}% share</span>
        <span style="color: var(--color-success); font-weight: 600;">+${r.growth}%</span>
      </div>
    `;
    container.appendChild(item);
  });
}

function renderProducts() {
  const tbody = document.getElementById('top-products-tbody');
  if (!tbody) return;
  const prods = currentFilter.category === 'all' ? salesData.products : salesData.products.filter(p => p.category === currentFilter.category);
  tbody.innerHTML = '';
  prods.forEach((p, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <div class="product-cell">
          <span class="product-rank tabular-nums">${idx + 1}</span>
          <img class="product-img" src="${p.image}" alt="${p.name}">
          <span class="product-title">${p.name}</span>
        </div>
      </td>
      <td><span class="tag-badge">${p.category}</span></td>
      <td class="tabular-nums" style="text-align: right">${p.quantity.toLocaleString()}</td>
      <td class="tabular-nums" style="text-align: right; font-weight: 700;">${formatCurrency(p.sales)}</td>
      <td class="tabular-nums" style="text-align: right; color: var(--color-success); font-weight: 600;">+${p.growth}%</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderTransactions() {
  const tbody = document.getElementById('transactions-tbody');
  if (!tbody) return;
  const txs = salesData.transactions.filter(t => {
    if (currentFilter.category !== 'all' && t.category !== currentFilter.category) return false;
    if (currentFilter.region !== 'all' && t.region !== currentFilter.region) return false;
    if (currentFilter.channel !== 'all' && t.channel !== currentFilter.channel) return false;
    return true;
  });
  tbody.innerHTML = '';
  txs.forEach(t => {
    const tr = document.createElement('tr');
    let statusClass = 'status-completed';
    if (t.status === 'Pending') statusClass = 'status-pending';
    if (t.status === 'Refunded') statusClass = 'status-refunded';
    tr.innerHTML = `
      <td>
        <div class="avatar-cell">
          <img class="customer-avatar" src="${t.avatar}" alt="${t.customerName}">
          <div>
            <div style="font-weight: 600; font-size: 13px;">${t.customerName}</div>
            <div class="tabular-nums" style="font-size: 11px; color: var(--text-muted);">${t.customerEmail}</div>
          </div>
        </div>
      </td>
      <td>
        <div style="font-weight: 500;">${t.productName}</div>
        <div style="font-size: 11px; color: var(--text-muted);">${t.category}</div>
      </td>
      <td><span class="tag-badge">${t.channel}</span></td>
      <td class="tabular-nums" style="font-size: 12px; color: var(--text-secondary);">${t.date}</td>
      <td class="tabular-nums" style="text-align: right; font-weight: 700;">${formatCurrency(t.amount)}</td>
      <td style="text-align: right"><span class="status-badge ${statusClass}">${t.status}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderAll() {
  renderKPIs();
  renderChart();
  renderCategories();
  renderRegions();
  renderProducts();
  renderTransactions();
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.time-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.time-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter.timeRange = e.target.dataset.range;
      renderAll();
    });
  });

  document.querySelectorAll('.metric-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.metric-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter.metric = e.target.dataset.metric;
      renderChart();
    });
  });

  document.getElementById('select-category')?.addEventListener('change', (e) => {
    currentFilter.category = e.target.value;
    renderAll();
  });
  document.getElementById('select-region')?.addEventListener('change', (e) => {
    currentFilter.region = e.target.value;
    renderAll();
  });
  document.getElementById('select-channel')?.addEventListener('change', (e) => {
    currentFilter.channel = e.target.value;
    renderAll();
  });
  document.getElementById('checkbox-compare')?.addEventListener('change', (e) => {
    currentFilter.comparePrevious = e.target.checked;
    renderChart();
  });
  document.getElementById('btn-export-csv')?.addEventListener('click', () => {
    alert('Sales analytics report exported successfully as CSV.');
  });
  document.getElementById('btn-ai-insights')?.addEventListener('click', () => {
    document.getElementById('ai-modal-overlay').classList.add('open');
  });
  document.getElementById('btn-close-modal')?.addEventListener('click', () => {
    document.getElementById('ai-modal-overlay').classList.remove('open');
  });
  document.getElementById('btn-modal-action-close')?.addEventListener('click', () => {
    document.getElementById('ai-modal-overlay').classList.remove('open');
  });

  renderAll();
});