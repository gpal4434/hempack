"use client";

import Image from "next/image";
import photoshop from "/public/images/photoshop.png";
import react from "/public/images/react.png";
import next from "/public/images/nextjs.png";
import css from "/public/images/css.png";
import html from "/public/images/html.png";
import figma from "/public/images/figma.png";
import javascript from "/public/images/javascript.png";
import { prompt } from "@/app/fonts";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IntroProps } from "../common/ClickMe";

const Intro = ({ hover, setHover }: IntroProps) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 720;
    return (
        <>
            <button
                onClick={() => setHover(false)}
                className="fixed right-5 top-5 z-[9999] overflow-hidden text-5xl hover:text-gray-600 lg:text-white"
            >
                <IoIosCloseCircleOutline />
            </button>
            <div
                className={`fixed right-0 top-0 z-[999] flex h-screen w-screen items-start justify-center overflow-hidden bg-white sm:flex-col`}
            >
                <div className="flex w-screen flex-col justify-center gap-1 p-10 lg:h-full lg:flex-grow">
                    <div className={`text-3xl font-bold text-[#333] lg:text-9xl ${prompt.className} label`}>
                        HEMPACK
                    </div>
                    <div className="flex gap-1 sm:flex-col lg:gap-3 lg:text-xl">
                        <h5 className="flex gap-1">
                            <span className="w-16">이름</span>
                            <span className="font-bold">김혜미</span>
                        </h5>
                        {!isMobile && <span> · </span>}
                        <h5 className="flex gap-1">
                            <span className="w-16">생년월일</span>
                            <span className="font-bold">1993-05-29</span>
                        </h5>
                        {!isMobile && <span> · </span>}
                        <h5 className="flex gap-1">
                            <span className="w-16">MBTI</span>
                            <span className="font-bold">ENFJ</span>
                        </h5>
                    </div>
                    <div className="flex gap-1 sm:flex-col lg:gap-3 lg:text-xl">
                        <h5 className="flex gap-1">
                            <span className="w-16">최종 학력</span>
                            <span className="font-bold">세종대학교 디지털콘텐츠학과(2017 졸업)</span>
                        </h5>
                        {!isMobile && <span> · </span>}

                        <h5 className="flex gap-1">
                            <span className="w-16">주소</span>
                            <span className="font-bold">서울 양천구</span>
                        </h5>
                    </div>

                    <div className="flex gap-1 lg:gap-3 lg:text-xl">
                        <h5 className="flex gap-1">
                            <span className="w-16">총 경력</span>
                            <span className="font-bold">총 6년 6개월</span>
                        </h5>
                    </div>
                    <div className="pl-16 font-thin">
                        <p className="sm:text-sm">
                            스포피드(2년 6개월 재직중, 메인 퍼블리셔 + UI 개발 + 서브 프론트엔드 개발)
                        </p>
                        <p className="sm:text-sm">순수교육(2년 4개월, 메인 퍼블리셔)</p>
                        <p className="sm:text-sm">펜타온, 벨모어(1년 10개월, 메인 퍼블리셔)</p>
                        {!isMobile && (
                            <div className="flex gap-2 py-3">
                                <div className="flex h-16 w-16 justify-center rounded-full bg-[#e9e9e9] p-3">
                                    <Image src={javascript} width={30} className="object-contain" alt="javascript" />
                                </div>
                                <div className="flex h-16 w-16 justify-center rounded-full bg-[#e9e9e9] p-3">
                                    <Image src={css} width={30} className="object-contain" alt="css" />
                                </div>
                                <div className="flex h-16 w-16 justify-center rounded-full bg-[#e9e9e9] p-3">
                                    <Image src={html} width={30} className="object-contain" alt="html" />
                                </div>
                                <div className="flex h-16 w-16 justify-center rounded-full bg-[#e9e9e9] p-3">
                                    <Image src={react} width={30} className="object-contain" alt="react" />
                                </div>
                                <div className="flex h-16 w-16 justify-center rounded-full bg-[#e9e9e9] p-3">
                                    <Image src={next} width={30} className="object-contain" alt="next" />
                                </div>
                                <div className="flex h-16 w-16 justify-center rounded-full bg-[#e9e9e9] p-3">
                                    <Image src={figma} width={30} className="object-contain" alt="figma" />
                                </div>
                                <div className="flex h-16 w-16 justify-center rounded-full bg-[#e9e9e9] p-3">
                                    <Image src={photoshop} width={30} className="object-contain" alt="photoshop" />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-1 sm:flex-col lg:gap-3 lg:text-xl">
                        <h5 className="flex gap-1">
                            <span className="w-16">연락처</span>
                            <span className="font-bold">gpal4434@naver.com</span>
                        </h5>
                        {!isMobile && <span> · </span>}
                        <h5 className="flex gap-1">
                            <span className="w-16 flex-shrink-0">자격증</span>
                            <span className="flex-wrap text-base font-thin">
                                정보처리기사(2018)
                                <br />
                                웹디자인기능사(2018)
                                <br />
                                GTQ포토샵1급(2017)
                                <br />
                                정보기기운용기능사(2011)
                                <br />
                                컴퓨터그래픽스운용기능사(2010)
                            </span>
                        </h5>
                    </div>
                </div>
                <div className="relative flex items-start justify-center bg-[black] sm:w-full sm:flex-col sm:items-center sm:pb-10 lg:h-screen lg:basis-[50%]">
                    <h3 className={`pt-10 text-center leading-[3] text-white lg:pt-36 xl:text-xl 2xl:text-3xl`}>
                        <span className="block pb-2 text-6xl">🥇</span>
                        <span className="font-bold">UI/UX 디자인</span> 역량을 갖춘
                        <span className="font-bold"> Web Publisher</span>
                        <br />
                        <span className="font-bold">Next.js</span> 프론트엔드 개발 역량 확장 중!
                    </h3>
                    {isMobile && (
                        <div className={`h-48 w-48`}>
                            <video
                                preload="true"
                                style={{ borderRadius: 9999, objectFit: "cover" }}
                                autoPlay
                                loop
                                muted
                                className="h-full w-full"
                                onMouseEnter={() => setHover(true)}
                            >
                                <source src="/my_emoji4.mp4" type="video/mp4" />
                            </video>
                        </div>
                    )}
                </div>
                {!isMobile && (
                    <div className={`absolute bottom-5 right-14 h-60 w-60 ${hover ? "animate-scale" : undefined}`}>
                        <video
                            preload="true"
                            style={{ borderRadius: 9999, objectFit: "cover" }}
                            autoPlay
                            loop
                            muted
                            className="h-full w-full"
                            onMouseEnter={() => setHover(true)}
                        >
                            <source src="/my_emoji4.mp4" type="video/mp4" />
                        </video>
                    </div>
                )}
            </div>
        </>
    );
};

export default Intro;
