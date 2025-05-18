import Upload from './pages/Upload/Upload';
import RegulationsLink from './pages/RegulationsLink/RegulationsLink';
import Settings from './pages/Settings/Settings';
import './SlidePages.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function SlidePages() {
    const [pageIndex, setPageIndex] = useState(0);
    const { t } = useTranslation();
    
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const scrollLeft = e.currentTarget.scrollLeft;
        const containerWidth = e.currentTarget.offsetWidth;
        const newIndex = Math.round(scrollLeft / containerWidth);
        setPageIndex(newIndex);
    };
    return (
        <>
            <div className="slider-container" onScroll={handleScroll}>
                <div className="slider-track">
                    <div className="slide-page"><Upload /></div>
                    <div className="slide-page"><RegulationsLink /></div>
                    <div className="slide-page"><Settings /></div>
                </div>
            </div>

            <div className="indicator-wrapper">
                {[0, 1, 2].map((i) => (
                    <span key={i} className={`dot ${pageIndex === i ? 'active' : ''}`} />
                ))}
            </div>
            <div className="menu-indicator">
                {[t('업로드'), t('홈페이지'), t('설정')].map((name, i) => (
                    <span key={i} className={pageIndex === i ? 'active' : ''}>{name}</span>
                ))}
            </div>
        </>
        
    );
}
