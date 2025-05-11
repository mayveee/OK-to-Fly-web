// src/pages/Settings/Settings.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import "./Settings.css";

const Settings = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("i18nextLng", lang); // 로컬 스토리지에 언어 저장
    };

    return (
        <div className='container'>
            <h2>{t("설정")}</h2>
            <p className="languageTitle">{t("언어 설정")}:</p>
            <div className='languageSetting'>                
                <button className = 'languageButton' onClick={() => changeLanguage("ko")}>{t("한국어")}</button>
                <button className = 'languageButton' onClick={() => changeLanguage("en")}>{t("English")}</button>
            </div>
            <div className='policySection'>
                <h3>{t("Privacy Policy")}</h3>
                <p>{t("Information regarding how user data is handled and protected")}</p>
            </div>
            <div className='policySection'>
                <h3>{t("Customer Service")}</h3>
                <p>{t("Contact details and support information for assistance")}</p>
            </div>
        </div>
    );
};

export default Settings;
