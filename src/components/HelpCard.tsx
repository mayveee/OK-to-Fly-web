// components/HelpCard.tsx
import './HelpCard.css';

interface InfoCardProps {
    title: string;
    description: string;
}

export default function HelpCard({ title, description }: InfoCardProps) {
    return (
        <div className="help-topcard">
        <p className="help-title">{title}</p>
        <p className="help-desc">{description}</p>
        </div>
    );
}
