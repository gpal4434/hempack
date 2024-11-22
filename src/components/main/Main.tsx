"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { prompt } from "@/app/fonts";
import ClickMe from "../common/ClickMe";
import RailText from "../common/RailText";

const Main = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLSpanElement>(null);
    const isMobile = typeof window !== "undefined" && window.innerWidth < 720;

    useEffect(() => {
        const items = boxRef.current?.querySelectorAll(".item");
        const yVal1 = isMobile ? -54 : -80;
        const yVal2 = isMobile ? -100 : -180;

        if (barRef) {
            const tl = gsap.timeline({
                yoyo: true,
                repeatRefresh: true,
                repeat: -1,
            });

            tl.to(barRef.current, {
                opacity: 0,
                ease: "circ.inOut",
                duration: 0.2,
            }).to(barRef.current, {
                opacity: 1,
                duration: 0.2,
                ease: "circ.inOut",
            });
        }
        if (items && items.length > 0) {
            const tl = gsap.timeline({
                yoyo: true,
                repeatRefresh: true,
                // paused: true,
                repeat: -1,
            });

            tl.to(items, {
                y: yVal1,
                duration: 1.2,
                ease: "power4.inOut",
                visibility: "visible",
            }).to(items, {
                y: yVal2,
                duration: 1.2,
                ease: "power4.inOut",
            });
        }
    }, [isMobile]);

    return (
        <>
            <div className="flex h-screen items-center p-10 pb-[15vw]">
                <div className="flex flex-col gap-3">
                    <span className="text-3xl font-thin xl:text-7xl">김혜미는</span>
                    <div className="flex h-fit flex-col gap-3 overflow-hidden text-3xl font-bold xl:text-7xl">
                        <div ref={boxRef} className="flex h-[30px] flex-col gap-4 lg:h-[100px]">
                            <span className={`item leading-[1.1] ${prompt.className}`}>💡💡💡Interactive</span>
                            <span className={`item invisible leading-[1.1] ${prompt.className}`} aria-hidden={true}>
                                👀 Responsive {!isMobile ? "design" : ""}
                            </span>
                            <span className={`item invisible leading-[1.1] ${prompt.className}`} aria-hidden={true}>
                                Cross-device {!isMobile ? "optimized 👑" : ""}
                            </span>
                        </div>
                    </div>
                    <span className="text-3xl font-thin xl:text-7xl">
                        UI/UX 개발자입니다<span ref={barRef}>_</span>
                    </span>
                </div>
            </div>
            <ClickMe />
            <RailText />
        </>
    );
};

export default Main;
