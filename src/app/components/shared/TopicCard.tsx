import { ReactNode, useState } from 'react';
import './TopicCard.css';

interface TopicCardProps {
  title: string;
  icon: string;
  children: ReactNode;
}

export default function TopicCard({ title, icon, children }: TopicCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="topic-card">
      <button
        className="topic-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="topic-icon">{icon}</span>
        <span className="topic-title">{title}</span>
        <span className="topic-arrow">{isExpanded ? '▼' : '▶'}</span>
      </button>
      {isExpanded && <div className="topic-content">{children}</div>}
    </div>
  );
}

