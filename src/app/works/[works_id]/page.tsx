export default async function Page({ params }) {
    console.log(params);
    const { works_id } = await params;
    return <div>{works_id} 페이지!!!</div>;
}
