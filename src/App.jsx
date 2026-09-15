import React, { useState } from 'react';
import { Phone, MapPin, Clock, Menu, X, CheckCircle, ChevronRight, Star } from 'lucide-react';
import logoUrl from './assets/logo.png';
import heroCakeUrl from './assets/hero-cake.jpg';

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="fixed w-full top-0 bg-cream-50/90 backdrop-blur-sm z-50 border-b border-choco-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src={logoUrl} alt="Bestcrumb Logo" className="h-10 w-auto object-contain rounded-md" />
            <span className="font-serif text-2xl font-bold text-choco-900">Bestcrumb</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#beranda" className="text-choco-800 hover:text-accent-500 font-medium transition-colors">Beranda</a>
            <a href="#menu" className="text-choco-800 hover:text-accent-500 font-medium transition-colors">Menu Unggulan</a>
            <a href="#testimoni" className="text-choco-800 hover:text-accent-500 font-medium transition-colors">Testimoni</a>
            <a href="#lokasi" className="text-choco-800 hover:text-accent-500 font-medium transition-colors">Lokasi & Pengiriman</a>
          </nav>

          <div className="hidden md:flex items-center">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="bg-choco-900 text-cream-50 px-6 py-2.5 rounded-full font-medium hover:bg-choco-800 transition-colors flex items-center gap-2">
              <Phone size={18} />
              Pesan via WhatsApp
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-choco-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-cream-50 border-t border-choco-900/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#beranda" className="block px-3 py-2 text-choco-800 font-medium">Beranda</a>
            <a href="#menu" className="block px-3 py-2 text-choco-800 font-medium">Menu Unggulan</a>
            <a href="#testimoni" className="block px-3 py-2 text-choco-800 font-medium">Testimoni</a>
            <a href="#lokasi" className="block px-3 py-2 text-choco-800 font-medium">Lokasi & Pengiriman</a>
            <a href="https://wa.me/6281234567890" className="block px-3 py-2 text-accent-500 font-bold">Pesan Sekarang</a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section id="beranda" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
    <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-choco-900/5 border border-choco-900/10 text-sm font-medium text-choco-800">
      <span className="text-accent-500 mr-2">✦</span>
      KINI HADIR UNTUK MENEMANI MOMEN MANIS ANDA DI TOMOHON
    </div>
    
    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-choco-900 max-w-4xl mx-auto leading-tight mb-6">
      Kelezatan Brownies Fudgy, Pie Renyah & Cake Istimewa di Tomohon
    </h1>
    
    <p className="text-lg md:text-xl text-choco-700 max-w-2xl mx-auto mb-10">
      Dibuat dengan bahan premium untuk cita rasa manis yang pas. Sempurna untuk perayaan keluarga, kado orang tersayang, atau sekadar memanjakan diri di waktu santai.
    </p>
    
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
      <a href="https://wa.me/6281234567890" className="bg-choco-900 text-cream-50 px-8 py-3.5 rounded-full font-medium hover:bg-choco-800 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
        <Phone size={20} />
        Pesan Cepat via WhatsApp
      </a>
      <a href="#menu" className="bg-white text-choco-900 border border-choco-900/20 px-8 py-3.5 rounded-full font-medium hover:bg-cream-100 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
        Lihat Menu & Harga
      </a>
    </div>
    
    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
      <img 
        src={heroCakeUrl} 
        alt="Kue cantik gaya Instagram Bestcrumb" 
        className="w-full h-[400px] md:h-[600px] object-cover"
      />
      
      {/* Floating badges */}
      <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
        <div className="w-12 h-12 bg-accent-500/20 rounded-full flex items-center justify-center text-accent-500 font-bold text-xl">
          💯
        </div>
        <div className="text-left">
          <p className="font-bold text-choco-900 text-sm">1,000+ Pelanggan Puas</p>
          <p className="text-xs text-choco-700">Rasa original Khas Tomohon</p>
        </div>
      </div>
      
      <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-4">
        <div className="text-left">
          <p className="font-bold text-choco-900 text-sm">100% Homemade & Fresh</p>
          <p className="text-xs text-choco-700">Bahan Baku Premium, Halal & Higienis</p>
        </div>
      </div>
    </div>
  </section>
);

