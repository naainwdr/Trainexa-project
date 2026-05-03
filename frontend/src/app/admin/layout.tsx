"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="admin-layout">
      {/* ─── ADMIN NAVBAR ─── */}
      <nav className="navbar" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999 }}>
        <div className="navbar-logo">
          train<span>exa</span>
        </div>
        <ul className="navbar-menu">
          <li>
            <Link href="/admin/booking" className={pathname === '/admin/booking' ? 'active' : ''}>
              Notifikasi Booking
            </Link>
          </li>
          <li>
            <Link href="/admin/transaksi" className={pathname === '/admin/transaksi' ? 'active' : ''}>
              Log Transaksi
            </Link>
          </li>
          <li>
            <Link href="/admin/member" className={pathname === '/admin/member' ? 'active' : ''}>
              Manajemen Member
            </Link>
          </li>
          <li>
            <Link href="/admin/pelatih" className={pathname === '/admin/pelatih' ? 'active' : ''}>
              Manajemen Pelatih
            </Link>
          </li>
          <li>
            <Link href="/admin/verifikasi" className={pathname === '/admin/verifikasi' ? 'active' : ''}>
              Verifikasi Pelatih
            </Link>
          </li>
        </ul>
        <div className="navbar-actions">
          <button style={{ 
            background: '#fcc419', 
            border: 'none', 
            padding: '8px 16px', 
            borderRadius: '50px', 
            fontWeight: '700', 
            fontSize: '13px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            cursor: 'pointer'
          }}>
            Hi, Admin!
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#fff' }}>
              <Image src="/favicon.ico" alt="Admin" width={24} height={24} style={{ borderRadius: '50%' }} />
            </div>
          </button>
        </div>
      </nav>

      {/* ─── PAGE CONTENT ─── */}
      {children}

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo">
              train<span>exa</span>
            </div>
            <p className="footer-description">
              Indonesia's premier sports coaching marketplace. Connecting athletes with certified coaches across 9+ disciplines.
            </p>
            <p className="footer-copyright">
              © 2026 Trainexa. All rights reserved.
            </p>
          </div>

          <div className="footer-center">
            <h2 className="footer-social-title">
              WHAT'S <span>NEW?</span>
            </h2>
            <p className="footer-social-subtitle">Follow us on</p>
            <div className="footer-social-icons">
              <Link href="#" className="social-icon">
                <Image src="/tiktok-logo.png" alt="TikTok" width={100} height={40} />
              </Link>
              <Link href="#" className="social-icon">
                <Image src="/facebook-logo.png" alt="Facebook" width={40} height={40} />
              </Link>
              <Link href="#" className="social-icon">
                <Image src="/instagram-logo.png" alt="Instagram" width={40} height={40} />
              </Link>
              <Link href="#" className="social-icon">
                <Image src="/youtube-logo.png" alt="YouTube" width={110} height={40} />
              </Link>
            </div>
          </div>

          <div className="footer-right">
            <button className="btn-back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              ▲
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
