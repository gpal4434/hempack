"use client";

import { useState } from "react";
import Intro from "./Intro";

const ClickMe = () => {
    const [hover, setHover] = useState(false);

    return (
        <>
            <div
                className={`fixed bottom-5 right-5 z-[50] flex h-60 w-60 cursor-pointer flex-col items-center justify-end gap-2 transition-all duration-[30ms]`}
                title="introduce"
            >
                <span className="text-lg text-primary">Click Me!</span>
                <video
                    width={200}
                    height={200}
                    preload="true"
                    style={{ borderRadius: 9999 }}
                    autoPlay
                    loop
                    muted
                    className="h-full w-full"
                    onClick={() => setHover(true)}
                >
                    <source src="/my_emoji4.mp4" type="video/mp4" />
                </video>
            </div>
            {hover && <Intro hover={hover} setHover={setHover} />}
        </>
    );
};

export default ClickMe;
