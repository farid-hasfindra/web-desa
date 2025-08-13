export default function TentangDesa() {
  return (
    <main className="animate-fade-in min-h-screen bg-gradient-to-br from-blue-50 to-green-100 font-sans">
      <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-12 mb-12">
        <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">Tentang Desa</h1>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Visi & Misi</h2>
        <p className="mb-2 text-gray-700"><b>Visi:</b> Menjadi desa yang maju, mandiri, dan sejahtera berbasis potensi lokal dan teknologi.</p>
        <p className="mb-6 text-gray-700"><b>Misi:</b> Meningkatkan kualitas SDM, mengembangkan ekonomi desa, melestarikan budaya, dan mendorong inovasi.</p>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Program Kerja & Kegiatan Rutin</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Pemberdayaan UMKM</li>
          <li>Pelatihan pertanian modern</li>
          <li>Kegiatan gotong royong mingguan</li>
          <li>Festival budaya tahunan</li>
        </ul>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Jumlah Penduduk</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Total: 3.500 jiwa</li>
          <li>Laki-laki: 1.800 jiwa</li>
          <li>Perempuan: 1.700 jiwa</li>
        </ul>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Pembagian Wilayah</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Dusun 1: RT 01 - RT 05</li>
          <li>Dusun 2: RT 06 - RT 10</li>
          <li>Dusun 3: RT 11 - RT 15</li>
        </ul>
      </section>
    </main>
  );
}
