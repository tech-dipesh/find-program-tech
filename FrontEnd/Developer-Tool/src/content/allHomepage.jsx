import Cta from "./cta.jsx";
import Feature from "./Feature.jsx";
import Hero from "./hero.jsx";
import Testimonial from "./testimonial.jsx";
import Footer from "./footer.jsx";
export default function Home(){
  return (
    <>
    <div className="justify-center">
      <Hero/>
      <Feature/>
      <Testimonial/>
      <Cta/>
      <Footer/>
    </div>
    </>
  )
}