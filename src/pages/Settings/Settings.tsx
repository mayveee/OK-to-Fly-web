// src/pages/Settings/Settings.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Settings.module.css";

const Settings = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("i18nextLng", lang); // 로컬 스토리지에 언어 저장
    };

    return (
        <div className={styles.container}>
            <h2>{t("Settings")}</h2>
            <div className={styles.languageSetting}>
                <span>{t("Language")}:</span>
                <button onClick={() => changeLanguage("ko")}>{t("Korean")}</button>
                <button onClick={() => changeLanguage("en")}>{t("English")}</button>
                <button onClick={() => changeLanguage("ja")}>{t("Japanese")}</button>
            </div>
            <div className={styles.defaultAirport}>
                <span>{t("Default Airport")}:</span>
                <button>{t("Incheon")}</button>
                <button>{t("JFK")}</button>
                <button>{t("Heathrow")}</button>
            </div>
            <div className={styles.policySection}>
                <h3>{t("Privacy Policy")}</h3>
                <p>{t("Information regarding how user data is handled and protected")}</p>
            </div>
            <div className={styles.policySection}>
                <h3>{t("Customer Service")}</h3>
                <p>{t("Contact details and support information for assistance")}</p>
            </div>
        </div>
    );
};

export default Settings;
