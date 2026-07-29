import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Process from "./pages/Process/Process";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";

import "./styles/Global.css";

function App() {
  return (
    <>
      <Header />

      <Home />
      <About />
      <Services />
      <Process />
      <FAQ />
      <Contact />

      <Footer />
    </>
  );
}

export default App;