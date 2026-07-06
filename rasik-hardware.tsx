import { useState } from "react";

const RED = "#D0161B";
const LIGHT = "#F8F8F8";
const BORDER = "#E4E4E4";
const STEEL = "#606060";
const NAVY = "#1E2535";

const PRODUCTS = [
  { id:1,  name:"Basin / Table Top 17 x 12", cat:"Hardware", img:"https://rasikhardware.com/wp-content/uploads/2026/04/bf4cd80b-f1b0-4513-ac87-8d6196f99f9f-300x300.jpg", orig:1200,  sale:720   },
  { id:2,  name:"Cera Jeet Jolly 14", cat:"Hardware", img:"https://rasikhardware.com/wp-content/uploads/2026/04/cbaa73a4-1f5e-4b5b-860f-24107c58ab5a-300x300.jpg", orig:2400,  sale:1440  },
  { id:3,  name:"Elvis Accura Wall Hung with UF Seat Cover – White 510×355×370mm", cat:"Hardware", img:"https://rasikhardware.com/wp-content/uploads/2026/02/Accura.jpg", orig:13999, sale:11999 },
  { id:4,  name:"Elvis Allied Angle Cock", cat:"Hardware", img:"https://rasikhardware.com/wp-content/uploads/2026/04/870558df-6a6d-4872-af17-1908f0529dda-300x300.jpg", orig:615,   sale:492   },
  { id:5,  name:"Elvis AXR Con Body of Diverter + Expo Part (Cartridge 40mm) 915045K", cat:"Hardware", img:"https://rasikhardware.com/wp-content/uploads/2026/03/unnamed-14-300x300.jpg", orig:6224,  sale:4979  },
  { id:6,  name:"Elvis BGR Allied Angle Cock 15mm", cat:"Hardware", img:"https://rasikhardware.com/wp-content/uploads/2026/04/2f5187c3-14ca-4437-8af6-8302ee885e2b-300x300.jpg", orig:1080,  sale:810   },
  { id:7,  name:"Elvis Cubix 15 x 15", cat:"Hardware", img:"https://rasikhardware.com/wp-content/uploads/2026/04/ea7e2c6b-4cdc-43e9-bc57-891f293acaf2-300x300.jpg", orig:5990,  sale:3594  },
  { id:8,  name:"Elvis EDR Expo Set – Divertor Body + Expo Part Cartridge 40mm", cat:"Hardware", img:"https://rasikhardware.com/wp-content/uploads/2026/03/Screenshot-2026-03-16-162435-300x300.png", orig:5500,  sale:4400  },
  { id:9,  name:"Elvis Euro Smart Wall Hung with UF Seat Cover – White 485×360×360mm", cat:"Hardware", img:"https://rasikhardware.com/wp-content/uploads/2026/02/Eurosmart.jpg", orig:13999, sale:11199 },
  { id:10, name:"Elvis FG Angle Cock Round Heavy with Flange", cat:"Hardware", img:"https://rasikhardware.com/wp-content/uploads/2026/04/fd059b4c-e895-41b8-a908-09ec42e6239b-300x300.jpg", orig:1080,  sale:810   },
  { id:11, name:"Elvis Floor Drain MB 150 x 150", cat:"Hardware", img:"https://rasikhardware.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-06-at-6.29.46-PM-300x300.jpeg", orig:1093,  sale:875   },
  { id:12, name:"Elvis Floor Drain RG 150 x 150", cat:"Hardware", img:"https://rasikhardware.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-06-at-6.29.45-PM-300x300.jpeg", orig:1093,  sale:875   },
];

const BRANDS = [
  { n:"01", title:"Elvis India — Luxelet", desc:"Brand associated with Elvis Sanitation Pvt Ltd, manufacturing premium sanitaryware and bathroom fittings across India." },
  { n:"02", title:"ELVIS Sanitation", desc:"PVC faucet manufacturers offering premium sanitation solutions for residential and commercial properties." },
  { n:"03", title:"Finolex", desc:"India's only large, vertically integrated manufacturer of PVC pipes and fittings with its own PVC resin production." },
  { n:"04", title:"Kranti Water Meter", desc:"Prominent Indian water meter manufacturer since 1980. Domestic, agricultural, industrial and commercial meters." },
  { n:"05", title:"Zoloto Valves", desc:"Since 1966 — leading manufacturer of Bronze, Brass, Cast Iron, Forged Steel & Stainless Steel Valves." },
  { n:"06", title:"Woven Gold India", desc:"Premium bathtubs, Jacuzzi, Spa, Steam, Sauna, Chiller Bath, Multi Flow Showers. 30 years of elevated bathrooms." },
  { n:"07", title:"Havells", desc:"Leading FMEG company with a wide range of electrical products including geysers, wiring, switches and lighting." },
  { n:"08", title:"Fossil Flow", desc:"Reliable plumbing and flow control solutions trusted by contractors and professionals across Maharashtra." },
];

const fmt = n => "₹" + n.toLocaleString("en-IN");

// ── Logo SVG ────────────────────────────────────────────────
function Logo({ size = 36 }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:10 }}>
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <ellipse cx="40" cy="10" rx="13" ry="4" stroke="#D0161B" strokeWidth="2.5"/>
        <line x1="40" y1="14" x2="40" y2="20" stroke="#D0161B" strokeWidth="2.5"/>
        <path d="M33 20 Q28 20 26 27 L24 38 Q23 42 20 44 L13 49 Q10 51 10 54" stroke="#AAA" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <line x1="24" y1="30" x2="46" y2="30" stroke="#D0161B" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M46 30 Q52 30 52 36 L52 44 Q52 48 48 50 L42 52 Q38 54 38 58" stroke="#AAA" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </svg>
      <div style={{ lineHeight:1 }}>
        <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"1.5rem", color:RED, letterSpacing:".06em", lineHeight:1 }}>RASIK</div>
        <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"1.5rem", color:RED, letterSpacing:".06em", lineHeight:1, marginTop:-3 }}>HARDWARE</div>
        <div style={{ fontSize:".58rem", color:"#999", letterSpacing:".12em", textTransform:"uppercase", fontWeight:600, marginTop:2 }}>Since 1945</div>
      </div>
    </div>
  );
}

