import { Outlet, Link, useLocation } from 'react-router-dom';
import './Layout.css';

const modules = [
  { id: 0, name: 'Overview', path: '/module-0' },
  { id: 1, name: 'Hooks & State', path: '/module-1' },
  { id: 2, name: 'Advanced Patterns', path: '/module-2' },
  { id: 3, name: 'Routing', path: '/module-3' },
  { id: 4, name: 'Performance', path: '/module-4' },
  { id: 5, name: 'Forms', path: '/module-5' },
  { id: 6, name: 'React Native', path: '/module-6' },
  { id: 7, name: 'Testing', path: '/module-7' },
  { id: 8, name: 'Advanced Features', path: '/module-8' },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="layout">
      <aside className="sidebar">
        <h1 className="sidebar-title">React Training</h1>
        <nav className="nav">
          {modules.map((module) => (
            <Link
              key={module.id}
              to={module.path}
              className={`nav-link ${
                location.pathname.startsWith(module.path) ? 'active' : ''
              }`}
            >
              Module {module.id}: {module.name}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

