//Components to store ALL single Projects
import Project from "./Project"
import { AppContext } from "../App"
import { useContext } from "react"
import { getAllProjectsDatas } from "../tools/mix"


export default function Projects () {

    const { t } = useContext(AppContext)

    const projectsData = getAllProjectsDatas()

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
                {projectsData.map((project) => ( <Project 
                    key={project.id}
                    title={t(`projects.${project.tLabelName}.title`)}
                    description={t(`projects.${project.tLabelName}.description`)}
                    hrefLink="/projects"
                    srcImg={project.image}
                    id={project.id}
                />))}
            </div>
        </div>
        </section>
    )
}