/**
 * Konfigurasi Utama Website Zass Desuta Marketplace
 * File ini digunakan sebagai sumber data tunggal (Single Source of Truth)
 * untuk halaman Profil, Kontak, dan Produk.
 */

// 1. DATA KONFIGURASI PROFIL & UMUM (CONFIG)
// =========================================================================
const CONFIG = {
    // Info Profil
    nama: "Ryu Official", // Nama Store/Pemilik
    tagline: "Marketplace & Jasa Digital Terpercaya", // Tagline Profil
    profil: "https://files.catbox.moe/vk4593.jpeg", // Url Foto Profil
    banner: "https://files.catbox.moe/7or26t.png", // Url Gambar Banner (untuk halaman utama/hero)
    tentang: "Ryu Official adalah toko online terpercaya yang telah melayani ribuan pelanggan sejak 2018. Kami menyediakan berbagai produk digital untuk kebutuhan sehari-hari dengan kualitas terbaik dan harga terjangkau.\n\nKomitmen kami adalah memberikan pengalaman berbelanja yang menyenangkan dengan pelayanan terbaik, produk original, dan garansi resmi untuk semua produk yang kami jual.",
    
    // Info Kontak & Lokasi
    alamat: "Jl. Puger No. 17, Grobogan, Jawa Tengah",
    maps_link: "https://maps.app.goo.gl/ContohMapsLink", // Ganti dengan link Google Maps Anda
    
    // Statistik Fiktif (Digunakan di Halaman Profil)
    stats: { 
        products: 15,    // Total Jenis Produk
        sales: 5200,     // Total Item Terjual
        rating: 4.9      // Rating Rata-rata
    },

    // Media Sosial & Komunikasi
    sosial_media: {
        email: "ryuofgicial23@gmail.com",
        whatsapp: "68811147684", // WA Number (tanpa +)
        telegram: "t.me/Ryoyun", // Telegram Username (tanpa @)
        youtube: "Ryu Official Store", // YouTube Username
        tiktok: "@prastya123",       // TikTok Username
        instagram: "gak da"     // Instagram Username (DITAMBAHKAN)
    },

    // Keahlian/Layanan Unggulan (Digunakan di Halaman Profil)
    skills: [
        { name: "IT & Server Management", icon: "fas fa-server" },
        { name: "Desain Grafis", icon: "fas fa-palette" },
        { name: "Produk Digital", icon: "fas fa-bolt" },
        { name: "Layanan 24 Jam", icon: "fas fa-headset" }
    ],

    // Metode Pembayaran (Mengganti format 'payment' lama)
    // Icon menggunakan Font Awesome
    payments: [
        { name: "DANA", icon: "fas fa-wallet", value: "08811147684" },
        { name: "GOPAY", icon: "fas fa-mobile-alt", value: "belum ada" },
        { name: "OVO", icon: "fas fa-money-check-alt", value: "belum ada" },
        { name: "QRIS", icon: "fas fa-qrcode", value: "https://linkqr.kamu.mom" }, // Dianggap sebagai URL/Link QR
        { name: "BCA", icon: "fas fa-university", value: "1234567890" }
    ],
    
    // Integrasi Telegram API untuk Form Kontak
    telegram_api: {
        bot: "7096580561:AAHoq2WR0CzDTgoZdWFdXWx4UHJ92DCBOwg", // Token bot father
        chatid: "8216633781" // ID telegram
    },
}

