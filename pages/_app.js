import 'component/styles/globals.css'
import Navbar from 'component/components/Navbar'
import Footer from 'component/components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps}/>
    <Footer/>
    </>
  
  ) 
}
