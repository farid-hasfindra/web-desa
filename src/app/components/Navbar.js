import Link from "next/link";

const navItems = [
  { href: "/beranda", label: "Beranda" },
  { href: "/perangkat-desa", label: "Perangkat Desa" },
  { href: "/tentang-desa", label: "Tentang Desa" },
  { href: "/potensi-desa", label: "Potensi Desa" },
  { href: "/pelayanan-desa", label: "Pelayanan Desa" },
  { href: "/galeri-desa", label: "Galeri Desa" },
];


export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50 animate-slide-down">
      <ul className="flex gap-4 md:gap-8">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-green-700 font-semibold px-3 py-2 rounded hover:bg-green-100 transition-colors duration-300">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/admin-login" className="ml-4 px-4 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition-colors duration-300 font-semibold">
        Login Admin
      </Link>
    </nav>
  );
}
