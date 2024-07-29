import Image from "next/image";
import First from "./components/First";
import About from "./components/About";
import Project from "./components/Project";
import Testominal from "./components/Testominal";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog"
import Footer from "./components/Footer";
import Second from "./components/Second";

export default function Home() {
  return (
    <div>
      <First />
      <Second />
      <About />
      <Project />
      <Testominal />
      <Pricing />
      <Blog />
      <Footer />
    </div>
  );
}
