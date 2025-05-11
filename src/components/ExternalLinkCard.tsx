import { FiExternalLink } from 'react-icons/fi';
import './ExternalLinkCard.css';

interface LinkCardProps {
    title: string;
    description?: string;
    url: string;
}

function getFavicon(url: string): string {
    try {
        const domain = new URL(url).hostname;
        return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    } catch (e) {
        return '';
    }
}

export default function ExternalLinkCard({ title, description, url }: LinkCardProps) {
    const handleClick = () => {
        window.open(url, '_blank');
    };

    const faviconUrl = getFavicon(url);

    return (
        <button className="external-card" onClick={handleClick}>
        <div className="external-content">
            {faviconUrl && <img src={faviconUrl} alt="favicon" className="external-icon" />}
            <div className="external-text">
            <p className="external-title">{title}</p>
            {description && <p className="external-description">{description}</p>}
            </div>
            <FiExternalLink size={20} color="#555" />
        </div>
        </button>
    );
}
