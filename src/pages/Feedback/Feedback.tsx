// src/pages/Feedback/Feedback.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Feedback.module.css";

const Feedback = () => {
    const [file, setFile] = useState<File | null>(null);  // 업로드된 파일을 상태로 관리
    const [isSubmitted, setIsSubmitted] = useState(false);  // 제출 완료 여부 상태
    const navigate = useNavigate();  // 페이지 이동을 위한 훅

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files ? event.target.files[0] : null;
        setFile(selectedFile);
    };

    const handleSubmit = () => {
        if (file) {
            // 파일이 있는 경우 제출 완료 처리
            setIsSubmitted(true);
            // Home으로 이동
            setTimeout(() => {
                navigate("/");  // Home 페이지로 이동
            }, 2000);  // 2초 후 이동 (제출 완료 표시 시간)
        } else {
            alert("Please attach a screenshot before submitting.");
        }
    };

    return (
        <div className={styles.container}>
            <h2>Feedback & Report</h2>
            <div className={styles.tags}>
                <span>Incorrect Analysis Result</span>
                <span>Regulation Information Error</span>
            </div>
            <textarea
                className={styles.textarea}
                placeholder="Describe the issue in detail"
            />
            <div className={styles.uploadBox}>
                {/* 숨겨진 file input */}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    id="file-input"
                    className={styles.fileInput}
                />
                {/* 파일 업로드 버튼 */}
                <label htmlFor="file-input" className={styles.customFileBtn}>
                    Choose a file
                </label>
                {file && <span className={styles.fileName}>{file.name}</span>} {/* 업로드된 파일 이름 표시 */}
            </div>
            <button className={styles.submitBtn} onClick={handleSubmit}>
                Submit
            </button>

            {/* 제출 완료 표시 */}
            {isSubmitted && <div className={styles.submissionSuccess}>Submission Successful!</div>}
        </div>
    );
};

export default Feedback;
