import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Info } from "./components/Info";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Testimonials />
      <Info />
      <Footer />
    </>
  );
}

export default App;
