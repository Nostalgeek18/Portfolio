import { useState, createContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import PersonnalProjects  from './pages/PersonnalProjects'
import Layout from "./components/Layout"
import Main from './pages/Main'
import ScrollToHashElement from './tools/ScrollToHashElement'

import './i18n';
import { useTranslation } from 'react-i18next';

const AppContext = createContext()

function App() {

  const {t, i18n } = useTranslation()
  const initialLanguage = localStorage.getItem("language") !== undefined ? localStorage.getItem("language") : "fr"

  const [activeLanguage, setActiveLanguage] = useState(initialLanguage)

  useEffect(()=> {
    i18n.changeLanguage(activeLanguage) //Set to active language
    localStorage.setItem("language", activeLanguage); //Set preference of user in localStorage

  }, [activeLanguage])


  //TODO : Have variable here to have Main and Second language variable from user object.
  function switchLanguage() {
    setActiveLanguage(oldValue => (
       oldValue == "fr" ? "en" : "fr"
    ))
  }

  const socialsData = {
    linkedin : {
      link : "https://www.linkedin.com/in/nazim-mouza%C3%AF-647a29211/",
      srcIcon : "./src/assets/img/linkedin.png"
    },
    github : {
      link : "https://github.com/Nostalgeek18",
      srcIcon : "./src/assets/img/github-icon.png"
    }
  }


  return (
    <>
      <BrowserRouter>
        <AppContext.Provider value={{activeLanguage, switchLanguage, t}}>
        <ScrollToHashElement /> {/* Important for scrolling to #id in DOM */}
       <Routes>
        <Route element={<Layout />}>
          <Route index element={<Main/>} />
          <Route path="/projects/:id" element={<PersonnalProjects/>}/>
        </Route>
      </Routes>
      </AppContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App
export { AppContext }