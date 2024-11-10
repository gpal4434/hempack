import GaugeBar from "@/components/main/GaugeBar";
import Intro from "@/components/main/Intro";
import Main from "@/components/main/Main";
import Works from "@/components/works/Works";

export default function Home() {
    return (
        <>
            <GaugeBar />
            <main className="layout-bg">
                <div>
                    {/* <Intro /> */}
                    <Main />
                    <Works />
                </div>
            </main>
        </>
    );
}
