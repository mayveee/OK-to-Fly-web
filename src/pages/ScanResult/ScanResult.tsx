// src/pages/ScanResult/ScanResult.tsx
import React from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";  // i18next 추가
import styles from "./ScanResult.module.css";
import { DetectedItem } from "../../types/types"
import { useDetection } from "../../context/DetectionContext";
  
const ScanResult = () => {
    const location = useLocation();
    const { t } = useTranslation();  // 번역 함수 가져오기
    const { uploadedimage, detectedItems } = useDetection();

    return (
        <div className={styles.container}>
            <h2>{t("AI Analysis Result")}</h2>  {/* 번역된 텍스트 사용 */}
            <div className={styles.resultBox}>
                <span className={styles.entryLabel}>{t("Allowed for Entry")}</span>  {/* 번역된 텍스트 사용 */}
                {/* 업로드된 이미지 표시 */}
                <div className={styles.thumbnail}>
                    {uploadedimage && (
                        <img
                            src={URL.createObjectURL(uploadedimage)}
                            alt={t("Uploaded Thumbnail")}
                            className={styles.thumbnailImage}
                        />
                    )}
                </div>
            </div>
            

            {/* 결과 표시 부분 수정! 접근은 아래처럼 하면됨 */}
            <div className={styles.exampleLegend}>
                <p>{t("Detected caution lists")}</p>
                {detectedItems.length > 0 && (
                    <ul>
                    {detectedItems.map((item: DetectedItem, index: number) => (
                    <li key={index} className={styles.detectedItem}>
                        <strong>{item.name}</strong> – {item.description}
                        <div>
                            {item.rule.allowed_in_cabin && <span>✅ 기내 반입 가능</span>}
                            {!item.rule.allowed_in_cabin && <span>❌ 기내 반입 불가</span>}
                            {item.rule.allowed_in_checked && <span> / ✅ 위탁 가능</span>}
                            {!item.rule.allowed_in_checked && <span> / ❌ 위탁 불가</span>}
                        </div>
                    </li>
                    ))}
                    </ul>
                )}
            </div>


            <div className={styles.regulationInfo}>
                <h3>{t("Regulation Information")}</h3>  {/* 번역된 텍스트 사용 */}
                <p>{t("Brief description of the item regulation.")}</p>  {/* 번역된 텍스트 사용 */}
            </div>
        </div>
    );
};

export default ScanResult;
