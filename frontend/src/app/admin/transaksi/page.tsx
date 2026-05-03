"use client";

export default function TransactionLogPage() {
  return (
    <div className="admin-container">
      {/* Header */}
      <div className="admin-header">
        <div>
          <h1 className="admin-title">Log Transaksi</h1>
          <p className="admin-subtitle">Catatan historis seluruh aktivitas booking dan pembayaran pengguna</p>
        </div>
        <div className="admin-header-actions">
          <button className="btn-admin-outline">
            <span>📄</span> Ekspor CSV
          </button>
          <button className="btn-admin-primary">
            <span>⚙</span> Filter Lanjutan
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="admin-stats-grid admin-stats-3">
        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ background: '#fcc419', color: '#000' }}>💰</div>
          <div className="admin-stat-label">Rp 284 Jt</div>
          <div className="admin-stat-title" style={{ color: '#888', fontWeight: 'normal' }}>Total Volume Transaksi (Bulan Ini)</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ background: '#22c55e', color: '#fff' }}>📈</div>
          <div className="admin-stat-label">Rp 14,2 Jt</div>
          <div className="admin-stat-title" style={{ color: '#888', fontWeight: 'normal' }}>Pendapatan Platform (5%)</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ background: '#3b82f6', color: '#fff' }}>🔢</div>
          <div className="admin-stat-label">948</div>
          <div className="admin-stat-title" style={{ color: '#888', fontWeight: 'normal' }}>Jumlah Transaksi Bulan Ini</div>
        </div>
      </div>

      {/* Table Container */}
      <div className="admin-table-container">
        {/* Filters */}
        <div className="admin-table-filters">
          <div style={{ flex: 1, display: 'flex', gap: '16px' }}>
            <input type="text" className="admin-input" placeholder="🔍 Cari ID transaksi, nama member, atau coach..." style={{ width: '350px' }} />
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <input type="text" className="admin-input" defaultValue="01/03/2026" style={{ width: '120px', textAlign: 'center' }} />
            <span style={{ color: '#888' }}>-</span>
            <input type="text" className="admin-input" defaultValue="31/03/2026" style={{ width: '120px', textAlign: 'center' }} />
            <select className="admin-input" style={{ width: '150px' }}>
              <option>Pilih Status</option>
              <option>Sukses</option>
              <option>Pending</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID Transaksi</th>
              <th>Member (Pembeli)</th>
              <th>Coach (Penerima)</th>
              <th>Sesi Olahraga</th>
              <th>Tanggal Sesi</th>
              <th>Jumlah Bayar</th>
              <th>Biaya Platform</th>
              <th>Metode</th>
              <th>Status</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td style={{ color: '#fcc419', fontWeight: '600' }}>#TXA-20182</td>
              <td>
                <div className="table-user">
                  <div className="table-user-avatar" style={{ background: '#fcc419' }}>JD</div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#fff' }}>Jamie Davis</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>ID: #8432</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="table-user">
                  <div className="table-user-avatar" style={{ background: '#22c55e', color: '#fff' }}>AS</div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#fff' }}>Arif Santoso</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>Badminton</div>
                  </div>
                </div>
              </td>
              <td><span className="admin-tag sport" style={{ display: 'inline-flex' }}>🏸 Privat 60 mnt</span></td>
              <td>
                <div style={{ fontWeight: '600', color: '#fff' }}>12 Apr 2026</div>
                <div style={{ fontSize: '11px', color: '#888' }}>08:00 WIB</div>
              </td>
              <td style={{ fontWeight: '700', color: '#fff' }}>Rp 320.000</td>
              <td style={{ fontWeight: '700', color: '#fcc419' }}>Rp 16.000</td>
              <td>🏦 BCA</td>
              <td><span className="status-pill sukses">Sukses</span></td>
              <td><button className="btn-action detail">Detail</button></td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td style={{ color: '#fcc419', fontWeight: '600' }}>#TXA-20181</td>
              <td>
                <div className="table-user">
                  <div className="table-user-avatar" style={{ background: '#3b82f6', color: '#fff' }}>SR</div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#fff' }}>Sinta Rahayu</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>ID: #8420</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="table-user">
                  <div className="table-user-avatar" style={{ background: '#ec4899', color: '#fff' }}>DK</div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#fff' }}>Devi Kusuma</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>Renang</div>
                  </div>
                </div>
              </td>
              <td><span className="admin-tag sport" style={{ display: 'inline-flex' }}>🏊 Privat 60 mnt</span></td>
              <td>
                <div style={{ fontWeight: '600', color: '#fff' }}>14 Apr 2026</div>
                <div style={{ fontSize: '11px', color: '#888' }}>07:00 WIB</div>
              </td>
              <td style={{ fontWeight: '700', color: '#fff' }}>Rp 250.000</td>
              <td style={{ fontWeight: '700', color: '#fcc419' }}>Rp 12.500</td>
              <td>📱 Gopay</td>
              <td><span className="status-pill pending">Pending</span></td>
              <td><button className="btn-action detail">Detail</button></td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td style={{ color: '#fcc419', fontWeight: '600' }}>#TXA-20180</td>
              <td>
                <div className="table-user">
                  <div className="table-user-avatar" style={{ background: '#8b5cf6', color: '#fff' }}>DW</div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#fff' }}>Dimas Wahyu</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>ID: #8410</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="table-user">
                  <div className="table-user-avatar" style={{ background: '#f43f5e', color: '#fff' }}>RP</div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#fff' }}>Rizky Pratama</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>Futsal</div>
                  </div>
                </div>
              </td>
              <td><span className="admin-tag sport" style={{ display: 'inline-flex' }}>⚽ Kelompok 90 mnt</span></td>
              <td>
                <div style={{ fontWeight: '600', color: '#fff' }}>22 Mar 2026</div>
                <div style={{ fontSize: '11px', color: '#888' }}>19:00 WIB</div>
              </td>
              <td style={{ fontWeight: '700', color: '#fff' }}>Rp 200.000</td>
              <td style={{ fontWeight: '700', color: '#fcc419' }}>Rp 10.000</td>
              <td>🏦 BNI</td>
              <td><span className="status-pill sukses">Sukses</span></td>
              <td><button className="btn-action detail">Detail</button></td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div className="admin-pagination">
          <div>Menampilkan 1-3 dari 948 transaksi</div>
          <div className="pagination-controls">
            <button className="page-btn">←</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span style={{ margin: '0 4px', lineHeight: '32px' }}>...</span>
            <button className="page-btn">95</button>
            <button className="page-btn">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}
