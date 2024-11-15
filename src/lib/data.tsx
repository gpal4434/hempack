import { ReactNode } from "react";

export interface DataValueProps {
    src: string;
    key: number;
    title: string;
    skill: string[];
    desc: string;
    date: string;
    pc?: string[];
    mobile?: string[];
    details?: ReactNode;
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
        details: (
            <>
                스포라이브는 국내 유일의 합법 스포츠 베팅 승부 예측 게임 서비스로, 다양한 스포츠 경기에서 사용자들이
                안전하고 즐겁게 베팅을 즐길 수 있는 독창적인 환경을 제공합니다. Vue 2.0으로 구축된 이 플랫폼은 사용자
                경험을 중시한 UX와 최적화된 퍼포먼스를 기반으로 하여 현재까지 성공적인 운영을 이어가고 있습니다. 저는
                입사 후 이 서비스의 유지보수와 함께 새로운 페이지와 기능을 개발하며, 전체 웹 퍼블리싱을 책임지는 역할을
                맡아왔습니다. HTML, CSS(SCSS), JavaScript 등 웹 퍼블리셔로서의 주요 기술을 활용해 퍼블리싱 작업을
                최적화하고, 사용자 경험을 최우선으로 고려한 UI/UX 개선에 힘쓰고 있습니다. 이러한 과정에서 한정된 리소스
                내에서도 최대한의 효과를 낼 수 있는 전략을 모색하여 더 나은 서비스를 제공하고 있습니다.
                <br />
                스포라이브는 국내를 넘어 해외 시장으로의 확장을 꾀하며, 다양한 국가에 걸쳐 글로벌한 영향력을 넓혀가고
                있습니다. 이에 따라 저는 각 국가별로 스포라이브를 현지화한 서비스에서 퍼블리싱 작업을 맡았습니다. 대만의
                Quiz Quiz, 인도네시아의 redwinds88, 베트남의 all sports 등 여러 버전을 위해 현지화 작업을 수행하며 각
                시장에 맞는 UI와 기능을 기획하고 적용했습니다. 서비스의 본질은 유지하되, 각 국가의 사용자 특성과 니즈에
                맞춘 인터페이스를 구현하기 위해 노력하며, UI/UX 측면에서도 최대한의 편리함을 제공하고자 설계하였습니다.
                <br />
                <br />
                또란, 스포라이브 내에서 이벤트 배너와 같은 화려한 요소의 디자인을 제외한 UI/UX 다양한 인터페이스 요소에
                대해 사용자 경험을 향상시키는 작업 디자인을 직접 담당했습니다. 단순히 시각적인 디자인을 넘어 사용자들이
                보다 직관적이고 편리하게 사용할 수 있도록 기능적인 부분까지 고려하였습니다. 이를 통해 사용자 관점에서
                스포라이브가 최상의 인터페이스와 경험을 제공할 수 있도록 노력했고, 만족도와 사용성을 높이는 데
                기여했습니다.
                <br />
                <br />
                2024년 초반부터 기존 스포라이브 서비스를 한층 더 발전시키기 위해 리뉴얼 프로젝트를 시작했습니다. 리뉴얼
                작업은 기존의 UI/UX에서 발견된 불편함을 개선하고, 변화하는 사용자 트렌드와 니즈에 맞춘 새로운
                인터페이스를 제공하는 것을 목표로 하고 있습니다. 본격적으로 프론트엔드 개발을 시작하게 되었습니다.
                <br />
                다음 페이지에서는 새롭게 변화하는 스포라이브 리뉴얼 버전에 대해 구체적으로 소개하겠습니다.
            </>
        ),
    },

    {
        src: "next",
        key: 2,
        title: "SPOLIVE Renewal",
        skill: ["NEXT.js", "Vanilla Extract", "Typescript"],
        desc: "Vue2.0으로 제작된 기존 스포라이브를 next.js로 리뉴얼하면서, 디자인 개선하여 좀 더 친근하고 편한 UI/UX를 만들었으며 본격적으로 프론트엔드 개발에 참여함",
        date: "2024.08 ~",
        pc: ["next01", "next02", "next03", "next04", "next05"],
    },

    {
        src: "global",
        key: 3,
        title: "BETNEX",
        skill: ["NEXT.js", "Vanilla Extract", "React.js", "Typescript"],
        desc: "VUE2.js로 제작된 기존 스포라이브를 next.js로 바꿈",
        date: "2023.10 ~ 2024.04",
        pc: ["betnex01", "betnex01", "betnex03"],
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
