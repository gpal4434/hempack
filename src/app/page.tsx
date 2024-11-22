import Footer from "@/components/common/Footer";
import GaugeBar from "@/components/main/GaugeBar";
import Main from "@/components/main/Main";
import Works from "@/components/works/Works";

export default function Home() {
    return (
        <>
            <GaugeBar />
            <main className="layout-bg">
                <div>
                    <Main />
                    <Works />
                </div>
            </main>
            <Footer />
        </>
    );
}
