"use client";
import Link from "next/link";
import { useState } from "react";

const inputClass: React.CSSProperties = {
  width: "100%",
  border: "1.5px solid #e5e7eb",
  borderRadius: "10px",
  padding: "13px 16px",
  fontSize: "14px",
  fontFamily: "var(--font)",
  color: "#111",
  background: "white",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
};

const labelClass: React.CSSProperties = {
  display: "block",
  fontSize: "13px",
  fontWeight: "600",
  color: "#374151",
  marginBottom: "8px",
};

const sectionTitle: React.CSSProperties = {
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "1.2px",
  textTransform: "uppercase" as const,
  color: "#9ca3af",
  marginBottom: "16px",
  marginTop: "8px",
};

export default function RegisterCoachPage() {
  const [focused, setFocused] = useState<string | null>(null);
  const [form, setForm] = useState({
    email: "", nama: "", telepon: "", alamat: "", bio: "",
    pengalaman: "", namaBank: "", nomorRekening: "",
    password: "", konfirmasi: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getBorder = (field: string) => focused === field ? "#FFD700" : "#e5e7eb";

  return (
    <div style={{ minHeight: "100vh", background: "#000", display: "flex", flexDirection: "column" }}>
      {/* ─── NAVBAR ─── */}
      <nav className="navbar">
        <Link href="/" className="navbar-logo">train<span>exa</span></Link>
        <ul className="navbar-menu">
          <li><Link href="/">Beranda</Link></li>
          <li><Link href="/olahraga">Olahraga</Link></li>
          <li><Link href="/cara-kerja">Cara Kerja</Link></li>
          <li><Link href="/pelatih">Pelatih</Link></li>
          <li><Link href="/ulasan">Ulasan</Link></li>
        </ul>
        <div className="navbar-actions">
          <Link href="/masuk"><button className="btn-masuk">Masuk</button></Link>
          <Link href="/daftar"><button className="btn-daftar">Get Started</button></Link>
        </div>
      </nav>

      {/* ─── FORM ─── */}
      <div style={{ flex: 1, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "100px 20px 60px" }}>
        <div style={{
          background: "white",
          borderRadius: "24px",
          padding: "48px 44px",
          maxWidth: "540px",
          width: "100%",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
        }}>
          {/* Header */}
          <div style={{ marginBottom: "32px" }}>
            <Link href="/" style={{ display: "inline-block", marginBottom: "16px" }}>
              <span style={{ fontSize: "20px", fontWeight: "800", color: "#FFD700" }}>
                train<span style={{ color: "#000" }}>exa</span>
              </span>
            </Link>
            <h1 style={{ fontSize: "22px", fontWeight: "800", color: "#111", marginBottom: "6px" }}>
              Lengkapi Registrasi Coach
            </h1>
            <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.6 }}>
              Bergabunglah sebagai pelatih profesional dan mulai terima klien pertama Anda.
            </p>
          </div>

          <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            onSubmit={e => { e.preventDefault(); alert("Registrasi pelatih berhasil!"); }}>

            {/* ─ Informasi Pribadi ─ */}
            <p style={sectionTitle}>Informasi Pribadi</p>

            <div>
              <label style={labelClass}>Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange}
                placeholder="Gunakan email aktif..."
                style={{ ...inputClass, borderColor: getBorder("email") }}
                onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} required />
            </div>

            <div>
              <label style={labelClass}>Nama Lengkap</label>
              <input name="nama" type="text" value={form.nama} onChange={handleChange}
                placeholder="Masukkan nama lengkap Anda..."
                style={{ ...inputClass, borderColor: getBorder("nama") }}
                onFocus={() => setFocused("nama")} onBlur={() => setFocused(null)} required />
            </div>

            <div>
              <label style={labelClass}>No. Telepon</label>
              <input name="telepon" type="tel" value={form.telepon} onChange={handleChange}
                placeholder="Masukkan nomor telepon aktif"
                style={{ ...inputClass, borderColor: getBorder("telepon") }}
                onFocus={() => setFocused("telepon")} onBlur={() => setFocused(null)} />
            </div>

            <div>
              <label style={labelClass}>Alamat</label>
              <input name="alamat" type="text" value={form.alamat} onChange={handleChange}
                placeholder="Masukkan alamat lengkap Anda..."
                style={{ ...inputClass, borderColor: getBorder("alamat") }}
                onFocus={() => setFocused("alamat")} onBlur={() => setFocused(null)} />
            </div>

            {/* ─ Informasi Kepelatihan ─ */}
            <p style={{ ...sectionTitle, marginTop: "12px" }}>Informasi Kepelatihan</p>

            <div>
              <label style={labelClass}>Bio</label>
              <textarea name="bio" value={form.bio}
                onChange={handleChange as React.ChangeEventHandler<HTMLTextAreaElement>}
                placeholder="Masukkan deskripsi keahlian Anda..."
                rows={3}
                style={{ ...inputClass, borderColor: getBorder("bio"), resize: "vertical" as const }}
                onFocus={() => setFocused("bio")} onBlur={() => setFocused(null)} />
            </div>

            <div>
              <label style={labelClass}>Tahun Pengalaman</label>
              <input name="pengalaman" type="number" min="0" value={form.pengalaman} onChange={handleChange}
                placeholder="Contoh: 5"
                style={{ ...inputClass, borderColor: getBorder("pengalaman") }}
                onFocus={() => setFocused("pengalaman")} onBlur={() => setFocused(null)} />
            </div>

            {/* ─ Informasi Bank ─ */}
            <p style={{ ...sectionTitle, marginTop: "12px" }}>Informasi Bank</p>

            <div>
              <label style={labelClass}>Nama Bank</label>
              <input name="namaBank" type="text" value={form.namaBank} onChange={handleChange}
                placeholder="Minimal 4 digit"
                style={{ ...inputClass, borderColor: getBorder("namaBank") }}
                onFocus={() => setFocused("namaBank")} onBlur={() => setFocused(null)} />
            </div>

            <div>
              <label style={labelClass}>Nomor Rekening Bank</label>
              <input name="nomorRekening" type="text" value={form.nomorRekening} onChange={handleChange}
                placeholder="Minimal 4 digit"
                style={{ ...inputClass, borderColor: getBorder("nomorRekening") }}
                onFocus={() => setFocused("nomorRekening")} onBlur={() => setFocused(null)} />
            </div>

            {/* ─ Password ─ */}
            <p style={{ ...sectionTitle, marginTop: "12px" }}>Keamanan Akun</p>

            <div>
              <label style={labelClass}>Password</label>
              <input name="password" type="password" value={form.password} onChange={handleChange}
                placeholder="Minimal 6 digit"
                style={{ ...inputClass, borderColor: getBorder("password") }}
                onFocus={() => setFocused("password")} onBlur={() => setFocused(null)} required />
            </div>

            <div>
              <label style={labelClass}>Konfirmasi Password</label>
              <input name="konfirmasi" type="password" value={form.konfirmasi} onChange={handleChange}
                placeholder="Masukkan ulang password"
                style={{ ...inputClass, borderColor: getBorder("konfirmasi") }}
                onFocus={() => setFocused("konfirmasi")} onBlur={() => setFocused(null)} required />
            </div>

            <button type="submit" style={{
              width: "100%",
              background: "#FFD700",
              color: "#000",
              border: "none",
              borderRadius: "12px",
              padding: "15px",
              fontSize: "15px",
              fontWeight: "800",
              cursor: "pointer",
              fontFamily: "var(--font)",
              marginTop: "12px",
              transition: "all 0.2s",
              boxShadow: "0 4px 14px rgba(255,215,0,0.3)"
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#f0c800"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#FFD700"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Daftar Sekarang
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: "20px", fontSize: "13px", color: "#9ca3af" }}>
            Sudah punya akun?{" "}
            <Link href="/masuk" style={{ color: "#FFD700", fontWeight: "700" }}>Masuk</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
