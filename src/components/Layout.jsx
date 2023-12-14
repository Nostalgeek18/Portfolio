import { Outlet } from "react-router-dom";
import  Footer  from './Footer'
import { Header } from './Header'

export default function Layout() {

    const headerLinks = [
        { id: 1, anchor: '/#home', text: 'home' },
        { id: 2, anchor: '/#projects', text: 'projects' },
        { id: 3, anchor: '/#about', text: 'about' },
        { id: 4, anchor: '/#contact', text: 'contact' },
      ];

      const socialsData = {
        linkedin : {
          link : "https://www.linkedin.com/in/nazim-mouza%C3%AF-647a29211/",
          srcIcon : "/src/assets/img/linkedin.png"
        },
        github : {
          link : "https://github.com/Nostalgeek18",
          srcIcon : "/src/assets/img/github-icon.png"
        }
      }

    return (
        <>
            <Header headerLinks={headerLinks} />
            <Outlet/>
            <Footer socials={socialsData} name="Nazim Mouzai"/>
        </>
    )
}