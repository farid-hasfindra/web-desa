export default function EditBeranda() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Edit Beranda</h1>
      <form className="space-y-4 max-w-xl">
        <input type="text" placeholder="Nama Desa" className="input" />
        <input type="text" placeholder="Alamat" className="input" />
        <input type="email" placeholder="Email" className="input" />
        <input type="text" placeholder="Logo URL" className="input" />
        <input type="text" placeholder="Foto Kantor URL" className="input" />
        <input type="text" placeholder="Peta Embed" className="input" />
        <textarea placeholder="Sejarah Singkat" className="input" />
        <button type="submit" className="btn">Simpan Perubahan</button>
      </form>
    </div>
  );
}
