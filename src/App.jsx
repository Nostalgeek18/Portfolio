import { useState, createContext, useContext, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header, Logo, Navigation, NavigationLink, HamburgerMenu, SmallMenu } from './components/Header';
import Footer from './components/Footer/index'
import Projects from './components/Projects'
import { About }  from './components/About'
import { Contact, MainContainer, MainInfos , ContactHeading, ContactDescription} from './components/Contact'
import {Home, HeroSocials, HeroSocial, HomeContent, HomeCta, HomeBottomWidget, HomeTitle, HomeHeroInfo} from './components/Home'
import { LanguageSwitch } from './components/atoms/LanguageSelector';

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
      <AppContext.Provider value={{activeLanguage, switchLanguage, t}}>
        <Header>
          <Logo 
            src="./src/assets/img/avatar4.png"
            alt="Nazim Mouzaï Logo Image">
              Nazim Mouzaï
            </Logo> 
          <Navigation>
              <NavigationLink linkData={headerLinks[0]}> {t(`header.${headerLinks[0].text}`)} </NavigationLink>
              <NavigationLink linkData={headerLinks[1]}> {t(`header.${headerLinks[1].text}`)} </NavigationLink>
              <NavigationLink linkData={headerLinks[2]}> {t(`header.${headerLinks[2].text}`)} </NavigationLink>
              <NavigationLink linkData={headerLinks[3]}> {t(`header.${headerLinks[3].text}`)} </NavigationLink>
              <LanguageSwitch onClick={switchLanguage}></LanguageSwitch>
          </Navigation>
          <HamburgerMenu isActive={menuActive} onClick={toggleMenu} />
          <SmallMenu isActive={menuActive} links={headerLinks} />
        </Header>

      <Home>
          <HomeContent>
            <HomeTitle name="Nazim Mouzaï"/>
            <HomeHeroInfo skills={['HTML', 'CSS', 'JavaScript', 'PHP', 'TypeScript', 'React']}/>
            <HomeCta hrefLink="./#projects"> {t('home.cta')} </HomeCta>
          </HomeContent>
          <HomeBottomWidget/>
          <HeroSocials>
              <HeroSocial social={socialsData.linkedin}/>
              <HeroSocial social={socialsData.github}/>
          </HeroSocials>
      </Home> 

      <Projects />
      <About/>
        
      <Contact>
          <MainContainer>
            <MainInfos>
              <ContactHeading>{t('contact.title')}</ContactHeading>
              <ContactDescription email="mouzai.n@yahoo.com"/>
            </MainInfos>
          </MainContainer>
      </Contact>

      <Footer socials={socialsData} name="Nazim Mouzaï"/>
    </AppContext.Provider>
    </>
  )
}

export default App
export { AppContext }