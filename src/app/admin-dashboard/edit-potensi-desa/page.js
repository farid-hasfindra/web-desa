export default function EditPotensiDesa() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Edit Potensi Desa</h1>
      <form className="space-y-4 max-w-xl">
        <input type="text" placeholder="Nama Potensi" className="input" />
        <textarea placeholder="Deskripsi Potensi" className="input" />
        <input type="text" placeholder="Foto URL" className="input" />
        <button type="submit" className="btn">Simpan Perubahan</button>
      </form>
    </div>
  );
}
