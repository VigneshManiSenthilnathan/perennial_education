import { useRef } from "react";
import "./team.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Founding consultant | Ean Tan",
    subtitle: "Economics",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Ean is a 43-pointer from ACS (Independent). He is an IB Economics Specialist who trained at elite IB Tuition Centres and has experience in Hong Kong, Shanghai, Beijing, Bangkok, London, U.S.A. With a 100% distinction rate for Economics IAs, Ean is well-regarded as a leading IA consultant in both Singapore and abroad.".replace("%", ),
    works: ["Notable Works:","1) The Science of Scoring – The practical guide to acing the IB", "2) IA Mastery – The secret behind a 7 for IAs!"],
  },
  {
    id: 2, 
    title: "Consultant | Shermaine See",
    subtitle: "Chemistry",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Shermaine is a 45-pointer from ACS (Independent) who was trained at an elite IB tuition centre. She’s an avid dog lover who is presently studying medicine at Lee Kong Chian School of Medicine where she has consistently placed on the Dean’s List. Shermaine has been offering IA consulting for close to 4 years and possesses one of the best track records in the industry.",
    works: ["Notable Works:","1) IA Mastery – The secret behind a 7 for IAs! - Editor"],
  },
  {
    id: 3, 
    title: "Consultant | Vignesh Mutthiah",
    subtitle: "Biology",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Vignesh is an ACS (Independent) Alumni who is presently studying medicine at Lee Kong Chian School of Medicine. He has been lauded by parents for his willingness and ability to salvage biology and chemistry IAs that school teachers and other tutors predicted were going to fail. Vignesh has been providing consulting since 2020 and has consistently delivered results.",
    works: ["Notable Works:","Proprietary Technique - The IA overhaul"],
  },

];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3>
                <p>{item.desc}</p>

                <ul>
                
                {item.works.map((work, index) => (
                    <li key={index}>{work}</li>
                ))}
                </ul>

            </motion.div>

            <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
            </div>

        </div>
      </div>
    </section>
  );
};

const About = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">       
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default About;