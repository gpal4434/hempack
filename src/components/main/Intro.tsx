"use client";

import Image from "next/image";
import { IBMPlexSansKR, prompt } from "../../app/fonts";
import profile from "@/public/images/profile.png";
import photoshop from "@/public/images/photoshop.png";
import react from "@/public/images/react.png";
import next from "@/public/images/nextjs.png";
import css from "@/public/images/css.png";
import html from "@/public/images/html.png";
import figma from "@/public/images/figma.png";
import javascript from "@/public/images/javascript.png";
import styles from "@/app/styles.module.css";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
    const hempackRef = useRef(null);
    const textRef = useRef(null);

    gsap.to(hempackRef.current, { duration: 1, scrambleText: "THIS IS NEW TEXT" }); //or customize things:

    gsap.to(hempackRef.current, {
        duration: 1,
        scrambleText: {
            text: "THIS IS NEW TEXT",
            chars: "XO",
            revealDelay: 0.5,
            speed: 0.3,
            newClass: "myClass",
        },
    });

    return (
        <section className="flex h-screen">
            <div className="flex h-full w-screen flex-grow flex-col justify-center gap-1 p-10">
                <div ref={hempackRef} className={`text-9xl font-bold text-[#333] ${prompt.className} ${styles.label}`}>
                    <div className="introduce__title">
                        <span className="introduce__title-changer" ref={textRef}>
                            <span className="introduce__title-changer-item">Flexible</span>
                            <span className="introduce__title-changer-item" aria-hidden="true">
                                Adaptable
                            </span>
                            <span className="introduce__title-changer-item" aria-hidden="true">
                                Versatile
                            </span>
                        </span>
                        <br />
                        Developer
                    </div>
                </div>
                {/* <h5 ref={textRef} className={`text-xl text-[#333] ${prompt.className}`}>
                    Hi! This is my project packages.
                    <br />
                    Designing UI/UX and Mark up for over 6 years as a web publisher
                    <br />
                </h5> */}

                <div className="flex gap-2 pt-3">
                    <div className={styles.skillItem}>
                        <Image src={javascript} width={30} className="object-contain" alt="javascript" />
                    </div>
                    <div className={styles.skillItem}>
                        <Image src={css} width={30} className="object-contain" alt="css" />
                    </div>
                    <div className={styles.skillItem}>
                        <Image src={html} width={30} className="object-contain" alt="html" />
                    </div>
                    <div className={styles.skillItem}>
                        <Image src={react} width={30} className="object-contain" alt="react" />
                    </div>
                    <div className={styles.skillItem}>
                        <Image src={next} width={30} className="object-contain" alt="next" />
                    </div>
                    <div className={styles.skillItem}>
                        <Image src={figma} width={30} className="object-contain" alt="figma" />
                    </div>
                    <div className={styles.skillItem}>
                        <Image src={photoshop} width={30} className="object-contain" alt="photoshop" />
                    </div>
                </div>
                <div className="absolute bottom-20">
                    <h3 className={`flex items-center gap-3 text-2xl font-semibold ${prompt.className}`}>
                        Contact <span className="text-base font-thin">gpal4434@naver.com</span>
                    </h3>
                </div>
            </div>
            <div className="relative flex basis-[50%] flex-col items-center justify-between bg-sub">
                <h3 className={`pt-32 text-center ${IBMPlexSansKR.className} text-lg`}>
                    <span className="block pb-2 text-6xl">👩🏻‍💻</span>
                    <span className="font-bold">UI/UX 디자인</span> 역량을 갖춘
                    <span className="font-bold"> Web Publisher</span>
                    <br />
                    <span className="font-bold">React / Next.js</span> 프론트엔드 역량 확장 중!
                </h3>
                <Image src={profile} alt="프로필 사진" />
            </div>
        </section>
    );
};

export default Intro;
