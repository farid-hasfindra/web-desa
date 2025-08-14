export default function EditTentangDesa() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Edit Tentang Desa</h1>
      <form className="space-y-4 max-w-xl">
        <textarea placeholder="Deskripsi Desa" className="input" />
        <textarea placeholder="Sejarah Desa" className="input" />
        <textarea placeholder="Visi Misi" className="input" />
        <button type="submit" className="btn">Simpan Perubahan</button>
      </form>
    </div>
  );
}
