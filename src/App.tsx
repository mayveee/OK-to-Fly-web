// src/App.tsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // 여기서 useTranslation 훅을 사용

import Home from "./pages/Home/Home";
import ScanResult from "./pages/ScanResult/ScanResult";
import AirportInfo from "./pages/AirportInfo/AirportInfo";
import Feedback from "./pages/Feedback/Feedback";
import Settings from "./pages/Settings/Settings";

import "./App.css";

const App = () => {
  const { t, i18n } = useTranslation();  // useTranslation을 사용하여 번역 기능 가져오기

  // 로컬 스토리지에서 언어 가져오기
  useEffect(() => {
    const savedLanguage = localStorage.getItem("i18nextLng");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
      <Router>
        <div className="app-container">
          <nav className="navbar">
            {/* 링크에도 t() 함수 사용 */}
            <Link to="/">{t("Home")}</Link>
            <Link to="/scan">{t("Scan Result")}</Link>
            <Link to="/airport">{t("Airport Info")}</Link>
            <Link to="/feedback">{t("Feedback")}</Link>
            <Link to="/settings">{t("Settings")}</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scan" element={<ScanResult />} />
            <Route path="/airport" element={<AirportInfo />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
