import IntegrationContainer from './IntegrationContainer';
import Card from '../components/shared/Card';

/**
 * IntegrationApp - Final Integration Project
 * 
 * This component combines all exercises from the course into a single integrated application.
 * Each exercise is imported and used as a modular component.
 * 
 * TODO: As you complete exercises, import and add them here:
 * - Exercise 1-1: Custom Hooks
 * - Exercise 1-2: useReducer
 * - Exercise 1-3: Zustand
 * - Exercise 1-4: React Query Dashboard
 * - And all other exercises from modules 2-8
 */

export default function IntegrationApp() {
  return (
    <IntegrationContainer>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card title="Welcome to the Integration Project">
          <p>
            This is the final integration project that combines all exercises from the course.
            As you complete each exercise, you can import and integrate it here.
          </p>
          <p style={{ marginTop: '1rem', color: '#666' }}>
            Start by completing the exercises in each module, then come back here to integrate them.
          </p>
        </Card>

        {/* TODO: Import and add completed exercises here */}
        {/* Example:
        <Card title="Module 1: Custom Hooks">
          <Exercise11CustomHooks />
        </Card>
        */}
      </div>
    </IntegrationContainer>
  );
}

