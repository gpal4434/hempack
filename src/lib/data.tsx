export interface DataValueProps {
    src: string;
    key: number;
    title: string;
    skill: string[];
    desc: string;
    date: string;
    pc?: string[];
    mobile?: string[];
}
export const data: DataValueProps[] = [
    {
        src: "spolive",
        key: 1,
        title: "SPOLIVE",
        skill: ["HTML", "CSS"],
        desc: "Vue2.0 로 제작된 승부예측 베팅 사이트로 기존 운영되고 있던 사이트를 유지보수 및 추가 기능 퍼블리싱 100% 참여함",
        date: "2022.06 ~",
        pc: ["spolive01", "spolive02", "spolive03", "spolive04", "spolive05"],
        mobile: ["spolivem01", "spolivem02", "spolivem03"],
    },

    {
        src: "next",
        key: 2,
        title: "SPOLIVE Renewal",
        skill: ["NEXT.js", "Vanilla Extract", "Typescript"],
        desc: "Vue2.0으로 제작된 기존 스포라이브를 next.js로 리뉴얼하면서, 디자인 개선하여 좀 더 친근하고 편한 UI/UX를 만들었으며 본격적으로 프론트엔드 개발에 참여함",
        date: "2024.08 ~",
    },

    {
        src: "global",
        key: 3,
        title: "BETNEX",
        skill: ["NEXT.js", "Vanilla Extract", "React.js", "Typescript"],
        desc: "VUE2.js로 제작된 기존 스포라이브를 next.js로 바꿈",
        date: "2023.10 ~ 2024.04",
    },
    {
        src: "gift",
        key: 4,
        title: "FURSYS MORE",
        skill: ["JavaScript", "HTML", "CSS"],
        desc: "SIDE PROJECT로 진행했던 상품권 매입 사이트로 Vanilla Javascript로 이벤트 처리, 모달 기능 구현 등 퍼블리싱 100% 참여함",
        date: "2024.08",
    },
    {
        src: "native",
        key: 5,
        title: "SPOLIVE App",
        skill: ["React Native", "Vanilla Extract"],
        desc: "기본 모바일 웹이었던 스포라이브를 React Native로 App 구현하는데 UI 개발 100%와 페이지 개발 30% 기여함",
        date: "2024.01 ~ 2024.05",
    },
    {
        src: "china",
        key: 6,
        title: "Let's Go China",
        skill: ["HTML", "CSS", "jQeury"],
        desc: "순수교육의 렛츠고 시리즈 중 하나로 새로 런칭한 교육 서비스로 퍼블리싱 100% 참여함",
        date: "2020.09 ~ 2020.10",
        pc: ["china"],
    },
    {
        src: "admin",
        key: 7,
        title: "VZON Admin",
        skill: ["HTML", "CSS", "jQeury"],
        desc: "밴대리점 통합 시스템 VZON 솔루션의 어드민 페이지 퍼블리싱 100% 참여함",
        date: "2019.07 ~ 2019.09",
        pc: ["admin01", "admin02", "admin03", "admin04"],
    },
    {
        src: "vzon",
        key: 8,
        title: "VZON",
        skill: ["HTML", "CSS", "jQeury"],
        desc: "밴대리점 통합 시스템 VZON 솔루션 PC와 MOBILE 퍼블리싱 100% 참여함",
        date: "2018.05 ~ 2019.12",
        pc: ["vzon01", "vzon02", "vzon03", "vzon04", "vzon05"],
        mobile: ["vzonm01", "vzonm02", "vzon,03", "vzonm04"],
    },
];
