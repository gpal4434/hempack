"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const GaugeBar = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const [pageHeight, setPageHeight] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    const gaugeBarRef = useRef(null);
    const fillGauge = scrollPos / (pageHeight - windowHeight);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleScroll = () => {
                const scrollY = window.scrollY || window.pageYOffset;
                setScrollPos(scrollY);
            };
            setPageHeight(document.documentElement.scrollHeight);
            setWindowHeight(window.innerHeight);
            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    useEffect(() => {
        if (gaugeBarRef.current) {
            gsap.to(gaugeBarRef.current, {
                width: `${fillGauge} * 100%`,
                duration: 0.3,
                ease: "power4.out",
            });
        }
    }, [fillGauge]);
    return (
        <div
            data-inmaintabuse="true"
            ref={gaugeBarRef}
            className="gauge-bar bg-gradient-yellowred fixed z-50 h-2"
            style={{ width: `${fillGauge * 100}%` }}
        ></div>
    );
};

export default GaugeBar;
