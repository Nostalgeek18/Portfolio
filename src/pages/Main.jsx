import Projects from '../components/Projects'
import { About }  from '../components/About'
import { Contact } from '../components/Contact'
import { Home } from '../components/Home'
import { useRef } from 'react'

export default function Main() {
    // Create a ref for the section you want to scroll to
    const projectsSectionRef = useRef(null);
  
    // Function to handle smooth scrolling to the projects section
    const scrollToProjects = () => {
      if (projectsSectionRef.current) {
        projectsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    const socialsData = {
      linkedin: {
        link: "https://www.linkedin.com/in/nazim-mouza%C3%AF-647a29211/",
        srcIcon: "/src/assets/img/linkedin.png"
      },
      github: {
        link: "https://github.com/Nostalgeek18",
        srcIcon: "/src/assets/img/github-icon.png"
      }
    };
  
    return (
      <>
        <Home socialsData={socialsData} />
        <Projects />
        <About />
        <Contact email="mouzai.n@yahoo.com" />
      </>
    );
  }