"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const sports = [
  { name: "Futsal", count: "160 Pelatih", icon: "⚽" },
  { name: "Bola Basket", count: "142 Pelatih", icon: "🏀" },
  { name: "Renang", count: "94 Pelatih", icon: "🏊" },
  { name: "Bulu Tangkis", count: "210 Pelatih", icon: "🏸" },
  { name: "Tennis", count: "80 Pelatih", icon: "🎾" },
  { name: "Golf", count: "54 Pelatih", icon: "⛳" },
  { name: "Lari", count: "56 Pelatih", icon: "🏃" },
  { name: "Yoga", count: "162 Pelatih", icon: "🧘" },
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
  { id: 1, name: "Fahri", specialty: "Bulu Tangkis", location: "Bandung", rating: 4.9, price: 125, tags: ["ATP Certified", "Competitive"], available: false, emoji: "🏸", bg: "linear-gradient(135deg,#1a1a2e,#16213e)" },
  { id: 2, name: "Rafael", specialty: "Bola Basket", location: "Jakarta", rating: 4.8, price: 150, tags: ["Pro League"], available: true, emoji: "🏀", bg: "linear-gradient(135deg,#0f3460,#533483)" },
  { id: 3, name: "Yogi", specialty: "Yoga", location: "Bali", rating: 5.0, price: 95, tags: ["Certified", "Online"], available: true, emoji: "🧘", bg: "linear-gradient(135deg,#1b4332,#2d6a4f)" },
  { id: 4, name: "Dian", specialty: "Renang", location: "Surabaya", rating: 4.7, price: 110, tags: ["FINA Certified"], available: false, emoji: "🏊", bg: "linear-gradient(135deg,#023e8a,#0096c7)" },
  { id: 5, name: "Budi", specialty: "Futsal", location: "Bandung", rating: 4.6, price: 85, tags: ["Lisensi C"], available: true, emoji: "⚽", bg: "linear-gradient(135deg,#370617,#6a040f)" },
  { id: 6, name: "Citra", specialty: "Lari", location: "Jakarta", rating: 4.9, price: 100, tags: ["Marathon Pro"], available: true, emoji: "🏃", bg: "linear-gradient(135deg,#212529,#495057)" },
];

const testimonials = [
  { name: "Alex", sport: "Bulu Tangkis", rating: 5, comment: "Riki tuh bener-bener ngubah cara mainku, sumpah. Cuma 8 minggu, akurasi dropshot-ku jadi lebih tipis di net dan kontrol bolaku jadi stabil banget. Worth it banget lah harganya." },
  { name: "Fia", sport: "Yoga", rating: 5, comment: "Pelatih Citra beneran sabar banget jelasinnya. Sekarang postur badanku udah jauh lebih baik dan ga sering pegel-pegel lagi pas kerja. Highly recommended!" },
  { name: "Budi", sport: "Futsal", rating: 4, comment: "Platform-nya gampang banget dipake. Booking dalam 2 menit, pelatih langsung konfirmasi. Sesi pertama udah langsung ngerasa ada peningkatan." },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ─── HERO SECTION ─── */}
      <section className="hero">
        <div className="hero-badge fade-up">
          🏅 #Platform Pelatihan Olahraga Nomor 1
        </div>
        <h1 className="hero-title fade-up fade-up-delay-1">
          Temukan <span className="highlight">pelatih </span>yang tepat,<br />
          kembangkan potensi Anda!
        </h1>
        <p className="hero-subtitle fade-up fade-up-delay-2">
          Terhubung dengan para pelatih olahraga kelas dunia untuk sesi
          privat 1-on-1, latihan kelompok, dan program peningkatan performa.
        </p>
        <div className="hero-search fade-up fade-up-delay-3">
          <span style={{ marginRight: "10px", fontSize: "18px", color: "#aaa" }}>🔍</span>
          <input
            type="text"
            placeholder="Cari berdasarkan cabang olahraga, nama pelatih, atau lokasi..."
          />
          <button className="btn-cari">Cari</button>
        </div>
        <div className="hero-stats fade-up fade-up-delay-3">
          <div className="hero-stat-item">
            <div className="hero-stat-number">2,4<span>00+</span></div>
            <div className="hero-stat-label">Pelatih Terverifikasi</div>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-item">
            <div className="hero-stat-number">48<span>K+</span></div>
            <div className="hero-stat-label">Sesi dipesan</div>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-item">
            <div className="hero-stat-number">95<span>%</span></div>
            <div className="hero-stat-label">Tingkat Kepuasan</div>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-item">
            <div className="hero-stat-number">120<span>+</span></div>
            <div className="hero-stat-label">Sports Covered</div>
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
            <p className="section-coaches-label">PELATIH TERVERIFIKASI &amp; BERPENGALAMAN</p>
            <h2 className="section-coaches-title">
              Pelatih <span className="highlight">Terbaik</span>
            </h2>
          </div>
          <Link href="/pelatih" className="btn-lihat-semua-dark">Lihat Semua →</Link>
        </div>
        {/* Category Filter Tabs */}
        <div className="coach-filter-tabs">
          {["Semua", "Bulu Tangkis", "Futsal", "Bola Basket", "Tennis", "Renang", "Yoga"].map((tab, i) => (
            <button key={tab} className={`coach-filter-tab ${i === 0 ? "active" : ""}`}>{tab}</button>
          ))}
        </div>
        {/* Coach Grid */}
        <div className="coaches-grid">
          {featuredCoaches.map(coach => (
            <Link key={coach.id} href={`/pelatih/${coach.id}`} className="coach-card-link">
              <div className="coach-card">
                <div className="coach-card-img-wrap">
                  <div className="coach-card-img" style={{ background: coach.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "64px" }}>
                    {coach.emoji}
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
                  <p className="coach-card-loc">{coach.specialty} · {coach.location}</p>
                  <div className="coach-card-tags">
                    {coach.tags.map(t => <span key={t} className="coach-tag">{t}</span>)}
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
        <p className="section-testimonial-sub">Ribuan pengguna sudah merasakan manfaatnya</p>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testi-stars">
                {"★".repeat(t.rating)}<span style={{ color: "rgba(255,215,0,0.3)" }}>{"★".repeat(5 - t.rating)}</span>
              </div>
              <p className="testi-comment">"{t.comment}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.name[0]}</div>
                <div>
                  <p className="testi-name">{t.name}</p>
                  <p className="testi-sport">{t.sport}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="section-cta">
        <p className="cta-sub">Raih potensimu, satu sesi dalam satu waktu</p>
        <h2 className="cta-title">
          Siap untuk naik level?<br />
          <span className="highlight">Mulailah sesi pertamamu hari ini.</span>
        </h2>
        <p className="cta-desc">
          Lebih dari 2.400+ pelatih terverifikasi. Bayar per sesi dan tidak ada komitmen.
        </p>
        <div className="cta-actions">
          <Link href="/daftar"><button className="btn-cta-primary">Mulai Sekarang</button></Link>
          <Link href="/pelatih"><button className="btn-cta-secondary">Temukan Pelatih →</button></Link>
        </div>
      </section>


      <Footer />
    </>
  );
}