// ── Product Card ─────────────────────────────────────────────
function ProductCard({ p, onAdd }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background:"#fff", border:`1px solid ${hov ? "#CCC" : BORDER}`,
        borderRadius:4, overflow:"hidden",
        transform: hov ? "translateY(-4px)" : "none",
        boxShadow: hov ? "0 14px 36px rgba(0,0,0,.1)" : "none",
        transition:"all .22s", display:"flex", flexDirection:"column"
      }}
    >
      <div style={{ position:"relative", aspectRatio:"1", background:LIGHT, overflow:"hidden" }}>
        <img src={p.img} alt={p.name} style={{ width:"100%", height:"100%", objectFit:"cover", transform: hov ? "scale(1.05)" : "scale(1)", transition:"transform .3s" }}
          onError={e => { e.target.src = "https://placehold.co/300x300/F8F8F8/AAAAAA?text=Product"; }} />
        <div style={{ position:"absolute", top:0, left:0, background:RED, color:"#fff", padding:"4px 10px", fontSize:".62rem", fontWeight:700, letterSpacing:".07em", textTransform:"uppercase" }}>Sale</div>
      </div>
      <div style={{ padding:"13px 15px 15px", flex:1, display:"flex", flexDirection:"column" }}>
        <div style={{ fontSize:".62rem", textTransform:"uppercase", letterSpacing:".1em", color:"#AAA", fontWeight:600, marginBottom:4 }}>{p.cat}</div>
        <div style={{ fontWeight:600, fontSize:".83rem", color:"#1A1A1A", lineHeight:1.4, marginBottom:10, flex:1 }}>{p.name}</div>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"1.3rem", color:RED, letterSpacing:".02em" }}>{fmt(p.sale)}</span>
          <span style={{ fontSize:".76rem", color:"#CCC", textDecoration:"line-through" }}>{fmt(p.orig)}</span>
        </div>
        <button onClick={() => onAdd(p)} style={{
          width:"100%", marginTop:11, padding:"9px 0", background:"#1A1A1A", color:"#fff",
          border:"none", borderRadius:3, fontSize:".76rem", fontWeight:700, cursor:"pointer",
          letterSpacing:".07em", textTransform:"uppercase", transition:"background .2s",
          fontFamily:"'Barlow',sans-serif"
        }}
          onMouseEnter={e => e.target.style.background = RED}
          onMouseLeave={e => e.target.style.background = "#1A1A1A"}
        >Add to Cart</button>
      </div>
    </div>
  );
}

// ── Toast ────────────────────────────────────────────────────
function Toast({ msg }) {
  return msg ? (
    <div style={{
      position:"fixed", bottom:22, right:22, background:"#1A1A1A", color:"#fff",
      padding:"11px 16px", borderRadius:3, fontSize:".8rem", fontWeight:600,
      zIndex:999, borderLeft:`3px solid ${RED}`, maxWidth:300, boxShadow:"0 4px 20px rgba(0,0,0,.2)"
    }}>{msg}</div>
  ) : null;
}

// ── Cart Panel ───────────────────────────────────────────────
function CartPanel({ cart, onClose, onChange, onRemove }) {
  const items = Object.values(cart);
  const total = items.reduce((s, i) => s + i.sale * i.qty, 0);
  return (
    <>
      <div onClick={onClose} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.5)", zIndex:200 }} />
      <div style={{
        position:"fixed", right:0, top:0, height:"100vh", width:380,
        background:"#fff", zIndex:201, display:"flex", flexDirection:"column",
        boxShadow:"-6px 0 36px rgba(0,0,0,.15)", borderTop:`3px solid ${RED}`
      }}>
        <div style={{ padding:"17px 20px", borderBottom:`1px solid ${BORDER}`, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"1.4rem", letterSpacing:".04em" }}>Your Cart</span>
          <button onClick={onClose} style={{ background:"none", border:"none", fontSize:"1.1rem", cursor:"pointer", color:STEEL, width:28, height:28, borderRadius:3, display:"flex", alignItems:"center", justifyContent:"center" }}>✕</button>
        </div>
        <div style={{ flex:1, overflowY:"auto", padding:"16px 20px" }}>
          {!items.length ? (
            <div style={{ textAlign:"center", padding:"60px 0", color:STEEL }}>
              <div style={{ fontSize:"2.5rem", marginBottom:12 }}>🛒</div>
              <p style={{ fontWeight:700, marginBottom:8 }}>Cart is empty</p>
            </div>
          ) : items.map(i => (
            <div key={i.id} style={{ display:"flex", gap:11, marginBottom:16, paddingBottom:16, borderBottom:`1px solid ${BORDER}` }}>
              <img src={i.img} alt={i.name} style={{ width:60, height:60, objectFit:"cover", borderRadius:3, background:LIGHT, flexShrink:0 }}
                onError={e => { e.target.src = "https://placehold.co/60/F8F8F8/AAAAAA?text=P"; }} />
              <div style={{ flex:1 }}>
                <div style={{ fontSize:".79rem", fontWeight:600, marginBottom:2, lineHeight:1.3 }}>{i.name.substring(0,50)}{i.name.length>50?"…":""}</div>
                <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"1.1rem", color:RED }}>{fmt(i.sale)}</div>
                <div style={{ display:"flex", alignItems:"center", gap:5, marginTop:4 }}>
                  <button onClick={() => onChange(i.id, -1)} style={{ width:21, height:21, border:`1px solid ${BORDER}`, borderRadius:3, background:"none", cursor:"pointer", fontWeight:700, fontSize:".82rem" }}>−</button>
                  <span style={{ fontSize:".82rem", fontWeight:700, minWidth:18, textAlign:"center" }}>{i.qty}</span>
                  <button onClick={() => onChange(i.id, 1)} style={{ width:21, height:21, border:`1px solid ${BORDER}`, borderRadius:3, background:"none", cursor:"pointer", fontWeight:700, fontSize:".82rem" }}>+</button>
                  <button onClick={() => onRemove(i.id)} style={{ background:"none", border:"none", color:"#CCC", cursor:"pointer", fontSize:".7rem", marginLeft:4 }}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!!items.length && (
          <div style={{ padding:"16px 20px", borderTop:`1px solid ${BORDER}` }}>
            <div style={{ display:"flex", justifyContent:"space-between", fontWeight:700, marginBottom:14 }}>
              <span>Total</span>
              <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"1.4rem", color:RED }}>{fmt(total)}</span>
            </div>
            <button style={{ width:"100%", padding:13, background:RED, color:"#fff", border:"none", borderRadius:3, fontWeight:700, fontSize:".85rem", letterSpacing:".07em", textTransform:"uppercase", cursor:"pointer", fontFamily:"'Barlow',sans-serif" }}>
              Place Order
            </button>
            <p style={{ fontSize:".71rem", color:"#AAA", textAlign:"center", marginTop:9 }}>Call or WhatsApp +91 94226 90854</p>
          </div>
        )}
      </div>
    </>
  );
}

