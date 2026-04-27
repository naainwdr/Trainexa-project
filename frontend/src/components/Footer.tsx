"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Kolom Kiri: Logo & Deskripsi */}
        <div className="footer-left">
          <div className="footer-logo">
            train<span>exa</span>
          </div>
          <p className="footer-description">
            Platform marketplace pelatih olahraga terpercaya di Indonesia. Menghubungkan pelatih profesional dengan individu, tim, dan organisasi.
          </p>
          <p className="footer-description">
            Jl. Dipatiukur No. 35, Bandung, Jawa Barat 40132
          </p>
          <p className="footer-copyright">
            © 2026 Trainexa. All rights reserved.
          </p>
        </div>

        {/* Kolom Tengah: What's New & Socials */}
        <div className="footer-center">
          <h2 className="footer-social-title">
            APA YANG <span>BARU?</span>
          </h2>
          <p className="footer-social-subtitle">Ikuti kami di</p>
          <div className="footer-social-icons">
            <Link href="https://www.tiktok.com/" className="social-icon">
              <Image src="/tt-logo.png" alt="TikTok" width={110} height={50} />
            </Link>
            <Link href="https://www.facebook.com/" className="social-icon">
              <Image src="/fb-logo.png" alt="Facebook" width={60} height={60} />
            </Link>
            <Link href="https://www.instagram.com/" className="social-icon">
              <Image src="/ig-logo.png" alt="Instagram" width={40} height={40} />
            </Link>
            <Link href="https://www.youtube.com/" className="social-icon">
              <Image src="/yt-logo.png" alt="YouTube" width={110} height={40} />
            </Link>
          </div>
        </div>

        {/* Tombol Back to Top */}
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
  );
}
