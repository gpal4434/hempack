"use client";

import Footer from "@/components/common/Footer";
import GaugeBar from "@/components/main/GaugeBar";
import Main from "@/components/main/Main";
import Works from "@/components/works/Works";
import { isMobileAtom } from "@/utils/isMobile/atom";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

const HomeContainer = () => {
    const setIsMobile = useSetAtom(isMobileAtom);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1020);
            console.log("isMobile", window.innerWidth < 1020);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
};

export default HomeContainer;
