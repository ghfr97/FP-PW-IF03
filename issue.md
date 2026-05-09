# Rencana Implementasi: Migrasi Frontend Admin ke Modern Tech Stack

## Tujuan
Memperbarui tampilan frontend sederhana (HTML/CSS/JS Vanilla) menjadi frontend modern menggunakan teknologi terbaru, **tanpa mengubah tampilan UI/UX yang sudah ada**. Frontend ini harus *responsive*, berjalan dengan baik, dan siap untuk disambungkan ke backend API.

## Teknologi yang Digunakan
- **Vite** - Sebagai module bundler dan build tool yang cepat.
- **React (JavaScript/TypeScript)** - Sebagai library utama untuk membangun komponen UI.
- **Tailwind CSS v4** - Sebagai framework CSS utility-first untuk styling (menggantikan custom CSS sebelumnya).
- **React Router DOM** - Untuk menangani navigasi antar halaman (Dashboard, Pesanan, Pelanggan, dll).
- **Zustand / Context API** - Untuk state management global (menyimpan state modal, notifikasi/toast, dll).

## Struktur Folder dan File
Gunakan struktur folder berbasis fitur dan komponen agar mudah diatur dan dikembangkan (scalable) oleh tim atau AI model nantinya.

```text
src/
├── assets/             # Gambar, ikon, logo (jika ada)
├── components/         # Komponen UI yang dapat digunakan kembali (reusable)
│   ├── layout/         # Komponen layout utama
│   │   ├── Sidebar.jsx
│   │   ├── Topbar.jsx
│   │   └── MainLayout.jsx
│   └── ui/             # Komponen UI kecil (Tombol, Input, Modal, Toast, Badge)
│       ├── Button.jsx
│       ├── Modal.jsx
│       ├── Toast.jsx
│       └── Card.jsx
├── pages/              # Halaman utama aplikasi
│   ├── Dashboard/      # Halaman ringkasan/overview
│   ├── Orders/         # Halaman manajemen pesanan
│   ├── Customers/      # Halaman data pelanggan
│   ├── Services/       # Halaman manajemen layanan
│   ├── Reports/        # Halaman laporan & statistik
│   └── Settings/       # Halaman pengaturan sistem
├── services/           # Konfigurasi API (Axios/Fetch) siap pakai untuk backend
│   └── api.js
├── store/              # Global state management (Zustand/Context)
│   └── uiStore.js      # Mengelola state sidebar, toast, modal
├── utils/              # Fungsi-fungsi helper (format tanggal, format rupiah)
│   └── formatters.js
├── App.jsx             # Entry point untuk routing utama
├── index.css           # File CSS utama (Konfigurasi Tailwind)
└── main.jsx            # React root DOM rendering
```

## Tahapan Implementasi

Berikut adalah langkah-langkah yang harus dilakukan untuk mengimplementasikan proyek ini. **Ikuti secara berurutan.**

### Tahap 1: Inisialisasi Proyek dan Setup
1. Buat proyek baru menggunakan Vite: jalankan perintah `npm create vite@latest frontend-admin -- --template react`.
2. Install dependensi utama: jalankan `npm install react-router-dom axios` (opsional tambahkan `zustand` atau `clsx` & `tailwind-merge` jika diperlukan).
3. Install dan konfigurasikan Tailwind CSS v4 sesuai dokumentasi resmi Vite & Tailwind v4. Pastikan setup CSS selesai di `index.css`.
4. Hapus file template bawaan Vite yang tidak diperlukan (`App.css`, boilerplate `App.jsx`).

### Tahap 2: Pembuatan Utilitas & Global State (Persiapan Backend)
1. Buat file `utils/formatters.js` untuk mengekstrak fungsi-fungsi pembantu, contohnya fungsi `formatRupiah` dan `formatDate` agar tampilan data konsisten.
2. Buat `store/uiStore.js` untuk mengelola state UI secara global:
   - State `isSidebarOpen` (untuk kontrol tampilan menu hamburger di mobile).
   - State `toastMessage` dan `isToastVisible` (untuk notifikasi aksi seperti "Pesanan berhasil disimpan").
   - State Modal (membuka/menutup form tambah pesanan/pelanggan).
3. Buat file `services/api.js` dengan setting Axios/Fetch dasar (Base URL, Interceptors). Ini dibuat sebagai template (mock) agar nantinya hanya perlu menaruh endpoint backend sesungguhnya.

