import { prompt } from "@/app/fonts";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const RailText = () => {
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (textRef.current) {
            const text = textRef.current;
            const clone = text.cloneNode(true) as HTMLHeadingElement; // 텍스트 복제
            text.parentNode?.appendChild(clone); // 복제한 텍스트를 원본 뒤에 추가
            const totalWidth = text.offsetWidth; // 텍스트의 전체 너비

            const animateText = (textElement: HTMLElement) => {
                gsap.fromTo(
                    textElement,
                    {
                        x: 0,
                    },
                    {
                        x: `-=${totalWidth}`, // 텍스트 너비만큼 왼쪽으로 이동
                        duration: totalWidth / 50, // 속도 (너비에 비례)
                        ease: "linear",
                        repeat: -1,
                        modifiers: {
                            x: gsap.utils.unitize((x) => {
                                const xValue = parseFloat(x);
                                return xValue % totalWidth; // 텍스트가 끝나면 처음으로 돌아가도록
                            }),
                        },
                    }
                );
            };

            animateText(text);
            animateText(clone);
        }
    }, []);

    return (
        <div className="rail fixed bottom-24 flex gap-10 overflow-hidden">
            <h4
                className={`whitespace-nowrap text-9xl ${prompt.className} font-bold uppercase opacity-[0.03]`}
                ref={textRef}
            >
                Flexible Developer HYEMI
            </h4>
        </div>
    );
};

export default RailText;
