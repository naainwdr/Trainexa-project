"use client";
import { useState, useRef } from "react";
import NavbarUser from "@/components/NavbarUser";
import Footer from "@/components/Footer";

const sportsOptions = [
  { emoji: "⚽", label: "Futsal" },
  { emoji: "🏀", label: "Bola Basket" },
  { emoji: "🏊", label: "Renang" },
  { emoji: "🏸", label: "Bulu Tangkis" },
  { emoji: "🎾", label: "Tennis" },
  { emoji: "⛳", label: "Golf" },
  { emoji: "🏃", label: "Lari" },
  { emoji: "🧘", label: "Yoga" },
  { emoji: "🥊", label: "Tinju" },
  { emoji: "🏋️", label: "Gym / Fitness" },
  { emoji: "🚴", label: "Bersepeda" },
  { emoji: "🏄", label: "Selancar" },
];

export default function UserProfilPage() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [username, setUsername] = useState("dina_agstn");
  const [name, setName] = useState("Dina Agustina");
  const [phone, setPhone] = useState("082167117061");
  const [email, setEmail] = useState("dinaagustina779@email.com");
  const [address, setAddress] = useState("Jl. Setiabudi, Bandung");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [interests, setInterests] = useState<string[]>(["Bulu Tangkis", "Lari"]);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [saved, setSaved] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const toggleInterest = (sport: string) =>
    setInterests((prev) =>
      prev.includes(sport) ? prev.filter((s) => s !== sport) : [...prev, sport]
    );

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatar(url);
    }
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "12px",
    padding: "13px 16px",
    color: "white",
    fontSize: "14px",
    fontFamily: "var(--font)",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.8px",
    color: "rgba(255,255,255,0.4)",
    textTransform: "uppercase",
    marginBottom: "8px",
    display: "block",
  };

  const sectionStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    padding: "32px",
    marginBottom: "24px",
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: "16px",
    fontWeight: 700,
    color: "white",
    marginBottom: "24px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#000", paddingTop: "68px", fontFamily: "var(--font)" }}>
      <NavbarUser userName="Dina Agustina" />

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* ─── PAGE HEADER ─── */}
        <div style={{ marginBottom: "36px" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px", color: "#FFD700", textTransform: "uppercase", marginBottom: "8px" }}>
            AKUN SAYA
          </p>
          <h1 style={{ fontSize: "32px", fontWeight: 800, color: "white", lineHeight: 1.2 }}>
            Profil Saya
          </h1>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", marginTop: "8px" }}>
            Kelola informasi pribadi dan preferensi olahraga kamu
          </p>
        </div>

        {/* ─── FOTO PROFIL ─── */}
        <div style={sectionStyle}>
          <p style={sectionTitleStyle}>
            <span style={{ fontSize: "20px" }}></span> Foto Profil
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            {/* Avatar */}
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: avatar
                    ? "transparent"
                    : "linear-gradient(135deg, #FFD700, #f0a500)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "42px",
                  fontWeight: 900,
                  color: "#000",
                  border: "3px solid rgba(255,215,0,0.4)",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onClick={() => fileRef.current?.click()}
              >
                {avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={avatar} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  "D"
                )}
              </div>
              <button
                onClick={() => fileRef.current?.click()}
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "#FFD700",
                  border: "2px solid #000",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                }}
              >
                ✏️
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleAvatarChange}
              />
            </div>

            {/* Info */}
            <div>
              <p style={{ fontWeight: 700, fontSize: "18px", color: "white" }}>Dina Agustina</p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>@dina_agstn</p>
              <button
                onClick={() => fileRef.current?.click()}
                style={{
                  marginTop: "14px",
                  background: "rgba(255,215,0,0.1)",
                  border: "1px solid rgba(255,215,0,0.35)",
                  color: "#FFD700",
                  padding: "8px 18px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "var(--font)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,215,0,0.2)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,215,0,0.1)"; }}
              >
                Ganti Foto
              </button>
            </div>
          </div>
        </div>

        {/* ─── INFORMASI AKUN ─── */}
        <div style={sectionStyle}>
          <p style={sectionTitleStyle}>
            <span style={{ fontSize: "20px" }}>👤</span> Informasi Akun
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {/* Username */}
            <div>
              <label style={labelStyle}>Username</label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.3)", fontSize: "14px" }}>@</span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ ...inputStyle, paddingLeft: "30px" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#FFD700"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                />
              </div>
            </div>

            {/* Nama Lengkap */}
            <div>
              <label style={labelStyle}>Nama Lengkap</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#FFD700"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
              />
            </div>

            {/* Nomor HP */}
            <div>
              <label style={labelStyle}>Nomor HP</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={inputStyle}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#FFD700"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
              />
            </div>

            {/* Email */}
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#FFD700"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
              />
            </div>

            {/* Alamat — full width */}
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={labelStyle}>Alamat</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  lineHeight: 1.6,
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#FFD700"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
              />
            </div>
          </div>
        </div>

        {/* ─── KEAMANAN / KATA SANDI ─── */}
        <div style={sectionStyle}>
          <p style={sectionTitleStyle}>
            <span style={{ fontSize: "20px" }}>🔒</span> Keamanan Akun
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
            {/* Kata Sandi Saat Ini */}
            <div>
              <label style={labelStyle}>Kata Sandi Saat Ini</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showCurrent ? "text" : "password"}
                  value={currentPassword}
                  placeholder="••••••••"
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  style={{ ...inputStyle, paddingRight: "44px" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#FFD700"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                />
                <button
                  onClick={() => setShowCurrent(!showCurrent)}
                  style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: "16px", color: "rgba(255,255,255,0.4)" }}
                >
                  {showCurrent ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Kata Sandi Baru */}
            <div>
              <label style={labelStyle}>Kata Sandi Baru</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showNew ? "text" : "password"}
                  value={newPassword}
                  placeholder="••••••••"
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={{ ...inputStyle, paddingRight: "44px" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#FFD700"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                />
                <button
                  onClick={() => setShowNew(!showNew)}
                  style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: "16px", color: "rgba(255,255,255,0.4)" }}
                >
                  {showNew ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Konfirmasi Kata Sandi */}
            <div>
              <label style={labelStyle}>Konfirmasi Kata Sandi</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showConfirm ? "text" : "password"}
                  value={confirmPassword}
                  placeholder="••••••••"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{
                    ...inputStyle,
                    paddingRight: "44px",
                    borderColor: confirmPassword && newPassword && confirmPassword !== newPassword
                      ? "#ef4444"
                      : "rgba(255,255,255,0.12)",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#FFD700"; }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      confirmPassword && newPassword && confirmPassword !== newPassword
                        ? "#ef4444"
                        : "rgba(255,255,255,0.12)";
                  }}
                />
                <button
                  onClick={() => setShowConfirm(!showConfirm)}
                  style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: "16px", color: "rgba(255,255,255,0.4)" }}
                >
                  {showConfirm ? "🙈" : "👁️"}
                </button>
              </div>
              {confirmPassword && newPassword && confirmPassword !== newPassword && (
                <p style={{ fontSize: "11px", color: "#ef4444", marginTop: "6px" }}>Kata sandi tidak cocok</p>
              )}
            </div>
          </div>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", marginTop: "16px" }}>
            Kosongkan jika tidak ingin mengubah kata sandi
          </p>
        </div>

        {/* ─── MINAT OLAHRAGA ─── */}
        <div style={sectionStyle}>
          <p style={sectionTitleStyle}>
            <span style={{ fontSize: "20px" }}>🏅</span> Minat Olahraga
            <span style={{
              marginLeft: "auto",
              fontSize: "12px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.35)",
            }}>
              {interests.length} dipilih
            </span>
          </p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginBottom: "20px" }}>
            Pilih cabang olahraga yang kamu minati untuk mendapatkan rekomendasi pelatih yang lebih tepat
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
            {sportsOptions.map((sport) => {
              const selected = interests.includes(sport.label);
              return (
                <label
                  key={sport.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: selected
                      ? "1.5px solid rgba(255,215,0,0.6)"
                      : "1px solid rgba(255,255,255,0.08)",
                    background: selected
                      ? "rgba(255,215,0,0.07)"
                      : "rgba(255,255,255,0.02)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    userSelect: "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!selected) e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    if (!selected) e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => toggleInterest(sport.label)}
                    style={{ display: "none" }}
                  />
                  {/* Custom checkbox */}
                  <div style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "6px",
                    border: selected ? "none" : "1.5px solid rgba(255,255,255,0.2)",
                    background: selected ? "#FFD700" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.2s",
                    fontSize: "12px",
                    fontWeight: 900,
                    color: "#000",
                  }}>
                    {selected && "✓"}
                  </div>
                  <span style={{ fontSize: "20px" }}>{sport.emoji}</span>
                  <span style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: selected ? "#FFD700" : "rgba(255,255,255,0.75)",
                    transition: "color 0.2s",
                  }}>
                    {sport.label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* ─── SAVE BUTTON ─── */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "8px" }}>
          <button
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.5)",
              padding: "12px 28px",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "var(--font)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
          >
            Batalkan
          </button>
          <button
            onClick={handleSave}
            style={{
              background: saved ? "#22c55e" : "#FFD700",
              color: "#000",
              border: "none",
              padding: "12px 32px",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "var(--font)",
              transition: "all 0.3s",
              boxShadow: saved
                ? "0 4px 20px rgba(34,197,94,0.35)"
                : "0 4px 20px rgba(255,215,0,0.3)",
            }}
            onMouseEnter={(e) => { if (!saved) e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
          >
            {saved ? "✓ Tersimpan!" : "Simpan Perubahan"}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
