import { Link, useParams } from "react-router-dom"
import { AppContext } from "../../App";
import { useContext } from "react";
import { getProjectDatas } from "../../tools/mix.ts"
import  viteLogo  from '/public/vite.svg'
import reactLogo from '../../assets/react.svg'
import  Skill  from "../../components/atoms/Skill";
import * as styled from './style'
export default function PersonnalProjects() {

    const { t } = useContext(AppContext)

    //From this id, we'll only have to extract the datas related to that very id. From doing that, we avoid having a page for each project.
    const id = parseInt(useParams().id)

    const {tLabelName, image,skills,codeSource,isReact, ...datasProject} = getProjectDatas(id)

    
    return (
        <>
                <section className="project-cs-hero">
                    <div className="project-cs-hero__content">
                        <h1 className="heading-primary"> {t(`projects.${tLabelName}.title`)}</h1>
                        <div className="project-cs-hero__info">
                        <p className="text-primary">
                            {t(`projects.${tLabelName}.description`)}
                        </p>
                        </div>
                        <div className="project-cs-hero__cta">
                        <a href="#" className="btn btn--bg" target="_blank">{t(`projects.liveCTA`)}</a>
                        </div>
                    </div>
                    </section>
                    <section className="project-details">
                    <div className="main-container">
                        <div className="project-details__content">
                        <div className="project-details__showcase-img-cont">
                            <img
                            src={image}
                            alt="Project Image"
                            className="project-details__showcase-img"
                            />
                        </div>
                        <div className="project-details__content-main">
                            <div className="project-details__desc">
                            <h3 className="project-details__content-title">{t(`projects.overviewTitle`)}</h3>
                            <p className="project-details__desc-para">
                                {t(`projects.${tLabelName}.overview.firstParagraph`)}
                            </p>
                            <p className="project-details__desc-para">
                                {t(`projects.${tLabelName}.overview.secondParagraph`)}
                            </p>
                            <p className="project-details__desc-para">
                                {t(`projects.${tLabelName}.overview.thirdParagraph`)}
                            </p>
                            <p className="project-details__desc-para">
                                {t(`projects.${tLabelName}.overview.checkLinkParagraph`)}
                            </p>
                            </div>

                            <div className="project-details__tools-used">
                            <h3 className="project-details__content-title">{t('projects.toolsUsed')}</h3>
                            <div className="skills">
                                {skills.map((skill, index) => (<Skill key={index}>{skill}</Skill>))}
                            </div>
                            </div>
                            { isReact && 
                            <styled.LogosWrapper>
                                <a href="https://vitejs.dev" target="_blank">
                                <styled.Logo src={viteLogo} alt="Vite logo" />
                                </a>
                                <a href="https://react.dev" target="_blank">
                                <styled.Logo src={reactLogo} alt="React logo" />
                                </a>
                            </styled.LogosWrapper> 
                            }
                            <div className="project-details__links">
                            <h3 className="project-details__content-title">{t('projects.seeLive')}</h3>
                            <Link
                                to={codeSource}
                                className="btn btn--med btn--theme project-details__links-btn"
                                target="_blank"
                                >{t('projects.codeSource')}</Link>
                            <Link
                                to="/#projects"
                                className="btn btn--med btn--theme-inv project-details__links-btn"
                                >{t('projects.goBack')}
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
    </section>
        </>
    )
}