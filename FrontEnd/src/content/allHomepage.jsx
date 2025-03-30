import Cta from "./cta.jsx";
import Feature from "./Feature.jsx";
import Hero from "./hero.jsx";
import Testimonial from "./testimonial.jsx";
import Footer from "../Layout/footer.jsx";
import MainNavbar from "../Layout/mainNavbar.jsx";
export default function Home() {
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