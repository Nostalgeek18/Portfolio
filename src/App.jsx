import { useState, createContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'
import { Header, Logo, Navigation, NavigationLink, HamburgerMenu, SmallMenu } from './components/Header';
import Footer from './components/Footer/index'
import Projects from './components/Projects'
import { About }  from './components/About'
import { Contact, MainContainer, MainInfos , ContactHeading, ContactDescription} from './components/Contact'
import {Home, HeroSocials, HeroSocial, HomeContent, HomeCta, HomeBottomWidget, HomeTitle, HomeHeroInfo} from './components/Home'
import { LanguageSwitch } from './components/atoms/LanguageSwitch';
import { PersonnalProjects } from './pages/PersonnalProjects'
import Layout from "./components/Layout"

import './i18n';
import { useTranslation } from 'react-i18next';

const AppContext = createContext()

function App() {

  const {t, i18n } = useTranslation()
  const [menuActive, setMenuActive]         = useState(false);
  const [activeLanguage, setActiveLanguage] = useState("fr")

  useEffect(()=> {
    i18n.changeLanguage(activeLanguage) //Set to active language

  }, [activeLanguage])

  const toggleMenu = () => {
    setMenuActive((prevMenuActive) => !prevMenuActive);
  };

  function switchLanguage() {
    setActiveLanguage(oldValue => (
       oldValue == "fr" ? "en" : "fr"
    ))

  }

  const headerLinks = [
    { id: 1, url: './index.html', text: 'home' },
    { id: 2, url: './index.html#projects', text: 'projects' },
    { id: 3, url: './index.html#about', text: 'about' },
    { id: 4, url: './index.html#contact', text: 'contact' },
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
      <BrowserRouter>
      <AppContext.Provider value={{activeLanguage, switchLanguage, t}}>
        <Header headerLinks={headerLinks}/>
        <Home socialsData={socialsData}/>
        <Projects />
        <About/>
        <Contact email="mouzai.n@yahoo.com"/>
        <Footer socials={socialsData} name="Nazim Mouzaï"/>
    </AppContext.Provider>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/"/>
        <Route path="/projects" element={<PersonnalProjects/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
export { AppContext }