### Tahap 3: Pembuatan Komponen Layout & UI Dasar
1. **Penerjemahan Styling**: Konversikan `style.css` bawaan ke kelas-kelas utility Tailwind CSS. Apabila terdapat warna spesifik (contoh: *teal*, *rose*, *gold* seperti di file asli), gunakan *arbitrary values* di Tailwind atau definisikan warna di CSS variable root / file konfigurasi Tailwind.
2. Buat komponen **Toast** (`components/ui/Toast.jsx`) untuk menggantikan fungsi `showToast()` Vanilla JS yang ada pada desain asli.
3. Buat komponen **Sidebar** (`components/layout/Sidebar.jsx`). Ganti tag `<button>` navigasi statis menggunakan `<NavLink>` dari `react-router-dom` agar SPA (Single Page Application) berjalan tanpa memuat ulang halaman.
4. Buat komponen **Topbar** (`components/layout/Topbar.jsx`) termasuk tombol hamburger yang bisa melakukan *toggle* pada state `isSidebarOpen`.
5. Satukan `Sidebar` dan `Topbar` di dalam **MainLayout** (`components/layout/MainLayout.jsx`) yang bertugas membungkus seluruh `<Outlet />` (konten rute turunan).

### Tahap 4: Migrasi Halaman-Halaman (Pages)
Pisahkan setiap section pada `admin.html` ke dalam halaman React masing-masing. *Gunakan array data statis/dummy untuk merender tabel dan daftar (looping dengan `.map()`).*

1. **Dashboard (`pages/Dashboard/index.jsx`)**:
   - Pindahkan kartu statistik (Pesanan, Pendapatan, dll).
   - Pindahkan tabel "Pesanan Terbaru" dan Chart (Gunakan div chart sederhana seperti aslinya atau implementasi SVG chart).
   - Pindahkan daftar Aktivitas Terbaru.
2. **Orders (`pages/Orders/index.jsx`)**:
   - Buat antarmuka manajemen pesanan, lengkap dengan tab filter (Semua, Antrian, Proses, Selesai, Batal).
3. **Customers (`pages/Customers/index.jsx`)**:
   - Replikasi grid kartu pelanggan lengkap dengan *avatar* dan informasi statistiknya.
4. **Services (`pages/Services/index.jsx`)**:
   - Pindahkan tabel manajemen layanan laundry.
5. **Reports (`pages/Reports/index.jsx`)**:
   - Pindahkan ringkasan performa dan chart pendapatan harian.
6. **Settings (`pages/Settings/index.jsx`)**:
   - Buat form pengaturan toko, notifikasi, jam operasional, dan keamanan admin (dengan `controlled components`).

### Tahap 5: Implementasi Modal & Interaktivitas
1. Ekstrak overlay modal yang ada pada HTML lama menjadi komponen reusable (`components/ui/Modal.jsx`).
2. Terapkan pada:
   - Form Tambah Pesanan Baru (beserta perhitungan total estimasi harganya secara reaktif).
   - Form Tambah Pelanggan Baru.
3. Sambungkan event "Simpan" pada modal tersebut agar setidaknya menutup modal dan memunculkan notifikasi Toast kesuksesan.

### Tahap 6: Pengujian (Quality Control) & Finalisasi
1. **Visual QA**: Bandingkan versi React secara berdampingan dengan `admin.html` asli. Semua detail seperti font (Outfit & Syne), hover effect, border radius, dan bayangan *harus 100% identik*.
2. **Responsive Check**: Uji menggunakan Chrome DevTools (ukuran *Mobile* hingga *Desktop*). Pastikan *sidebar* dapat digeser (toggle) dari tombol menu atas tanpa masalah dan layout tidak berantakan di layar kecil.
3. **Fungsionalitas Dasar**: Klik semua navigasi, menu, filter, dan tombol aksi (edit/hapus) untuk memastikan Toast dan Modal berjalan mulus layaknya di versi aslinya.

---

> **Peringatan Penting Untuk Implementator:**
> Fokus utamanya adalah memindahkan HTML statis menjadi komponen reaktif React dengan **Tailwind CSS v4** sebagai struktur gaya utamanya, **bukan** mendesain ulang UI. Pastikan output kode mudah dibaca, dikelompokkan dengan rapi di dalam *components* dan *pages*, serta siap menampung data nyata (API backend) kapan pun dibutuhkan.
