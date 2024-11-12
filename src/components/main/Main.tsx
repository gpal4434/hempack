"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { prompt } from "@/app/fonts";
import ClickMe from "./ClickMe";

const Main = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLSpanElement>(null);
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            const text = textRef.current;
            const clone = text.cloneNode(true); // 텍스트 복제
            text.parentNode.appendChild(clone); // 복제한 텍스트를 원본 뒤에 추가
            const totalWidth = text.offsetWidth; // 텍스트의 전체 너비

            const animateText = (textElement) => {
                gsap.fromTo(
                    textElement,
                    {
                        x: 0,
                    },
                    {
                        x: `-=${totalWidth}`, // 텍스트 너비만큼 왼쪽으로 이동
                        duration: totalWidth / 50, // 속도 (너비에 비례)
                        ease: "linear",
                        repeat: -1,
                        modifiers: {
                            x: gsap.utils.unitize((x) => {
                                const xValue = parseFloat(x);
                                return xValue % totalWidth; // 텍스트가 끝나면 처음으로 돌아가도록
                            }),
                        },
                    }
                );
            };

            animateText(text);
            animateText(clone);
        }
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
            <div className="rail fixed bottom-24 flex gap-10 overflow-hidden">
                <h4
                    className={`whitespace-nowrap text-9xl ${prompt.className} font-bold uppercase opacity-[0.03]`}
                    ref={textRef}
                >
                    Flexible Developer HYEMI
                </h4>
            </div>
            <ClickMe />
        </>
    );
};

export default Main;
