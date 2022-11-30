import Head from 'next/head'
import FadingPresentation from '../components/fadingPresentation'
import CurriculumComponent from '../components/curriculumComponent'
import FooterComponent from '../components/footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Matteo Santoro</title>
        <meta name="description" content="Matteo Santoro CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-full'>
        <FadingPresentation/>
        <div className='max-w-7xl mx-auto overflow-auto' >
          <CurriculumComponent />
        </div>
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  )
}
