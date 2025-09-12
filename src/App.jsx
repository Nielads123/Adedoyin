import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import BodyOne from './BodyOne'
import Navbar from './navbar'
import Brand from './Brand'
import Service from "./Services"
import Meet from './Meet'
import Story from "./Story"
import Slider from './Slider'
import Footer from './Footer'
import Contact from './Contact'
import Footertwo from './Footertwo'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration
      easing: "ease-out-cubic",
      once: false,      // 👈 ensures animation happens every scroll
    })
  }, [])

  return (
    <>
      <Navbar/>   
      <BodyOne/>
      <Brand/>
      <Service/>
      <Meet/>
      <Story/>
      <Slider/>
      <Footer/>
      <Contact/>
      <Footertwo/>
    </>
  )
}
