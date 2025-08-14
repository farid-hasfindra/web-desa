export default function EditGaleriDesa() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Edit Galeri Desa</h1>
      <form className="space-y-4 max-w-xl">
        <input type="text" placeholder="Foto URL" className="input" />
        <button type="submit" className="btn">Tambah Foto</button>
      </form>
      <div className="mt-8">
        <h2 className="font-semibold mb-2">Daftar Foto Galeri</h2>
        {/* Daftar foto galeri akan tampil di sini */}
        <div className="grid grid-cols-2 gap-4">
          {/* Dummy foto */}
          <div className="bg-gray-100 p-2 rounded">Foto 1</div>
          <div className="bg-gray-100 p-2 rounded">Foto 2</div>
        </div>
      </div>
    </div>
  );
}
