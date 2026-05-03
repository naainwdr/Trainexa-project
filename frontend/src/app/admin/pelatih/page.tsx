"use client";

export default function ManajemenPelatihPage() {
  return (
    <div className="admin-container">
      {/* Header */}
      <div className="admin-header">
        <div>
          <h1 className="admin-title">Manajemen Pelatih</h1>
          <p className="admin-subtitle">Kelola data coach, pantau pendapatan, dan status aktif mereka di platform</p>
        </div>
        <div className="admin-header-actions">
          <button className="btn-admin-outline">
            <span>📄</span> Ekspor
          </button>
          <button className="btn-admin-primary">
            <span>+</span> Tambah Coach
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="admin-stats-grid admin-stats-4">
        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ color: '#22c55e' }}>👤</div>
          <div className="admin-stat-label">1.240</div>
          <div className="admin-stat-title">Total Coach Aktif</div>
          <div className="admin-stat-trend trend-up">↑ 42 minggu ini</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ background: '#fcc419', color: '#000' }}>💸</div>
          <div className="admin-stat-label">Rp 8,4 M</div>
          <div className="admin-stat-title">Total Pendapatan Coach (Maret)</div>
          <div className="admin-stat-trend trend-up">↑ 18%</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ background: '#3b82f6', color: '#fff' }}>⏳</div>
          <div className="admin-stat-label">8</div>
          <div className="admin-stat-title">Perlu Verifikasi</div>
          <div className="admin-stat-trend trend-neutral">Sertifikat baru</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ color: '#ef4444' }}>🚫</div>
          <div className="admin-stat-label">3</div>
          <div className="admin-stat-title">Ditangguhkan</div>
          <div className="admin-stat-trend trend-down">1 kasus baru</div>
        </div>
      </div>

      {/* Table Container */}
      <div className="admin-table-container">
        {/* Filters */}
        <div className="admin-table-filters">
          <div style={{ flex: 1, display: 'flex', gap: '16px' }}>
            <input type="text" className="admin-input" placeholder="🔍 Cari coach berdasarkan nama, olahraga, atau kota..." style={{ width: '450px' }} />
          </div>
          <div style={{ fontSize: '13px', color: '#888', fontWeight: '600' }}>
            1.240 coach ditemukan
          </div>
        </div>

        {/* Table */}
        <table className="admin-table">
          <thead>
            <tr>
              <th>Coach</th>
              <th>Olahraga</th>
              <th>Kota</th>
              <th>Sesi Selesai</th>
              <th>Pendapatan (Bulan Ini)</th>
              <th>Grafik Pendapatan</th>
              <th>Rating</th>
              <th>Status</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td>
                <div className="table-user">
                  <div className="table-user-avatar" style={{ background: '#22c55e', color: '#fff' }}>AS</div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#fff' }}>Arif Santoso</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>ID: #C-2841</div>
                  </div>
                </div>
              </td>
              <td><span className="admin-tag sport" style={{ display: 'inline-flex' }}>🏸 Badminton</span></td>
              <td style={{ color: '#ccc' }}>Jakarta Selatan</td>
              <td style={{ fontWeight: '700', color: '#fff' }}>242</td>
              <td style={{ fontWeight: '700', color: '#22c55e' }}>Rp 2,1 Jt</td>
              <td>
                {/* Mini bar chart placeholder */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '24px' }}>
                  <div style={{ width: '4px', height: '12px', background: '#333', borderRadius: '2px' }}></div>
                  <div style={{ width: '4px', height: '16px', background: '#333', borderRadius: '2px' }}></div>
                  <div style={{ width: '4px', height: '14px', background: '#333', borderRadius: '2px' }}></div>
                  <div style={{ width: '4px', height: '20px', background: '#fcc419', borderRadius: '2px' }}></div>
                  <div style={{ width: '4px', height: '24px', background: '#333', borderRadius: '2px' }}></div>
                </div>
              </td>
              <td><div style={{ fontWeight: '700', color: '#fcc419', display: 'flex', alignItems: 'center', gap: '4px' }}>★ 4.97</div></td>
              <td><div style={{ color: '#22c55e', fontWeight: '600', fontSize: '12px' }}><span className="status-dot aktif"></span>Aktif</div></td>
              <td>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="btn-action detail">Profil</button>
                  <button className="btn-action detail">Tangguhkan</button>
                </div>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td>
                <div className="table-user">
                  <div className="table-user-avatar" style={{ background: '#ec4899', color: '#fff' }}>DK</div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#fff' }}>Devi Kusuma</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>ID: #C-2554</div>
                  </div>
                </div>
              </td>
              <td><span className="admin-tag sport" style={{ display: 'inline-flex' }}>🏊 Renang</span></td>
              <td style={{ color: '#ccc' }}>Bandung</td>
              <td style={{ fontWeight: '700', color: '#fff' }}>176</td>
              <td style={{ fontWeight: '700', color: '#22c55e' }}>Rp 1,4 Jt</td>
              <td>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '24px' }}>
                  <div style={{ width: '4px', height: '18px', background: '#333', borderRadius: '2px' }}></div>
                  <div style={{ width: '4px', height: '14px', background: '#fcc419', borderRadius: '2px' }}></div>
                  <div style={{ width: '4px', height: '22px', background: '#333', borderRadius: '2px' }}></div>
                  <div style={{ width: '4px', height: '16px', background: '#333', borderRadius: '2px' }}></div>
                  <div style={{ width: '4px', height: '20px', background: '#333', borderRadius: '2px' }}></div>
                </div>
              </td>
              <td><div style={{ fontWeight: '700', color: '#fcc419', display: 'flex', alignItems: 'center', gap: '4px' }}>★ 4.90</div></td>
              <td><div style={{ color: '#22c55e', fontWeight: '600', fontSize: '12px' }}><span className="status-dot aktif"></span>Aktif</div></td>
              <td>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="btn-action detail">Profil</button>
                  <button className="btn-action detail">Tangguhkan</button>
                </div>
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td>
                <div className="table-user">
                  <div className="table-user-avatar" style={{ background: '#3b82f6', color: '#fff' }}>BH</div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#fff' }}>Budi Hartanto</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>ID: #C-0422</div>
                  </div>
                </div>
              </td>
              <td><span className="admin-tag sport" style={{ display: 'inline-flex' }}>⛳ Golf</span></td>
              <td style={{ color: '#ccc' }}>Bali</td>
              <td style={{ fontWeight: '700', color: '#fff' }}>54</td>
              <td style={{ fontWeight: '700', color: '#22c55e' }}>Rp 1,8 Jt</td>
              <td>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '24px' }}>
                  <div style={{ width: '4px', height: '10px', background: '#333', borderRadius: '2px' }}></div>
                  <div style={{ width: '4px', height: '12px', background: '#333', borderRadius: '2px' }}></div>
                  <div style={{ width: '4px', height: '8px', background: '#333', borderRadius: '2px' }}></div>
                  <div style={{ width: '4px', height: '14px', background: '#fcc419', borderRadius: '2px' }}></div>
                  <div style={{ width: '4px', height: '10px', background: '#333', borderRadius: '2px' }}></div>
                </div>
              </td>
              <td><div style={{ fontWeight: '700', color: '#fcc419', display: 'flex', alignItems: 'center', gap: '4px' }}>★ 4.85</div></td>
              <td><div style={{ color: '#ef4444', fontWeight: '600', fontSize: '12px' }}><span className="status-dot tangguh"></span>Ditangguhkan</div></td>
              <td>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="btn-action detail">Profil</button>
                  <button className="btn-action-primary" style={{ padding: '8px 16px', fontSize: '12px' }}>Aktifkan</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div className="admin-pagination">
          <div>Menampilkan 1-3 dari 1.240 coach</div>
          <div className="pagination-controls">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <span style={{ margin: '0 4px', lineHeight: '32px' }}>...</span>
            <button className="page-btn" style={{ width: 'auto', padding: '0 12px' }}>124</button>
          </div>
        </div>
      </div>
    </div>
  );
}
