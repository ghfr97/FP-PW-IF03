# Rencana Implementasi: Migrasi TypeScript dan Fitur Dark Mode

## Tujuan Utama
1. Mengubah basis kode (codebase) dari JavaScript (`.js`/`.jsx`) menjadi TypeScript (`.ts`/`.tsx`) untuk meningkatkan keamanan tipe data (*type safety*) dan keandalan kode.
2. Mengimplementasikan fitur **Mode Gelap (Dark Mode)** yang dapat di-toggle oleh pengguna, dengan mode Terang (*Light Mode*) sebagai *default*.

---

## Tahapan Implementasi

Silakan ikuti instruksi di bawah ini secara berurutan. Panduan ini dirancang untuk memudahkan junior programmer atau AI dalam mengerjakannya.

### Tahap 1: Migrasi ke TypeScript

Langkah pertama adalah mengatur lingkungan proyek agar mendukung TypeScript.

1. **Instalasi Dependensi**
   Jalankan perintah berikut di terminal untuk menambahkan TypeScript dan tipe definisi (*type definitions*):
   ```bash
   npm install -D typescript @types/react @types/react-dom @types/node
   ```

2. **Konfigurasi TypeScript (`tsconfig.json`)**
   Buat atau perbarui file `tsconfig.json` di root folder proyek dengan konfigurasi standar Vite untuk React + TypeScript. (Bisa merujuk pada dokumentasi Vite untuk React-TS). Jangan lupa juga buat `tsconfig.node.json` jika diperlukan oleh Vite.

3. **Ubah Ekstensi File**
   Ubah ekstensi file-file berikut:
   - Semua file `.jsx` (di folder `components/` dan `pages/`, serta `App.jsx` dan `main.jsx`) diubah menjadi `.tsx`.
   - Semua file `.js` (di folder `store/`, `utils/`, dan `services/`) diubah menjadi `.ts`.
   - File `vite.config.js` ubah menjadi `vite.config.ts`.

4. **Update `index.html`**
   Buka `index.html`, cari baris `<script type="module" src="/src/main.jsx"></script>` dan ubah menjadi `<script type="module" src="/src/main.tsx"></script>`.

5. **Penambahan Tipe Data (Type Annotations)**
   - Perbaiki fungsi-fungsi di `utils/formatters.ts` dengan memberikan tipe data pada parameternya (misal: `number`, `string`).
   - Buat *interface* atau *type* untuk mendefinisikan bentuk data (seperti `Order`, `Customer`, `Service`) di dalam halaman yang menggunakan data dummy.
   - Perbaiki `store/uiStore.ts` agar mendukung TypeScript (gunakan tipe generik pada Zustand).

---

### Tahap 2: Implementasi Fitur Dark Mode

Setelah proyek stabil dalam versi TypeScript, langkah selanjutnya adalah menambahkan fungsionalitas dan styling untuk Mode Gelap.

1. **Konfigurasi CSS & Tailwind v4**
   Buka `src/index.css`. Karena kita menggunakan Tailwind CSS v4, mode gelap biasanya bisa diterapkan menggunakan *custom variant* atau langsung didukung. Pastikan mode gelap dapat dipicu oleh *class* (biasanya `class="dark"` pada tag `<html>`). Jika perlu, tambahkan:
   ```css
   @custom-variant dark (&:where(.dark, .dark *));
   ```
   Atau gunakan konfigurasi bawaan Tailwind v4 untuk *dark mode selector*.

2. **Update Global State (Zustand)**
   Buka `src/store/uiStore.ts`:
   - Tambahkan state baru bernama `theme` dengan nilai bawaan (default) `'light'`.
   - Buat sebuah *action* / fungsi bernama `toggleTheme` yang akan mengubah `'light'` menjadi `'dark'` dan sebaliknya.

3. **Injeksi Class Mode Gelap ke DOM**
   Buka file `src/App.tsx`. 
   - Gunakan `useEffect` untuk mendengarkan perubahan state `theme`.
   - Jika state `theme === 'dark'`, tambahkan class `dark` ke dalam tag `<html className="dark">` atau `document.documentElement.classList.add('dark')`. Jika `'light'`, hapus class tersebut.

4. **Update Interaksi Tombol (UI Toggle)**
   Buka `src/components/layout/Topbar.tsx`.
   - Temukan tombol bergambar bulan (🌙) yang sebelumnya sekadar memunculkan *Toast*.
   - Ubah *event listener* `onClick` agar memanggil fungsi `toggleTheme` dari store.
   - Buat ikon tombol berubah dinamis: jika mode gelap tampilkan matahari (☀️), jika mode terang tampilkan bulan (🌙).

5. **Penyesuaian Styling Komponen (Styling)**
   Lakukan pengecekan dan penyesuaian pada seluruh komponen (`Sidebar`, `Topbar`, `MainLayout`, `Modal`, serta seluruh `pages/`).
   - Tambahkan prefix `dark:` pada setiap *class* yang berhubungan dengan warna *background*, *text*, dan *border*.
   - Contoh: 
     - Yang tadinya `bg-white` menjadi `bg-white dark:bg-gray-900`
     - Yang tadinya `text-gray-900` menjadi `text-gray-900 dark:text-gray-100`
     - Yang tadinya `border-gray-100` menjadi `border-gray-100 dark:border-gray-800`
     - *Background* aplikasi utama (`bg-gray-50`) menjadi `dark:bg-gray-950`.

---

## Standar Penerimaan (Acceptance Criteria)
- Perintah `npm run build` berhasil dijalankan tanpa ada pesan *error* terkait tipe data (Type Error).
- Tombol *toggle* berfungsi dengan baik: merubah ikon dan beralih ke mode gelap tanpa perlu *refresh* halaman.
- Seluruh elemen UI dapat terbaca dengan jelas saat berada di Mode Gelap, tanpa ada area *background* putih yang "bocor" (tertinggal).
