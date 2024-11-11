"use client";

import { data } from "@/lib/data";
import Item from "./Item";

const Works = () => {
    return (
        <div className="relative min-h-[1000px] pt-52 after:clear-both after:block">
            <div className="float-left flex flex-col gap-10 p-[2vw]" style={{ width: "calc(100% - 30vw)" }}>
                <div className="flex flex-wrap gap-[3vw]">
                    {data.map((v) => (
                        <Item key={v.key} data={v} />
                    ))}
                </div>
            </div>
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
        </div>
    );
};

export default Works;
