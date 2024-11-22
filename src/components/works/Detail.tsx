"use client";

import { prompt } from "@/app/fonts";
import { DataValueProps } from "@/lib/data";
import Image from "next/image";
import ClickMe from "../common/ClickMe";
import { useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward, IoMdHome } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import RailText from "../common/RailText";
interface dataProps {
    data: DataValueProps | undefined;
}

const Detail = ({ data }: dataProps) => {
    console.log("ddd", data);
    SwiperCore.use([Navigation, Scrollbar]);
    const router = useRouter();
    // const [isMobile, setIsMobile] = useState(false);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setIsMobile(window.innerWidth < 720);
    //     };
    //     handleResize();
    //     window.addEventListener("resize", handleResize);

    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, []);

    if (!data) return <div>데이터가 없습니다.</div>;

    return (
        <>
            <div className="p-4 xl:p-10">
                <div className="sticky top-0 z-[999] mx-auto flex w-full justify-between border-b border-solid border-text bg-white">
                    <button className="group flex items-center gap-2 p-5 pl-0" onClick={() => router.push("/")}>
                        <IoIosArrowBack size={18} />
                        <div className="flex items-center gap-1">
                            <IoMdHome color="#666" size={18} />
                            <span className="group-hover:underline">메인으로</span>
                        </div>
                    </button>
                    <div className="flex items-center gap-5">
                        {data && data.key && data.key !== 1 && (
                            <button
                                className="group flex items-center gap-2"
                                onClick={() => router.push(`/works/${data.key - 1}`)}
                            >
                                <IoIosArrowBack size={18} />
                                <span className="group-hover:underline">이전 글</span>
                            </button>
                        )}
                        {data && data.key && data.key !== 1 && data.key < 8 && <span>·</span>}
                        {data && data.key && data.key < 8 && (
                            <button
                                className="group flex items-center gap-2"
                                onClick={() => router.push(`/works/${data.key + 1}`)}
                            >
                                <span className="group-hover:underline">다음 글</span>
                                <IoIosArrowForward size={18} />
                            </button>
                        )}
                    </div>
                </div>
                <div className="mx-auto flex w-full flex-col gap-1 pt-10 xl:w-[1280px]">
                    <h5 className="text-gray-500 xl:text-xl">Project Details</h5>
                    <div className="relative flex h-52 w-52 justify-center rounded-xl border xl:h-72 xl:w-96">
                        <Image
                            src={`/images/thumb/${data.src}.png`}
                            className="object-fill p-10"
                            fill
                            style={{ objectFit: "contain" }}
                            alt={`work_thumb_${data.key}`}
                        />
                    </div>
                    <div className={`flex flex-col gap-3 pt-5 ${prompt.className}`}>
                        <h3
                            className={`text-3xl font-bold text-text transition-all delay-100 duration-200 group-hover:text-white xl:text-6xl`}
                        >
                            {data.title}
                        </h3>

                        <h5 className="text-sm transition-all delay-100 duration-200 group-hover:text-white xl:text-lg">
                            {data.desc}
                        </h5>

                        <div className="flex flex-wrap gap-1">
                            {data.skill.map((v, i) => (
                                <span
                                    key={i}
                                    className="xl:text-md rounded-full bg-[#eeeeee] px-4 py-1 text-xs text-text"
                                >
                                    {v}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="pt12 pb-16">
                    {data.pc && (
                        <Swiper
                            loop={true}
                            spaceBetween={0}
                            // pagination={{ clickable: true }}
                            slidesPerView={1}
                            navigation={true}
                            breakpoints={{
                                720: {
                                    slidesPerView: 1.5,
                                    centeredSlides: true,
                                    spaceBetween: 30,
                                    pagination: true,
                                },
                            }}
                        >
                            {data.pc.map((v, i) => (
                                <SwiperSlide key={i}>
                                    <div className="relative aspect-[16/9] max-h-[58vh] w-full rounded-xl border border-solid border-border bg-white shadow-xl">
                                        <Image
                                            src={`/images/details/${v}.png`}
                                            layout="fill"
                                            fill
                                            style={{ objectFit: "contain" }}
                                            alt={`img-${v}-${i}`}
                                            className="rounded-xl"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                    {data.mobile && (
                        <Swiper
                            loop={true}
                            spaceBetween={0}
                            // pagination={{ clickable: true }}
                            slidesPerView={1}
                            navigation={true}
                            breakpoints={{
                                720: {
                                    slidesPerView: 5,
                                    spaceBetween: 30,
                                    pagination: true,
                                },
                            }}
                        >
                            {data.mobile.map((v, i) => (
                                <SwiperSlide key={i}>
                                    <div className="relative aspect-[9/16] max-h-[58vh] w-full rounded-xl border border-solid border-border bg-white shadow-xl">
                                        <Image
                                            src={`/images/details/${v}.png`}
                                            layout="fill"
                                            fill
                                            style={{ objectFit: "contain" }}
                                            alt={`img-${v}-${i}`}
                                            className="rounded-xl"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
                <div className="font-normal leading-relaxed text-gray-800 xl:columns-2 xl:text-lg">{data.details}</div>
            </div>
            <ClickMe />
            <RailText />
        </>
    );
};

export default Detail;
