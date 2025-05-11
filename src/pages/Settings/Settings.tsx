import React from "react";
import { useTranslation } from "react-i18next";
import "./Settings.css";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("i18nextLng", lang);
    };

    return (
        <div className="container">
            <p className="settings-title">{t("설정")}</p>

            <p className="settings-subtitle">{t("언어 설정")}:</p>
            <div className="languageSetting">
                <button
                className={`languageButton ${i18n.language === "ko" ? "selected" : ""}`}
                onClick={() => changeLanguage("ko")}
                >
                한국어
                </button>
                <button
                className={`languageButton ${i18n.language === "en" ? "selected" : ""}`}
                onClick={() => changeLanguage("en")}
                >
                English
                </button>
            </div>

            <div className="policySection">
                <p className="settings-section-title">{t("개인정보 처리")}</p>
                <p className="settings-section-text">{t("개인정보 처리에 관한 정보는 여기서")}</p>
            </div>

            <div className="policySection" onClick={() => navigate('/feedback')}>
                <p className="settings-section-title">{t("고객 서비스")}</p>
                <p className="settings-section-text">{t("서비스에 관한 피드백이나 문의는 여기서")}</p>
            </div>
        </div>
    );
};

export default Settings;
