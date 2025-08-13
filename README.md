# Inspeksi App

## Deskripsi Proyek

Aplikasi Inspeksi adalah platform modern yang dirancang untuk manajemen inspeksi yang efisien dan pengambilan keputusan berbasis data. Aplikasi ini memanfaatkan teknologi tinggi untuk menyediakan solusi inspeksi yang komprehensif, real-time, dan cerdas, memastikan keamanan, kepatuhan, dan keunggulan operasional di berbagai industri.

## Fitur Utama

*   **Antarmuka Pengguna Modern:** Desain yang ramping dan berteknologi tinggi dengan tema warna biru dan hitam yang disesuaikan.
*   **Halaman Selamat Datang Interaktif:** Halaman beranda yang menarik dengan animasi latar belakang dan ajakan bertindak yang jelas.
*   **Navigasi Reusable:** Komponen bilah navigasi (`NavBar`) dan menu navigasi (`NavigationMenu`) yang dapat digunakan kembali di seluruh aplikasi.
*   **Halaman Khusus:** Halaman terpisah untuk menampilkan Fitur, Teknologi, dan Integrasi aplikasi.
*   **Sistem Autentikasi Terpadu:** Halaman login dan registrasi yang terpadu dan bergaya, diadaptasi untuk alur autentikasi Laravel Breeze.
*   **Formulir Inspeksi:** Halaman khusus untuk formulir inspeksi (`formInspeksi`).

## Teknologi yang Digunakan

*   **Backend:** Laravel (PHP Framework)
*   **Frontend:** React.js (JavaScript Library)
*   **Integrasi Frontend-Backend:** Inertia.js
*   **Styling:** Tailwind CSS (dengan konfigurasi kustom untuk animasi)
*   **Ikon:** Lucide React
*   **Autentikasi:** Laravel Breeze

## Instalasi

Ikuti langkah-langkah di bawah ini untuk mengatur proyek secara lokal.

### Prasyarat

Pastikan Anda memiliki perangkat lunak berikut terinstal di sistem Anda:

*   PHP (>= 8.1)
*   Composer
*   Node.js (>= 16)
*   npm atau Yarn
*   MySQL atau PostgreSQL (atau SQLite untuk pengembangan lokal cepat)

### Langkah-langkah Instalasi

1.  **Kloning Repositori:**
    ```bash
    git clone <URL_REPOSITORI_ANDA>
    cd Inspeksi-App
    ```

2.  **Instal Dependensi Backend:**
    ```bash
    composer install
    ```

3.  **Konfigurasi Lingkungan:**
    Buat salinan file `.env.example` dan beri nama `.env`.
    ```bash
    cp .env.example .env
    ```
    Edit file `.env` dan konfigurasikan pengaturan database Anda.

4.  **Buat Kunci Aplikasi:**
    ```bash
    php artisan key:generate
    ```

5.  **Migrasi Database:**
    ```bash
    php artisan migrate
    ```

6.  **Instal Dependensi Frontend:**
    ```bash
    npm install
    # atau yarn install
    ```

7.  **Kompilasi Aset Frontend:**
    Untuk pengembangan:
    ```bash
    npm run dev
    # atau yarn dev
    ```
    Untuk produksi:
    ```bash
    npm run build
    # atau yarn build
    ```

## Penggunaan

Untuk menjalankan aplikasi, pastikan server pengembangan Laravel dan Vite berjalan.

1.  **Mulai Server Laravel:**
    ```bash
    php artisan serve
    ```

2.  **Mulai Server Vite (untuk frontend):**
    ```bash
    npm run dev
    # atau yarn dev
    ```

Sekarang Anda dapat mengakses aplikasi di browser Anda, biasanya di `http://127.0.0.1:8000`.

### Rute Aplikasi

*   `/`: Halaman Selamat Datang
*   `/features`: Halaman Fitur
*   `/technology`: Halaman Teknologi
*   `/integration`: Halaman Integrasi
*   `/login`: Halaman Login
*   `/register`: Halaman Registrasi
*   `/dashboard`: Dasbor (membutuhkan autentikasi)
*   `/inspeksi`: Formulir Inspeksi (membutuhkan autentikasi)

## Kontribusi

Kontribusi dipersilakan! Silakan fork repositori dan buat Pull Request dengan fitur atau perbaikan Anda.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file `LICENSE` untuk detail lebih lanjut.