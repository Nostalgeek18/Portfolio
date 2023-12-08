export default function Project({title, description, hrefLink, srcImg}) {

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
            <a
                href={hrefLink}
                className="btn btn--med btn--theme dynamicBgClr"
                >Learn more</a
            >
            </div>
        </div>
        </>
    )
}