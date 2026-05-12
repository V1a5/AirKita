import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Hero from "@/empathy_component/hero";
import FourWOneH from "@/empathy_component/four_w_one_h";
import Method from "@/empathy_component/method";
import Matrix from "@/empathy_component/matrix";
import Data from "@/empathy_component/Pengumpulan_data";

export default function Empathy_and_Research() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <FourWOneH />
            <Method />
            <Data />
            <Matrix />
            <Footer />
        </main>
    )
}