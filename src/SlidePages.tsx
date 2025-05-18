import Upload from './pages/Upload/Upload';
import RegulationsLink from './pages/RegulationsLink/RegulationsLink';
import Settings from './pages/Settings/Settings';
import './SlidePages.css';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';


export default function SlidePages() {
    const [pageIndex, setPageIndex] = useState(0);
    const { t } = useTranslation();
    const location = useLocation();
    const sliderRef = useRef<HTMLDivElement>(null);
    console.log('location.state', location.state);
    
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const scrollLeft = e.currentTarget.scrollLeft;
        const containerWidth = e.currentTarget.offsetWidth;
        const newIndex = Math.round(scrollLeft / containerWidth);
        setPageIndex(newIndex);
    };

    const scrollToPage = (index: number) => {
        if (!sliderRef.current) return;

        const container = sliderRef.current;
        const slideWidth = container.offsetWidth;

        container.scrollTo({
            left: slideWidth * index,
            behavior: 'smooth', // ← 부드럽게 이동
        });

        setPageIndex(index);
    };

    useEffect(() => {
        const indexFromNav = location.state?.index;
        console.log('run!~')
        console.log('container ref:', sliderRef.current);
        if (
            typeof indexFromNav === 'number' &&
            sliderRef.current &&
            sliderRef.current.children.length > 0
        ) {
            const container = sliderRef.current;
            const slideWidth = container.offsetWidth;

            requestAnimationFrame(() => {
                container.scrollTo({
                    left: slideWidth * indexFromNav,
                    behavior: 'auto',
                });
                setPageIndex(indexFromNav);
            });
        }
    }, [location.key]);
    
    return (
        <>
            <div className="slider-container" ref={sliderRef} onScroll={handleScroll}>
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
                    <span key={i} className={pageIndex === i ? 'active' : ''} onClick={() => scrollToPage(i)}>{name}</span>
                ))}
            </div>
        </>
        
    );
}
