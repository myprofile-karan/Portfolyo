import React, { useEffect, useState } from 'react'
import "./App.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ChangeTheme from './components/ChangeTheme';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Timeline from './components/Timeline';

const App = () => {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState("black");
  useEffect(()=> {
    async function fetchData () {
      try {
        const res = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
        const result = await res.json();
        console.log(result.user);
        setData(result.user)
      } catch (error) {
        console.log("ERROR:",error);
      }
    }
    fetchData();
  }, [])

  const {about, services, skills, projects, timeline, testimonials, social_handles } = data
  return (
    <div theme={theme} className='app relative overflow-hidden'>
      <Hero about={about} />
      <About data={data} />
      <Services services={services} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Timeline timeline={timeline} />
      <Testimonials testimonials={testimonials} />
      <Contact about={about} /> 
      <Footer social={social_handles} />
      <ChangeTheme theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
