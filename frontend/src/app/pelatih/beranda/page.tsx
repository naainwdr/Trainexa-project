"use client";
import Link from "next/link";
import Image from "next/image";

const sports = [
  { name: "Sepak Bola", count: "160 Pelatih", icon: "⚽" },
  { name: "Bola Basket", count: "142 Pelatih", icon: "🏀" },
  { name: "Bulu Tangkis", count: "210 Pelatih", icon: "🏸" },
  { name: "Tenis Lapangan", count: "80 Pelatih", icon: "🎾" },
  { name: "Tenis Meja", count: "54 Pelatih", icon: "🏓" },
  { name: "Esports", count: "56 Pelatih", icon: "🎮" },
  { name: "Renang", count: "162 Pelatih", icon: "🏊" },
  { name: "Tinju", count: "73 Pelatih", icon: "🥊" },
];

const howSteps = [
  {
    number: "01",
    icon: "🔍",
    title: "Temukan",
    desc: "Telusuri ratusan pelatih terverifikasi berdasarkan olahraga, lokasi, peringkat, dan harga. Saring berdasarkan ketersediaan dan spesialisasi.",
  },
  {
    number: "02",
    icon: "📅",
    title: "Pesan",
    desc: "Pilih sesi waktu yang sesuai untuk Anda. Pemesanan instan atau minta konfirmasi dari pelatih Anda dalam waktu 2 jam.",
  },
  {
    number: "03",
    icon: "🏆",
    title: "Latih & Berkembang",
    desc: "Ikuti sesi Anda secara langsung atau daring. Pantau perkembangan, jadwalkan ulang dengan mudah, dan raih potensi terbaik Anda.",
  },
];

const featuredCoaches = [
  {
    id: 1,
    name: "Marcus Pahl",
    specialty: "Kebugaran & Pengembangan Fisik",
    location: "Kota Bandung",
    rating: 4.98,
    reviews: 34,
    price: 155,
    tags: ["Garage Gym", "CSCS Certified", "Online"],
    available: true,
    img: "/img/coach-marcus.png",
    bg: "linear-gradient(135deg,#1a1a2e,#16213e)",
  },
  {
    id: 2,
    name: "Rafael",
    specialty: "Tennis",
    location: "Cihampelas, Kota Bandung",
    rating: 4.86,
    reviews: 41,
    price: 175,
    tags: ["ATP Certified", "Competitive"],
    available: false,
    img: "/img/coach-sofianti.png",
    bg: "linear-gradient(135deg,#0f3460,#533483)",
  },
  {
    id: 3,
    name: "Nuy",
    specialty: "Renang",
    location: "Bojongsoang, Bandung",
    rating: 4.84,
    reviews: 32,
    price: 120,
    tags: ["Technique", "Ex-Olympian"],
    available: true,
    img: "/img/coach-asep.png",
    bg: "linear-gradient(135deg,#1b4332,#2d6a4f)",
  },
  {
    id: 4,
    name: "Clara W",
    specialty: "Tinju",
    location: "Cicadas, Kota Bandung",
    rating: 4.85,
    reviews: 34,
    price: 100,
    tags: ["Pro Fighter", "Beginner OK"],
    available: true,
    img: "/img/coach-danu.png",
    bg: "linear-gradient(135deg,#370617,#6a040f)",
  },
  {
    id: 5,
    name: "Yuta W",
    specialty: "Yoga",
    location: "Dago, Kota Bandung",
    rating: 4.89,
    reviews: 19,
    price: 105,
    tags: ["Certified", "Beginner OK"],
    available: true,
    img: "/img/coach-yusnaini.png",
    bg: "linear-gradient(135deg,#1b4332,#2d6a4f)",
  },
  {
    id: 6,
    name: "Ari Hernando",
    specialty: "Bola Basket",
    location: "Paskal, Kota Bandung",
    rating: 4.89,
    reviews: 38,
    price: 195,
    tags: ["Pro Basket", "Beginner OK"],
    available: true,
    img: "/img/coach-arif.png",
    bg: "linear-gradient(135deg,#0f3460,#533483)",
  },
];

