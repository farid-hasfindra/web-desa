


"use client";
import { useEffect, useState } from "react";

export default function Home() {





  // Semua data utama diambil dari database/API
  const [content, setContent] = useState({
    nama_desa: "",
    alamat: "",
    email: "",
    sejarah: "",
    logo_url: "",
    foto_kantor_url: "",
    peta_embed: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      try {
        const res = await fetch("/api/admin/content", { cache: "no-store" });
        const data = await res.json();
        const newContent = { ...content };
        data.forEach(item => {
          if (newContent.hasOwnProperty(item.key)) {
            newContent[item.key] = item.value;
          }
        });
        setContent(newContent);
      } catch (e) {
        // handle error
      }
      setLoading(false);
    }
    fetchContent();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <main className="min-h-screen flex items-center justify-center"><span>Loading...</span></main>;
  }

  return (
    <main className="animate-fade-in min-h-screen bg-gradient-to-br from-blue-50 to-green-100 font-sans">
      <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-12 mb-12 text-center">
        <img src={content.logo_url || "/logo-desa.png"} alt="Logo Desa" className="w-24 h-24 mb-4 rounded-full mx-auto shadow-lg transition-transform duration-500 hover:scale-110" />
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-2">{content.nama_desa || "Kampung Tualang Timur"}</h1>
        <p className="text-md text-gray-600 mb-2">Email: {content.email || "info@desamajusejahtera.id"}</p>
        <img src={content.foto_kantor_url || "/kantor-desa.jpg"} alt="Foto Kantor Desa" className="w-full max-w-md mx-auto rounded-lg shadow mb-6 transition-all duration-500 hover:scale-105" />
        {content.peta_embed ? (
          <div className="w-full max-w-md mx-auto rounded-lg shadow mb-6" dangerouslySetInnerHTML={{ __html: content.peta_embed }} />
        ) : (
          <img src="/peta-desa.png" alt="Peta Wilayah Desa" className="w-full max-w-md mx-auto rounded-lg shadow mb-6 transition-all duration-500 hover:scale-105" />
        )}
        <p className="text-gray-700">{content.sejarah || "Kampung Tualang Timur Merupakan Pemekaran Dari kampung Tualang, Berawal dari Akhir Desember 1989 masyarakat membuka Lahan yang di namai jalan BAKAL yaitu jalan setapak di dalam hutan yang sering di lewati oleh hewan-hewan liar seperti gajah, harimau, Badak, Tapir, babi, Kijang Dan berbagai macam Hewan Liar Lainnya, makanya sampai saat ini masih di sebut Kampung Bakal, karna adanya Jalan di dalam Hutan."}</p>
      </section>
    </main>
  );
}
