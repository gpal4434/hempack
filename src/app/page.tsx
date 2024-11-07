import Intro from "@/components/main/Intro";
import Works from "@/components/works/Works";

export default function Home() {
    return (
        <>
            <main className="wrap">
                <Intro />
                <div className="bg-sub">
                    <Works />
                </div>
            </main>
        </>
    );
}
