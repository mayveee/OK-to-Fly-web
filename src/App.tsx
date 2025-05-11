// src/App.tsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // 여기서 useTranslation 훅을 사용

import Upload from "./pages/Upload/Upload";
import Result from "./pages/Result/Result";
import RegulationsLink from "./pages/RegulationsLink/RegulationsLink";
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
          <Routes>
            <Route path="/" element={<Upload />} />
            <Route path="/result" element={<Result />} />
            <Route path="/regulations" element={<RegulationsLink />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/settings" element={<Settings />} />

          </Routes>

          <nav className="bottom-tabbar">
            <Link to="/">{t("업로드")}</Link>
            <Link to="/regulations">{t("홈페이지")}</Link>
            <Link to="/settings">{t("설정")}</Link>
          </nav>
        </div>
      </Router>
  );
};

export default App;