// ── Section Header ───────────────────────────────────────────
function SectionHeader({ eyebrow, title, sub }) {
  return (
    <div style={{ textAlign:"center", marginBottom:44 }}>
      <div style={{ display:"inline-flex", alignItems:"center", gap:8, marginBottom:10 }}>
        <div style={{ width:24, height:2, background:RED }} />
        <span style={{ fontSize:".7rem", fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:RED }}>{eyebrow}</span>
        <div style={{ width:24, height:2, background:RED }} />
      </div>
      <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(2rem,4vw,3rem)", color:"#1A1A1A", letterSpacing:".03em" }}>{title}</h2>
      {sub && <p style={{ color:STEEL, marginTop:7, fontSize:".88rem" }}>{sub}</p>}
    </div>
  );
}

// ── Page Header (red gradient) ───────────────────────────────
function PageHeader({ title, sub, page, goPage }) {
  return (
    <div style={{ background:"linear-gradient(135deg,#B01015 0%,#D0161B 60%,#E01A20 100%)", padding:"34px 5%", borderBottom:"3px solid #A01015" }}>
      <div style={{ display:"flex", gap:7, alignItems:"center", fontSize:".73rem", color:"rgba(255,255,255,.5)", marginBottom:8 }}>
        <span onClick={() => goPage("home")} style={{ color:"rgba(255,255,255,.65)", cursor:"pointer", fontWeight:600 }}>Home</span>
        <span>›</span>
        <span style={{ color:"white" }}>{title}</span>
      </div>
      <h1 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", color:"white", letterSpacing:".04em" }}>{title}</h1>
      <p style={{ color:"rgba(255,255,255,.7)", marginTop:5, fontSize:".85rem" }}>{sub}</p>
    </div>
  );
}

