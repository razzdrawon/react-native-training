import { Outlet } from 'react-router-dom';
import ExerciseNavItem from './ExerciseNavItem';
import './ModuleContainer.css';

export interface Exercise {
  path: string;
  title: string;
  description?: string;
}

interface ModuleContainerProps {
  title: string;
  subtitle?: string;
  exercises: Exercise[];
  practices?: Exercise[];
}

export default function ModuleContainer({
  title,
  subtitle,
  exercises,
  practices = [],
}: ModuleContainerProps) {
  return (
    <div className="module-container">
      <header className="module-header">
        <h1 className="module-title">{title}</h1>
        {subtitle && <p className="module-subtitle">{subtitle}</p>}
      </header>

      <div className="module-content-wrapper">
        <aside className="module-sidebar">
          <nav className="module-nav">
            <h3 className="module-nav-title">Exercises</h3>
            <ul className="module-nav-list">
              {exercises.map((exercise) => (
                <li key={exercise.path}>
                  <ExerciseNavItem
                    path={exercise.path}
                    title={exercise.title}
                    description={exercise.description}
                  />
                </li>
              ))}
            </ul>
          </nav>

          {practices.length > 0 && (
            <nav className="module-nav">
              <h3 className="module-nav-title">Practices</h3>
              <ul className="module-nav-list">
                {practices.map((practice) => (
                  <li key={practice.path}>
                    <ExerciseNavItem
                      path={practice.path}
                      title={practice.title}
                      description={practice.description}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </aside>

        <main className="module-main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

