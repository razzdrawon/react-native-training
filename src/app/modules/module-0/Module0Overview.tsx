import { useState } from 'react';
import './Module0Overview.css';

interface Topic {
  title: string;
  icon: string;
  content: {
    what: string;
    why: string;
    advantages?: string[];
    vsRxjs?: string;
    comparison?: string;
    strategies?: string[];
    modern?: string;
    patterns?: string[];
    features?: string[];
    highlights?: string[];
    future?: string;
  };
}

export default function Module0Overview() {
  const topics: Topic[] = [
    {
      title: 'React Fundamentals',
      icon: '⚛️',
      content: {
        what: 'React es una biblioteca de JavaScript para construir interfaces de usuario. Se basa en componentes reutilizables, JSX para la sintaxis, y un sistema de props y state para manejar datos.',
        why: 'React simplifica la creación de interfaces complejas mediante componentes, permite actualizaciones eficientes del DOM virtual, y tiene un ecosistema maduro con muchas herramientas y bibliotecas.',
        advantages: [
          'Componentes reutilizables y modulares',
          'Virtual DOM para actualizaciones eficientes',
          'Ecosistema grande y comunidad activa',
          'Unidirectional data flow (flujo de datos unidireccional)',
          'Fácil de aprender y usar',
          'Excelente para aplicaciones SPA (Single Page Applications)',
        ],
      },
    },
    {
      title: 'Hooks',
      icon: '🪝',
      content: {
        what: 'Los Hooks son funciones que te permiten "engancharte" a características de React desde componentes funcionales. Introducidos en React 16.8, permiten usar state y otras características sin escribir clases.',
        why: 'Los componentes de clase eran verbosos y difíciles de reutilizar. Los Hooks permiten compartir lógica entre componentes de manera más simple y directa.',
        advantages: [
          'useState: Manejo de estado local',
          'useEffect: Efectos secundarios y lifecycle',
          'useContext: Acceso a context sin prop drilling',
          'useMemo: Memoización de valores costosos',
          'useCallback: Memoización de funciones',
          'Custom Hooks: Reutilización de lógica entre componentes',
        ],
        modern:
          'Los Hooks son la forma moderna de escribir componentes React. Permiten composición, reutilización de lógica, y código más limpio y mantenible.',
      },
    },
    {
      title: 'React vs React Native',
      icon: '📱',
      content: {
        what: 'React es para web, React Native es para mobile. Comparten los mismos principios y sintaxis, pero React Native renderiza componentes nativos en lugar de HTML.',
        why: 'Permite escribir código una vez y ejecutarlo en múltiples plataformas (iOS y Android), manteniendo la experiencia nativa.',
        advantages: [
          'Mismo conocimiento de React aplicable a ambas',
          'Componentes nativos para mejor performance',
          'Hot reload para desarrollo rápido',
          'Acceso a APIs nativas del dispositivo',
          'Comunidad y ecosistema compartidos',
        ],
        comparison:
          'React usa div, span, etc. React Native usa View, Text, etc. React Native no tiene CSS tradicional, usa StyleSheet. La navegación también difiere: React Router vs React Navigation/Expo Router.',
      },
    },
    {
      title: 'State Management',
      icon: '🗄️',
      content: {
        what: 'La gestión de estado determina cómo compartes y manejas datos entre componentes en tu aplicación.',
        why: 'A medida que las aplicaciones crecen, compartir estado entre componentes se vuelve complejo. Necesitas estrategias para manejar estado global y local eficientemente.',
        strategies: [
          'Context API: Para estado global simple',
          'Zustand: State management ligero y moderno',
          'Redux: Para aplicaciones complejas con mucho estado',
          'React Query: Para estado del servidor y caché',
          'Local State: useState para estado local del componente',
          'State Colocation: Mantener estado cerca de donde se usa',
        ],
        modern:
          'La tendencia moderna es usar múltiples herramientas: Context API o Zustand para estado global pequeño, React Query para datos del servidor, y useState para estado local.',
      },
    },
    {
      title: 'Performance',
      icon: '⚡',
      content: {
        what: 'Optimizar React para que las aplicaciones sean rápidas y responsivas, especialmente con grandes cantidades de datos o componentes.',
        why: 'Aplicaciones lentas dan mala experiencia de usuario. React ofrece varias herramientas para optimizar renders y mejorar performance.',
        strategies: [
          'React.memo: Evita re-renders innecesarios',
          'useMemo: Memoiza valores costosos',
          'useCallback: Memoiza funciones para evitar recrearlas',
          'Code Splitting: Cargar código solo cuando se necesita',
          'Virtual Scrolling: Renderizar solo items visibles',
          'Lazy Loading: Cargar componentes y rutas bajo demanda',
        ],
        modern:
          'React 18+ tiene mejoras automáticas de performance. Con React.memo, useMemo, y useCallback usados correctamente, puedes optimizar significativamente tu aplicación.',
      },
    },
    {
      title: 'Routing',
      icon: '🗺️',
      content: {
        what: 'Sistema de navegación que permite cambiar entre diferentes "páginas" o vistas en una aplicación de una sola página (SPA).',
        why: 'Las aplicaciones modernas necesitan navegación sin recargar la página completa, mantener historial, y manejar URLs.',
        features: [
          'React Router: Routing para aplicaciones web',
          'Expo Router: File-based routing para React Native',
          'Nested Routes: Rutas anidadas y layouts',
          'Route Guards: Protección de rutas',
          'Lazy Loading: Cargar rutas bajo demanda',
          'Deep Linking: Navegación desde URLs externas',
        ],
        modern:
          'Expo Router trae file-based routing (como Next.js) a React Native, simplificando la navegación. React Router sigue siendo el estándar para web.',
      },
    },
    {
      title: 'Testing',
      icon: '🧪',
      content: {
        what: 'Estrategias y herramientas para probar aplicaciones React y asegurar que funcionen correctamente.',
        why: 'Testing reduce bugs, facilita refactoring seguro, y asegura que nuevas características no rompan código existente.',
        strategies: [
          'Unit Testing: Probar funciones y hooks aislados',
          'Component Testing: Probar componentes con React Testing Library',
          'Integration Testing: Probar interacción entre componentes',
          'E2E Testing: Probar flujos completos de usuario',
          'Mocking: Simular dependencias externas',
        ],
        tools:
          'Jest para unit testing, React Testing Library para component testing, Vitest para tests rápidos, y Detox/Appium para E2E en React Native.',
      },
    },
    {
      title: 'React Native',
      icon: '📱',
      content: {
        what: 'Framework para construir aplicaciones móviles nativas usando React. Permite escribir código una vez y ejecutarlo en iOS y Android.',
        why: 'Desarrollar apps nativas requiere Swift/Kotlin. React Native permite usar JavaScript/TypeScript y React para crear apps móviles.',
        features: [
          'Expo: Herramientas y servicios para desarrollo rápido',
          'Native Components: Componentes que renderizan UI nativa',
          'Navigation: React Navigation o Expo Router',
          'APIs Nativas: Acceso a cámara, geolocalización, etc.',
          'Hot Reload: Ver cambios instantáneamente',
          'Code Push: Actualizar apps sin pasar por stores',
        ],
        modern:
          'Expo ha simplificado mucho el desarrollo React Native. Con Expo Router, el desarrollo es más similar a Next.js, haciendo la transición más fácil.',
      },
    },
    {
      title: 'Advanced Features',
      icon: '🚀',
      content: {
        what: 'Características avanzadas como SSR, PWA, Micro-frontends, y optimizaciones para producción.',
        why: 'Aplicaciones modernas necesitan estas características para mejor SEO, performance offline, y arquitecturas distribuidas.',
        features: [
          'SSR (Server-Side Rendering): Next.js para mejor SEO',
          'PWA (Progressive Web Apps): Apps que funcionan offline',
          'Micro-frontends: Dividir aplicación en partes independientes',
          'Code Splitting: Dividir bundle en chunks más pequeños',
          'Bundle Analysis: Analizar y optimizar tamaño del bundle',
        ],
        modern:
          'Next.js es el framework líder para SSR con React. Para React Native, Expo EAS Build y Updates permiten deployment y actualizaciones OTA.',
      },
    },
    {
      title: 'React 19 & React Native',
      icon: '✨',
      content: {
        what: 'Las últimas versiones de React y React Native con mejoras y nuevas características.',
        why: 'React continúa evolucionando para ser más simple, performante, y moderno.',
        highlights: [
          'React 19: Mejoras en concurrent features',
          'Mejor soporte para Server Components',
          'Optimizaciones automáticas de performance',
          'Mejor developer experience',
          'React Native: Mejor integración con nuevas APIs',
          'Expo SDK: Actualizaciones regulares y nuevas features',
        ],
        future:
          'React se está moviendo hacia un modelo más simple y performante. Server Components, mejor concurrent rendering, y mejor integración entre web y mobile son el futuro.',
      },
    },
  ];

  const [selectedTopicIndex, setSelectedTopicIndex] = useState<number | null>(null);

  const selectTopic = (index: number) => {
    setSelectedTopicIndex(selectedTopicIndex === index ? null : index);
  };

  return (
    <div className="module-0">
      <h1 className="module-title">Módulo 0: Recapitulación Conceptual</h1>
      <p className="module-description">
        Este módulo cubre los conceptos fundamentales de React y React Native.
        Haz clic en cada tema para expandir y ver más detalles.
      </p>

      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div key={index} className="topic-card">
            <button
              className="topic-header"
              onClick={() => selectTopic(index)}
            >
              <span className="topic-icon">{topic.icon}</span>
              <span className="topic-title">{topic.title}</span>
              <span className="topic-arrow">
                {selectedTopicIndex === index ? '▼' : '▶'}
              </span>
            </button>
            {selectedTopicIndex === index && (
              <div className="topic-content">
                <div className="content-section">
                  <h3>¿Qué es?</h3>
                  <p>{topic.content.what}</p>
                </div>
                <div className="content-section">
                  <h3>¿Por qué?</h3>
                  <p>{topic.content.why}</p>
                </div>
                {topic.content.advantages && (
                  <div className="content-section">
                    <h3>Ventajas/Características:</h3>
                    <ul>
                      {topic.content.advantages.map((adv, i) => (
                        <li key={i}>{adv}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {topic.content.strategies && (
                  <div className="content-section">
                    <h3>Estrategias:</h3>
                    <ul>
                      {topic.content.strategies.map((strategy, i) => (
                        <li key={i}>{strategy}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {topic.content.patterns && (
                  <div className="content-section">
                    <h3>Patrones:</h3>
                    <ul>
                      {topic.content.patterns.map((pattern, i) => (
                        <li key={i}>{pattern}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {topic.content.features && (
                  <div className="content-section">
                    <h3>Features:</h3>
                    <ul>
                      {topic.content.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {topic.content.highlights && (
                  <div className="content-section">
                    <h3>Highlights:</h3>
                    <ul>
                      {topic.content.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {topic.content.vsRxjs && (
                  <div className="content-section">
                    <h3>Comparación:</h3>
                    <p>{topic.content.vsRxjs}</p>
                  </div>
                )}
                {topic.content.comparison && (
                  <div className="content-section">
                    <h3>Comparación:</h3>
                    <p>{topic.content.comparison}</p>
                  </div>
                )}
                {topic.content.modern && (
                  <div className="content-section">
                    <h3>Enfoque Moderno:</h3>
                    <p>{topic.content.modern}</p>
                  </div>
                )}
                {topic.content.future && (
                  <div className="content-section">
                    <h3>Futuro:</h3>
                    <p>{topic.content.future}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

