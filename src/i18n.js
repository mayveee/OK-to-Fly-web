import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const resources = {
    en: {
        translation: {
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
            "설정": "Settings",
            "언어 설정": "Language Settings",
            "한국어": "Korean",
            "English": "English",
            "개인정보 처리": "Privacy Policy",
            "개인정보 처리에 관한 정보는 여기서": "Information about how personal data is handled",
            "고객 서비스": "Customer Service",
            "서비스에 관한 피드백이나 문의는 여기서": "Submit your feedback or inquiry here",
            "항공사 공식 사이트 바로가기": "Visit Airline Official Websites",
            "공식 사이트에서 더 많은 규정을 확인 할 수 있어요": "Check more regulations on the official site",
            "• 수하물 규정은 보통 국가/항공사 별로 다르기 때문에 참고해서 확인해주세요\n• 가방 별 무게 제한이나 추가 수하물 요금 정보도 확인 가능해요":
                "• Baggage policies vary by country/airline.\n• You can also check baggage weight limits and extra fee info.",
            "대한민국": "Korea",
            "대한항공 홈페이지": "Korean Air Website",
            "아시아나항공 홈페이지": "Asiana Airlines Website",
            "티웨이항공 홈페이지": "T'way Airlines Website",
            "제주항공 홈페이지": "Jeju Air Website",
            "진에어 홈페이지": "Jin Air Website",
            "일본": "Japan",
            "All Nippon Airways 홈페이지": "ANA Website",
            "Japan Airlines 홈페이지": "Japan Airlines Website",
            "AI 분석 결과": "AI Analysis Result",
            "업로드 이미지": "Uploaded Image",
            "이미지를 불러올 수 없습니다": "Unable to load image",
            "감지된 주의 물품": "Detected Items of Concern",
            "✅ 기내 반입 가능": "✅ Allowed in Carry-on",
            "❌ 기내 반입 금지": "❌ Not Allowed in Carry-on",
            "✅ 위탁수하물 가능": "✅ Allowed in Checked Baggage",
            "❌ 위탁수하물 금지": "❌ Not Allowed in Checked Baggage",
            "📝 규정": "📝 Regulation",
            "⚠️ 예외": "⚠️ Exception",
            "📌 특별": "📌 Special",
            "관련 규정 {{count}}": "{{count}} related regulations",
            "관련 예외 {{count}}": "{{count}} related exceptions",
            "관련 특별 {{count}}": "{{count}} special notes",
            "반입 금지 물품이 없습니다 ✅": "No prohibited items detected ✅",
            "업로드": "UPLOAD",
            "홈페이지": "HOMEPAGES",
            "설정": "SETTINGS",
        }
    },
    ko: {
        translation: {
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
            "설정": "설정",
            "언어 설정": "언어 설정",
            "한국어": "한국어",
            "English": "영어",
            "개인정보 처리": "개인정보 처리",
            "개인정보 처리에 관한 정보는 여기서": "개인정보 처리에 관한 정보는 여기서",
            "고객 서비스": "고객 서비스",
            "서비스에 관한 피드백이나 문의는 여기서": "서비스에 관한 피드백이나 문의는 여기서",
            "항공사 공식 사이트 바로가기": "항공사 공식 사이트 바로가기",
            "공식 사이트에서 더 많은 규정을 확인 할 수 있어요": "공식 사이트에서 더 많은 규정을 확인 할 수 있어요",
            "• 수하물 규정은 보통 국가/항공사 별로 다르기 때문에 참고해서 확인해주세요\n• 가방 별 무게 제한이나 추가 수하물 요금 정보도 확인 가능해요":
                "• 수하물 규정은 보통 국가/항공사 별로 다르기 때문에 참고해서 확인해주세요\n• 가방 별 무게 제한이나 추가 수하물 요금 정보도 확인 가능해요",
            "대한민국": "대한민국",
            "대한항공 홈페이지": "대한항공 홈페이지",
            "아시아나항공 홈페이지": "아시아나항공 홈페이지",
            "티웨이항공 홈페이지": "티웨이항공 홈페이지",
            "제주항공 홈페이지": "제주항공 홈페이지",
            "진에어 홈페이지": "진에어 홈페이지",
            "일본": "일본",
            "All Nippon Airways 홈페이지": "All Nippon Airways 홈페이지",
            "Japan Airlines 홈페이지": "Japan Airlines 홈페이지",
            "AI 분석 결과": "AI 분석 결과",
            "업로드 이미지": "업로드 이미지",
            "이미지를 불러올 수 없습니다": "이미지를 불러올 수 없습니다",
            "감지된 주의 물품": "감지된 주의 물품",
            "✅ 기내 반입 가능": "✅ 기내 반입 가능",
            "❌ 기내 반입 금지": "❌ 기내 반입 금지",
            "✅ 위탁수하물 가능": "✅ 위탁수하물 가능",
            "❌ 위탁수하물 금지": "❌ 위탁수하물 금지",
            "📝 규정": "📝 규정",
            "⚠️ 예외": "⚠️ 예외",
            "📌 특별": "📌 특별",
            "관련 규정 {{count}}": "관련 규정 {{count}}",
            "관련 예외 {{count}}": "관련 예외 {{count}}",
            "관련 특별 {{count}}": "관련 특별 {{count}}",
            "반입 금지 물품이 없습니다 ✅": "반입 금지 물품이 없습니다 ✅",
            "업로드": "업로드",
            "홈페이지": "홈페이지",
            "설정": "설정",
        }
    },
};

i18n
    .use(Backend)
    .use(LanguageDetector) // Language detection
    .use(initReactI18next) // For react-i18next
    .init({
        resources,
        lng: localStorage.getItem("i18nextLng") || "ko", // 로컬 스토리지에서 언어를 가져옴
        fallbackLng: "ko", // 설정된 언어가 없을 경우 기본 언어는
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'], // 로컬 스토리지에 언어 정보를 저장
        },
        interpolation: {
            escapeValue: false, // React는 자동으로 XSS 방어가 되어 있기 때문에 escape가 필요하지 않음
        }
    });

export default i18n;
