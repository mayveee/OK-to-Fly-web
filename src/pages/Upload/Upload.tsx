import React, { useState } from 'react';
import './Upload.css';
import axios from 'axios';
import { useResult } from '../../context/ResultContext';
import HelpCard from '../../components/HelpCard';
import { useNavigate } from 'react-router-dom';
import { MdCameraAlt, MdPhotoLibrary } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

export default function Upload() {
    const navigate = useNavigate();
    const { result, setResult } = useResult();
    const hasPreviousResult = result.detectedItems.length > 0;

    const [isLoading, setIsLoading] = useState(false);
    const [imageUri, setImageUri] = useState<string | null>(null);
    const [base64Data, setBase64Data] = useState<string | null>(null);

    const { t } = useTranslation();

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
        setBase64Data(reader.result as string);
        setImageUri(URL.createObjectURL(file));
        };
        reader.readAsDataURL(file);
    };

    const analyzeImage = async () => {
        if (!base64Data) {
            alert(t('이미지를 먼저 선택하세요.'));
        return;
        }

        try {
            setIsLoading(true);
            const response = await axios.post('https://ok-to-fly-server-python.onrender.com/analysis', {
                image: base64Data,
            });
            const { detected_items } = response.data;
            setResult({
                detectedItems: detected_items,
                imageUri: imageUri ?? undefined,
            });
            navigate('/result');
        } catch (err) {
            console.error(err);
            alert(t('분석 중 오류가 발생했습니다.'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="upload-container">
        {isLoading && (
            <div className="upload-loading-overlay">
            <div className="upload-loading-popup">
                <div className="spinner" />
                <p className="upload-loading-text">{t('분석 요청 중입니다...')}</p>
            </div>
            </div>
        )}

        <div className="upload-card-row">
            <label className="upload-card">
            <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
            <MdCameraAlt size={24} />
            <p className="upload-card-text">{t('사진 촬영하기')}</p>
            </label>
            <label className="upload-card">
            <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
            <MdPhotoLibrary size={24} />
            <p className="upload-card-text">{t('앨범에서 선택')}</p>
            </label>
        </div>

        {imageUri ? (
            <>
            <div className="upload-thumbnail">
                <img src={imageUri} alt={t('업로드된 이미지')} className="upload-preview-image" />
            </div>

            <button
                className={`upload-analysis-button ${isLoading ? 'upload-disabled-button' : ''}`}
                onClick={analyzeImage}
                disabled={isLoading}
            >
                {isLoading ? t('분석 중...') : t('분석 요청')}
            </button>
            </>
        ) : (
            <HelpCard
            title={t('짐을 업로드해주세요')}
            description={t('짐 전체가 나와도 괜찮아요! 다양한 물품을 한 번에 분석할 수 있어요.')}
            />
        )}

        {hasPreviousResult && (
            <button className="upload-recent-button" onClick={() => navigate('/result')}>
            <span className="upload-recent-button-text">{t('최근 인식 결과 보기 →')}</span>
            </button>
        )}
        </div>
    );
}
