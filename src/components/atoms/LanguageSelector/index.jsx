import React, {useContext} from "react";
import * as style from "./style";
import { AppContext } from "../../../App"


export function LanguageSwitch() {

    const {activeLanguage, switchLanguage } = useContext(AppContext)

  
  return (
    <style.LanguageSwitcher>
       <input type="checkbox" checked={activeLanguage === "en"} onChange={switchLanguage} />
      <style.Slider className="round" />
      <style.Select  className="fr">FR</style.Select>
      <style.Select  className="en">EN</style.Select>
    </style.LanguageSwitcher>
  );
}
