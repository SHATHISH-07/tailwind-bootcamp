import "./App.css";
import CTAsection from "./Components/CTAsection";
import FeatureSec from "./Components/FeatureSec";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FeatureSec />
      <Testimonials />
      <CTAsection />
      <Footer />
    </>
  );
}

export default App;
