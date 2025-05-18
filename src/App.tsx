// src/App.tsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // 여기서 useTranslation 훅을 사용
import { AnimatePresence } from 'framer-motion';

import Upload from "./pages/Upload/Upload";
import Result from "./pages/Result/Result";
import RegulationsLink from "./pages/RegulationsLink/RegulationsLink";
import Feedback from "./pages/Feedback/Feedback";
import Settings from "./pages/Settings/Settings";
import "./App.css";
import SlidePages from "./SlidePages";

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
          <Routes>
            <Route path="/" element={<SlidePages />} />
            <Route path="/result" element={<Result />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
      </Router>
  );
};

export default App;
