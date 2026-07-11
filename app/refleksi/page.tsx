import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Hero from "@/refleksi_component/hero";
import Reflection from "@/refleksi_component/refleksi_output";

export default function refelksi() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Reflection />
            <Footer />
        </main>
    )
}