import Cta from "./cta.jsx";
import Feature from "./Feature.jsx";
import Hero from "./firstpage.jsx";
import Testimonial from "./testimonial.jsx";
import Footer from "../Layout/footer.jsx";
import MainNavbar from "../Layout/mainNavbar.jsx";
import Loading from "../Miscellaneous/Loading.jsx";
import { useEffect, useState } from "react";
export default function Home() {
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 100);
  }, [])
  
  if(loading){
    return <Loading/>
  }

  return (
    <>
      <div className="justify-center">
        <MainNavbar/>
        <Hero />
        <Feature />
        <Testimonial />
        <Cta />
        <Footer />
      </div>
    </>
  )
}