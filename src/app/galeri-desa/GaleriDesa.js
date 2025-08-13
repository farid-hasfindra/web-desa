export default function GaleriDesa() {
  return (
    <main className="animate-fade-in min-h-screen bg-gradient-to-br from-blue-50 to-green-100 font-sans">
      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-12 mb-12">
        <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">Galeri Desa</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Video Profil Desa</h2>
          <div className="aspect-video w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video Profil Desa" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Foto Kegiatan Desa</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img src="/galeri/kegiatan1.jpg" alt="Kegiatan 1" className="rounded-lg shadow transition-transform duration-500 hover:scale-105" />
            <img src="/galeri/kegiatan2.jpg" alt="Kegiatan 2" className="rounded-lg shadow transition-transform duration-500 hover:scale-105" />
            <img src="/galeri/kegiatan3.jpg" alt="Kegiatan 3" className="rounded-lg shadow transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </section>
    </main>
  );
}
