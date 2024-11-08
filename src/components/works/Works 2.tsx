"use client";

import Item from "./Item";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import spolive from "@/public/images/thumb/spolive.png";
import next from "@/public/images/thumb/next.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";

const data = [
    {
        src: spolive,
        key: 1,
        title: "SPOLIVE",
        skill: ["javascript", "css"],
        desc: "VUE2.js로 제작된 승부예측 베팅 사이트",
        date: "2022.06 ~",
    },

    {
        src: next,
        key: 1234,
        title: "스포라이브",
        skill: ["NEXT.js", "Vanilla Extract", "React.js", "Typescript"],
        desc: "VUE2.js로 제작된 기존 스포라이브를 next.js로 바꿈",
        date: "2024.08 ~",
    },

    {
        src: next,
        key: 114,
        title: "스포라이브",
        skill: ["NEXT.js", "Vanilla Extract", "React.js", "Typescript"],
        desc: "VUE2.js로 제작된 기존 스포라이브를 next.js로 바꿈",
        date: "2024.08 ~",
    },

    {
        src: next,
        key: 124,
        title: "스포라이브",
        skill: ["NEXT.js", "Vanilla Extract", "React.js", "Typescript"],
        desc: "VUE2.js로 제작된 기존 스포라이브를 next.js로 바꿈",
        date: "2024.08 ~",
    },
];

const Works = () => {
    gsap.registerPlugin(useGSAP);

    const container = useRef(null);
    const router = useRouter();

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
        <div className="mx-auto w-[1200px]">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                navigation
                modules={[Pagination]}
                scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
            >
                {data.map((v) => (
                    <>
                        <SwiperSlide key={v.key} onClick={() => router.push(`/works/${v.key}`)}>
                            <Item data={v} />
                        </SwiperSlide>
                    </>
                ))}
            </Swiper>
        </div>
    );
};

export default Works;
