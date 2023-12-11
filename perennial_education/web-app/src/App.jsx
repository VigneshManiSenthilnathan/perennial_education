import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import About from "./components/about/About";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact2";
import Test from "./Test";



import "./app.scss";


const App = () => {
  return <div>

    <section id="Home">
      <Navbar />
      <Hero />
    </section>

    <section id="About">
      <Parallax type="about"/>
    </section>


    <About />


    <section id="Our Team">
      <Parallax type="team"/>
    </section>

    <Team />

    <section className="contact_class" id="Contact Us">
      <Contact />
    </section>
 
  </div>
};

export default App;
