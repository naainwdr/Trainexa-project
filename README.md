# Trainexa - Sports Coach Booking Platform

Trainexa adalah platform marketplace premium untuk pemesanan pelatih olahraga. Proyek ini dibangun menggunakan **Next.js** untuk frontend, **Node.js/Express** untuk backend, dan **MySQL** sebagai database.

---

## 🚀 Cara Menjalankan Project

### 1. Prasyarat
Pastikan Anda sudah menginstal:
- [Node.js](https://nodejs.org/) (Versi 18 ke atas)
- [MySQL Server](https://www.mysql.com/downloads/) (XAMPP/Laragon juga bisa)

### 2. Persiapan Database
1. Buka MySQL (phpMyAdmin atau MySQL Workbench).
2. Buat database baru dengan nama `trainexa_db`.
3. Database akan otomatis terisi tabel saat backend dijalankan pertama kali berkat fitur `Sequelize Sync`.

### 3. Setup Backend
1. Masuk ke folder `backend`:
   ```bash
   cd backend
   ```
2. Instal dependensi:
   ```bash
   npm install
   ```
3. Cek file `.env` di folder `backend` dan sesuaikan dengan konfigurasi MySQL Anda:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=trainexa_db
   JWT_SECRET=rahasia_banget
   PORT=5000
   ```
4. Jalankan server backend:
   ```bash
   npm run dev
   ```

### 4. Setup Frontend
1. Masuk ke folder `frontend`:
   ```bash
   cd ../frontend
   ```
2. Instal dependensi:
   ```bash
   npm install
   ```
3. Jalankan server frontend:
   ```bash
   npm run dev
   ```
4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

## 📁 Struktur Pemisahan Tugas (Development Guide)

### 1. Bagian Tampilan (UI / Frontend Design)
Jika Anda ingin mengubah visual (warna, layout, spacing, font), edit file berikut:
- **Global CSS**: `frontend/src/app/globals.css` (Tempat definisi tema dark mode, accent gold, dan utility classes).
- **Halaman Utama**: `frontend/src/app/page.tsx`.
- **Halaman Register/Login**:
  - `frontend/src/app/daftar/page.tsx` (Pilih role).
  - `frontend/src/app/daftar/member/page.tsx` (Form member).
  - `frontend/src/app/daftar/pelatih/page.tsx` (Form pelatih).
  - `frontend/src/app/masuk/page.tsx` (Login).
- **Detail Pelatih**: `frontend/src/app/pelatih/[id]/page.tsx`.

### 2. Bagian Logika (Logic / Backend & API)
Jika Anda ingin mengubah cara kerja sistem (proses login, simpan data ke DB, validasi), edit file berikut:

**Backend (API & Database):**
- **Definisi Tabel (Models)**: `backend/models/` (Misal: `User.js`, `Coach.js`). Jika Anda menambah field di sini, database akan menyesuaikan secara otomatis.
- **Koneksi DB**: `backend/config/db.js`.
- **EntryPoint & Route**: `backend/index.js` (Tempat registrasi endpoint API).

**Frontend (Client Logic):**
- Filter & Fetch Data: Cari bagian `useState` atau fungsi `fetch`/`axios` di dalam file `.tsx` di folder `src/app/`.

---

## 🛠️ Spesifikasi Teknologi

- **Frontend**: Next.js (App Router), React, Vanilla CSS (Premium Glassmorphism Style).
- **Backend**: Node.js, Express.js.
- **Database**: MySQL.
- **ORM**: Sequelize (Memudahkan query database tanpa harus menulis SQL manual).
- **Authentication**: JSON Web Token (JWT) - *Rencana implementasi*.

---

## 💡 Catatan Tambahan
- **Dark Mode**: Proyek ini menggunakan skema warna `#000000` (Background) dan `#FFD700` (Primary Accent).
- **Sync Database**: Di `backend/index.js`, sistem menggunakan `sequelize.sync({ alter: true })` untuk memastikan database selalu sinkron dengan model kode tanpa menghapus data yang sudah ada.
