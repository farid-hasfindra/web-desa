
export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 font-sans">
      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-12 mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4 text-center">Dashboard Admin Desa</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">Kelola seluruh konten website desa dengan mudah dan fleksibel.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AdminCard
            title="Edit Beranda"
            desc="Ubah nama desa, alamat, email, logo, foto kantor, peta, dan sejarah singkat."
            href="/admin-beranda"
            img="/admin-icons/beranda.gif"
          />
          <AdminCard
            title="Edit Perangkat Desa"
            desc="Ubah data perangkat desa dan struktur organisasi."
            href="/admin-perangkat"
            img="/admin-icons/perangkat.gif"
          />
          <AdminCard
            title="Edit Tentang Desa"
            desc="Ubah visi misi, program kerja, jumlah penduduk, dan pembagian wilayah."
            href="/admin-tentang"
            img="/admin-icons/tentang.gif"
          />
          <AdminCard
            title="Edit Potensi Desa"
            desc="Ubah data pariwisata, UMKM, produk unggulan, dan event desa."
            href="/admin-potensi"
            img="/admin-icons/potensi.gif"
          />
          <AdminCard
            title="Edit Galeri Desa"
            desc="Ubah video profil dan foto-foto kegiatan desa."
            href="/admin-galeri"
            img="/admin-icons/galeri.gif"
          />
        </div>
      </section>
    </main>
  );
}

function AdminCard({ title, desc, href, img }) {
  return (
    <div className="bg-green-50 rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-500 hover:scale-105">
      <img src={img} alt={title} className="w-24 h-24 mb-4 object-contain animate-fade-in" />
      <h2 className="text-xl font-semibold text-green-700 mb-2 text-center">{title}</h2>
      <p className="text-gray-600 mb-4 text-center">{desc}</p>
      <a href={href} className="px-4 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition">Kelola</a>
    </div>
  );
}
