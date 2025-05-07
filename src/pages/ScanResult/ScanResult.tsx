// src/pages/ScanResult/ScanResult.tsx
import React from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";  // i18next 추가
import styles from "./ScanResult.module.css";

const ScanResult = () => {
    const location = useLocation();
    const { t } = useTranslation();  // 번역 함수 가져오기
    const image = location.state?.image;  // 받아온 이미지

    return (
        <div className={styles.container}>
            <h2>{t("AI Analysis Result")}</h2>  {/* 번역된 텍스트 사용 */}
            <div className={styles.resultBox}>
                <span className={styles.entryLabel}>{t("Allowed for Entry")}</span>  {/* 번역된 텍스트 사용 */}
                {/* 업로드된 이미지 표시 */}
                <div className={styles.thumbnail}>
                    {image && (
                        <img
                            src={URL.createObjectURL(image)}
                            alt={t("Uploaded Thumbnail")}
                            className={styles.thumbnailImage}
                        />
                    )}
                </div>
            </div>

            <div className={styles.exampleLegend}>
                <p>{t("Example Product")}</p>  {/* 번역된 텍스트 사용 */}
                <div className={styles.indicators}>
                    <span className={styles.dotRed}></span>
                    <span className={styles.dotYellow}></span>
                    <span className={styles.dotGreen}></span>
                </div>
            </div>

            <div className={styles.regulationInfo}>
                <h3>{t("Regulation Information")}</h3>  {/* 번역된 텍스트 사용 */}
                <p>{t("Brief description of the item regulation.")}</p>  {/* 번역된 텍스트 사용 */}
            </div>
        </div>
    );
};

export default ScanResult;
