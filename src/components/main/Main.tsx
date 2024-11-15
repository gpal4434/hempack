"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { prompt } from "@/app/fonts";
import ClickMe from "../common/ClickMe";
import RailText from "../common/RailText";

const Main = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const items = boxRef.current?.querySelectorAll(".item");
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
                y: -85,
                duration: 1.2,
                ease: "power4.inOut",
                visibility: "visible",
            }).to(items, {
                y: -180,
                duration: 1.2,
                ease: "power4.inOut",
            });
        }
    }, []);

    return (
        <>
            <div className="flex h-screen items-center p-10 pb-[15vw]">
                <div className="flex flex-col gap-3">
                    <span className="text-7xl font-thin">김혜미는</span>
                    <div className="flex h-fit flex-col gap-3 overflow-hidden text-7xl font-bold">
                        <div ref={boxRef} className="flex h-[100px] flex-col gap-4">
                            <span className={`item leading-[1.1] ${prompt.className}`}>💡💡💡Interactive</span>
                            <span className={`item invisible leading-[1.1] ${prompt.className}`} aria-hidden={true}>
                                👀 Responsive design
                            </span>
                            <span className={`item invisible leading-[1.1] ${prompt.className}`} aria-hidden={true}>
                                Cross-device optimized 👑
                            </span>
                        </div>
                    </div>
                    <span className="text-7xl font-thin">
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
