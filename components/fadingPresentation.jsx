import {useState, useRef} from 'react'

function FadingPresentation() {
    const [render, setRender] = useState(true)
    const ref = useRef(null)

    return render ?
        (
            <div className='flex flex-col justify-center h-screen align-middle items-center text-5xl animate-fadeout p-2 space-y-2' ref={ref} onAnimationEnd = {e => {
                if (e.target === e.currentTarget) {
                    setRender(false)
                }
            }}>
                <h1>Hi, I am Matteo.</h1>
                <h3 className='text-xl'>a fullstack software engineer</h3>
            </div>
        ) : <></>
}

export default FadingPresentation