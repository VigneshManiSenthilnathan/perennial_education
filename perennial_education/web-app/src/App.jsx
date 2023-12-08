import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Test from "./Test";



import "./app.scss";


const App = () => {
  return <div>

    <section id="Home">
      <Navbar />
      <Hero />
    </section>

    <section id="About"><Parallax type="about"/></section>
    <section>About</section>
    <section id="Our Team"><Parallax type="team"/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact Us">Contact</section>
 
  </div>
};

export default App;
