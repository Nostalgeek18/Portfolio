import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header, Logo, Navigation, NavigationLink, HamburgerMenu, SmallMenu } from './components/Header';
import { Footer, FooterSocials, FooterInfos, SocialLink, TitleInfos , DescriptionInfos, SocialInfos, SocialsWrapper } from './components/Footer'
import Projects from './components/Projects'
import { About }  from './components/About'
import { Contact, MainContainer, MainInfos , ContactHeading, ContactDescription} from './components/Contact'
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
        <Navigation>
            <NavigationLink linkData={headerLinks[0]}>{headerLinks[0].text}</NavigationLink>
            <NavigationLink linkData={headerLinks[1]}>{headerLinks[1].text}</NavigationLink>
            <NavigationLink linkData={headerLinks[2]}>{headerLinks[2].text}</NavigationLink>
            <NavigationLink linkData={headerLinks[3]}>{headerLinks[3].text}</NavigationLink>
        </Navigation>
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
            <ContactHeading>Contact me</ContactHeading>
            <ContactDescription>
            Please reach out if you have any questions! I'm happy to jump on a video call to brainstorm projects and ideas. 
            Send me an email at jane@example.com or call me directly at +123456789
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
    </>
  )
}

export default App
