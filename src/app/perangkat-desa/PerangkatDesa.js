const perangkat = [
  { nama: "Kepala Desa", foto: "/perangkat/kepala-desa.jpg", info: "Bapak Sukses Makmur" },
  { nama: "Sekretaris Desa", foto: "/perangkat/sekretaris.jpg", info: "Ibu Cerdas Amanah" },
  { nama: "Kasi Pemerintahan", foto: "/perangkat/kasi-pemerintahan.jpg", info: "Bapak Teguh Santosa" },
  { nama: "Kaur Keuangan", foto: "/perangkat/kaur-keuangan.jpg", info: "Ibu Lestari" },
  // ...tambahkan perangkat lain sesuai kebutuhan
];

export default function PerangkatDesa() {
  return (
    <main className="animate-fade-in min-h-screen bg-gradient-to-br from-blue-50 to-green-100 font-sans">
      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-12 mb-12">
        <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">Perangkat Desa</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {perangkat.map((p, i) => (
            <div key={i} className="bg-green-50 rounded-lg shadow p-4 flex flex-col items-center transition-transform duration-500 hover:scale-105">
              <img src={p.foto} alt={p.nama} className="w-24 h-24 rounded-full mb-2 shadow" />
              <h2 className="text-xl font-semibold text-green-700">{p.nama}</h2>
              <p className="text-gray-700">{p.info}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">Struktur Organisasi</h2>
        <img src="/struktur-organisasi.png" alt="Struktur Organisasi Desa" className="w-full max-w-2xl mx-auto rounded-lg shadow transition-all duration-500 hover:scale-105" />
      </section>
    </main>
  );
}
