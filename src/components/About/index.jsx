import { AppContext } from "../../App"
import { useContext } from "react"
import * as styled from './style'
import Skill from "../atoms/Skill"
import { getUserInfos } from '../../tools/mix.ts'

export default function About() {

    const { t } = useContext(AppContext)

    const { skills } = getUserInfos();

    return (
        <styled.AboutSection id="about">
            <styled.MainContainer>
            <Heading>
                <styled.MainTitle>{t('about.title')}</styled.MainTitle>
                <MainDescription>
                    {t('about.description')}
                </MainDescription>
                </Heading>
                <styled.Content>
                    <styled.MainContent>
                        <styled.Title>{t('about.contentTitle')}</styled.Title>
                        <styled.AboutDetailsParagraph>
                            {t('about.paragraphOne')}
                        </styled.AboutDetailsParagraph>
                        <styled.AboutDetailsParagraph>
                            {t('about.paragraphTwo')}
                        </styled.AboutDetailsParagraph>
                        <styled.AboutDetailsParagraph>
                            {t('about.paragraphThree')}
                        </styled.AboutDetailsParagraph>
                    </styled.MainContent>
                    <styled.ContentSkills>
                        <styled.TitleSkills>{t('about.titleSkills')}</styled.TitleSkills>
                        <styled.SkillsWrapper>
                            {skills.map((skill, index) => (
                                    <Skill key={index}>{skill}</Skill>
                                )
                            )}
                        </styled.SkillsWrapper>
                    </styled.ContentSkills>
                </styled.Content>
            </styled.MainContainer>
        </styled.AboutSection>
    )
}

function Heading({children}) {
    return (
        <h2 className="heading heading-sec heading-sec__mb-med">
            {children}
        </h2>
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
