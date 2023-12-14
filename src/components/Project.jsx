import { AppContext } from "../App"
import { useContext } from "react"
import { Link } from "react-router-dom"

export default function Project({title, description, id, srcImg}) {

    const { t } = useContext(AppContext)

    return (
        <>
            <div className="projects__row">
            <div className="projects__row-img-cont">
            <img
                src={srcImg}
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
            />
            </div>
            <div className="projects__row-content">
            <h3 className="projects__row-content-title">{title}</h3>
            <p className="projects__row-content-desc">
                {description}
            </p>
            <Link
                // href={hrefLink}
                to={`/projects/${id}`}
                className="btn btn--med btn--theme dynamicBgClr">{t('projects.cta')}
            </Link>
            </div>
        </div>
        </>
    )
}