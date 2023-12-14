import Projects from '../components/Projects'
import { About }  from '../components/About'
import { Contact } from '../components/Contact'
import { Home } from '../components/Home'

export default function Main() {
  
    return (
      <>
        <Home />
        <Projects />
        <About />
        <Contact email="mouzai.n@yahoo.com" />
      </>
    );
  }