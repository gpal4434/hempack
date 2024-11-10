"use client";

import Item from "./Item";

const data = [
    {
        src: "spolive",
        key: 1,
        title: "SPOLIVE",
        skill: ["HTML", "CSS"],
        desc: "Vue2.0 로 제작된 승부예측 베팅 사이트로 기존 운영되고 있던 사이트를 유지보수 및 추가 기능 퍼블리싱 100% 참여함",
        date: "2022.06 ~",
        bg: "#FFF9CA",
    },

    {
        src: "next",
        key: 1234,
        title: "SPOLIVE Renewal",
        skill: ["NEXT.js", "Vanilla Extract", "Typescript"],
        desc: "Vue2.0으로 제작된 기존 스포라이브를 next.js로 리뉴얼하면서, 디자인 개선하여 좀 더 친근하고 편한 UI/UX를 만들었으며 본격적으로 프론트엔드 개발에 참여함",
        date: "2024.08 ~",
        bg: "#E7FFCA",
    },

    {
        src: "gift",
        key: 114,
        title: "FURSYS MORE",
        skill: ["JavaScript", "HTML", "CSS"],
        desc: "SIDE PROJECT로 진행했던 상품권 매입 사이트로 Vanilla Javascript로 이벤트 처리, 모달 기능 구현 등 100% 퍼블리싱 작업",
        date: "2024.08",
        bg: "#E4FCFF",
    },

    {
        src: "global",
        key: 124,
        title: "BETNEX",
        skill: ["NEXT.js", "Vanilla Extract", "React.js", "Typescript"],
        desc: "VUE2.js로 제작된 기존 스포라이브를 next.js로 바꿈",
        date: "2024.08 ~",
        bg: "#FFCAD7",
    },
];

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
