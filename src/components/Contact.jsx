import { AppContext } from "../App"
import { useContext } from "react"

export default function Contact ({email}) {

  const { t } = useContext(AppContext) 

  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <MainContainer>
        <MainInfos>
          <ContactHeading>{t('contact.title')}</ContactHeading>
          <ContactDescription email={email}/>
        </MainInfos>
      </MainContainer>
    </section>
  )
}

function MainContainer({children}) {
return (
  <div className="main-container">
    {children}
  </div>
)
}

function MainInfos({children}) {
return (
  <h2 className="heading heading-sec heading-sec__mb-med">
    {children}
  </h2>
)
}

function ContactHeading({children}) {
return (
  <span className="heading-sec__main heading-sec__main--lt">{children}</span>
)
}

function ContactDescription({email}) {

const { t } = useContext(AppContext) 

return (
  <span className="heading-sec__sub heading-sec__sub--lt">
    {t('contact.text', {email} )}
  </span>
)
}

export { Contact, MainContainer, MainInfos , ContactHeading, ContactDescription}