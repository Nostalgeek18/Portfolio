//Components to store ALL single Projects
import Project from "./Project"
import { AppContext } from "../App"
import { useContext } from "react"

export default function Projects () {

    const { t } = useContext(AppContext)

    return (
        <section id="projects" className="projects sec-pad">
        <div className="main-container">
            <h2 className="heading heading-sec heading-sec__mb-bg">
            <span className="heading-sec__main">{t('projects.title')}</span>
            <span className="heading-sec__sub">
                {t('projects.description')}
            </span>
            </h2>

            <div className="projects__content">
            <Project 
                title={t('projects.projectOne.title')}
                description={t('projects.projectOne.description')}
                hrefLink="/projects"
                srcImg="./src/assets/img/quizzImg.png"
            />

            <Project 
                title={t('projects.projectTwo.title')}
                description={t('projects.projectTwo.description')}
                hrefLink="./project-2.html"
                srcImg="./src/assets/img/basicSite.png"
            />
            <Project 
                title={t('projects.projectThree.title')}
                description={t('projects.projectThree.description')}
                srcImg="./src/assets/img/passwordGenerator.png"
            />
            </div>
        </div>
        </section>
    )
}