const Spesialisasi = () => {
  const categories = [
    {
      title: "Fudgy Brownies",
      desc: "Lumer di mulut, perpaduan sempurna dark chocolate dan crust yang renyah di luar.",
      img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Artisanal Pies",
      desc: "Crust yang renyah dan gurih, dengan isian buah-buahan segar. Cita rasa seimbang yang tidak bikin eneg.",
      img: "https://images.unsplash.com/photo-1620894592237-7dfb2496a7d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Celebration Cakes",
      desc: "Kue spesial untuk hari istimewa Anda. Lembut, moist, dengan dekorasi cantik yang bisa di-custom.",
      img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Dessert Box & Tartlets",
      desc: "Camilan manis yang praktis dibawa kemana saja. Pilihan tepat untuk suguhan acara atau dinikmati sendiri.",
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-choco-900/10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div className="max-w-2xl">
          <p className="text-accent-500 font-bold tracking-wider text-sm mb-2 uppercase">Keahlian Kami</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-choco-900">
            Spesialisasi Seni Rasa Manis<br/>dari Dapur Tomohon
          </h2>
        </div>
        <p className="text-choco-700 max-w-md mt-4 md:mt-0 text-sm md:text-base text-right">
          Setiap varian dibuat dengan resep rahasia yang disempurnakan.
          Kami percaya rasa yang enak berasal dari niat baik dan bahan premium.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48 rounded-xl overflow-hidden mb-4">
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-choco-900">
                Terfavorit
              </div>
            </div>
            <h3 className="font-serif font-bold text-xl text-choco-900 mb-2">{cat.title}</h3>
            <p className="text-choco-700 text-sm mb-4">{cat.desc}</p>
            <a href="#menu" className="text-choco-900 font-medium text-sm flex items-center hover:text-accent-500 transition-colors">
              Lihat Varian Menu <ChevronRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const MenuSection = () => {
  const menus = [
    {
      name: "Signature Dark Fudgy Brownies",
      desc: "Tekstur padat, fudgy di bagian dalam dan shiny crust di luar. Menggunakan 100% dark chocolate murni.",
      price: "Rp 65.000",
      img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      tag: "Best Seller"
    },
    {
      name: "Triple Choco Melt with Almond",
      desc: "Brownies fudgy yang diberi topping lelehan cokelat premium dan taburan kacang almond panggang renyah.",
      price: "Rp 75.000",
      img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Classic French Apple Pie",
      desc: "Kulit pie super renyah dengan isian apel segar Tomohon yang dimasak dengan kayu manis dan brown sugar.",
      price: "Rp 85.000",
      img: "https://images.unsplash.com/photo-1587248720327-8eb72564be1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      tag: "Rekomendasi"
    },
    {
      name: "Creamy Burnt Basque Cheesecake",
      desc: "Tekstur sangat lembut dan lumer di mulut dengan bagian luar yang eksotis. Menggunakan full cream cheese impor.",
      price: "Rp 145.000",
      img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Dessert Box Mix Rasa (Isi 4)",
      desc: "Paket asik untuk menemani waktu santai. Berisi 4 varian dessert box pilihan Bestcrumb (Tiramisu, Red Velvet, dll).",
      price: "Rp 110.000",
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Luxury Mix Assorted Fruit Tartlets",
      desc: "Tartlet renyah dengan isian vla vanilla dan topping buah-buahan segar pilihan. Cocok untuk acara spesial.",
      price: "Rp 75.000",
      img: "https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      tag: "Best Seller"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-accent-500 font-bold tracking-wider text-sm mb-2 uppercase">Katalog Produk</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-choco-900 mb-4">
          Menu Unggulan & Best Seller
        </h2>
        <p className="text-choco-700 max-w-2xl mx-auto mb-10">
          Pilihan favorit pelanggan setia kami. Temukan sajian manis yang paling pas untuk memanjakan lidah Anda hari ini.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['Semua Menu', 'Fudgy Brownies', 'Artisanal Pies', 'Celebration Cakes', 'Dessert Box'].map((filter, i) => (
            <button key={i} className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-choco-900 text-white' : 'bg-cream-100 text-choco-800 hover:bg-cream-200'}`}>
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {menus.map((item, idx) => (
            <div key={idx} className="bg-cream-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-choco-900/5 group flex flex-col h-full">
              <div className="relative h-56 overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {item.tag && (
                  <div className="absolute top-4 left-4 bg-choco-900 text-cream-50 px-3 py-1 rounded-full text-xs font-bold">
                    {item.tag}
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif font-bold text-xl text-choco-900 mb-2">{item.name}</h3>
                <p className="text-choco-700 text-sm mb-6 flex-grow">{item.desc}</p>
                <div className="flex justify-between items-center mt-auto">
                  <div>
                    <p className="text-xs text-choco-700 mb-1">Harga mulai</p>
                    <p className="font-bold text-lg text-accent-500">{item.price}</p>
                  </div>
                  <a href="https://wa.me/6281234567890" className="bg-choco-900 text-cream-50 px-5 py-2 rounded-full text-sm font-medium hover:bg-choco-800 transition-colors flex items-center gap-2">
                    <Phone size={14} /> Pesan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Mengapa = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      <div className="lg:w-1/2 relative rounded-3xl overflow-hidden shadow-xl">
        <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Baker decorating cake" className="w-full h-[600px] object-cover" />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-choco-900/90 to-transparent p-8">
          <p className="text-white font-serif text-2xl font-bold">100% Homemade dengan Dedikasi Sepenuh Hati</p>
        </div>
      </div>
      
      <div className="lg:w-1/2">
        <p className="text-accent-500 font-bold tracking-wider text-sm mb-2 uppercase">Kualitas Terbaik</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-choco-900 mb-6">
          Mengapa Bestcrumb Tomohon Selalu Jadi Pilihan Istimewa?
        </h2>
        <p className="text-choco-700 mb-10 text-lg">
          Lebih dari sekadar rasa manis, kami menghadirkan pengalaman menikmati kue berkualitas tinggi yang dibuat khusus dari dapur kami.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Dapur Sejuk Tomohon",
              desc: "Iklim udara sejuk Tomohon memberikan kondisi ideal bagi adonan, menghasilkan tekstur kue yang lebih konsisten & sempurna."
            },
            {
              title: "Bahan Baku Sangat Premium",
              desc: "Hanya menggunakan cokelat Belgia asli, mentega murni (bukan margarin buatan), dan ekstrak vanilla asli, bukan sekadar perisa."
            },
            {
              title: "Custom Sesuai Keinginan",
              desc: "Bisa request desain untuk cake ulang tahun dengan budget yang disesuaikan. Ukuran dan bentuk terserah Anda!"
            },
            {
              title: "Pengiriman Higienis & Aman",
              desc: "Packaging kokoh dan aman, dengan panduan penyimpanan yang jelas, memastikan bentuk kue tetap cantik tiba di lokasi."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-choco-900/5 shadow-sm">
              <div className="w-10 h-10 bg-cream-100 rounded-full flex items-center justify-center text-accent-500 mb-4">
                <CheckCircle size={20} />
              </div>
              <h3 className="font-bold text-choco-900 mb-2">{item.title}</h3>
              <p className="text-choco-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CaraPesan = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-accent-500 font-bold tracking-wider text-sm mb-2 uppercase">Proses Order</p>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-choco-900 mb-4">
        Cara Pesan Mudah Tanpa Ribet
      </h2>
      <p className="text-choco-700 max-w-2xl mx-auto mb-16">
        Pemesanan sistem Pre-Order (PO) H-1 atau H-2. Ikuti 3 langkah mudah di bawah ini agar pesanan Anda segera kami proses.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-choco-900/10 -translate-y-1/2 z-0"></div>
        
        {[
          {
            step: "01",
            title: "Pilih Menu & Tentukan Tanggal",
            desc: "Buka katalog menu kami di website ini, pilih produk yang Anda inginkan, dan catat untuk tanggal berapa kue diperlukan."
          },
          {
            step: "02",
            title: "Hubungi WhatsApp Admin",
            desc: "Kirim daftar pesanan ke nomor WA kami. Kami akan mengonfirmasi ketersediaan slot dan total biaya pesanan Anda."
          },
          {
            step: "03",
            title: "Diantar/Ambil & Nikmati Manisnya",
            desc: "Pesanan akan disiapkan fresh di hari-H. Anda bisa mengambilnya di lokasi kami atau menggunakan jasa pengiriman khusus (kurir kue)."
          }
        ].map((item, idx) => (
          <div key={idx} className="relative z-10 bg-cream-50 p-8 rounded-3xl border border-choco-900/5 shadow-sm">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 ${idx === 1 ? 'bg-choco-900 text-white' : 'bg-cream-200 text-choco-900'}`}>
              {item.step}
            </div>
            <h3 className="font-bold text-lg text-choco-900 mb-3">{item.title}</h3>
            <p className="text-choco-700 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12">
        <a href="https://wa.me/6281234567890" className="inline-flex bg-choco-900 text-cream-50 px-8 py-3.5 rounded-full font-medium hover:bg-choco-800 transition-colors items-center gap-2">
          Mulai Pesan Via WhatsApp Sekarang
        </a>
      </div>
    </div>
  </section>
);

const Testimoni = () => (
  <section id="testimoni" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
      <div>
        <p className="text-accent-500 font-bold tracking-wider text-sm mb-2 uppercase">Kata Mereka</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-choco-900">
          Cerita Manis dari Sahabat Bestcrumb
        </h2>
      </div>
      <div className="flex text-accent-500 gap-1 mt-4 md:mt-0">
        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
        <span className="text-choco-900 font-bold ml-2">4.9/5 dari 200+ Review</span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          name: "Dr. Sarah Lengkey",
          role: "Pelanggan Setia - Kakaskasen",
          text: "\"Brownies fudgy-nya Bestcrumb beneran beda! Bagian luarnya shiny crust dan renyah, tapi dalamnya moist banget. Gak terlalu manis, pas banget buat nemenin ngopi sore di rumah.\""
        },
        {
          name: "Melisa Rondonuwu",
          role: "Pegawai Negeri - Kolongan",
          text: "\"Order custom cake buat ultah anak di sini. Desainnya rapi persis seperti ekspektasi, dan yang paling penting rasanya juara. Spons cakenya lembut, krimnya gak bikin eneg. Top!\""
        },
        {
          name: "Ivan Weku",
          role: "Pemilik Penginapan - Tinoor",
          text: "\"Classic French Apple Pie mereka adalah dessert wajib untuk menjamu tamu-tamu VIP penginapan kami. Wangi butter dan kayumanisnya bener-bener menggugah selera.\""
        }
      ].map((item, idx) => (
        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-choco-900/5 relative">
          <div className="text-accent-500/20 absolute top-6 right-6 font-serif text-6xl">"</div>
          <div className="flex gap-1 text-accent-500 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <p className="text-choco-800 mb-8 relative z-10 italic">
            {item.text}
          </p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-cream-200 rounded-full flex items-center justify-center font-bold text-choco-900">
              {item.name.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-choco-900 text-sm">{item.name}</p>
              <p className="text-xs text-choco-700">{item.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const CTABanner = () => (
  <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="bg-choco-900 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-choco-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      
      <div className="relative z-10 md:w-2/3 text-center md:text-left mb-8 md:mb-0">
        <p className="text-accent-500 font-bold tracking-wider text-sm mb-3 uppercase flex items-center justify-center md:justify-start gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-500"></span> Edisi Hampers Lebaran/Natal
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-cream-50 mb-4">
          Rayakan Momen Terbaik Bersama Bestcrumb Hampers Mellar
        </h2>
        <p className="text-cream-200 text-lg max-w-xl">
          Kirimkan kebahagiaan dan kehangatan dalam sekotak brownies/kue pilihan. Kemasan hampers eksklusif, pita cantik, dan kartu ucapan tulisan tangan. Pesan minimal H-3.
        </p>
      </div>
      
      <div className="relative z-10 md:w-1/3 flex justify-center md:justify-end w-full">
        <a href="https://wa.me/6281234567890" className="bg-cream-50 text-choco-900 px-8 py-4 rounded-full font-bold hover:bg-cream-100 transition-colors w-full md:w-auto text-center shadow-xl">
          Tanya Slot Hampers (Klik WA)
        </a>
      </div>
    </div>
  </section>
);

const Info = () => (
  <section id="lokasi" className="py-20 bg-cream-100/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-accent-500 font-bold tracking-wider text-sm mb-2 uppercase">Lokasi Operasional</p>
          <h2 className="font-serif text-3xl font-bold text-choco-900 mb-6">
            Informasi Dapur & Jangkauan Kirim
          </h2>
          <p className="text-choco-700 mb-8">
            Seluruh pesanan diambil pada dapur khusus kami yang beralamat di Tomohon. Mohon diperhatikan jam operasional untuk konfirmasi pesanan.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-choco-900 shadow-sm shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-choco-900">Alamat Pick-up Dapur</h3>
                <p className="text-choco-700 text-sm mt-1">Jl. Raya Tomohon, Kakaskasen (Samping Bank SulutGo), Tomohon Utara, Sulawesi Utara.</p>
                <a href="#" className="text-accent-500 text-sm font-medium mt-1 inline-block">Buka di Google Maps &rarr;</a>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-choco-900 shadow-sm shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-choco-900">Jam Buka Dapur & Pemesanan</h3>
                <p className="text-choco-700 text-sm mt-1">
                  <strong>Senin - Sabtu:</strong> 09:00 - 18:00 WITA<br/>
                  <strong>Minggu:</strong> 12:00 - 17:00 WITA<br/>
                  <span className="italic text-xs">(Pesan WA dibalas berurutan pada jam kerja)</span>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-choco-900 shadow-sm shrink-0">
                <Menu size={24} /> {/* Using Menu icon as a placeholder for scooter/delivery */}
              </div>
              <div>
                <h3 className="font-bold text-choco-900">Cakupan Area Pengiriman</h3>
                <ul className="text-choco-700 text-sm mt-1 space-y-1">
                  <li><span className="font-medium text-choco-900">📍 Tomohon Kota:</span> Via Kurir Lokal / Ojek (Ongkir ditanggung pembeli).</li>
                  <li><span className="font-medium text-choco-900">📍 Tondano / Minahasa:</span> Pengiriman Terjadwal Khusus (Tanya Admin).</li>
                  <li><span className="font-medium text-choco-900">📍 Manado Kota:</span> Titip Travel / Kurir Antar Kota Terjadwal.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col h-full rounded-3xl overflow-hidden shadow-lg border border-choco-900/10">
          <div className="h-64 bg-gray-200 relative">
            {/* Placeholder map image */}
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Map Tomohon" className="w-full h-full object-cover grayscale opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white px-4 py-2 rounded-full shadow-lg font-bold text-choco-900 flex items-center gap-2">
                <MapPin size={16} className="text-accent-500" /> Bestcrumb Tomohon Area
              </div>
            </div>
          </div>
          <div className="bg-choco-900 text-cream-50 p-8 flex-grow flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-bold mb-4">Ingin Beli Mendadak Tanpa Khawatir?</h3>
            <p className="text-cream-200 mb-6 text-sm">
              Terkadang kami menyediakan ready-stock terbatas setiap harinya untuk Brownies dan Dessert Box. Tanya admin via WA untuk ketersediaan hari ini!
            </p>
            <a href="https://wa.me/6281234567890" className="bg-cream-50 text-choco-900 px-6 py-3 rounded-full font-bold hover:bg-cream-100 transition-colors text-center shadow-md">
              Cek Stok Ready Hari Ini
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-choco-900/10">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="lg:col-span-1">
          <span className="font-serif text-3xl font-bold text-choco-900 block mb-4">Bestcrumb.</span>
          <p className="text-choco-700 text-sm mb-6 leading-relaxed">
            Menghadirkan senyum melalui setiap gigitan. Spesialis Brownies, Pie, dan Kue premium di Tomohon, Sulawesi Utara.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-cream-50 rounded-full flex items-center justify-center text-choco-900 hover:bg-choco-900 hover:text-white transition-colors">
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-choco-900 mb-4">Navigasi Utama</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#beranda" className="text-choco-700 hover:text-accent-500 transition-colors">Beranda Utama</a></li>
            <li><a href="#menu" className="text-choco-700 hover:text-accent-500 transition-colors">Katalog Menu & Harga</a></li>
            <li><a href="#testimoni" className="text-choco-700 hover:text-accent-500 transition-colors">Apa Kata Pelanggan</a></li>
            <li><a href="#lokasi" className="text-choco-700 hover:text-accent-500 transition-colors">Info Pengiriman</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-choco-900 mb-4">Layanan Pelanggan</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="text-choco-700 hover:text-accent-500 transition-colors">Cara Pemesanan (PO)</a></li>
            <li><a href="#" className="text-choco-700 hover:text-accent-500 transition-colors">Syarat & Ketentuan</a></li>
            <li><a href="#" className="text-choco-700 hover:text-accent-500 transition-colors">Kebijakan Pengembalian</a></li>
            <li><a href="#" className="text-choco-700 hover:text-accent-500 transition-colors">FAQ (Pertanyaan Umum)</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-choco-900 mb-4">Hubungi Kami Langsung</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3 text-choco-700">
              <MapPin size={18} className="shrink-0 mt-0.5 text-accent-500" />
              <span>Tomohon, Sulawesi Utara</span>
            </li>
            <li className="flex items-center gap-3 text-choco-700">
              <Phone size={18} className="shrink-0 text-accent-500" />
              <span>WhatsApp: 0812-3456-7890</span>
            </li>
            <li className="flex items-center gap-3 text-choco-700">
              <InstagramIcon size={18} className="shrink-0 text-accent-500" />
              <span>@bestcrumb</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-choco-900/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-choco-700">
        <p>&copy; {new Date().getFullYear()} Bestcrumb Bakery Tomohon. Seluruh Hak Cipta Dilindungi.</p>
        <p>Didesain dengan ❤️ untuk pencinta manis.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="bg-cream-50 min-h-screen text-choco-900 font-sans">
      <Header />
      <Hero />
      <Spesialisasi />
      <MenuSection />
      <Mengapa />
      <CaraPesan />
      <Testimoni />
      <CTABanner />
      <Info />
      <Footer />
    </div>
  );
};

export default App;
