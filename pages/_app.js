import NavbarComponent from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NavbarComponent/>
    <Component {...pageProps}/>
    </>
  )
}

export default MyApp
