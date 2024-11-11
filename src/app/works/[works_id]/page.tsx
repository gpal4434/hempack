import Detail from "@/components/works/Detail";
import { data } from "@/lib/data";

export default async function Page({ params }) {
    console.log(params);
    const { works_id } = await params;
    const workData = data.find((item) => item.key === Number(works_id));
    console.log(workData);
    return (
        <>
            <Detail data={workData} />
        </>
    );
}
