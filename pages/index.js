import Head from 'next/head'
import FadingPresentation from '../components/fadingPresentation'
import CurriculumComponent from '../components/curriculumComponent'
import FooterComponent from '../components/footer'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const mainContainer = useRef(null)
  const fadingRef = useRef(null)
  const [screenSize, setScreenSize] = useState(false)

  useEffect(() => {
    if (mainContainer?.current?.clientHeight > 30) {
      setScreenSize(true)
    }
  }, [fadingRef])

  return (
    <div>
      <Head>
        <title>Matteo Santoro</title>
        <meta name="description" content="Matteo Santoro CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-full' ref={mainContainer}>
        <FadingPresentation ref={fadingRef} />
        {screenSize && <div className='max-w-7xl mx-auto overflow-auto' >
          <CurriculumComponent />
        </div>}
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  )
}