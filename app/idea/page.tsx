import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Hero from "@/idea_component/hero";
import Mindmap from "@/idea_component/mindmap_canva";
import Sum from "@/idea_component/ideation_sum";
import Next_prototipe from "@/idea_component/next_prototipe";

export default function Idea() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Mindmap />
            <Sum />
            <Next_prototipe />
            <Footer />
        </main>
    )
}