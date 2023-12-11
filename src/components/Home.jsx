import { useContext } from 'react';
import App, { AppContext } from '../App';
 
 function Home({children}) {
  return  (
    <section className="home-hero">
     {children}
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

  const { t } = useContext(AppContext) 

  // Adaptive appropriate joiner
  const joiner = t('jonction.and')

   // Map skills to their translated counterparts
   const translatedSkills = skills.map((skill) => t(`skills.${skill}`));

  // Join the translated skills using a comma as the joiner
  const commaJoinedSkills = translatedSkills.slice(0, -1).join(', ');

  // Combine the comma-joined skills with the last skill using the appropriate joiner
  const fullLabel = t('home.description') + commaJoinedSkills + ` ${joiner} ` + translatedSkills.slice(-1);


  return (
    <div className="home-hero__info">
    <p className="text-primary">
      {fullLabel}
    </p>
  </div>
  )
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