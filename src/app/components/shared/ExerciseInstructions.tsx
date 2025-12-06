import { ReactNode } from 'react';
import './ExerciseInstructions.css';

interface ExerciseInstructionsProps {
  title: string;
  description?: string;
  objectives?: string[];
  steps?: string[];
  children?: ReactNode;
}

export default function ExerciseInstructions({
  title,
  description,
  objectives,
  steps,
  children,
}: ExerciseInstructionsProps) {
  return (
    <div className="exercise-instructions">
      <h2 className="instructions-title">{title}</h2>
      {description && <p className="instructions-description">{description}</p>}
      
      {objectives && objectives.length > 0 && (
        <div className="instructions-section">
          <h3 className="instructions-section-title">Objectives:</h3>
          <ul className="instructions-list">
            {objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>
      )}

      {steps && steps.length > 0 && (
        <div className="instructions-section">
          <h3 className="instructions-section-title">Steps:</h3>
          <ol className="instructions-list instructions-list-ordered">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      {children && <div className="instructions-content">{children}</div>}
    </div>
  );
}

