"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Works = () => {
    gsap.registerPlugin(useGSAP);

    const container = useRef(null);

    useEffect(() => {
        if (container.current)
            gsap.to(container.current, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "-50% 0%",
                    end: "10px",
                    scrub: 1,
                    markers: true,
                },
                x: 300,
            });
    }, []);

    return (
        <>
            <div ref={container} className="h-16 w-16 bg-[#999]"></div>
        </>
    );
};

export default Works;
