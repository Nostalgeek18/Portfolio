import { useContext } from 'react';
import { AppContext } from '../App';
 
 function Home({socialsData}) {

  const { t } = useContext(AppContext) 

  return  (
    <section className="home-hero" id="home">
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
    </section>
  )
}

function HomeTitle({ name }) {

  const { t } = useContext(AppContext) 

  return (
    <h1 className="heading-primary">{t('home.title', { name })}</h1>
  )
}

function HomeHeroInfo({ skills }) {

  const { t } = useContext(AppContext);

  const SPACE = " "

  // Adaptive appropriate joiner
  const joiner = t('jonction.and');

  // Join the skills using a comma
  const commaJoinedSkills = skills.slice(0, -1).join(', ');

  // Combine the comma-joined skills with the last skill using 'and'
  const fullLabel = t('home.description') + commaJoinedSkills + SPACE + joiner + SPACE + skills[skills.length - 1] + '.';

  return (
    <div className="home-hero__info">
      <p className="text-primary">
        {fullLabel}
      </p>
    </div>
  );
}

function HomeContent({children}) {
  return (
    <div className="home-hero__content">
      {children}
    </div>
  )
}

function HomeCta({hrefLink, children}) {
  return (
    <div className="home-hero__cta">
      <a href={hrefLink} className="btn btn--bg">{children}</a>
    </div>
  )
}

function HomeBottomWidget() {
  return (
     <div className="home-hero__mouse-scroll-cont">
       <div className="mouse"></div>
     </div>
  )
}

function HeroSocials({children}) {
  return (
    <div className="home-hero__socials">
      {children}
    </div>
  )
}

function HeroSocial({social}) {
  return (
      <div className="home-hero__social">
      <a href={social.link} className="home-hero__social-icon-link" target="_blank">
        <img
          src={social.srcIcon}
          alt="icon"
          className="home-hero__social-icon"
        />
      </a>
    </div>
  )
}

export { Home, HeroSocials, HeroSocial, HomeCta, HomeContent, HomeBottomWidget, HomeTitle, HomeHeroInfo }