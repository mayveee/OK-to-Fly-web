import { useTranslation } from 'react-i18next';
import ExternalLinkCard from '../../components/ExternalLinkCard';
import HelpCard from '../../components/HelpCard';
import './RegulationsLink.css';

export default function RegulationsLink() {
    const { t } = useTranslation();

    return (
        <div className="regulations-container">
        <p className="regulations-header">{t('항공사 공식 사이트 바로가기')}</p>

        <HelpCard
            title={t('공식 사이트에서 더 많은 규정을 확인 할 수 있어요')}
            description={t(
            '• 수하물 규정은 보통 국가/항공사 별로 다르기 때문에 참고해서 확인해주세요\n• 가방 별 무게 제한이나 추가 수하물 요금 정보도 확인 가능해요'
            )}
        />

        <div className="link-section">
            <h2 className="link-title">{t('대한민국')}</h2>
            <ExternalLinkCard title={t('대한항공 홈페이지')} url="https://www.koreanair.com/contents/plan-your-travel/baggage" />
            <ExternalLinkCard title={t('아시아나항공 홈페이지')} url="https://m.flyasiana.com/C/KR/KO/contents/user-guide" />
            <ExternalLinkCard title={t('티웨이항공 홈페이지')} url="https://m.twayair.com/app/serviceInfo/contents/148" />
            <ExternalLinkCard title={t('제주항공 홈페이지')} url="https://www.jejuair.net/ko/linkService/boardingProcessGuide/baggageGuide.do" />
            <ExternalLinkCard title={t('진에어 홈페이지')} url="https://www.jinair.com/ready/carryBaggage" />
        </div>

        <div className="link-section">
            <h2 className="link-title">{t('일본')}</h2>
            <ExternalLinkCard title={t('All Nippon Airways 홈페이지')} url="https://www.ana.co.jp/ja/jp/guide/boarding-procedures/baggage/domestic/" />
            <ExternalLinkCard title={t('Japan Airlines 홈페이지')} url="https://www.jal.co.jp/jp/ja/inter/baggage/" />
        </div>
        </div>
    );
}
