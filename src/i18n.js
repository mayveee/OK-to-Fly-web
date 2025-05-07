import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const resources = {
    en: {
        translation: {
            "Settings": "Settings",
            "Language": "Language",
            "Privacy Policy": "Privacy Policy",
            "Customer Service": "Customer Service",
            "Incheon": "Incheon",
            "JFK": "JFK",
            "Heathrow": "Heathrow",
        }
    },
    ko: {
        translation: {
            "Settings": "설정",
            "Language": "언어",
            "Privacy Policy": "개인정보 보호정책",
            "Customer Service": "고객 서비스",
            "Incheon": "인천",
            "JFK": "JFK",
            "Heathrow": "히드로",
        }
    },
    ja: {
        translation: {
            "Settings": "設定",
            "Language": "言語",
            "Privacy Policy": "プライバシーポリシー",
            "Customer Service": "カスタマーサービス",
            "Incheon": "仁川",
            "JFK": "JFK",
            "Heathrow": "ヒースロー",
        }
    }
};

i18n
    .use(Backend)
    .use(LanguageDetector) // Language detection
    .use(initReactI18next) // For react-i18next
    .init({
        resources,
        lng: localStorage.getItem("i18nextLng") || "en", // 로컬 스토리지에서 언어를 가져옴
        fallbackLng: "en", // 설정된 언어가 없을 경우 기본 언어는 영어로 설정
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'], // 로컬 스토리지에 언어 정보를 저장
        },
        interpolation: {
            escapeValue: false, // React는 자동으로 XSS 방어가 되어 있기 때문에 escape가 필요하지 않음
        }
    });

export default i18n;
