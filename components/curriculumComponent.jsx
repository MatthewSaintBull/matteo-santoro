import { useEffect, useState } from "react";
import CompanySection from "./companySection";

const CurriculumComponent = () => {
    const [data, setData] = useState(null)
    const [loadingData, setLoadingData] = useState(false)
    useEffect(() => {
        async function fetchData() {
            setLoadingData(true)
            const response = await fetch('/api/jobs')
            const jobs = await response.json()
            setData(jobs)
            setLoadingData(false)
        }
        fetchData();
    }, [])

    if(loadingData) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
    return (
        <>
            <div className="flex justify-center p-5">
                <picture>
                    <source srcSet="/images/propic.jpg" type="image/jpg" />
                    <img src="/images/propic.jpg" className="w-64 rounded-full" alt="propic" />
                </picture>
            </div>
            <div id="working-experience" className="flex flex-col divide-y divide-zinc-400  font-sans">
                {
                    data?.jobs?.map((job)=>{
                        return <CompanySection companyInfo={job} key={job.companyName}/>
                    })
                }
                
            </div>

        </>
    );
}

export default CurriculumComponent;