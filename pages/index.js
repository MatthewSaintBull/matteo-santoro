import Head from 'next/head'
import FadingPresentation from '../components/fadingPresentation'
import CurriculumComponent from '../components/curriculumComponent'
import FooterComponent from '../components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
{/*       <FadingPresentation />
 */}      <main className='w-full h-full'>
        <div className='max-w-7xl mx-auto'>
          <CurriculumComponent />
        </div>
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  )
}
