export default function EditPerangkatDesa() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Edit Perangkat Desa</h1>
      <form className="space-y-4 max-w-xl">
        <input type="text" placeholder="Nama Perangkat" className="input" />
        <input type="text" placeholder="Jabatan" className="input" />
        <input type="text" placeholder="Foto URL" className="input" />
        <textarea placeholder="Struktur Organisasi" className="input" />
        <button type="submit" className="btn">Simpan Perubahan</button>
      </form>
    </div>
  );
}
