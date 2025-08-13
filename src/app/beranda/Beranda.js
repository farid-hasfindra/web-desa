export default function Beranda() {
  return (
    <main className="animate-fade-in min-h-screen bg-gradient-to-br from-blue-50 to-green-100 font-sans">
      <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-12 mb-12 text-center">
        <img src="/logo-desa.png" alt="Logo Desa" className="w-24 h-24 mb-4 rounded-full mx-auto shadow-lg transition-transform duration-500 hover:scale-110" />
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-2">Desa Maju Sejahtera</h1>
        <p className="text-lg text-gray-700 mb-2">Jl. Raya Desa No. 1, Kecamatan Makmur, Kabupaten Sukses, Provinsi Bahagia, 12345</p>
        <p className="text-md text-gray-600 mb-2">Email: info@desamajusejahtera.id</p>
        <img src="/kantor-desa.jpg" alt="Foto Kantor Desa" className="w-full max-w-md mx-auto rounded-lg shadow mb-6 transition-all duration-500 hover:scale-105" />
        <img src="/peta-desa.png" alt="Peta Wilayah Desa" className="w-full max-w-md mx-auto rounded-lg shadow mb-6 transition-all duration-500 hover:scale-105" />
        <h2 className="text-2xl font-semibold text-green-700 mb-4 mt-8">Sejarah Singkat Desa</h2>
        <p className="text-gray-700">Desa Maju Sejahtera berdiri sejak tahun 1950, berawal dari komunitas petani yang kemudian berkembang menjadi desa mandiri dengan berbagai potensi lokal. Desa ini dikenal dengan semangat gotong royong dan inovasi masyarakatnya.</p>
      </section>
    </main>
  );
}
