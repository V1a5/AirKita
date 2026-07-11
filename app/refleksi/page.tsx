import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Hero from "@/refleksi_component/hero";
import Reflection from "@/refleksi_component/refleksi_output";
import Dokumen from "@/refleksi_component/refleksi_dokumen";

export default function refelksi() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Reflection />
            <Dokumen />
            <Footer />
        </main>
    )
}