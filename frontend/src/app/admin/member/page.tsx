"use client";

export default function ManajemenMemberPage() {
  return (
    <div className="admin-container">
      {/* Header */}
      <div className="admin-header">
        <div>
          <h1 className="admin-title">Manajemen Member</h1>
          <p className="admin-subtitle">Pantau data member, riwayat pengeluaran, dan status pembayaran mereka</p>
        </div>
        <div className="admin-header-actions">
          <button className="btn-admin-outline">
            <span>📄</span> Ekspor
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="admin-stats-grid admin-stats-4">
        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ color: '#3b82f6' }}>⬇</div>
          <div className="admin-stat-label">13.580</div>
          <div className="admin-stat-title">Total Member Aktif</div>
          <div className="admin-stat-trend trend-up">↑ 480 minggu ini</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ background: '#fcc419', color: '#000' }}>💸</div>
          <div className="admin-stat-label">Rp 284 Jt</div>
          <div className="admin-stat-title">Total Pengeluaran Member (Maret)</div>
          <div className="admin-stat-trend trend-up">↑ 12%</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon">⏳</div>
          <div className="admin-stat-label">24</div>
          <div className="admin-stat-title">Pembayaran Pending</div>
          <div className="admin-stat-trend trend-down">↑ 4 hari ini</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ color: '#ef4444' }}>🚫</div>
          <div className="admin-stat-label">18</div>
          <div className="admin-stat-title">Akun Ditangguhkan</div>
          <div className="admin-stat-trend trend-neutral">Tidak berubah</div>
        </div>
      </div>

      {/* Table Container */}
      <div className="admin-table-container">
        {/* Filters */}
        <div className="admin-table-filters">
          <div style={{ flex: 1, display: 'flex', gap: '16px' }}>
            <input type="text" className="admin-input" placeholder="🔍 Cari member berdasarkan nama, email, atau ID..." style={{ width: '400px' }} />
          </div>
          <div style={{ fontSize: '13px', color: '#888', fontWeight: '600' }}>
            13.580 member
          </div>
        </div>

        {/* Table */}
        <table className="admin-table">
          <thead>
            <tr>
              <th>Member</th>
              <th>Email</th>
              <th>Bergabung</th>
              <th>Total Sesi</th>
              <th>Total Pengeluaran</th>
              <th>Status Pembayaran</th>
              <th>Status Akun</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td>
                <div className="table-user">
                  <div className="table-user-avatar" style={{ background: '#fcc419' }}>JD</div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#fff' }}>Jamie Davis</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>ID: #8432</div>
                  </div>
                </div>
              </td>
              <td style={{ color: '#ccc' }}>jamie@email.com</td>
              <td style={{ color: '#ccc' }}>
                <div style={{ fontWeight: '600', color: '#fff' }}>12 Jan</div>
                <div style={{ fontSize: '11px', color: '#888' }}>2026</div>
              </td>
              <td style={{ fontWeight: '700', color: '#fff' }}>9</td>
              <td style={{ fontWeight: '700', color: '#fff' }}>Rp 2.100.000</td>
              <td>
                <div style={{ color: '#22c55e', fontWeight: '700', fontSize: '12px' }}>Lunas</div>
                <div style={{ fontSize: '11px', color: '#888' }}>Terakhir: 15 Apr 2026</div>
              </td>
              <td><div style={{ color: '#22c55e', fontWeight: '600', fontSize: '12px' }}><span className="status-dot aktif"></span>Aktif</div></td>
              <td>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="btn-action detail">Riwayat</button>
                  <button className="btn-action detail">Tangguhkan</button>
                </div>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td>
                <div className="table-user">
                  <div className="table-user-avatar" style={{ background: '#3b82f6', color: '#fff' }}>SR</div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#fff' }}>Sinta Rahayu</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>ID: #8420</div>
                  </div>
                </div>
              </td>
              <td style={{ color: '#ccc' }}>sinta@email.com</td>
              <td style={{ color: '#ccc' }}>
                <div style={{ fontWeight: '600', color: '#fff' }}>15 Feb</div>
                <div style={{ fontSize: '11px', color: '#888' }}>2026</div>
              </td>
              <td style={{ fontWeight: '700', color: '#fff' }}>3</td>
              <td style={{ fontWeight: '700', color: '#fff' }}>Rp 750.000</td>
              <td>
                <div style={{ color: '#fcc419', fontWeight: '700', fontSize: '12px' }}>Pending</div>
                <div style={{ fontSize: '11px', color: '#888' }}>Menunggu konfirmasi</div>
              </td>
              <td><div style={{ color: '#22c55e', fontWeight: '600', fontSize: '12px' }}><span className="status-dot aktif"></span>Aktif</div></td>
              <td>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="btn-action detail">Riwayat</button>
                  <button className="btn-action detail">Tangguhkan</button>
                </div>
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td>
                <div className="table-user">
                  <div className="table-user-avatar" style={{ background: '#ef4444', color: '#fff' }}>XX</div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#fff' }}>Pengguna Mencurigakan</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>ID: #9921</div>
                  </div>
                </div>
              </td>
              <td style={{ color: '#ccc' }}>xx@email.com</td>
              <td style={{ color: '#ccc' }}>
                <div style={{ fontWeight: '600', color: '#fff' }}>20 Mar</div>
                <div style={{ fontSize: '11px', color: '#888' }}>2026</div>
              </td>
              <td style={{ fontWeight: '700', color: '#fff' }}>0</td>
              <td style={{ fontWeight: '700', color: '#fff' }}>—</td>
              <td>
                <div style={{ color: '#ef4444', fontWeight: '700', fontSize: '12px' }}>Tidak Ada</div>
                <div style={{ fontSize: '11px', color: '#888' }}>Aktivitas</div>
              </td>
              <td><div style={{ color: '#ef4444', fontWeight: '600', fontSize: '12px' }}><span className="status-dot tangguh"></span>Ditangguhkan</div></td>
              <td>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="btn-action detail">Tinjau</button>
                  <button className="btn-action-primary" style={{ padding: '8px 16px', fontSize: '12px' }}>Aktifkan</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div className="admin-pagination">
          <div>Menampilkan 1-3 dari 13.580 member</div>
          <div className="pagination-controls">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <span style={{ margin: '0 4px', lineHeight: '32px' }}>...</span>
            <button className="page-btn" style={{ width: 'auto', padding: '0 12px' }}>1.358</button>
          </div>
        </div>
      </div>
    </div>
  );
}
