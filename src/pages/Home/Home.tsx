import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import axios from "axios";
import { useDetection } from "../../context/DetectionContext";

const Home = () => {
    const [image, setImage] = useState<File | null>(null);
    const [base64Image, setBase64Image] = useState<string | null>(null);
    const navigate = useNavigate();  // For navigation to ScanResult
    const { setDetectedItems, setUploadedimage } = useDetection();
    const [loading, setLoading] = useState(false);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;
        setImage(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result as string;
            setBase64Image(result); // base64이미지 형태로 따로 저장
        };
        reader.readAsDataURL(file);
    };

    const handleAnalysisClick = async () => {
        if (!base64Image) {
            alert("이미지를 먼저 선택하세요.");
            return;
        }
        try {
            setLoading(true);
            const response = await axios.post('https://ok-to-fly-server-python.onrender.com/analysis', {
            image: base64Image,
            });
            console.log('서버 응답:', JSON.stringify(response.data, null, 2));

            setDetectedItems(response.data.detected_items);
            setUploadedimage(image);

            navigate("/scan");
        } catch (err) {
            console.error(err);
            alert('서버 요청 실패');
        } finally {
            setLoading(false);
        }  
    };

    const triggerCamera = () => {
        const fileInput = document.getElementById("cameraInput") as HTMLInputElement;
        fileInput?.click();
    };

    const triggerGallery = () => {
        const fileInput = document.getElementById("galleryInput") as HTMLInputElement;
        fileInput?.click();
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>Flycheck</div>

            <button className={styles.button} onClick={triggerCamera}>
                Take a Photo
            </button>
            <button className={styles.button} onClick={triggerGallery}>
                Load from Gallery
            </button>

            <input
                id="cameraInput"
                type="file"
                accept="image/*"
                capture="user"
                style={{ display: "none" }}
                onChange={handleImageChange}
            />
            <input
                id="galleryInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
            />

            {image && (
                <div className={styles.thumbnail}>
                    <img
                        src={URL.createObjectURL(image)}
                        alt="Uploaded Thumbnail"
                        className={styles.thumbnailImage}
                    />
                </div>
            )}

            <button className={styles.analysisButton} onClick={handleAnalysisClick}>
                Analysis
            </button>
            
            {/* 서버로 부터 응답 기다릴 동안 띄워 줄 UI 이것도 적당히 수정 */}
            {loading && (
                <div className={styles.loadingOverlay}>
                    <div className={styles.loadingMessage}>분석 요청 중..</div>
                </div>
            )}

            <div className={styles.recentItems}>
                <h3>Recent Recognized Items</h3>
                <div>🧳 Luggage - Gate C23</div>
                <div>👜 Handbag - Security Check</div>
            </div>
        </div>
    );
};

export default Home;
