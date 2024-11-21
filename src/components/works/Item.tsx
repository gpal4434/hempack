import { prompt } from "@/app/fonts";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { DataValueProps } from "@/lib/data";

interface ItemProps {
    data: DataValueProps; // data 속성에 DataValueProps 타입을 지정
}

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Item = ({ data }: ItemProps) => {
    const router = useRouter();
    const workRef = useRef(null);

    useEffect(() => {
        const el = workRef.current;

        gsap.fromTo(
            el,
            { opacity: 0, y: 200, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: el,
                    start: "top 98%",
                    end: "top 50%",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <>
            {/* {data.map((item: DataValueProps) => ( */}
            <div
                ref={workRef}
                className={`group relative mb-24 flex flex-[1_0_40%] cursor-pointer flex-col gap-2 overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-200 ease-in-out even:-top-56`}
                onClick={() => router.push(`/works/${data.key}`)}
            >
                <div className="p-9">
                    <h5
                        className={`${prompt.className} text-right transition-all delay-100 duration-200 group-hover:text-white`}
                    >
                        {data.date}
                    </h5>
                    <div className="flex justify-center p-10">
                        <Image
                            src={`/images/thumb/${data.src}.png`}
                            className="object-fill"
                            width={200}
                            height={150}
                            alt={`work_thumb_${data.key}`}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3
                            className={`text-4xl font-bold text-text ${prompt.className} transition-all delay-100 duration-200 group-hover:text-white`}
                        >
                            {data.title}
                        </h3>

                        <h5 className="transition-all delay-100 duration-200 group-hover:text-white">{data.desc}</h5>

                        <div className="flex flex-wrap gap-1">
                            {data.skill.map((v, i) => (
                                <span key={i} className="rounded-full bg-[#eeeeee] px-4 py-1">
                                    {v}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute left-0 top-0 -z-10 mb-24 h-full w-full translate-y-full bg-[#d9d9d9] transition-all duration-200 ease-out group-hover:translate-y-0"></div>
                <div className="absolute left-0 top-0 -z-10 mb-24 h-full w-full translate-y-full bg-[#666] transition-all delay-100 duration-200 ease-out group-hover:translate-y-0"></div>
                <div
                    className={`absolute left-0 top-0 -z-10 mb-24 h-full w-full translate-y-full bg-[#333] transition-all delay-200 duration-200 ease-out group-hover:translate-y-0`}
                ></div>
            </div>
            {/* ))} */}
        </>
    );
};

export default Item;
