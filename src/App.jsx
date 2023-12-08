import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header, Logo, Navigation, HamburgerMenu, SmallMenu } from './components/Header';
import Footer from './components/Footer'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import {Home, HeroSocials, HeroSocial, HomeContent, HomeCta, HomeBottomWidget, HomeTitle, HomeHeroInfo} from './components/Home'

function App() {

  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prevMenuActive) => !prevMenuActive);
  };


  const headerLinks = [
    { id: 1, url: './index.html', text: 'Home' },
    { id: 2, url: './index.html#projects', text: 'Projects' },
    { id: 3, url: './index.html#about', text: 'About' },
    { id: 4, url: './index.html#contact', text: 'Contact' },
  ];

  const socialsData = {
    linkedin : {
      link : "https://www.linkedin.com/in/nazim-mouza%C3%AF-647a29211/",
      srcIcon : "./src/assets/img/linkedin.png"
    },
    github : {
      link : "https://github.com/Nostalgeek18",
      srcIcon : "./src/assets/img/github-icon.png"
    }
  }


  return (
    <>
      <Header>
        <Logo 
          src="./src/assets/img/avatar4.png"
          alt="Nazim Mouzai Logo Image">
            Bob Marley Jr.
          </Logo> 
        <Navigation links={headerLinks} />
        <HamburgerMenu isActive={menuActive} onClick={toggleMenu} />
        <SmallMenu isActive={menuActive} links={headerLinks} />
      </Header>
    <Home>
        <HomeContent>
          <HomeTitle>Hey, my name is Bob Marley</HomeTitle>
          <HomeHeroInfo>
             I am a passionate frontend developer based in London, UK. My specialities are <strong>React JS</strong> and
            <strong>Tailwind CSS</strong>,and I love building apps that are delightful to use.
          </HomeHeroInfo>
          <HomeCta>See my projects</HomeCta>
        </HomeContent>
        <HomeBottomWidget/>
        <HeroSocials>
            <HeroSocial social={socialsData.linkedin}/>
            <HeroSocial social={socialsData.github}/>
        </HeroSocials>
    </Home> 
    <Projects />
    <About />
    <Contact />
    <Footer />
    </>
  )
}

export default App
