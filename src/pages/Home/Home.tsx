import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
    const [image, setImage] = useState<File | null>(null);
    const navigate = useNavigate();  // For navigation to ScanResult

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage(file);
        }
    };

    const handleAnalysisClick = () => {
        if (image) {
            // Navigate to ScanResult page and pass image as state
            navigate("/scan", { state: { image } });
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

            <div className={styles.recentItems}>
                <h3>Recent Recognized Items</h3>
                <div>🧳 Luggage - Gate C23</div>
                <div>👜 Handbag - Security Check</div>
            </div>
        </div>
    );
};

export default Home;
