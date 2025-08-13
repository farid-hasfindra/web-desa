import Link from "next/link";

const adminNavItems = [
  { href: "/admin-dashboard", label: "Dashboard" },
  { href: "/admin-beranda", label: "Edit Beranda" },
  { href: "/admin-perangkat", label: "Edit Perangkat Desa" },
  { href: "/admin-tentang", label: "Edit Tentang Desa" },
  { href: "/admin-potensi", label: "Edit Potensi Desa" },
  { href: "/admin-galeri", label: "Edit Galeri Desa" },
  // Tambahkan menu lain sesuai kebutuhan
];

export default function AdminNavbar() {
  return (
    <nav className="w-full bg-green-700 shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50 animate-slide-down">
      <ul className="flex gap-4 md:gap-8">
        {adminNavItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-white font-semibold px-3 py-2 rounded hover:bg-green-600 transition-colors duration-300">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/beranda" className="ml-4 px-4 py-2 bg-white text-green-700 rounded-full shadow hover:bg-green-100 transition-colors duration-300 font-semibold">
        Keluar
      </Link>
    </nav>
  );
}