// ════════════════════════════════════════════════════════════
export default function RasikHardware() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");

  const goPage = (p) => { setPage(p); window.scrollTo(0,0); };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const addToCart = (p) => {
    setCart(prev => ({ ...prev, [p.id]: prev[p.id] ? { ...prev[p.id], qty: prev[p.id].qty + 1 } : { ...p, qty: 1 } }));
    showToast(p.name.substring(0, 38) + "… added ✓");
  };

  const changeQty = (id, d) => {
    setCart(prev => {
      const next = { ...prev };
      if (!next[id]) return prev;
      next[id] = { ...next[id], qty: next[id].qty + d };
      if (next[id].qty <= 0) delete next[id];
      return next;
    });
  };

  const removeItem = (id) => setCart(prev => { const n = { ...prev }; delete n[id]; return n; });
  const cartCount = Object.values(cart).reduce((s, i) => s + i.qty, 0);

  // ── NAV ──────────────────────────────────────────────────
  const navItems = [
    { key:"home", label:"Home" },
    { key:"brands", label:"Brands" },
    { key:"about", label:"About" },
    { key:"contact", label:"Contact" },
    { key:"shop", label:"Shop" },
  ];

  return (
    <div style={{ fontFamily:"'Barlow',sans-serif", background:"#fff", color:"#1A1A1A", minHeight:"100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* PROMO BAR */}
      <div style={{ background:RED, color:"#fff", textAlign:"center", padding:"9px 5%", fontSize:".8rem", fontWeight:600, letterSpacing:".06em", display:"flex", alignItems:"center", justifyContent:"center", gap:16, flexWrap:"wrap" }}>
        🔥 Special Offer — 20% Off All Products for New Orders!
        <span onClick={() => goPage("shop")} style={{ cursor:"pointer", textDecoration:"underline" }}>Shop Now →</span>
      </div>

      {/* NAV */}
      <nav style={{ position:"sticky", top:0, zIndex:100, background:"#fff", padding:"0 5%", display:"flex", alignItems:"center", justifyContent:"space-between", height:70, borderBottom:`3px solid ${RED}`, boxShadow:"0 2px 16px rgba(0,0,0,.08)" }}>
        <div onClick={() => goPage("home")} style={{ cursor:"pointer" }}>
          <Logo />
        </div>
        <div style={{ display:"flex", gap:28 }}>
          {navItems.map(n => (
            <span key={n.key} onClick={() => goPage(n.key)} style={{
              color: page === n.key ? RED : "#666", cursor:"pointer",
              fontSize:".83rem", fontWeight:700, letterSpacing:".05em", textTransform:"uppercase",
              borderBottom: page === n.key ? `2px solid ${RED}` : "2px solid transparent",
              paddingBottom:2, transition:"color .2s"
            }}>{n.label}</span>
          ))}
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <button onClick={() => setCartOpen(true)} style={{ background:"none", border:`2px solid ${BORDER}`, borderRadius:4, width:40, height:40, cursor:"pointer", position:"relative", display:"flex", alignItems:"center", justifyContent:"center", color:STEEL }}>
            <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {cartCount > 0 && <div style={{ position:"absolute", top:-7, right:-7, background:RED, color:"#fff", fontSize:".6rem", fontWeight:700, borderRadius:"50%", width:17, height:17, display:"flex", alignItems:"center", justifyContent:"center" }}>{cartCount}</div>}
          </button>
          <button onClick={() => goPage("shop")} style={{ background:RED, color:"#fff", padding:"9px 22px", borderRadius:4, border:"none", fontSize:".78rem", fontWeight:700, letterSpacing:".06em", textTransform:"uppercase", cursor:"pointer" }}>
            Shop Now
          </button>
        </div>
      </nav>

      {/* ── HOME ── */}
      {page === "home" && (
        <div>
          {/* HERO */}
          <div style={{ background:"linear-gradient(135deg,#F8F8F8 0%,#FFFFFF 50%,#FEF2F2 100%)", padding:"80px 5% 68px", position:"relative", overflow:"hidden", borderBottom:`4px solid ${RED}` }}>
            <div style={{ position:"absolute", right:"5%", top:"50%", transform:"translateY(-50%)", fontFamily:"'Bebas Neue',sans-serif", fontSize:"10rem", color:"rgba(208,22,27,.04)", whiteSpace:"nowrap", letterSpacing:".05em", pointerEvents:"none" }}>RASIK</div>
            <div style={{ position:"relative", maxWidth:620 }}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, marginBottom:16 }}>
                <div style={{ width:28, height:2, background:RED }} />
                <span style={{ fontSize:".7rem", fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:RED }}>Alibag's Most Trusted Hardware Store</span>
              </div>
              <h1 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(3rem,7vw,5.5rem)", color:"#1A1A1A", lineHeight:.93, marginBottom:18, letterSpacing:".02em" }}>
                Quality Hardware<br /><span style={{ color:RED }}>Since 1945</span>
              </h1>
              <p style={{ color:"#666", fontSize:"1rem", lineHeight:1.78, marginBottom:30, maxWidth:460 }}>
                Premium sanitaryware, plumbing, electrical and construction materials. Serving homeowners, contractors and businesses across Alibag and the Raigad district for over 80 years.
              </p>
              <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                <button onClick={() => goPage("shop")} style={{ background:RED, color:"#fff", padding:"12px 26px", borderRadius:3, border:"none", fontWeight:700, fontSize:".82rem", letterSpacing:".07em", textTransform:"uppercase", cursor:"pointer" }}>Browse Products</button>
                <button onClick={() => goPage("brands")} style={{ background:"transparent", color:"#333", padding:"12px 26px", borderRadius:3, border:"2px solid #CCC", fontWeight:700, fontSize:".82rem", letterSpacing:".07em", textTransform:"uppercase", cursor:"pointer" }}>Our Brands</button>
              </div>
              <div style={{ display:"flex", gap:44, marginTop:50, paddingTop:38, borderTop:`1px solid #E8E8E8`, flexWrap:"wrap" }}>
                {[["89+","Products"],["8+","Trusted Brands"],["20%","Off New Orders"],["80+","Years in Business"]].map(([n,l]) => (
                  <div key={l}>
                    <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"2.5rem", color:RED, letterSpacing:".02em", lineHeight:1 }}>{n}</div>
                    <div style={{ fontSize:".7rem", color:"#888", textTransform:"uppercase", letterSpacing:".09em", marginTop:4, fontWeight:600 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TRUST BAR */}
          <div style={{ background:LIGHT, borderBottom:`1px solid ${BORDER}` }}>
            <div style={{ display:"flex", justifyContent:"space-around", flexWrap:"wrap", padding:"0 5%" }}>
              {[
                ["Fast Local Delivery","Alibag & 50km radius","→"],
                ["Best Quality","Trusted brands only","✓"],
                ["Secure Payments","Safe & easy checkout","🔒"],
                ["Army Officer Discount","Special pricing available","🛡"],
                ["Expert Advice","+91 94226 90854 · WhatsApp","📞"],
              ].map(([t,s,icon]) => (
                <div key={t} style={{ display:"flex", alignItems:"center", gap:10, padding:"20px 14px" }}>
                  <div style={{ width:36, height:36, background:RED, borderRadius:3, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:"1rem", color:"#fff" }}>{icon}</div>
                  <div>
                    <div style={{ fontSize:".82rem", fontWeight:700, color:"#1A1A1A" }}>{t}</div>
                    <div style={{ fontSize:".72rem", color:STEEL }}>{s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FEATURED PRODUCTS */}
          <div style={{ padding:"68px 5%" }}>
            <SectionHeader eyebrow="Handpicked for You" title="Featured Products" sub="All products at 20% off for new orders" />
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:18 }}>
              {PRODUCTS.slice(0,6).map(p => <ProductCard key={p.id} p={p} onAdd={addToCart} />)}
            </div>
            <div style={{ textAlign:"center", marginTop:34 }}>
              <button onClick={() => goPage("shop")} style={{ background:RED, color:"#fff", padding:"12px 28px", borderRadius:3, border:"none", fontWeight:700, fontSize:".82rem", letterSpacing:".07em", textTransform:"uppercase", cursor:"pointer" }}>View All 89 Products →</button>
            </div>
          </div>

          {/* OFFER BANNER */}
          <div style={{ background:RED, padding:"52px 5%", textAlign:"center", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", left:"4%", top:"50%", transform:"translateY(-50%)", fontFamily:"'Bebas Neue',sans-serif", fontSize:"8rem", color:"rgba(255,255,255,.05)", whiteSpace:"nowrap", pointerEvents:"none" }}>RASIK HARDWARE</div>
            <div style={{ position:"relative" }}>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:".8rem", letterSpacing:".22em", color:"rgba(255,255,255,.5)", marginBottom:6 }}>LIMITED TIME OFFER</div>
              <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(1.8rem,5vw,3.8rem)", color:"#fff", letterSpacing:".03em", marginBottom:10 }}>20% Off — New Order Special</h2>
              <p style={{ color:"rgba(255,255,255,.75)", maxWidth:480, margin:"0 auto 24px", lineHeight:1.75, fontSize:".93rem" }}>Premium-quality hardware crafted for durability and performance. For every project — big or small.</p>
              <button onClick={() => goPage("shop")} style={{ background:"transparent", color:"#fff", padding:"12px 26px", borderRadius:3, border:"2px solid white", fontWeight:700, fontSize:".82rem", letterSpacing:".07em", textTransform:"uppercase", cursor:"pointer" }}>Shop Now</button>
            </div>
          </div>

          {/* BRAND PILLS */}
          <div style={{ background:LIGHT, padding:"68px 5%" }}>
            <SectionHeader eyebrow="Our Partners" title="Trusted Brands" />
            <div style={{ display:"flex", gap:10, flexWrap:"wrap", justifyContent:"center" }}>
              {["Elvis Luxelet","Finolex","Kranti","Zoloto","Woven Gold","Havells","Fossil Flow","Bajaj"].map(b => (
                <div key={b} style={{ background:"#fff", border:`1px solid ${BORDER}`, borderRadius:3, padding:"11px 20px", fontWeight:700, fontSize:".8rem", letterSpacing:".05em", textTransform:"uppercase" }}>{b}</div>
              ))}
            </div>
            <div style={{ textAlign:"center", marginTop:22 }}>
              <button onClick={() => goPage("brands")} style={{ background:"transparent", color:"#1A1A1A", padding:"11px 24px", borderRadius:3, border:`2px solid ${BORDER}`, fontWeight:700, fontSize:".82rem", letterSpacing:".05em", textTransform:"uppercase", cursor:"pointer" }}>View All Brands →</button>
            </div>
          </div>
        </div>
      )}

      {/* ── SHOP ── */}
      {page === "shop" && (
        <div>
          <PageHeader title="Shop Hardware" sub="Showing 1–12 of 89 results · All at 20% off for new orders" page={page} goPage={goPage} />
          <div style={{ display:"grid", gridTemplateColumns:"210px 1fr", gap:28, padding:"36px 5%" }}>
            {/* Sidebar */}
            <aside style={{ position:"sticky", top:90, height:"fit-content" }}>
              {[
                { title:"Category", items:["Hardware (89)","Sanitaryware","Plumbing","Electrical","Floor Drains"] },
                { title:"Brand", items:["Elvis / Luxelet","Finolex","Havells","Zoloto","Kranti"] },
              ].map(sec => (
                <div key={sec.title} style={{ marginBottom:24 }}>
                  <div style={{ fontSize:".7rem", fontWeight:700, textTransform:"uppercase", letterSpacing:".1em", marginBottom:9, paddingBottom:6, borderBottom:`2px solid ${RED}` }}>{sec.title}</div>
                  {sec.items.map((item, i) => (
                    <div key={item} style={{ display:"flex", alignItems:"center", gap:7, marginBottom:6 }}>
                      <input type="checkbox" defaultChecked={i===0} style={{ accentColor:RED }} />
                      <label style={{ fontSize:".82rem", color:STEEL }}>{item}</label>
                    </div>
                  ))}
                </div>
              ))}
              <div style={{ marginBottom:24 }}>
                <div style={{ fontSize:".7rem", fontWeight:700, textTransform:"uppercase", letterSpacing:".1em", marginBottom:9, paddingBottom:6, borderBottom:`2px solid ${RED}` }}>Price Range</div>
                <div style={{ fontSize:".79rem", color:STEEL, marginBottom:5 }}>₹492 – ₹11,999</div>
                <input type="range" min="492" max="11999" defaultValue="11999" style={{ width:"100%", accentColor:RED }} />
              </div>
              <div style={{ marginBottom:24 }}>
                <div style={{ fontSize:".7rem", fontWeight:700, textTransform:"uppercase", letterSpacing:".1em", marginBottom:9, paddingBottom:6, borderBottom:`2px solid ${RED}` }}>Offers</div>
                {["On Sale","New Arrivals"].map((o,i) => (
                  <div key={o} style={{ display:"flex", alignItems:"center", gap:7, marginBottom:6 }}>
                    <input type="checkbox" defaultChecked={i===0} style={{ accentColor:RED }} />
                    <label style={{ fontSize:".82rem", color:STEEL }}>{o}</label>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/919422690854" target="_blank" rel="noreferrer" style={{ display:"block", textAlign:"center", background:"#25D366", color:"#fff", padding:"10px 0", borderRadius:3, fontWeight:700, fontSize:".76rem", letterSpacing:".07em", textTransform:"uppercase", textDecoration:"none", marginBottom:8 }}>💬 WhatsApp Us</a>
              <a href="tel:+919422690854" style={{ display:"block", textAlign:"center", background:RED, color:"#fff", padding:"10px 0", borderRadius:3, fontWeight:700, fontSize:".76rem", letterSpacing:".07em", textTransform:"uppercase", textDecoration:"none" }}>📞 Call Us</a>
            </aside>
            {/* Products */}
            <div>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20, flexWrap:"wrap", gap:10 }}>
                <span style={{ fontSize:".82rem", color:STEEL }}>Showing <strong>1–12</strong> of 89 products</span>
                <select style={{ border:`1px solid ${BORDER}`, borderRadius:3, padding:"7px 11px", fontSize:".82rem", fontFamily:"'Barlow',sans-serif", color:"#1A1A1A", outline:"none" }}>
                  <option>Default sorting</option>
                  <option>Sort by popularity</option>
                  <option>Sort by price: low to high</option>
                  <option>Sort by price: high to low</option>
                </select>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:18 }}>
                {PRODUCTS.map(p => <ProductCard key={p.id} p={p} onAdd={addToCart} />)}
              </div>
              {/* Pagination */}
              <div style={{ display:"flex", gap:6, justifyContent:"center", marginTop:36, flexWrap:"wrap" }}>
                {[1,2,3,4,"…",6,7,8,"→"].map((n,i) => (
                  <button key={i} style={{ width:34, height:34, display:"flex", alignItems:"center", justifyContent:"center", border:`1px solid ${n===1 ? RED : BORDER}`, borderRadius:3, fontSize:".82rem", cursor:"pointer", fontWeight:600, background: n===1 ? RED : "#fff", color: n===1 ? "#fff" : "#1A1A1A", fontFamily:"'Barlow',sans-serif" }}>{n}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── BRANDS ── */}
      {page === "brands" && (
        <div>
          <PageHeader title="Our Brands" sub="8 trusted manufacturers — sanitaryware, plumbing, electrical & more" page={page} goPage={goPage} />
          <div style={{ padding:"68px 5%" }}>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14, marginBottom:48 }}>
              {[
                "https://rasikhardware.com/wp-content/uploads/2025/08/bajaj-1-300x169.jpg",
                "https://rasikhardware.com/wp-content/uploads/2025/08/bajaj-300x169.jpg",
                "https://rasikhardware.com/wp-content/uploads/2025/09/channel-partners-around-50kms-300x169.jpg"
              ].map((src,i) => (
                <img key={i} src={src} alt="Brand" style={{ width:"100%", borderRadius:3, objectFit:"cover", height:165 }} />
              ))}
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(275px,1fr))", gap:14 }}>
              {BRANDS.map(b => (
                <BrandCard key={b.n} b={b} />
              ))}
            </div>
            <div style={{ background:"#F0F4F8", borderRadius:4, padding:38, marginTop:44, textAlign:"center", borderLeft:`4px solid ${RED}` }}>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:".78rem", letterSpacing:".22em", color:"#999", marginBottom:6 }}>QUICK SERVICE</div>
              <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"2rem", color:"#1A1A1A", letterSpacing:".03em", marginBottom:8 }}>Your Trusted Hardware Partner in Alibag</h2>
              <p style={{ color:STEEL, maxWidth:460, margin:"0 auto 20px", lineHeight:1.7, fontSize:".88rem" }}>Serving homeowners, contractors, and businesses since 1945 with quality products, expert guidance, and reliable service.</p>
              <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap" }}><a href="https://wa.me/919422690854" target="_blank" rel="noreferrer" style={{ display:"inline-block", background:"#25D366", color:"#fff", padding:"12px 26px", borderRadius:3, fontWeight:700, fontSize:".82rem", letterSpacing:".07em", textTransform:"uppercase", textDecoration:"none" }}>💬 WhatsApp</a><a href="tel:+919422690854" style={{ display:"inline-block", background:RED, color:"#fff", padding:"12px 26px", borderRadius:3, fontWeight:700, fontSize:".82rem", letterSpacing:".07em", textTransform:"uppercase", textDecoration:"none" }}>📞 +91 94226 90854</a></div>
            </div>
          </div>
        </div>
      )}

      {/* ── ABOUT ── */}
      {page === "about" && (
        <div>
          <PageHeader title="About Rasik Hardware" sub="Alibag's most trusted hardware partner — since 1945" page={page} goPage={goPage} />
          <div style={{ padding:"68px 5%" }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center" }}>
              <div style={{ position:"relative" }}>
                <img src="https://rasikhardware.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-20-at-12.52.12-768x1024.jpeg" alt="Rasik Hardware Store" style={{ width:"100%", borderRadius:4, objectFit:"cover", height:440 }} />
                <div style={{ position:"absolute", bottom:-16, right:0, background:RED, color:"#fff", padding:"16px 20px", borderRadius:3, textAlign:"center" }}>
                  <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"2rem", letterSpacing:".04em", lineHeight:1 }}>1945</div>
                  <div style={{ fontSize:".7rem", opacity:.85, letterSpacing:".08em", textTransform:"uppercase", fontWeight:600 }}>Established</div>
                </div>
              </div>
              <div>
                <div style={{ display:"inline-flex", alignItems:"center", gap:8, marginBottom:10 }}>
                  <div style={{ width:24, height:2, background:RED }} />
                  <span style={{ fontSize:".7rem", fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:RED }}>About Us</span>
                </div>
                <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(2rem,3.5vw,3rem)", marginBottom:12, letterSpacing:".03em" }}>Rasik Hardware,<br/>Alibag</h2>
                <p style={{ color:STEEL, lineHeight:1.8, marginBottom:16, fontSize:".91rem" }}>At Rasik Hardware, we are more than just a hardware store — we are your trusted partner in building, repairing, and enhancing spaces. Established in Alibag in 1945, we have proudly served homeowners, contractors, and businesses for over 80 years.</p>
                <p style={{ color:STEEL, lineHeight:1.8, marginBottom:16, fontSize:".91rem" }}>Our store offers a comprehensive range of hardware, tools, plumbing supplies, electrical fittings, sanitaryware, construction materials, and home improvement essentials — all sourced from trusted brands.</p>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginTop:22 }}>
                  {["Best Price in Market","Professional Staff","Affordable Prices","No Hidden Costs","Army Officer Discount","Emergency Services","Guaranteed Work","Fast Service","Highly Trained Staff","Free Consultation"].map(w => (
                    <div key={w} style={{ display:"flex", alignItems:"center", gap:7, fontSize:".82rem", fontWeight:600, color:"#1A1A1A" }}>
                      <div style={{ width:5, height:5, background:RED, borderRadius:"50%", flexShrink:0 }} />{w}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Founders */}
            <div style={{ marginTop:68 }}>
              <SectionHeader eyebrow="Our Legacy" title="The Jain Family" sub="Generations of trust and hardware expertise in Alibag" />
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(190px,1fr))", gap:16 }}>
                {[["AJ","Asulalji P Jain","Founder",false],["TJ","Thanmal A Jain","Partner",true],["BJ","Bharatkumar T Jain","Partner",false],["RJ","Rasiklal T Jain","Proprietor",true]].map(([initials,name,role,red]) => (
                  <div key={name} style={{ textAlign:"center", padding:"26px 14px", border:`1px solid ${BORDER}`, borderRadius:3, background: role === "Proprietor" ? LIGHT : "#fff" }}>
                    <div style={{ width:64, height:64, background: red ? RED : "#1A1A1A", borderRadius:"50%", border: red ? "none" : `2px solid ${RED}`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 12px" }}>
                      <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"1.3rem", color: red ? "#fff" : RED }}>{initials}</span>
                    </div>
                    <div style={{ fontWeight:700, fontSize:".88rem" }}>{name}</div>
                    <div style={{ fontSize:".72rem", color:"#9A9A9A", marginTop:3, textTransform:"uppercase", letterSpacing:".06em" }}>{role}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Store photos */}
            <div style={{ marginTop:52 }}>
              <SectionHeader eyebrow="Our Store" title="" />
              <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12 }}>
                {[
                  "https://rasikhardware.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-17-at-15.29.21-461x1024.jpeg",
                  "https://rasikhardware.com/wp-content/uploads/2025/09/IMG_20250901_142127-225x300.jpg",
                  "https://rasikhardware.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-17-at-15.30.10-1001x1024.jpeg"
                ].map((src,i) => <img key={i} src={src} alt="Store" style={{ width:"100%", borderRadius:3, objectFit:"cover", height:245 }} />)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── CONTACT ── */}
      {page === "contact" && (
        <div>
          <PageHeader title="Get In Touch" sub="Visit us, call us, or drop a message below" page={page} goPage={goPage} />
          <div style={{ padding:"68px 5%" }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:44 }}>
              <div>
                <h3 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"2rem", letterSpacing:".03em", marginBottom:14 }}>Rasik Hardware</h3>
                <p style={{ color:STEEL, fontSize:".87rem", lineHeight:1.75, marginBottom:22 }}>Your trusted hardware partner for all building, renovation, and home improvement needs. Knowledgeable staff always ready to assist.</p>
                {[
                  ["📍","Address","Rasik Hardware, Sadguru Building, Basement No. 02\nNear Kacchi Bhavan Temple, Shreebag No. 02\nAlibag 402201, Maharashtra"],
                  ["📞","Phone & WhatsApp","+91 94226 90854"],
                  ["🕐","Lunch Break","1:30 PM – 2:30 PM · Sunday Closed"],
                ].map(([icon,label,val]) => (
                  <div key={label} style={{ display:"flex", gap:12, marginBottom:16, alignItems:"flex-start" }}>
                    <div style={{ width:36, height:36, background:RED, borderRadius:3, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:".9rem" }}>{icon}</div>
                    <div>
                      <div style={{ fontSize:".82rem", fontWeight:700, marginBottom:2 }}>{label}</div>
                      <div style={{ fontSize:".79rem", color:STEEL, lineHeight:1.55, whiteSpace:"pre-line" }}>{val}</div>
                    </div>
                  </div>
                ))}
                <table style={{ width:"100%", borderCollapse:"collapse", marginTop:12 }}>
                  {[["Monday – Saturday","9:00 AM – 8:00 PM"],["Lunch Break","1:30 PM – 2:30 PM"],["Sunday","Closed"]].map(([d,t]) => (
                    <tr key={d}>
                      <td style={{ padding:"8px 0", fontSize:".83rem", borderBottom:`1px solid ${BORDER}` }}>{d}</td>
                      <td style={{ padding:"8px 0", fontSize:".83rem", borderBottom:`1px solid ${BORDER}`, textAlign:"right", fontWeight:600, color: d === "Sunday" ? RED : STEEL }}>{t}</td>
                    </tr>
                  ))}
                </table>
                <div style={{ marginTop:22, display:"flex", gap:9, flexWrap:"wrap" }}>
                  {[["📸 Instagram","https://www.instagram.com/rasik_hardware/"],["💬 WhatsApp","https://wa.me/919422690854"],["▶ YouTube","https://www.youtube.com/@rasikhardware"],["⭐ Reviews","https://www.google.com/search?q=rasik+hardware+alibag+reviews"]].map(([label,href]) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" style={{ background:RED, color:"#fff", padding:"9px 14px", borderRadius:3, fontWeight:700, fontSize:".76rem", letterSpacing:".06em", textTransform:"uppercase", textDecoration:"none" }}>{label}</a>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ background:LIGHT, borderRadius:4, padding:28, border:`1px solid ${BORDER}` }}>
                  <h3 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"1.6rem", letterSpacing:".03em", marginBottom:18 }}>Send a Message</h3>
                  {[["Your Name","text","Full name"],["Phone / WhatsApp","tel","+91 XXXXX XXXXX"],["Email (optional)","email","you@email.com"]].map(([label,type,ph]) => (
                    <div key={label} style={{ marginBottom:13 }}>
                      <label style={{ display:"block", fontSize:".73rem", fontWeight:700, marginBottom:4, letterSpacing:".05em", textTransform:"uppercase" }}>{label}</label>
                      <input type={type} placeholder={ph} style={{ width:"100%", padding:"9px 12px", border:`1px solid ${BORDER}`, borderRadius:3, fontFamily:"'Barlow',sans-serif", fontSize:".875rem", outline:"none" }} />
                    </div>
                  ))}
                  <div style={{ marginBottom:13 }}>
                    <label style={{ display:"block", fontSize:".73rem", fontWeight:700, marginBottom:4, letterSpacing:".05em", textTransform:"uppercase" }}>What do you need?</label>
                    <select style={{ width:"100%", padding:"9px 12px", border:`1px solid ${BORDER}`, borderRadius:3, fontFamily:"'Barlow',sans-serif", fontSize:".875rem", outline:"none" }}>
                      <option>Product enquiry</option><option>Price quote</option><option>Bulk order</option><option>Delivery info</option><option>Other</option>
                    </select>
                  </div>
                  <div style={{ marginBottom:13 }}>
                    <label style={{ display:"block", fontSize:".73rem", fontWeight:700, marginBottom:4, letterSpacing:".05em", textTransform:"uppercase" }}>Message</label>
                    <textarea placeholder="Tell us what you're looking for…" style={{ width:"100%", padding:"9px 12px", border:`1px solid ${BORDER}`, borderRadius:3, fontFamily:"'Barlow',sans-serif", fontSize:".875rem", outline:"none", minHeight:90, resize:"vertical" }} />
                  </div>
                  <button onClick={() => showToast("Message sent! We'll contact you shortly. ✓")} style={{ width:"100%", padding:13, background:RED, color:"#fff", border:"none", borderRadius:3, fontWeight:700, fontSize:".85rem", letterSpacing:".07em", textTransform:"uppercase", cursor:"pointer", fontFamily:"'Barlow',sans-serif" }}>Send Message</button>
                </div>
                <div style={{ marginTop:14, borderRadius:3, border:`1px solid ${BORDER}`, height:170, background:LIGHT, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:7, color:STEEL }}>
                  <span style={{ fontSize:"1.5rem" }}>📍</span>
                  <span style={{ fontSize:".81rem", fontWeight:600 }}>Sadguru Building, Alibag 402201</span>
                  <a href="https://maps.google.com/?q=Rasik+Hardware+Alibag" target="_blank" rel="noreferrer" style={{ color:RED, fontWeight:700, fontSize:".76rem", letterSpacing:".05em", textTransform:"uppercase" }}>Open in Google Maps →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── FOOTER ── */}
      <footer style={{ background:NAVY, color:"#fff", padding:"56px 5% 26px", borderTop:`3px solid ${RED}` }}>
        <div style={{ display:"grid", gridTemplateColumns:"1.6fr 1fr 1fr 1fr", gap:36, marginBottom:44 }}>
          <div>
            <Logo size={32} />
            <p style={{ color:"#8A99B0", fontSize:".82rem", lineHeight:1.7, marginTop:12, maxWidth:255 }}>Your trusted hardware partner — hardware, plumbing, electrical, sanitaryware and more. Serving Alibag and the Konkan coast for over 80 years.</p>
            <div style={{ marginTop:12, fontSize:".74rem", color:"#6A7A90", lineHeight:1.65 }}>Mon–Sat: 9:00 AM – 8:00 PM<br/>Lunch: 1:30–2:30 PM · Sunday Closed</div>
          </div>
          {[
            { h:"Quick Links", items:[["home","Home"],["brands","Brands"],["about","About Us"],["contact","Contact"],["shop","Shop"]] },
            { h:"Products", items:[["#","Sanitaryware"],["#","Plumbing"],["#","Electrical"],["#","Floor Drains"],["#","Valves & Fittings"]] },
            { h:"Contact", items:[["tel:+919422690854","+91 94226 90854"],["https://www.instagram.com/rasik_hardware/","Instagram"],["https://www.youtube.com/@rasikhardware","YouTube"],["https://www.google.com/search?q=rasik+hardware+alibag","Google Reviews"]] },
          ].map(col => (
            <div key={col.h}>
              <h4 style={{ fontSize:".7rem", textTransform:"uppercase", letterSpacing:".12em", fontWeight:700, color:"#6B7F99", marginBottom:13 }}>{col.h}</h4>
              {col.items.map(([href, label]) => (
                <span key={label} onClick={() => { if (!href.startsWith("http") && !href.startsWith("tel")) goPage(href); }} style={{ display:"block", color:"#7A8EA8", textDecoration:"none", fontSize:".82rem", marginBottom:7, cursor:"pointer" }}
                  onMouseEnter={e => e.target.style.color = RED}
                  onMouseLeave={e => e.target.style.color = "#7A8EA8"}
                >{label}</span>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop:"1px solid #2A3550", paddingTop:20, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:11 }}>
          <p style={{ fontSize:".77rem", color:"#5A6E88" }}>© 2026 Rasik Hardware, Alibag. Digital presence by <strong style={{ color:"#7A8EA8" }}>Auspex Digital Marketing</strong></p>
          <div style={{ display:"flex", gap:8 }}>
            {[["IG","https://www.instagram.com/rasik_hardware/"],["YT","https://www.youtube.com/@rasikhardware"],["WA","https://wa.me/919422690854"],["📞","tel:+919422690854"]].map(([l,h]) => (
              <a key={l} href={h} target="_blank" rel="noreferrer" style={{ width:32, height:32, background:"#2A3550", border:"1px solid #354665", borderRadius:3, display:"flex", alignItems:"center", justifyContent:"center", color:"#6B7F99", textDecoration:"none", fontSize:".7rem", fontWeight:700 }}>{l}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* CART */}
      {cartOpen && <CartPanel cart={cart} onClose={() => setCartOpen(false)} onChange={changeQty} onRemove={removeItem} />}

      {/* WHATSAPP FLOATING */}
      <a href="https://wa.me/919422690854" target="_blank" rel="noreferrer" style={{ position:"fixed", bottom:24, left:24, width:54, height:54, background:"#25D366", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 20px rgba(37,211,102,.5)", zIndex:998, textDecoration:"none", fontSize:"1.6rem" }} title="Chat on WhatsApp">💬</a>

      {/* TOAST */}
      <Toast msg={toast} />
    </div>
  );
}

function BrandCard({ b }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ background:"#fff", border:`1px solid ${hov ? RED : BORDER}`, borderRadius:4, padding:20, display:"flex", gap:14, alignItems:"flex-start", transition:"all .2s", boxShadow: hov ? "0 4px 18px rgba(208,22,27,.07)" : "none" }}
    >
      <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"2rem", color: hov ? RED : BORDER, lineHeight:1, flexShrink:0, transition:"color .2s" }}>{b.n}</div>
      <div>
        <h3 style={{ fontSize:".93rem", fontWeight:700, marginBottom:4 }}>{b.title}</h3>
        <p style={{ fontSize:".79rem", color:STEEL, lineHeight:1.6 }}>{b.desc}</p>
      </div>
    </div>
  );
}
