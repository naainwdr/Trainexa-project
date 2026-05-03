"use client";

export default function VerifikasiPelatihPage() {
  return (
    <div className="admin-container">
      {/* Header */}
      <div className="admin-header">
        <div>
          <h1 className="admin-title">Verifikasi Sesi Pelatih</h1>
          <p className="admin-subtitle">Setiap coach wajib mengunggah sertifikat sebelum mengaktifkan sesi atau jadwal baru — tinjau dan verifikasi di sini</p>
        </div>
        <div className="admin-header-actions">
          <button className="btn-admin-outline">
            <span>📄</span> Ekspor Log
          </button>
        </div>
      </div>

      {/* Alert Box */}
      <div className="admin-alert-box">
        <div className="admin-alert-icon">⚠️</div>
        <div className="admin-alert-text">
          <strong>Kebijakan Verifikasi:</strong> Sesi atau jadwal baru milik coach hanya akan aktif setelah sertifikat terkait diverifikasi oleh admin. Sertifikat yang ditolak akan menonaktifkan sesi yang terhubung secara otomatis.
        </div>
      </div>

      {/* Stats */}
      <div className="admin-stats-grid admin-stats-4">
        <div className="admin-stat-card">
          <div className="admin-stat-icon">📋</div>
          <div className="admin-stat-label">5</div>
          <div className="admin-stat-title">Menunggu Tinjauan</div>
          <div className="admin-stat-trend trend-up">↑ 2 hari ini</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ color: '#22c55e' }}>✅</div>
          <div className="admin-stat-label">1,842</div>
          <div className="admin-stat-title">Sertifikat Disetujui</div>
          <div className="admin-stat-trend trend-up">↑ 28 bulan ini</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ color: '#ef4444' }}>❌</div>
          <div className="admin-stat-label">47</div>
          <div className="admin-stat-title">Sertifikat Ditolak</div>
          <div className="admin-stat-trend trend-neutral">2.5% dari total</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon">⏱</div>
          <div className="admin-stat-label">4,2 j</div>
          <div className="admin-stat-title">Rata-rata Waktu Tinjauan</div>
          <div className="admin-stat-trend trend-up">↓ 30 menit</div>
        </div>
      </div>

      {/* Tabs & Search */}
      <div className="admin-tabs-wrapper">
        <div className="admin-tabs">
          <div className="admin-tab active">Menunggu (5)</div>
          <div className="admin-tab">Disetujui</div>
          <div className="admin-tab">Ditolak</div>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <input type="text" className="admin-input" placeholder="Cari..." />
        </div>
      </div>

      {/* Verification Card */}
      <div className="admin-cert-card">
        {/* Header Info */}
        <div className="admin-cert-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="admin-user-avatar" style={{ background: '#22c55e', color: '#fff', width: '48px', height: '48px', fontSize: '16px' }}>
              AS
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '800' }}>Ahmad Setiawan</h3>
                <span className="admin-tag status-menunggu" style={{ padding: '2px 8px', fontSize: '11px' }}>🟡 Menunggu</span>
                <span className="admin-tag sport" style={{ padding: '2px 8px', fontSize: '11px' }}>🏸 Badminton</span>
              </div>
              <p style={{ margin: 0, fontSize: '12px', color: '#888', marginBottom: '8px' }}>
                Coach ID #C-2841 • Yogyakarta • Diunggah 28 Mar 2026
              </p>
              <p style={{ margin: 0, fontSize: '13px', color: '#ccc' }}>
                Sesi terkait: <strong style={{ color: '#fff' }}>Kelas Privat Badminton Lanjutan</strong>
                <br />
                <span style={{ color: '#fcc419', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                  ⚠️ Sesi ini belum aktif sampai sertifikat diverifikasi
                </span>
              </p>
            </div>
          </div>
          <div>
            <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '6px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '700' }}>
              BWF Level 2
            </span>
          </div>
        </div>

        {/* Attachment Box */}
        <div className="admin-cert-file">
          <div className="admin-cert-file-info">
            <div className="admin-cert-file-icon">📄</div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '2px' }}>
                BWF_Coaching_Certificate_L2_AhmadSetiawan.pdf
              </div>
              <div style={{ fontSize: '12px', color: '#888' }}>
                2.4 MB • PDF • Diunggah 28 Mar 2026 16:42 WIB
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-admin-outline" style={{ padding: '6px 12px', fontSize: '12px' }}>👁 Pratinjau</button>
            <button className="btn-admin-outline" style={{ padding: '6px 12px', fontSize: '12px' }}>⬇ Unduh</button>
          </div>
        </div>

        {/* Info Grid */}
        <div className="admin-cert-details-grid">
          <div className="admin-cert-detail-box">
            <div className="admin-cert-detail-label">Nama Sertifikat</div>
            <div className="admin-cert-detail-value">BWF Coaching Level 2</div>
          </div>
          <div className="admin-cert-detail-box">
            <div className="admin-cert-detail-label">Lembaga Penerbit</div>
            <div className="admin-cert-detail-value">Badminton World Federation</div>
          </div>
          <div className="admin-cert-detail-box">
            <div className="admin-cert-detail-label">Tanggal Terbit</div>
            <div className="admin-cert-detail-value">15 Januari 2024</div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="admin-cert-footer">
          <input 
            type="text" 
            className="admin-input" 
            placeholder="Catatan untuk coach (opsional, akan dikirim via notifikasi)..." 
            style={{ flex: 1, minWidth: '300px' }} 
          />
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn-action tolak" style={{ padding: '10px 20px' }}>✖ Tolak & Nonaktifkan Sesi</button>
            <button className="btn-action-primary">✓ Setujui & Aktifkan Sesi</button>
          </div>
        </div>
      </div>
    </div>
  );
}
