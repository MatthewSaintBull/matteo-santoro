import { useEffect, useState } from "react";

const FooterComponent = () => {
    const [data, setData] = useState(null)
    const [loadingData, setLoadingData] = useState(false)

    useEffect(() => {
        async function fetchData() {
            setLoadingData(true)
            const response = await fetch('/api/contactInfo')
            const infos = await response.json()
            setData(infos)
            setLoadingData(false)
        }
        fetchData()
    },[])

    if (loadingData) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
    return (
        <div className='h-max bg-slate-300 grid grid-cols-1 sm:grid-cols-2 p-2 justify-items-center place-items-center'>
            <div>
                <section className="flex space-x-2">
                    <h7 className="font-semibold">Email: </h7><a href={`mailto:${data.email}`} className="text-zinc-700" target="_blank" rel="noreferrer">{data.email}</a>
                </section>
                <section className="flex space-x-2">
                    <h7 className="font-semibold">LinkedIn: </h7><a href={`https://linkedin.com${data.linkedin}`} className="text-zinc-700" target="_blank" rel="noreferrer">{data.linkedin}</a>
                </section>
            </div>
            <div>
                <section className="flex space-x-2">
                    <h7 className="font-semibold">Github: </h7><a href={`https://github.com/${data.github}`} className="text-zinc-700" target="_blank" rel="noreferrer">@{data.github}</a>
                </section>
                <section className="flex space-x-2">
                    <h7 className="font-semibold">Instagram: </h7><a href={`https://instagram.com/${data.instagram}`} className="text-zinc-700" target="_blank" rel="noreferrer">@{data.instagram}</a>
                </section>
            </div>
        </div>
    );
}

export default FooterComponent;
