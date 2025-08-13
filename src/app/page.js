
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <img src="/file.svg" alt="Logo Desa" className="w-24 h-24 mb-4 rounded-full shadow-lg" />
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-2">Desa Maju Sejahtera</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">Profil Desa Modern, Informatif, dan Interaktif</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#profil" className="px-6 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition">Lihat Profil Desa</a>
          <a href="/admin-login" className="px-6 py-2 bg-white text-green-700 border border-green-600 rounded-full shadow hover:bg-green-50 transition">Login Admin</a>
        </div>
      </section>

      {/* Profil Desa */}
      <section id="profil" className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Profil Desa</h2>
        <p className="text-gray-700 mb-2">
          Desa Maju Sejahtera terletak di kawasan yang asri dan strategis, dengan masyarakat yang ramah dan berbudaya. Desa ini memiliki potensi alam, pertanian, dan pariwisata yang terus berkembang.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Luas Wilayah: 1.200 Ha</li>
          <li>Jumlah Penduduk: 3.500 jiwa</li>
          <li>Potensi: Pertanian, Wisata Alam, UMKM</li>
        </ul>
      </section>

      {/* Visi & Misi */}
      <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Visi & Misi</h2>
        <div className="mb-4">
          <h3 className="font-bold text-green-600">Visi</h3>
          <p className="text-gray-700">Menjadi desa yang maju, mandiri, dan sejahtera berbasis potensi lokal dan teknologi.</p>
        </div>
        <div>
          <h3 className="font-bold text-green-600">Misi</h3>
          <ul className="list-decimal list-inside text-gray-600">
            <li>Meningkatkan kualitas SDM dan pelayanan publik.</li>
            <li>Mengembangkan potensi ekonomi desa.</li>
            <li>Melestarikan budaya dan lingkungan.</li>
            <li>Mendorong inovasi dan digitalisasi desa.</li>
          </ul>
        </div>
      </section>

      {/* Kontak */}
      <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Kontak</h2>
        <p className="text-gray-700 mb-2">Kantor Desa Maju Sejahtera, Jl. Raya Desa No. 1</p>
        <p className="text-gray-700 mb-2">Email: info@desamajusejahtera.id</p>
        <p className="text-gray-700">Telepon: (021) 12345678</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500">
        &copy; {new Date().getFullYear()} Desa Maju Sejahtera. All rights reserved.
      </footer>
    </main>
  );
}
