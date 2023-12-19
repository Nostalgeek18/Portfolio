import React, {useContext} from "react";
import * as style from "./style";
import { AppContext } from "../../../App"


export function LanguageSwitch({transform = true}) {

    const {activeLanguage, switchLanguage, primaryLanguage, secondaryLanguage } = useContext(AppContext)
  
  return (
    <style.LanguageSwitcher transform={transform}>
       <input type="checkbox" checked={activeLanguage === secondaryLanguage} onChange={switchLanguage} />
      <style.Slider  />
      <style.Select  active={activeLanguage === primaryLanguage} className="primaryLanguage">{primaryLanguage}</style.Select>
      <style.Select  active={activeLanguage === secondaryLanguage} className="secundaryLanguage">{secondaryLanguage}</style.Select>
    </style.LanguageSwitcher>
  );
}
