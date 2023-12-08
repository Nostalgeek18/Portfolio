export default function Contact ({children}) {
  return (
      <section id="contact" className="contact sec-pad dynamicBg">
      {children}
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

function ContactDescription({children}) {
return (
  <span className="heading-sec__sub heading-sec__sub--lt">
  {children}
</span>
)
}

export { Contact, MainContainer, MainInfos , ContactHeading, ContactDescription}