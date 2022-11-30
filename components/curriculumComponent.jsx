import { useEffect, useState, useRef } from "react";
import CompanySection from "./companySection";

const CurriculumComponent = () => {
    const [data, setData] = useState(null)
    const [bio, setBio] = useState(null)

    const menuRef = useRef(null)
    const [open, setOpen] = useState(false)

    const [loadingData, setLoadingData] = useState(false)

    useEffect(() => {
        async function fetchData() {
            setLoadingData(true)
            const jobsResponse = await fetch('/api/jobs')
            const jobs = await jobsResponse.json()
            setData(jobs)
            const bioResponse = await fetch('/api/resume')
            const bio = await bioResponse.json()
            setBio(bio)
            setLoadingData(false)
        }
        fetchData();
    }, [])

    useEffect(() => {
        if (menuRef.current) {
            if (open) {
                menuRef.current.classList.remove("h-0")
                menuRef.current.classList.add("h-32")
            } else {
                menuRef.current.classList.add("h-0")
                menuRef.current.classList.remove("h-32")
            }
        }
    }, [open])

    if (loadingData) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    const handleBio = () => {
        setOpen(!open)
    }
    return (
        <>
            <div className="flex flex-col items-center p-5">
                <picture>
                    <source srcSet="/images/propic.jpg" type="image/jpg" />
                    <img src="/images/propic.jpg" className="w-64 rounded-full" alt="propic" />
                </picture>
                <div className="flex flex-col py-5 w-full mt-2 justify-center">
                    <button className="font-extralight text-emerald-800  hover:font-normal md:hidden text-xl" onClick={handleBio}>{!open ? "Read Bio" : "Hide Bio" }</button>
                    <div className="h-0 overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-500 md:overflow-visible transition-all duration-500 ease-out" ref={menuRef}>
                        <p className="italic text-left">{bio.resume}</p>
                    </div>
                </div>
            </div>
            <div id="working-experience" className="flex flex-col divide-y divide-zinc-400  font-sans">
                {
                    data?.jobs?.map((job) => {
                        return <CompanySection companyInfo={job} key={job.companyName} />
                    })
                }

            </div>
        </>
    );
}

export default CurriculumComponent;