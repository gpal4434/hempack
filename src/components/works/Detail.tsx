import { prompt } from "@/app/fonts";
import { DataValueProps } from "@/lib/data";
import Image from "next/image";
import ClickMe from "../main/ClickMe";

const Detail = ({ data }: DataValueProps) => {
    console.log(data);
    return (
        <>
            <div className="mx-auto w-[1280px] p-28">
                <div className="flex gap-16">
                    <div className="relative flex h-72 w-96 justify-center rounded-xl border">
                        <Image
                            src={`/images/thumb/${data.src}.png`}
                            className="object-fill p-10"
                            fill
                            objectFit="contain"
                            alt={`work_thumb_${data.key}`}
                        />
                    </div>
                    <div className={`flex flex-col gap-2 ${prompt.className}`}>
                        <h5 className="text-gray-400">Project Details</h5>
                        <h3
                            className={`text-6xl font-bold text-text transition-all delay-100 duration-200 group-hover:text-white`}
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
            </div>
            <ClickMe />
        </>
    );
};

export default Detail;
