import AdminNavbar from "../components/AdminNavbar";

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AdminNavbar />
        {children}
      </body>
    </html>
  );
}
