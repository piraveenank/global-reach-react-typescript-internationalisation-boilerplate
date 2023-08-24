import React, { useEffect, useState } from "react";
import { getLanguage, setLanguage, Language } from "../helpers/useLanguage";
import supportedLanguages from "./../locales/supportedLanguages.json";

const ChangeLanguageDropdown = () => {
  const language = getLanguage();
  const [currentLanguage, setCurrentLanguage] = useState<Language>(language);

  useEffect(() => {
    setLanguage(currentLanguage);
  }, [currentLanguage]);

  function handleChangeLanguage(lang: string) {
    setCurrentLanguage(lang as Language);
    window.location.reload();
  }

  return supportedLanguages.length > 1 ? (
    <div>
      {/* <label htmlFor="language-select">Select Language:</label> */}
      <select
        id="language-select"
        value={currentLanguage}
        onChange={(e) => handleChangeLanguage(e.target.value)}
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "8px",
        }}>
        {supportedLanguages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  ) : null;
};

export default ChangeLanguageDropdown;
