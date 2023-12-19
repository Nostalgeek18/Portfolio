import { AppContext } from "../../App"
import { useContext } from "react"
import * as styled from './style'
import Skill from "../atoms/Skill"
import { getUserInfos } from '../../tools/mix.ts'

function About() {

    const { t } = useContext(AppContext)

    const { skills } = getUserInfos();

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
                     <styled.AboutDetailsParagraph>
                          {t('about.paragraphThree')}
                     </styled.AboutDetailsParagraph>
                </MainContent>
                <ContentSkills>
                    <TitleSkills>{t('about.titleSkills')}</TitleSkills>
                    <SkillsWrapper>
                        {skills.map((skill, index) => (
                                <Skill key={index}>{skill}</Skill>
                            )
                        )}
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