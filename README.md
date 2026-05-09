# FreshWave Laundry - Admin Dashboard

FreshWave Laundry Admin Dashboard adalah aplikasi manajemen operasional bisnis laundry berbasis web yang modern. Aplikasi ini dirancang untuk memudahkan pemilik dan admin dalam mengelola pesanan, pelanggan, serta memantau performa bisnis secara real-time.

## ✨ Fitur Utama

- **📊 Dashboard Overview**: Ringkasan statistik harian seperti total pesanan, pendapatan, pelanggan aktif, dan antrian express.
- **📦 Manajemen Pesanan**: Kelola semua status pesanan mulai dari antrian, proses, hingga selesai. Dilengkapi dengan filter status dan form tambah pesanan baru.
- **👥 Data Pelanggan**: Pantau basis data pelanggan, email, nomor telepon, serta total kontribusi transaksi mereka.
- **🧺 Katalog Layanan**: Pengaturan harga per kg dan estimasi waktu untuk berbagai jenis layanan (Cuci Saja, Cuci + Setrika, Express, dll).
- **📈 Laporan & Statistik**: Visualisasi grafik pendapatan harian selama 7 hari terakhir untuk analisis bisnis yang lebih baik.
- **⚙️ Pengaturan Sistem**: Konfigurasi informasi toko, jam operasional, dan pengaturan notifikasi otomatis.

## 🚀 Tech Stack

Aplikasi ini dibangun menggunakan teknologi modern untuk memastikan kecepatan pengembangan dan performa aplikasi yang optimal:

- **Library Utama**: [React.js](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Utility-first framework)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: Emoji & Custom SVG

## 📁 Struktur Proyek

```text
src/
├── assets/             # Aset statis (gambar, logo)
├── components/         # Komponen UI yang dapat digunakan kembali
│   ├── layout/         # Komponen struktural (Sidebar, Topbar, MainLayout)
│   └── ui/             # Komponen UI atomik (Modal, Toast)
├── pages/              # Komponen halaman utama (Dashboard, Orders, dll)
├── services/           # Logika integrasi API/Backend
├── store/              # Global state management (Zustand stores)
├── utils/              # Fungsi pembantu (Format Rupiah, Tanggal)
├── App.jsx             # Konfigurasi routing utama
└── main.jsx            # Entry point aplikasi
```

## 🛠️ Persiapan & Instalasi

Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) di komputer Anda.

1. **Clone Repositori**
   ```bash
   git clone https://github.com/ghfr97/FP-PW-IF03.git
   cd frontend-admin
   ```

2. **Instal Dependensi**
   ```bash
   npm install
   ```

3. **Jalankan Mode Pengembangan**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:5173` di browser Anda.

4. **Build untuk Produksi**
   ```bash
   npm run build
   ```

## 📝 Lisensi
Proyek ini dibuat untuk keperluan tugas Final Project Pemrograman Web.

---
© 2026 FreshWave Laundry Admin. Built with ❤️ and React.
