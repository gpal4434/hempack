import Intro from "@/components/main/Intro";
import Main from "@/components/main/Main";
import Works from "@/components/works/Works";

export default function Home() {
    return (
        <>
            <main className="bg">
                <div>
                    {/* <Intro /> */}
                    <Main />
                    <div className="bg-sub">
                        <Works />
                    </div>
                </div>
            </main>
        </>
    );
}
