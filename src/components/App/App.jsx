import "./App.css";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import Services from "../Services/Services.jsx";
import About from "../About/About.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";
import Financing from "../Financing/Financing.jsx";
import ServiceArea from "../ServiceArea/ServiceArea.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
import MobileActions from "../MobileActions/MobileActions.jsx";

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Financing />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <MobileActions />
    </div>
  );
}

export default App;