const testimonials = [
  {
    name: "Alex",
    role: "Mantan anggota latihan",
    coachName: "Riki",
    rating: 5,
    comment:
      "Riki tuh bener-bener ngubah program latihanku sepenuhnya. Cuma 3 minggu, badan gue udah turun 20 kg, dan tokohnya jadi mulus banget. Worth it banget lah harganya.",
    highlighted: false,
  },
  {
    name: "Mia",
    role: "Pemain Pemula",
    coachName: "Sofia",
    rating: 5,
    comment:
      "Sofia keren banget. Servisaku awalnya cuma 145 km/jam, sekarang jadi 176 km/jam cuma dalam 3 bulan. Dia jago banget dan tahu banget gimana caranya benerin teknikku dengan cepat.",
    highlighted: true,
  },
  {
    name: "Ryan Kurniawan",
    role: "Petarung MMA",
    coachName: "Amir",
    rating: 5,
    comment:
      "Awalnya aku ragu soalnya masih pemula banget. Tapi Amir tuh bener-bener pengalaman di seni beladiri profesional, dan bener-bener ngubah hidupku. Rekomendasi banget deh pelatihannya.",
    highlighted: false,
  },
];

const coachFilterTabs = [
  "Semua",
  "Sepak Bola",
  "Basket",
  "Bulu Tangkis",
  "Tenis Lapangan",
  "Renang",
  "Esports",
];

