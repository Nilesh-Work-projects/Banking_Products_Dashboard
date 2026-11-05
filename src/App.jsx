import React, { useMemo, useState } from 'react';
import { Search, Bell, ChevronDown, ArrowUpRight, Wallet, CreditCard, Landmark, TrendingUp, CircleHelp, Plus, SlidersHorizontal, CheckCircle2, Clock3, Menu } from 'lucide-react';

const products = [
  { id: 1, name: 'Everyday Savings', category: 'Savings', type: 'Savings account', status: 'Active', metricLabel: 'Current balance', metric: '₹ 2,48,560.00', secondaryLabel: 'Interest rate', secondary: '4.25% p.a.', icon: Wallet, tone: 'mint', last4: '•• 2841' },
  { id: 2, name: 'Platinum Rewards', category: 'Cards', type: 'Credit card', status: 'Active', metricLabel: 'Available limit', metric: '₹ 1,35,000', secondaryLabel: 'Total credit limit', secondary: '₹ 2,00,000', icon: CreditCard, tone: 'violet', last4: '•• 6082' },
  { id: 3, name: 'Home Advantage', category: 'Loans', type: 'Home loan', status: 'Ongoing', metricLabel: 'Outstanding amount', metric: '₹ 28,45,000', secondaryLabel: 'Next payment', secondary: '₹ 32,400 · 12 Nov', icon: Landmark, tone: 'blue', last4: 'HL-1904' },
  { id: 4, name: 'Growth Portfolio', category: 'Wealth', type: 'Investment', status: 'Active', metricLabel: 'Portfolio value', metric: '₹ 5,72,840', secondaryLabel: 'Returns this year', secondary: '+8.6%', icon: TrendingUp, tone: 'amber', last4: 'INV-743' },
];

const categories = ['All products', 'Savings', 'Cards', 'Loans', 'Wealth'];

function ProductCard({ product, onDetails }) {
  const Icon = product.icon;
  return <article className="product-card">
    <div className="card-top">
      <div className={`product-icon ${product.tone}`}><Icon size={21} strokeWidth={1.8}/></div>
      <span className={`status ${product.status === 'Ongoing' ? 'ongoing' : ''}`}><span className="status-dot"/>{product.status}</span>
    </div>
    <div className="product-heading"><div><p className="eyebrow">{product.type}</p><h3>{product.name}</h3></div><span className="account-id">{product.last4}</span></div>
    <div className="metric-block"><p>{product.metricLabel}</p><strong>{product.metric}</strong></div>
    <div className="card-bottom"><div><span>{product.secondaryLabel}</span><b>{product.secondary}</b></div><button className="details-btn" onClick={() => onDetails(product)}>View details <ArrowUpRight size={15}/></button></div>
  </article>
}

export default function App() {
  const [category, setCategory] = useState('All products');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const visible = useMemo(() => products.filter(p => (category === 'All products' || p.category === category) && `${p.name} ${p.type} ${p.status}`.toLowerCase().includes(search.toLowerCase())), [category, search]);
  return <div className="app-shell">
    <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
      <div className="brand"><div className="brand-mark"><Landmark size={20}/></div><span>nexa<span className="brand-light">bank</span></span></div>
      <div className="nav-label">WORKSPACE</div>
      <nav><a className="nav-item active"><Wallet size={18}/> Overview</a><a className="nav-item"><CreditCard size={18}/> My products</a><a className="nav-item"><TrendingUp size={18}/> Insights</a></nav>
      <div className="sidebar-bottom"><div className="help-card"><CircleHelp size={18}/><div><b>Need a hand?</b><span>Visit our help center</span></div><ArrowUpRight size={15}/></div><div className="profile"><div className="avatar">NS</div><div><b>Nilesh S.</b><span>Personal account</span></div><ChevronDown size={16}/></div></div>
    </aside>
    <main className="main-content">
      <header className="topbar"><button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}><Menu size={20}/></button><div className="breadcrumb">Workspace <span>/</span> <b>Overview</b></div><div className="top-actions"><button className="icon-button" aria-label="Notifications"><Bell size={18}/><i/></button><div className="top-avatar">NS</div></div></header>
      <section className="welcome-row"><div><p className="eyebrow welcome-eyebrow">THURSDAY, 05 NOVEMBER 2026</p><h1>Your banking, <em>in one place.</em></h1><p className="welcome-sub">A clear view of your products and finances.</p></div><button className="primary-btn" onClick={() => alert('Explore products — demo action')}><Plus size={17}/> Explore products</button></section>
      <section className="summary-grid">
        <div className="summary-card balance-card"><div className="summary-label">Total relationship value <span className="round-icon"><Wallet size={16}/></span></div><div className="summary-value">₹ 8,21,400<span>.00</span></div><div className="summary-foot"><span className="trend"><TrendingUp size={14}/> 6.8%</span><span>vs. last month</span><div className="sparkline"><svg viewBox="0 0 112 34" preserveAspectRatio="none"><path d="M1 29 L14 23 L25 26 L38 12 L49 17 L62 8 L74 14 L86 4 L98 9 L111 1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div></div>
        <div className="summary-card"><div className="summary-label">Active products <span className="round-icon mint"><CheckCircle2 size={16}/></span></div><div className="summary-value">4 <small>products</small></div><div className="summary-foot"><span className="summary-muted">Across 4 categories</span><div className="mini-bars"><i/><i/><i/><i/></div></div></div>
        <div className="summary-card"><div className="summary-label">Upcoming payment <span className="round-icon peach"><Clock3 size={16}/></span></div><div className="summary-value">₹ 32,400</div><div className="summary-foot"><span className="summary-muted">Home loan · 12 Nov 2026</span><span className="due-tag">In 7 days</span></div></div>
      </section>
      <section className="products-section"><div className="section-heading"><div><h2>Your products</h2><p>Manage and track all your banking products.</p></div><button className="filter-button"><SlidersHorizontal size={16}/> Filters</button></div>
        <div className="toolbar"><div className="tabs">{categories.map(c => <button key={c} className={category === c ? 'tab active' : 'tab'} onClick={() => setCategory(c)}>{c}{c === 'All products' && <span className="tab-count">4</span>}</button>)}</div><label className="search-box"><Search size={17}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products..." /></label></div>
        <div className="product-grid">{visible.map(p => <ProductCard key={p.id} product={p} onDetails={setSelected}/>)}
          {visible.length === 0 && <div className="empty-state"><Search size={25}/><h3>No products found</h3><p>Try another search or category.</p><button onClick={() => {setSearch('');setCategory('All products')}}>Clear filters</button></div>}
        </div>
        <div className="section-footer"><span>Showing <b>{visible.length}</b> of <b>{products.length}</b> products</span><span>Data refreshed just now <i className="refresh-dot"/></span></div>
      </section>
      <footer>© 2026 Nexa Bank <span>•</span> A smarter way to bank <a href="#privacy">Privacy</a><a href="#support">Support</a></footer>
    </main>
    {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><div className="modal" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)}>×</button><div className={`product-icon ${selected.tone}`}><selected.icon size={22}/></div><p className="eyebrow">{selected.type}</p><h2>{selected.name}</h2><span className="status"><span className="status-dot"/>{selected.status}</span><div className="modal-metric"><span>{selected.metricLabel}</span><b>{selected.metric}</b></div><div className="modal-metric"><span>{selected.secondaryLabel}</span><b>{selected.secondary}</b></div><button className="primary-btn full" onClick={() => setSelected(null)}>Done</button><p className="demo-note">Demo screen · Sample banking data</p></div></div>}
  </div>
}
