import { Link, useLocation } from 'react-router-dom';
import './ExerciseNavItem.css';

interface ExerciseNavItemProps {
  path: string;
  title: string;
  description?: string;
}

export default function ExerciseNavItem({
  path,
  title,
  description,
}: ExerciseNavItemProps) {
  const location = useLocation();
  const isActive = location.pathname.includes(path);

  return (
    <Link
      to={path}
      className={`exercise-nav-item ${isActive ? 'active' : ''}`}
    >
      <span className="nav-title">{title}</span>
      {description && <span className="nav-description">{description}</span>}
    </Link>
  );
}

