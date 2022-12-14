import { ArrowDownIcon } from './icons/arrowDownIcon'
import { ArrowUpIcon } from './icons/arrowUpIcon'
import { useEffect, useRef, useState } from 'react'

const CompanySection = (props) => {
    const { companyInfo } = props
    const [expand, setExpand] = useState(false)
    const detailsRef = useRef(null)

    useEffect(() => {
        if (expand) {
            detailsRef.current.classList.add("h-52")
            detailsRef.current.classList.remove("h-0")
        }
        else {
            detailsRef.current.classList.add("h-0")
            detailsRef.current.classList.remove("h-52")
        }
    }, [expand])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-items-center p-2 space-y-2 md:space-y-0">
            <picture>
                <source srcSet={companyInfo.companyLogo} type="image/jpg" />
                <img src={companyInfo.companyLogo} className="rounded-full w-24 md:w-36" alt={`${companyInfo.companyName} logo`} />
            </picture>
            <div className="flex flex-col justify-center items-center p-2 col-span-2 relative">
                <h1 className="text-4xl font-semibold" id="company-name">{companyInfo.companyName}</h1>
                <span className="italic text-zinc-500" id="role">{companyInfo.role} | {companyInfo.workingDateRange}</span>
                <p className="text-zinc-900 font-semibold" id="description">
                    {companyInfo.description}
                </p>
                <button className="rounded-full shadow-xl border-2 border-blue-400 hover:bg-slate-300  my-5" onClick={() => { setExpand(!expand) }}> {/* animate-bounce */}
                    {expand ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </button>
                <div className='h-0 flex flex-col relative overflow-hidden transition-all duration-500 ease-out' ref={detailsRef}>
                    <label htmlFor="techList" className='text-xl font-bold'>Languages and Technology Stack</label>
                    <ol id='techList' className='p-5 list-square marker:text-blue-500'>
                        {companyInfo?.technologyStack?.map((technology) => {
                            return (<li key={technology}>{technology}</li>)
                        })}
                    </ol>
                </div>

            </div>
        </div>
    );
}

export default CompanySection;