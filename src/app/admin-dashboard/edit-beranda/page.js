

"use client";
import { useEffect, useState } from "react";

export default function EditBeranda() {
  const [form, setForm] = useState({
    nama_desa: "",
    alamat: "",
    email: "",
    logo_url: "",
    foto_kantor_url: "",
    peta_embed: "",
    sejarah: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchContent() {
      setLoading(true);
      try {
        const res = await fetch("/api/admin/content");
        const data = await res.json();
        const newForm = { ...form };
        data.forEach(item => {
          if (newForm.hasOwnProperty(item.key)) {
            newForm[item.key] = item.value;
          }
        });
        setForm(newForm);
      } catch (e) {
        setMessage("Gagal mengambil data!");
      }
      setLoading(false);
    }
    fetchContent();
    // eslint-disable-next-line
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      for (const key in form) {
        await fetch("/api/admin/content", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key, value: form[key] })
        });
      }
      setMessage("Berhasil disimpan!");
    } catch (e) {
      setMessage("Gagal menyimpan!");
    }
    setLoading(false);
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <h1 className="text-3xl font-extrabold text-green-700 mb-8 text-center">Edit Beranda</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <label className="font-semibold text-gray-700">Nama Desa</label>
          <input type="text" name="nama_desa" value={form.nama_desa} onChange={handleChange} placeholder="Nama Desa" className="border rounded px-4 py-2 focus:outline-green-500" />

          <label className="font-semibold text-gray-700">Alamat</label>
          <input type="text" name="alamat" value={form.alamat} onChange={handleChange} placeholder="Alamat" className="border rounded px-4 py-2 focus:outline-green-500" />

          <label className="font-semibold text-gray-700">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border rounded px-4 py-2 focus:outline-green-500" />

          <label className="font-semibold text-gray-700">Logo URL</label>
          <input type="text" name="logo_url" value={form.logo_url} onChange={handleChange} placeholder="Logo URL" className="border rounded px-4 py-2 focus:outline-green-500" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="font-semibold text-gray-700">Foto Kantor URL</label>
          <input type="text" name="foto_kantor_url" value={form.foto_kantor_url} onChange={handleChange} placeholder="Foto Kantor URL" className="border rounded px-4 py-2 focus:outline-green-500" />

          <label className="font-semibold text-gray-700">Peta Embed</label>
          <input type="text" name="peta_embed" value={form.peta_embed} onChange={handleChange} placeholder="Peta Embed" className="border rounded px-4 py-2 focus:outline-green-500" />

          <label className="font-semibold text-gray-700">Sejarah Singkat</label>
          <textarea name="sejarah" value={form.sejarah} onChange={handleChange} placeholder="Sejarah Singkat" className="border rounded px-4 py-2 h-24 resize-none focus:outline-green-500" />
        </div>
        <div className="col-span-2 flex justify-center mt-8">
          <button type="submit" className="px-8 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition" disabled={loading}>
            {loading ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
        </div>
        {message && <div className="col-span-2 text-center mt-2 text-green-600 font-semibold">{message}</div>}
      </form>
      <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="font-bold text-green-700 mb-2">Preview Logo</span>
          {form.logo_url ? (
            <img src={form.logo_url} alt="Logo Desa" className="w-24 h-24 rounded-full shadow mb-2" />
          ) : <span className="text-gray-400">Belum ada logo</span>}
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="font-bold text-green-700 mb-2">Preview Foto Kantor</span>
          {form.foto_kantor_url ? (
            <img src={form.foto_kantor_url} alt="Foto Kantor" className="w-40 h-24 object-cover rounded shadow mb-2" />
          ) : <span className="text-gray-400">Belum ada foto</span>}
        </div>
      </div>
    </div>
  );
}
