import { useState, createContext, useContext, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header, Logo, Navigation, NavigationLink, HamburgerMenu, SmallMenu } from './components/Header';
import { Footer, FooterSocials, FooterInfos, SocialLink, TitleInfos , DescriptionInfos, SocialInfos, SocialsWrapper } from './components/Footer'
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
            alt="Nazim Mouzai Logo Image">
              Bob Marley Jr.
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
            <HomeHeroInfo skills={['HTML', 'CSS', 'JavaScript']}/>
            <HomeCta hrefLink="./#projects">See my projects</HomeCta>
          </HomeContent>
          <HomeBottomWidget/>
          <HeroSocials>
              <HeroSocial social={socialsData.linkedin}/>
              <HeroSocial social={socialsData.github}/>
          </HeroSocials>
      </Home> 
      <Projects />

      <About>
        <About.Heading>
          <About.MainTitle>About me</About.MainTitle>
          <About.MainDescription>
            I'm a frontend developer based out of London, UK. 
            I love building apps that solve real-world problems, and that are delightful to use.
            My specialities include TypeScript, React JS, Tailwind CSS, and Styled Components.
          </About.MainDescription>
        </About.Heading>
        <About.Content>
          <About.MainContent>
            <About.ContentTitle>Get to know me !</About.ContentTitle>
            <About.ContactDetails>
              My background is in teaching and marketing. I have a bachelors degree in English from Kings College. When I'm not coding, I take care of my five adorable cats.
            </About.ContactDetails>
          </About.MainContent>
          <About.ContentSkills>
            <About.TitleSkills>My Skills</About.TitleSkills>
            <About.SkillsWrapper>
              <About.Skill>HTML</About.Skill>
              <About.Skill>CSS</About.Skill>
              <About.Skill>JavaScript</About.Skill>
              <About.Skill>React</About.Skill>
              <About.Skill>TypeScript</About.Skill>
              <About.Skill>PHP</About.Skill>
              <About.Skill>SQL</About.Skill>
              <About.Skill>Git</About.Skill>
              <About.Skill>Figma</About.Skill>
            </About.SkillsWrapper>
          </About.ContentSkills>
        </About.Content>
        
      </About>

      <Contact>
          <MainContainer>
            <MainInfos>
              <ContactHeading>{t('footer.title')}</ContactHeading>
              <ContactDescription>
                 {t('footer.text')}
                </ContactDescription>
            </MainInfos>
          </MainContainer>
      </Contact>

      <Footer>
          <FooterInfos>
            <TitleInfos>Bob Marley JR</TitleInfos>
            <DescriptionInfos>
                Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
                tempora explicabo quae quod deserunt
            </DescriptionInfos>
          </FooterInfos>
          <FooterSocials>
            <SocialInfos>Socials</SocialInfos>
            <SocialsWrapper>
              <SocialLink social={socialsData.linkedin}/>
              <SocialLink social={socialsData.github}/>
            </SocialsWrapper>
          </FooterSocials>
      </Footer>
    </AppContext.Provider>
    </>
  )
}

export default App
export { AppContext }