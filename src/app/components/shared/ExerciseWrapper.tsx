import { ReactNode } from 'react';
import './ExerciseWrapper.css';

interface ExerciseWrapperProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function ExerciseWrapper({
  title,
  description,
  children,
}: ExerciseWrapperProps) {
  return (
    <div className="exercise-wrapper">
      <header className="exercise-header">
        <h1 className="exercise-title">{title}</h1>
        {description && <p className="exercise-description">{description}</p>}
      </header>
      <div className="exercise-content">{children}</div>
    </div>
  );
}

