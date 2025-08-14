export default function EditPelayananDesa() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Edit Pelayanan Desa</h1>
      <form className="space-y-4 max-w-xl">
        <input type="text" placeholder="Nama Layanan" className="input" />
        <textarea placeholder="Prosedur Layanan" className="input" />
        <input type="text" placeholder="Kontak" className="input" />
        <button type="submit" className="btn">Simpan Perubahan</button>
      </form>
    </div>
  );
}
