import { AppContext } from "../../App"
import { useContext } from "react"
import * as styled from './style'

function About() {

    const { t } = useContext(AppContext)

    return (
        <section id="about" className="about sec-pad">
            <div className="main-container">
            <Heading>
                <MainTitle>{t('about.title')}</MainTitle>
                <MainDescription>
                    {t('about.description')}
                </MainDescription>
                </Heading>
                <Content>
                <MainContent>
                    <ContentTitle>{t('about.contentTitle')}</ContentTitle>
                    <styled.AboutDetailsParagraph>
                          {t('about.paragraphOne')}
                     </styled.AboutDetailsParagraph>
                     <styled.AboutDetailsParagraph>
                          {t('about.paragraphTwo')}
                     </styled.AboutDetailsParagraph>
                </MainContent>
                <ContentSkills>
                    <TitleSkills>{t('about.titleSkills')}</TitleSkills>
                    <SkillsWrapper>
                    <Skill>HTML</Skill>
                    <Skill>CSS</Skill>
                    <Skill>JavaScript</Skill>
                    <Skill>React</Skill>
                    <Skill>TypeScript</Skill>
                    <Skill>PHP</Skill>
                    <Skill>SQL</Skill>
                    <Skill>Git</Skill>
                    <Skill>Figma</Skill>
                    <Skill>Agile</Skill>
                    <Skill>JQuery</Skill>
                    <Skill>Responsive</Skill>
                    </SkillsWrapper>
                </ContentSkills>
            </Content>
            </div>
        </section>
    )
}

function ContentTitle({children}) {
    return (
        <h3 className="about__content-title">{children}</h3>
    )
}


function Content({children}) {
    return (
        <div className="about__content">
            {children}
        </div>
    )
}

function ContactCTA({hrefContact, children}) {
    return (
        <a href={hrefContact} className="btn btn--med btn--theme dynamicBgClr">
            {children}
        </a>
    )
}

function ContentSkills({children}) {
    return (
        <div className="about__content-skills">
            {children}
         </div>
    )
}

function TitleSkills({children}) {
    return (
        <h3 className="about__content-title">{children}</h3>
    )
}

function SkillsWrapper({children}) {
    return (
        <div className="skills">
            {children}
        </div>
    )
}

function Skill({children}) {
    return (
        <div className="skills__skill">
            {children}
        </div>
    )
}

function Heading({children}) {
    return (
        <h2 className="heading heading-sec heading-sec__mb-med">
            {children}
        </h2>
    )
}

function MainTitle({children}) {
    return (
        <span className="heading-sec__main">{children}</span>
    )
}

function MainContent({children}) {
    return (
        <div className="about__content-main">
            {children}
        </div>
    )
}

function MainDescription({children}) {
    return (
        <span className="heading-sec__sub">
        <p>
            {children}
        </p>
    </span>
    )
}


export { About } 