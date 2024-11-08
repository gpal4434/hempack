"use client";

const Works = () => {
    return (
        <div className="flex">
            <div className="sticky flex w-[20vw] items-center border-r border-solid">
                <div className="flex flex-col gap-3 text-3xl">
                    <span>저의</span>
                    <span>
                        <span className="font-bold">포트폴리오</span>를
                    </span>
                    <span>소개합니다.</span>
                </div>
            </div>
            <div className="flex flex-1 flex-col gap-10">
                <div>
                    <div className="h-96 w-96 bg-yellow-950"></div>
                </div>
                <div className="flex flex-1 justify-end">
                    <div className="h-96 w-96 bg-yellow-950"></div>
                </div>
                <div>
                    <div className="h-96 w-96 bg-yellow-950"></div>
                </div>
                <div className="flex flex-1 justify-end">
                    <div className="h-96 w-96 bg-yellow-950"></div>
                </div>
                <div>
                    <div className="h-96 w-96 bg-yellow-950"></div>
                </div>
                <div className="flex flex-1 justify-end">
                    <div className="h-96 w-96 bg-yellow-950"></div>
                </div>
            </div>
        </div>
    );
};

export default Works;