// 2. DATA PRODUK (productsData)
// =========================================================================
const productsData = {
    "Hosting": [
      {
        "id": "H01", // ID unik
        "name": "Panel Public",
        "icon": "fas fa-server",
        "description": "Panel Pterodactyl hosting bot/game dengan performa stabil dan harga terjangkau.",
        "variants": [
          { "name": "1GB RAM", "price": 1000 },
          { "name": "2GB RAM", "price": 2000 },
          { "name": "3GB RAM", "price": 3000 },
          { "name": "4GB RAM", "price": 4000 },
          { "name": "5GB RAM", "price": 5000 },
          { "name": "6GB RAM", "price": 6000 },
          { "name": "7GB RAM", "price": 7000 },
          { "name": "8GB RAM", "price": 8000 },
          { "name": "9GB RAM", "price": 9000 },
          { "name": "10GB RAM", "price": 10000 },
          { "name": "Unlimited RAM", "price": 8.000 }
        ]
      }
      {
        "id": "H03",
        "name": "VPS Menengah",
        "icon": "fas fa-hdd",
        "description": "VPS menengah dengan performa cukup untuk website atau panel hosting.",
        "variants": [
          { "name": "2 vCPU / 4GB RAM / 80GB SSD", "price": 75000 },
          { "name": "4 vCPU / 8GB RAM / 160GB SSD", "price": 135000 }
        ]
      }
      {
        "id": "H05",
        "name": "Web Hosting",
        "icon": "fas fa-globe",
        "description": "Hosting website dengan panel cPanel / DirectAdmin, cocok untuk pemula.",
        "variants": [
          { "name": "Starter (1GB Storage)", "price": 15000 },
          { "name": "Basic (5GB Storage)", "price": 30000 },
          { "name": "Pro (10GB Storage)", "price": 50000 }
        ]
      }
    ],
    "Desain": [
        {
            "id": "D06",
            "name": "Desain Logo",
            "icon": "fas fa-pen-nib",
            "description": "Jasa pembuatan logo dengan berbagai gaya desain. Cocok untuk brand, usaha, atau komunitas.",
            "variants": [
                { "name": "Logo Minimalis", "price": 20000 }, // Disesuaikan: 2000 terlalu murah
                { "name": "Logo Typography", "price": 25000 },
                { "name": "Logo Mascot", "price": 30000 },
                { "name": "Logo Vintage", "price": 40000 },
                { "name": "Logo Modern", "price": 50000 },
                { "name": "Request Custom", "price": "Sesuai Negosiasi" } // Disesuaikan
            ]
        },
        {
            "id": "D07",
            "name": "Desain Banner",
            "icon": "fas fa-image",
            "description": "Jasa pembuatan banner untuk promosi usaha, media sosial, atau event.",
            "variants": [
                { "name": "Banner Sosmed", "price": 15000 },
                { "name": "Banner Event", "price": 25000 },
                { "name": "Banner Promosi", "price": 30000 }
            ]
        },
        {
            "id": "D08",
            "name": "Desain Poster",
            "icon": "fas fa-scroll",
            "description": "Jasa desain poster kreatif untuk kebutuhan bisnis, acara, atau publikasi.",
            "variants": [
                { "name": "Poster A4", "price": 20000 },
                { "name": "Poster A3", "price": 35000 }
            ]
        },
        {
            "id": "D10",
            "name": "Desain Kartu Nama",
            "icon": "fas fa-id-card",
            "description": "Jasa desain kartu nama profesional untuk bisnis atau personal branding.",
            "variants": [
                { "name": "Basic", "price": 10000 },
                { "name": "Premium", "price": 20000 }
            ]
        }
    ],
    "Produk Digital": [
        {
            "id": "P11",
            "name": "E-Book",
            "icon": "fas fa-book",
            "description": "Koleksi e-book digital dengan berbagai topik menarik, mulai dari bisnis, programming, hingga hobi.",
            "variants": [
                { "name": "E-Book Bisnis", "price": 15000 },
                { "name": "E-Book Programming", "price": 20000 },
                { "name": "E-Book Random Pack", "price": 10000 }
            ]
        },
        {
            "id": "P15",
            "name": "Akun Premium",
            "icon": "fas fa-user-circle",
            "description": "Berbagai akun premium dengan harga terjangkau, cocok untuk hiburan dan produktivitas.",
            "variants": [
                { "name": "Netflix Premium (1 Bulan)", "price": 40.000 },
                { "name": "Spotify Premium (1 Bulan)", "price": 25000 },
                { "name": "Canva Pro (1 Bulan)", "price": 20000 }
            ]
        }
    ]
};

// Ekspor objek untuk digunakan di file JavaScript lain (jika menggunakan modul)
// Jika hanya disuntikkan langsung di HTML, Anda tidak perlu baris ini.
// export { CONFIG, productsData };
