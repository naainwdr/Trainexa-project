"use client";

export default function BookingNotificationPage() {
  return (
    <div className="admin-container">
      {/* Header */}
      <div className="admin-header">
        <div>
          <h1 className="admin-title">Notifikasi Booking</h1>
          <p className="admin-subtitle">Daftar permintaan booking dari member kepada coach - tinjau dan ambil tindakan</p>
        </div>
        <div className="admin-header-actions">
          <button className="btn-admin-outline">
            <span>📄</span> Ekspor
          </button>
          <button className="btn-admin-primary">
            <span>🔄</span> Segarkan
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="admin-stats-grid admin-stats-4">
        <div className="admin-stat-card">
          <div className="admin-stat-icon">⏳</div>
          <div className="admin-stat-label">7</div>
          <div className="admin-stat-title">Menunggu Tinjauan</div>
          <div className="admin-stat-trend trend-neutral">+3 hari ini</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon">✅</div>
          <div className="admin-stat-label">142</div>
          <div className="admin-stat-title">Diterima Bulan ini</div>
          <div className="admin-stat-trend trend-up">+15% vs bulan lalu</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ color: '#ef4444' }}>✖</div>
          <div className="admin-stat-label">12</div>
          <div className="admin-stat-title">Ditolak Bulan ini</div>
          <div className="admin-stat-trend trend-down">8% dari total</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon">📅</div>
          <div className="admin-stat-label">154</div>
          <div className="admin-stat-title">Total Booking Bulan Ini</div>
          <div className="admin-stat-trend trend-up">+12% dari bulan lalu</div>
        </div>
      </div>

      {/* Tabs & Search */}
      <div className="admin-tabs-wrapper">
        <div className="admin-tabs">
          <div className="admin-tab active">Semua (7)</div>
          <div className="admin-tab">Baru (3)</div>
          <div className="admin-tab">Menunggu (2)</div>
          <div className="admin-tab">Ditolak (2)</div>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <input type="text" className="admin-input" placeholder="Cari..." />
        </div>
      </div>

      {/* Bookings List */}
      <div>
        {/* Item 1 */}
        <div className="admin-booking-card">
          <div className="admin-booking-users">
            <div className="admin-user-profile">
              <div className="admin-user-avatar" style={{ background: '#fcc419' }}>JD</div>
              <div className="admin-user-info">
                <p className="admin-user-role">Member</p>
                <p className="admin-user-name">Jamie Davis</p>
              </div>
            </div>
            <div style={{ color: '#888' }}>➡️</div>
            <div className="admin-user-profile">
              <div className="admin-user-avatar" style={{ background: '#22c55e', color: '#fff' }}>AS</div>
              <div className="admin-user-info">
                <p className="admin-user-role">Coach</p>
                <p className="admin-user-name">Arif Santoso</p>
              </div>
            </div>
          </div>

          <div className="admin-booking-details">
            <div className="admin-booking-tags">
              <span className="admin-tag status-menunggu">🟡 Menunggu</span>
              <span className="admin-tag sport">🏸 Badminton</span>
              <span className="admin-tag sport">Privat</span>
            </div>
            <div className="admin-booking-meta">
              <span>📅 Sen, 12 Apr 2026</span>
              <span>⏰ 08:00 - 09:00 WIB</span>
              <span>📍 GOR Pancoran, Jakarta</span>
              <span style={{ color: '#fff', fontWeight: '700' }}>💰 Rp 320.000</span>
            </div>
          </div>

          <div className="admin-booking-actions">
            <button className="btn-action detail">Detail</button>
            <button className="btn-action tolak">✖ Tolak</button>
            <button className="btn-action terima">✓ Terima</button>
          </div>
        </div>

        {/* Item 2 */}
        <div className="admin-booking-card">
          <div className="admin-booking-users">
            <div className="admin-user-profile">
              <div className="admin-user-avatar" style={{ background: '#3b82f6', color: '#fff' }}>SR</div>
              <div className="admin-user-info">
                <p className="admin-user-role">Member</p>
                <p className="admin-user-name">Sinta Rahayu</p>
              </div>
            </div>
            <div style={{ color: '#888' }}>➡️</div>
            <div className="admin-user-profile">
              <div className="admin-user-avatar" style={{ background: '#ec4899', color: '#fff' }}>DK</div>
              <div className="admin-user-info">
                <p className="admin-user-role">Coach</p>
                <p className="admin-user-name">Devi Kusuma</p>
              </div>
            </div>
          </div>

          <div className="admin-booking-details">
            <div className="admin-booking-tags">
              <span className="admin-tag status-menunggu">🟡 Menunggu</span>
              <span className="admin-tag sport">🏊 Renang</span>
              <span className="admin-tag sport">Privat</span>
            </div>
            <div className="admin-booking-meta">
              <span>📅 Sel, 14 Apr 2026</span>
              <span>⏰ 07:00 - 08:00 WIB</span>
              <span>📍 Kolam Renang GOR Bandung</span>
              <span style={{ color: '#fff', fontWeight: '700' }}>💰 Rp 250.000</span>
            </div>
          </div>

          <div className="admin-booking-actions">
            <button className="btn-action detail">Detail</button>
            <button className="btn-action tolak">✖ Tolak</button>
            <button className="btn-action terima">✓ Terima</button>
          </div>
        </div>
      </div>
    </div>
  );
}
