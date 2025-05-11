import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const resources = {
    en: {
        translation: {
            "설정": "Settings",
            "언어": "Language",
            "개인정보 보호정책": "Privacy Policy",
            "고객 서비스": "Customer Service",
            "사진 촬영하기": "Take a photo",
            "앨범에서 선택": "Choose from album",
            "분석 요청 중입니다...": "Analyzing...",
            "업로드된 이미지": "Uploaded image",
            "분석 중...": "Analyzing...",
            "분석 요청": "Analyze",
            "짐을 업로드해주세요": "Please upload your luggage",
            "짐 전체가 나와도 괜찮아요! 다양한 물품을 한 번에 분석할 수 있어요.": "It’s okay if the whole bag is visible! You can analyze multiple items at once.",
            "최근 인식 결과 보기 →": "View recent result →",
            "이미지를 먼저 선택하세요.": "Please select an image first.",
            "분석 중 오류가 발생했습니다.": "An error occurred during analysis.",
        }
    },
    ko: {
        translation: {
            "설정": "설정",
            "언어": "언어",
            "개인정보 보호정책": "개인정보 보호정책",
            "고객 서비스": "고객 서비스",
            "사진 촬영하기": "사진 촬영하기",
            "앨범에서 선택": "앨범에서 선택",
            "분석 요청 중입니다...": "분석 요청 중입니다...",
            "업로드된 이미지": "업로드된 이미지",
            "분석 중...": "분석 중...",
            "분석 요청": "분석 요청",
            "짐을 업로드해주세요": "짐을 업로드해주세요",
            "짐 전체가 나와도 괜찮아요! 다양한 물품을 한 번에 분석할 수 있어요.": "짐 전체가 나와도 괜찮아요! 다양한 물품을 한 번에 분석할 수 있어요.",
            "최근 인식 결과 보기 →": "최근 인식 결과 보기 →",
            "이미지를 먼저 선택하세요.": "이미지를 먼저 선택하세요.",
            "분석 중 오류가 발생했습니다.": "분석 중 오류가 발생했습니다.",
        }
    },
};

i18n
    .use(Backend)
    .use(LanguageDetector) // Language detection
    .use(initReactI18next) // For react-i18next
    .init({
        resources,
        lng: localStorage.getItem("i18nextLng") || "en", // 로컬 스토리지에서 언어를 가져옴
        fallbackLng: "ko", // 설정된 언어가 없을 경우 기본 언어는 영어로 설정
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'], // 로컬 스토리지에 언어 정보를 저장
        },
        interpolation: {
            escapeValue: false, // React는 자동으로 XSS 방어가 되어 있기 때문에 escape가 필요하지 않음
        }
    });

export default i18n;
