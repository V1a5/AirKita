import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Hero from "@/review_component/hero";
import LeanCanvas from "@/review_component/lean_canvas";
import PrototipeLink from "@/review_component/prototipe_link";
import VidioPitch from "@/review_component/vidio_pitch";

export default function review() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <LeanCanvas />
            <PrototipeLink />
            <VidioPitch />
            <Footer />
        </main>
    )
}