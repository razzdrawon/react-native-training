import { ReactNode } from 'react';
import './IntegrationContainer.css';

interface IntegrationContainerProps {
  children: ReactNode;
}

export default function IntegrationContainer({ children }: IntegrationContainerProps) {
  return (
    <div className="integration-container">
      <header className="integration-header">
        <h1 className="integration-title">Final Integration Project</h1>
        <p className="integration-description">
          This is the integrated application combining all exercises from the course.
          Each exercise has been integrated as a modular component.
        </p>
      </header>
      <main className="integration-content">{children}</main>
    </div>
  );
}

