"use client";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

export default function ClientNavbarWrapper({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin-");
  return (
    <>
      {!isAdmin && <Navbar />}
      {children}
    </>
  );
}
