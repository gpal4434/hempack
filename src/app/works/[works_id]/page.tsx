import Detail from "@/components/works/Detail";
import { data } from "@/lib/data";

interface Params {
    works_id: string;
}

export default async function Page({ params }: { params: Params }) {
    // params에서 works_id 추출
    const { works_id } = params;

    // works_id에 해당하는 데이터를 찾음
    const workData = data.find((item) => item.key === Number(works_id));

    if (!workData) {
        return <div>데이터가 없습니다.</div>; // 데이터가 없으면 안내 메시지 표시
    }

    return (
        <>
            <Detail data={workData} /> {/* 데이터가 있으면 Detail 컴포넌트 렌더링 */}
        </>
    );
}
