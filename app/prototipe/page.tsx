import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Hero from "@/prototipe_component/hero";
import Starburst from "@/prototipe_component/starburst";


export default function Idea() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Starburst />
            <Footer />
        </main>
    )
}