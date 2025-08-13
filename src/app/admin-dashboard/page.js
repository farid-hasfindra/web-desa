export default function AdminDashboard() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-100">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Selamat Datang di Dashboard Admin</h1>
        <p className="text-gray-700">Anda berhasil login sebagai admin.</p>
        {/* Tambahkan fitur edit konten di sini */}
      </div>
    </main>
  );
}
