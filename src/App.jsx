import { useState, createContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import PersonnalProjects  from './pages/PersonnalProjects'
import Layout from "./components/Layout"
import NotFound from "./components/NotFound"
import Main from './pages/Main'
import ScrollToHashElement from './tools/ScrollToHashElement'
import { getUserInfos } from './tools/mix'

import './i18n';
import { useTranslation } from 'react-i18next';

const AppContext = createContext()

function App() {

  const {t, i18n } = useTranslation()

  const { primaryLanguage, secondaryLanguage } = getUserInfos();
  const initialLanguage = localStorage.getItem("language") !== undefined ? localStorage.getItem("language") : primaryLanguage

  const [activeLanguage, setActiveLanguage] = useState(initialLanguage)

  useEffect(()=> {
    i18n.changeLanguage(activeLanguage) //Set to active language
    localStorage.setItem("language", activeLanguage); //Set preference of user in localStorage

  }, [activeLanguage])


  function switchLanguage() {
    setActiveLanguage(oldValue => (
       oldValue == primaryLanguage ? secondaryLanguage : primaryLanguage
    ))
  }


  return (
    <>
      <BrowserRouter>
        <AppContext.Provider value={{activeLanguage, switchLanguage, t, primaryLanguage, secondaryLanguage}}>
        <ScrollToHashElement /> {/* Important for scrolling to #id elements in DOM */}
       <Routes>
        <Route element={<Layout />}>
          <Route index element={<Main/>} />
          <Route path="/projects/:id" element={<PersonnalProjects/>}/>
          <Route path="*" element={<NotFound />} /> {/*Page not found */}
        </Route>
      </Routes>
      </AppContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App
export { AppContext }