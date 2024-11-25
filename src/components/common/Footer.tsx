"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Footer = () => {
    const barRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
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
    });

    return (
        <>
            <div className="mx-auto my-40 flex w-[90%] flex-col gap-2 border-b border-t border-solid border-border py-20">
                <span className="text-3xl">👇</span>
                <div>
                    <span className="text-xl font-bold xl:text-3xl">함께 할 인재를 찾고 계신가요?</span>
                    <span ref={barRef} className="xl:text-3xl">
                        _
                    </span>
                </div>
                <p className="text-xl">준비된 김혜미, 여기 있습니다!</p>

                <div className="mt-12 flex gap-5 sm:flex-col lg:gap-10">
                    <div className="flex flex-col lg:gap-4">
                        <div>Email</div>
                        <div className="font-bold hover:underline">
                            <a href="mailto:gpal4434@naver.com">gpal4434@naver.com</a>
                        </div>
                    </div>
                    <div className="flex flex-col lg:gap-4">
                        <div>깃 허브</div>
                        <div className="font-bold hover:underline">
                            <a href="https://github.com/gpal4434" target="_blank">
                                https://github.com/gpal4434
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
