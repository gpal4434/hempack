import { prompt } from "@/app/fonts";
import Image from "next/image";

interface DataValueProps {
    src: string;
    key: number;
    title: string;
    skill: [];
    desc: string;
    date: string;
    color: string;
    flex: string;
}
interface DataProps {
    data: DataValueProps;
}

const Item = ({ data }: DataProps) => {
    return (
        <>
            {/* {data.map((item: DataValueProps) => ( */}
            <div key={data.key} className={`flex-1 flex-col gap-2 rounded-3xl bg-white shadow-2xl`}>
                <div className="p-9">
                    <h3 className={`text-4xl font-bold text-text ${prompt.className}`}>{data.title}</h3>
                    <div className="flex gap-1">
                        {data.skill.map((v, i) => (
                            <span key={i} className="rounded-full bg-surface">
                                {v}
                            </span>
                        ))}
                    </div>
                    <h5>{data.desc}</h5>
                    <h5>{data.date}</h5>
                </div>
                <div className="flex justify-center p-10">
                    <Image src={data.src} alt={`work_thumb_${data.key}`} />
                </div>
            </div>
            {/* ))} */}
        </>
    );
};

export default Item;
