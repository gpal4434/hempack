"use client";

import { data } from "@/lib/data";
import Item from "./Item";
const isMobile = typeof window !== "undefined" && window.innerWidth < 720;

const Works = () => {
    return (
        <>
            <div className="relative min-h-[1000px] after:clear-both after:block xl:pt-52">
                <div className="flex w-full flex-col gap-10 p-5 lg:w-[calc(100%-30vw)] xl:float-left xl:p-[2vw]">
                    <div className="flex flex-wrap gap-[3vw] sm:flex-col">
                        {data.map((v) => (
                            <Item key={v.key} data={v} />
                        ))}
                    </div>
                </div>
                {!isMobile && (
                    <div className="sticky top-1/2 float-right mt-[50vh] w-[30vw] -translate-y-1/2">
                        <div className="flex justify-end pr-10">
                            <div className="flex flex-col gap-3 text-right text-5xl">
                                <span>진행했던</span>
                                <span>
                                    <span className="font-bold"> 👩🏻‍💻프로젝트</span>들을
                                </span>
                                <span>소개할게요.</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Works;
