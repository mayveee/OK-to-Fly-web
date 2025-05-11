import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Feedback.css";
import HelpCard from "../../components/HelpCard";

const Feedback = () => {
    const [file, setFile] = useState<File | null>(null);
    const navigate = useNavigate();

    return (
    <>
        <button className="backButton" onClick={() => navigate(-1)}>
            
        </button>
        <div className="container">
            <h2 onClick={() => navigate(-1)}>&lt; Feedback & Report</h2>
            <HelpCard title="아직 지원되지 않는 기능입니다" description="곧 추가될 예정입니다"/>
            <div className="tags">
                <span>Incorrect Analysis Result</span>
                <span>Regulation Information Error</span>
            </div>

            <div className="uploadBox">
                <input
                type="file"
                accept="image/*"
                id="file-input"
                className="fileInput"
                style={{ display: "none" }}
                />
                <label htmlFor="file-input" className="attachBox">
                </label>
            </div>

            <textarea
                className="textarea"
                placeholder="Describe the issue in detail"
            />

            <button className="submitBtn">
                Submit
            </button>
        </div>
    </>
    );
};

export default Feedback;
