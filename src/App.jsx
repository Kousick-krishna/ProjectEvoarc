import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Process from "./pages/Process/Process";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
          <Route
      path="/services/:serviceId"
      element={<ServiceDetails />} />
        <Route path="/process" element={<Process />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;