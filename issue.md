# Rencana Implementasi: Fitur Responsif Toggle Sidebar (Mobile & Desktop)

## Tujuan Utama
Membuat *sidebar* menjadi dinamis dan responsif pada semua ukuran layar dengan aturan berikut:
1. **Desktop (Layar Besar)**: 
   - *Default*: Sidebar ditampilkan.
   - *Aksi*: Saat disembunyikan via tombol toggle, area konten utama (*main content*) akan melebar penuh (*full width*).
2. **Mobile (Layar Kecil)**: 
   - *Default*: Sidebar disembunyikan agar tidak menutupi konten.
   - *Aksi*: Saat ditampilkan via tombol toggle, sidebar akan muncul (biasanya sebagai *overlay* atau layar penuh).

---

## Tahapan Implementasi

Ikuti langkah-langkah di bawah ini secara berurutan. Panduan ini dirancang agar mudah diikuti oleh *junior programmer* maupun model AI.

### Tahap 1: Penyesuaian Global State (Zustand)
Kita sudah memiliki state `isSidebarOpen` di *store*. Kita perlu memastikannya beradaptasi dengan ukuran layar saat pertama kali aplikasi dimuat.

1. **Buka file `src/store/uiStore.ts`**.
2. Ubah inisialisasi nilai awal `isSidebarOpen` agar mendeteksi ukuran layar.
   ```typescript
   // Ubah nilai awal isSidebarOpen dari 'true' menjadi:
   isSidebarOpen: window.innerWidth >= 1024,
   ```
   *(Catatan: 1024px adalah breakpoint standar `lg` pada Tailwind).*

### Tahap 2: Menambahkan Event Listener untuk Resize Layar
Aplikasi harus pintar mendeteksi saat pengguna mengubah ukuran jendela browser (misalnya rotasi tablet atau *resize window*).

1. **Buka file `src/components/layout/MainLayout.tsx`**.
2. Tambahkan `useEffect` untuk mendengarkan event `resize`.
3. Buat logika: Jika layar `< 1024px` paksa tutup sidebar. Jika `>= 1024px` paksa buka sidebar. (Gunakan fungsi dari `uiStore`).
4. *Jangan lupa* berikan fungsi *cleanup* (hapus event listener) pada saat komponen *unmount*.

### Tahap 3: Update Tombol Toggle di Topbar
Tombol hamburger (`☰`) saat ini hanya muncul di mode mobile. Kita harus menampilkannya juga di mode desktop.

1. **Buka file `src/components/layout/Topbar.tsx`**.
2. Cari tombol dengan icon hamburger `☰`.
3. Hapus class `lg:hidden` pada tombol tersebut.
4. Pastikan `onClick={toggleSidebar}` tetap terpasang dengan benar.

### Tahap 4: Update Styling Komponen Sidebar
Kita harus mengatur perilaku animasi dan posisi sidebar untuk kondisi mobile (sebagai *overlay*) dan desktop (berbagi ruang dengan konten).

1. **Buka file `src/components/layout/Sidebar.tsx`**.
2. Sesuaikan *class* pada elemen `<aside>` utama.
   - Pada desktop (`lg:`): Gunakan transisi lebar (*width*) atau transformasi sumbu-X (`translate-x`).
   - Jika `!isSidebarOpen`, tambahkan class `-translate-x-full lg:hidden` (atau atur lebar menjadi `0` dan sembunyikan isinya).
   - Pastikan ada logika untuk menampilkan layar redup (*backdrop/overlay*) di mode mobile saat sidebar terbuka.
   - *Contoh Backdrop (opsional namun sangat disarankan untuk mobile)*: Tambahkan elemen `<div>` hitam transparan dengan `z-40` yang menutupi layar khusus di mode mobile saat sidebar terbuka, dan berikan `onClick={toggleSidebar}` agar menutup saat backdrop diklik.

### Tahap 5: Update Layout Konten Utama agar Full Width
Saat sidebar ditutup di desktop, konten utama harus mengambil seluruh sisa layar.

1. **Buka file `src/components/layout/MainLayout.tsx`**.
2. Periksa struktur Flexbox pada container utamanya.
3. Struktur saat ini menggunakan `flex min-h-screen`. Pastikan transisi berjalan mulus.
4. Karena sidebar berada dalam alur *Flexbox* (di luar *absolute* pada mobile), ketika kita memberikan class `hidden` atau mengecilkan ukurannya di komponen Sidebar, otomatis `div` konten utama (`flex-1`) akan melebar menjadi *full width*. 
5. Pastikan transisi lebar ini terlihat mulus (tambahkan class `transition-all duration-300`).

---

## Standar Penerimaan (Acceptance Criteria)
1. **Di perangkat Mobile (< 1024px)**: 
   - Awal dimuat, sidebar hilang. 
   - Tombol `☰` diklik -> sidebar muncul (menumpuk di atas konten utama). 
   - Area di luar sidebar diklik -> sidebar tertutup.
2. **Di perangkat Desktop (>= 1024px)**: 
   - Awal dimuat, sidebar muncul di sebelah kiri, membagi layar dengan konten.
   - Tombol `☰` diklik -> sidebar bergeser keluar/menghilang, konten utama langsung memanjang menutupi ruang kosong (*full width*).
   - Tombol diklik lagi -> sidebar kembali masuk, konten utama menyempit.
3. Transisi animasi terlihat halus dan elegan tanpa patah-patah.
