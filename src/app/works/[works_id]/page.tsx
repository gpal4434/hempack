import Footer from "@/components/common/Footer";
import Detail from "@/components/works/Detail";
import { data } from "@/lib/data";

interface Params {
    works_id: string;
}

export default async function Page({ params }: { params: Params }) {
    const { works_id } = params;

    const workData = data.find((item) => item.key === Number(works_id));

    if (!workData) {
        return <div>데이터가 없습니다.</div>;
    }

    return (
        <>
            <Detail data={workData} />
            <Footer />
        </>
    );
}