export default function Home() {
  return (
    <>
      {/* ─── NAVBAR ─── */}
      <nav className="navbar">
        <div className="navbar-logo">
          <span className="navbar-logo-icon">⚡</span>
          train<span>exa</span>
        </div>
        <ul className="navbar-menu">
          <li><Link href="/pelatih/beranda" className="active">Beranda</Link></li>
          <li><Link href="/pelatih/profile">Profil</Link></li>
          <li><Link href="/pelatih/olahraga">Olahraga</Link></li>
          <li><Link href="/pelatih/jadwal">Jadwal</Link></li>
          <li><Link href="/pelatih/pemesanan">Pemesanan</Link></li>
        </ul>
        <div className="navbar-actions">
          <div className="navbar-user">
            <span className="navbar-user-greeting">Hi, Arif Santoso</span>
            <div className="navbar-user-avatar">A</div>
          </div>
        </div>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <section className="hero" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#090a0f', color: '#fff', padding: '80px 20px', minHeight: '600px', overflow: 'hidden' }}>
        
        {/* Left Glow Diamond perfectly matched */}
        <div style={{ position: 'absolute', left: '50%', top: '50%', marginLeft: '-1050px', transform: 'translateY(-50%) rotate(45deg)', width: '600px', height: '600px', background: 'linear-gradient(45deg, rgba(230, 175, 0, 0.9) 0%, rgba(230, 175, 0, 0.3) 100%)', filter: 'blur(15px)', pointerEvents: 'none', zIndex: 0 }}></div>

        {/* Right: Athlete image */}
        <div className="hero-image-wrap" style={{ position: 'absolute', right: '2%', bottom: '0', height: '92%', zIndex: 0, pointerEvents: 'none' }}>
          <Image
            src="/atlet.png"
            alt="Atlet"
            width={480}
            height={560}
            style={{ objectFit: 'contain', objectPosition: 'right bottom', height: '100%', width: 'auto', opacity: 0.9 }}
          />
        </div>

        {/* Text content */}
        <div className="hero-content" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="hero-badge" style={{ backgroundColor: '#0f2416', color: '#FFD700', display: 'inline-block', padding: '6px 18px', borderRadius: '25px', fontWeight: '600', fontSize: '13px', marginBottom: '20px', border: '1px solid #1a3c26' }}>
            🏆 #Platform Pelatihan Olahraga Nomor 1
          </div>
          <h1 className="hero-title" style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 20px 0', lineHeight: '1.2' }}>
            Temukan pelatih <span style={{ color: '#FFD700' }}>yang tepat,</span><br />
            kembangkan potensi Anda!
          </h1>
          <p className="hero-subtitle" style={{ fontSize: '16px', marginBottom: '40px', color: '#aaa', maxWidth: '600px', lineHeight: '1.5' }}>
            Terhubung dengan para pelatih olahraga kelas dunia untuk sesi privat 1-on-1, latihan kelompok, dan program peningkatan performa.
          </p>
          <div className="hero-search" style={{ display: 'flex', alignItems: 'center', marginBottom: '50px', backgroundColor: '#fff', borderRadius: '30px', padding: '6px 6px 6px 20px', width: '100%', maxWidth: '650px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
            <span style={{ marginRight: '10px', fontSize: '18px', color: '#666' }}>🔍</span>
            <input
              type="text"
              placeholder="Cari berdasarkan cabang olahraga, nama pelatih, atau lokasi..."
              style={{ flex: 1, padding: '10px', border: 'none', outline: 'none', color: '#000', backgroundColor: 'transparent', fontSize: '16px' }}
            />
            <button className="btn-cari" style={{ backgroundColor: '#FFD700', color: '#000', padding: '12px 30px', borderRadius: '25px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>
              Cari
            </button>
          </div>
          <div className="hero-stats" style={{ display: 'flex', gap: '50px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div className="hero-stat-item" style={{ textAlign: 'center' }}>
              <div className="hero-stat-number" style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff' }}>2,400+</div>
              <div className="hero-stat-label" style={{ fontSize: '14px', color: '#aaa', marginTop: '5px' }}>Pelatih Terverifikasi</div>
            </div>
            <div className="hero-stat-item" style={{ textAlign: 'center' }}>
              <div className="hero-stat-number" style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff' }}>48K+</div>
              <div className="hero-stat-label" style={{ fontSize: '14px', color: '#aaa', marginTop: '5px' }}>Sesi dipesan</div>
            </div>
            <div className="hero-stat-item" style={{ textAlign: 'center' }}>
              <div className="hero-stat-number" style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff' }}>95%</div>
              <div className="hero-stat-label" style={{ fontSize: '14px', color: '#aaa', marginTop: '5px' }}>Tingkat Kepuasan</div>
            </div>
            <div className="hero-stat-item" style={{ textAlign: 'center' }}>
              <div className="hero-stat-number" style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff' }}>120+</div>
              <div className="hero-stat-label" style={{ fontSize: '14px', color: '#aaa', marginTop: '5px' }}>Sports Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPORT CATEGORY SECTION ─── */}
      <section className="section-sport">
        <p className="section-sport-label">TELUSURI BERDASARKAN OLAHRAGA</p>
        <h2 className="section-sport-title">Apa yang ingin kamu latih?</h2>
        <div className="sport-grid">
          {sports.map((sport) => (
            <div key={sport.name} className="sport-card">
              <span className="sport-icon">{sport.icon}</span>
              <span className="sport-name">{sport.name}</span>
              <span className="sport-count">{sport.count}</span>
            </div>
          ))}
        </div>
        <button className="btn-lihat-semua">Lihat Semua →</button>
      </section>

      {/* ─── HOW TRAINEXA WORKS ─── */}
      <section className="section-how">
        <h2 className="section-how-title">
          Bagaimana <span className="highlight">Trainexa</span> Bekerja
        </h2>
        <p className="section-how-subtitle">
          Tiga langkah mudah untuk sesi pelatihan pertama Anda
        </p>
        <div className="how-steps">
          {howSteps.map((step) => (
            <div key={step.number} className="how-step">
              <div className="step-icon-wrap">{step.icon}</div>
              <div className="step-number">{step.number}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PELATIH TERBAIK ─── */}
      <section className="section-coaches">
        <div className="section-coaches-header">
          <div>
            <h2 className="section-coaches-title">
              Pelatih <span className="highlight">Terbaik</span>
            </h2>
            <p className="section-coaches-subtitle">Para ahli terpilih yang telah terbukti berhasil</p>
          </div>
          <Link href="/pelatih" className="btn-lihat-semua-dark">Lihat semua pelatih →</Link>
        </div>

        {/* Filter Tabs */}
        <div className="coach-filter-tabs">
          {coachFilterTabs.map((tab, i) => (
            <button key={tab} className={`coach-filter-tab ${i === 0 ? "active" : ""}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Coach Grid */}
        <div className="coaches-grid">
          {featuredCoaches.map((coach) => (
            <Link key={coach.id} href={`/pelatih/${coach.id}`} className="coach-card-link">
              <div className="coach-card">
                <div className="coach-card-img-wrap">
                  <div
                    className="coach-card-img"
                    style={{ background: coach.bg }}
                  >
                    <Image
                      src={coach.img}
                      alt={coach.name}
                      width={300}
                      height={200}
                      className="coach-card-photo"
                    />
                  </div>
                  <span className={`coach-card-badge ${coach.available ? "badge-available" : "badge-full"}`}>
                    {coach.available ? "Tersedia" : "Full hari ini"}
                  </span>
                  <button className="coach-card-fav">♡</button>
                </div>
                <div className="coach-card-body">
                  <div className="coach-card-top">
                    <p className="coach-card-name">{coach.name}</p>
                    <span className="coach-card-rating">★ {coach.rating}</span>
                  </div>
                  <p className="coach-card-reviews">({coach.reviews} ulasan)</p>
                  <p className="coach-card-loc">{coach.specialty} · {coach.location}</p>
                  <div className="coach-card-tags">
                    {coach.tags.map((t) => (
                      <span key={t} className="coach-tag">{t}</span>
                    ))}
                  </div>
                  <div className="coach-card-footer">
                    <div>
                      <span className="coach-card-price">Rp {coach.price}K</span>
                      <span className="coach-card-persesi"> / sesi</span>
                    </div>
                    <button className="btn-pesan">Pesan</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="section-testimonial">
        <p className="section-testimonial-label">ULASAN PENGGUNA</p>
        <h2 className="section-testimonial-title">
          Apa yang <span className="highlight">Mereka</span> Katakan
        </h2>
        <p className="section-testimonial-sub">Testimoni terpercaya dari ribuan pengguna</p>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`testimonial-card ${t.highlighted ? "testimonial-card-highlighted" : ""}`}>
              <div className="testi-stars">
                {"★".repeat(t.rating)}
                <span style={{ color: "rgba(255,215,0,0.3)" }}>{"★".repeat(5 - t.rating)}</span>
              </div>
              <p className="testi-comment">"{t.comment}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.name[0]}</div>
                <div>
                  <p className="testi-name">{t.name}</p>
                  <p className="testi-sport">{t.role} · Berlatih bersama {t.coachName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <button className="btn-lihat-semua-dark">Lihat Semua →</button>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="section-cta">
        <h2 className="cta-title">
          Siap untuk naik level?<br />
          <span className="highlight">Mulailah sesi pertamamu hari ini.</span>
        </h2>
        <p className="cta-desc">
          Tanpa langganan. Tanpa ikatan kontrak. Bayar per sesi dan bisa dibatalkan kapan saja.
        </p>
        <div className="cta-actions">
          <Link href="/pelatih">
            <button className="btn-cta-primary">Temukan Pelatih →</button>
          </Link>
          <Link href="/daftar-pelatih">
            <button className="btn-cta-secondary">Bergabung menjadi pelatih</button>
          </Link>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo">
              <span className="footer-logo-icon">⚡</span>
              train<span>exa</span>
            </div>
            <p className="footer-description">
              Platform marketplace pelatih olahraga terpercaya di Indonesia.
              Menghubungkan pelatih profesional dengan individu, tim, dan organisasi.
            </p>
            <p className="footer-address">
              Jl. Dipatiukur No. 35, Bandung, Jawa Barat 40132
            </p>
            <p className="footer-copyright">© 2026 Trainexa. All rights reserved.</p>
          </div>
          <div className="footer-center">
            <h2 className="footer-social-title">
              APA YANG <span>BARU?</span>
            </h2>
            <p className="footer-social-subtitle">Ikuti kami di</p>
            <div className="footer-social-icons">
              <Link href="#" className="social-icon">
                <Image src="/img/tiktok-logo.png" alt="TikTok" width={100} height={40} />
              </Link>
              <Link href="#" className="social-icon">
                <Image src="/img/facebook-logo.png" alt="Facebook" width={40} height={40} />
              </Link>
              <Link href="#" className="social-icon">
                <Image src="/img/x-logo.png" alt="X" width={40} height={40} />
              </Link>
              <Link href="#" className="social-icon">
                <Image src="/img/instagram-logo.png" alt="Instagram" width={40} height={40} />
              </Link>
              <Link href="#" className="social-icon">
                <Image src="/img/youtube-logo.png" alt="YouTube" width={110} height={40} />
              </Link>
            </div>
          </div>
          <div className="footer-right">
            <button
              className="btn-back-to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              ▲
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}