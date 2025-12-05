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
    tools?: string;
  };
}

export default function Module0Overview() {
  const topics: Topic[] = [
    {
      title: 'React Fundamentals',
      icon: '⚛️',
      content: {
        what: 'React is a JavaScript library for building user interfaces. It is based on reusable components, JSX for syntax, and a props and state system for managing data.',
        why: 'React simplifies the creation of complex interfaces through components, enables efficient virtual DOM updates, and has a mature ecosystem with many tools and libraries.',
        advantages: [
          'Reusable and modular components',
          'Virtual DOM for efficient updates',
          'Large ecosystem and active community',
          'Unidirectional data flow',
          'Easy to learn and use',
          'Excellent for SPA (Single Page Applications)',
        ],
      },
    },
    {
      title: 'Hooks',
      icon: '🪝',
      content: {
        what: 'Hooks are functions that let you "hook into" React features from function components. Introduced in React 16.8, they allow you to use state and other features without writing classes.',
        why: 'Class components were verbose and difficult to reuse. Hooks allow sharing logic between components in a simpler and more direct way.',
        advantages: [
          'useState: Local state management',
          'useEffect: Side effects and lifecycle',
          'useContext: Context access without prop drilling',
          'useMemo: Memoization of expensive values',
          'useCallback: Memoization of functions',
          'Custom Hooks: Logic reuse between components',
        ],
        modern:
          'Hooks are the modern way to write React components. They enable composition, logic reuse, and cleaner, more maintainable code.',
      },
    },
    {
      title: 'React vs React Native',
      icon: '📱',
      content: {
        what: 'React is for web, React Native is for mobile. They share the same principles and syntax, but React Native renders native components instead of HTML.',
        why: 'It allows writing code once and running it on multiple platforms (iOS and Android), maintaining a native experience.',
        advantages: [
          'Same React knowledge applicable to both',
          'Native components for better performance',
          'Hot reload for fast development',
          'Access to native device APIs',
          'Shared community and ecosystem',
        ],
        comparison:
          'React uses div, span, etc. React Native uses View, Text, etc. React Native does not have traditional CSS, it uses StyleSheet. Navigation also differs: React Router vs React Navigation/Expo Router.',
      },
    },
    {
      title: 'State Management',
      icon: '🗄️',
      content: {
        what: 'State management determines how you share and handle data between components in your application.',
        why: 'As applications grow, sharing state between components becomes complex. You need strategies to handle global and local state efficiently.',
        strategies: [
          'Context API: For simple global state',
          'Zustand: Lightweight and modern state management',
          'Redux: For complex applications with lots of state',
          'React Query: For server state and caching',
          'Local State: useState for component local state',
          'State Colocation: Keep state close to where it is used',
        ],
        modern:
          'The modern trend is to use multiple tools: Context API or Zustand for small global state, React Query for server data, and useState for local state.',
      },
    },
    {
      title: 'Performance',
      icon: '⚡',
      content: {
        what: 'Optimizing React so applications are fast and responsive, especially with large amounts of data or components.',
        why: 'Slow applications provide a poor user experience. React offers several tools to optimize renders and improve performance.',
        strategies: [
          'React.memo: Prevents unnecessary re-renders',
          'useMemo: Memoizes expensive values',
          'useCallback: Memoizes functions to avoid recreating them',
          'Code Splitting: Load code only when needed',
          'Virtual Scrolling: Render only visible items',
          'Lazy Loading: Load components and routes on demand',
        ],
        modern:
          'React 18+ has automatic performance improvements. With React.memo, useMemo, and useCallback used correctly, you can significantly optimize your application.',
      },
    },
    {
      title: 'Routing',
      icon: '🗺️',
      content: {
        what: 'Navigation system that allows switching between different "pages" or views in a single-page application (SPA).',
        why: 'Modern applications need navigation without reloading the entire page, maintaining history, and handling URLs.',
        features: [
          'React Router: Routing for web applications',
          'Expo Router: File-based routing for React Native',
          'Nested Routes: Nested routes and layouts',
          'Route Guards: Route protection',
          'Lazy Loading: Load routes on demand',
          'Deep Linking: Navigation from external URLs',
        ],
        modern:
          'Expo Router brings file-based routing (like Next.js) to React Native, simplifying navigation. React Router remains the standard for web.',
      },
    },
    {
      title: 'Testing',
      icon: '🧪',
      content: {
        what: 'Strategies and tools for testing React applications to ensure they work correctly.',
        why: 'Testing reduces bugs, facilitates safe refactoring, and ensures new features do not break existing code.',
        strategies: [
          'Unit Testing: Test isolated functions and hooks',
          'Component Testing: Test components with React Testing Library',
          'Integration Testing: Test interaction between components',
          'E2E Testing: Test complete user flows',
          'Mocking: Simulate external dependencies',
        ],
        tools:
          'Jest for unit testing, React Testing Library for component testing, Vitest for fast tests, and Detox/Appium for E2E in React Native.',
      },
    },
    {
      title: 'React Native',
      icon: '📱',
      content: {
        what: 'Framework for building native mobile applications using React. Allows writing code once and running it on iOS and Android.',
        why: 'Developing native apps requires Swift/Kotlin. React Native allows using JavaScript/TypeScript and React to create mobile apps.',
        features: [
          'Expo: Tools and services for rapid development',
          'Native Components: Components that render native UI',
          'Navigation: React Navigation or Expo Router',
          'Native APIs: Access to camera, geolocation, etc.',
          'Hot Reload: See changes instantly',
          'Code Push: Update apps without going through stores',
        ],
        modern:
          'Expo has greatly simplified React Native development. With Expo Router, development is more similar to Next.js, making the transition easier.',
      },
    },
    {
      title: 'Advanced Features',
      icon: '🚀',
      content: {
        what: 'Advanced features such as SSR, PWA, Micro-frontends, and production optimizations.',
        why: 'Modern applications need these features for better SEO, offline performance, and distributed architectures.',
        features: [
          'SSR (Server-Side Rendering): Next.js for better SEO',
          'PWA (Progressive Web Apps): Apps that work offline',
          'Micro-frontends: Divide application into independent parts',
          'Code Splitting: Divide bundle into smaller chunks',
          'Bundle Analysis: Analyze and optimize bundle size',
        ],
        modern:
          'Next.js is the leading framework for SSR with React. For React Native, Expo EAS Build and Updates enable deployment and OTA updates.',
      },
    },
    {
      title: 'React 19 & React Native',
      icon: '✨',
      content: {
        what: 'The latest versions of React and React Native with improvements and new features.',
        why: 'React continues to evolve to be simpler, more performant, and modern.',
        highlights: [
          'React 19: Improvements in concurrent features',
          'Better support for Server Components',
          'Automatic performance optimizations',
          'Better developer experience',
          'React Native: Better integration with new APIs',
          'Expo SDK: Regular updates and new features',
        ],
        future:
          'React is moving towards a simpler and more performant model. Server Components, better concurrent rendering, and better integration between web and mobile are the future.',
      },
    },
  ];

  const [selectedTopicIndex, setSelectedTopicIndex] = useState<number | null>(null);

  const selectTopic = (index: number) => {
    setSelectedTopicIndex(selectedTopicIndex === index ? null : index);
  };

  return (
    <div className="module-0">
      <h1 className="module-title">Module 0: Conceptual Recap</h1>
      <p className="module-description">
        This module covers the fundamental concepts of React and React Native.
        Click on each topic to expand and see more details.
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
                  <h3>What is it?</h3>
                  <p>{topic.content.what}</p>
                </div>
                <div className="content-section">
                  <h3>Why?</h3>
                  <p>{topic.content.why}</p>
                </div>
                {topic.content.advantages && (
                  <div className="content-section">
                    <h3>Advantages/Features:</h3>
                    <ul>
                      {topic.content.advantages.map((adv, i) => (
                        <li key={i}>{adv}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {topic.content.strategies && (
                  <div className="content-section">
                    <h3>Strategies:</h3>
                    <ul>
                      {topic.content.strategies.map((strategy, i) => (
                        <li key={i}>{strategy}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {topic.content.patterns && (
                  <div className="content-section">
                    <h3>Patterns:</h3>
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
                    <h3>Comparison:</h3>
                    <p>{topic.content.vsRxjs}</p>
                  </div>
                )}
                {topic.content.comparison && (
                  <div className="content-section">
                    <h3>Comparison:</h3>
                    <p>{topic.content.comparison}</p>
                  </div>
                )}
                {topic.content.modern && (
                  <div className="content-section">
                    <h3>Modern Approach:</h3>
                    <p>{topic.content.modern}</p>
                  </div>
                )}
                {topic.content.future && (
                  <div className="content-section">
                    <h3>Future:</h3>
                    <p>{topic.content.future}</p>
                  </div>
                )}
                {topic.content.tools && (
                  <div className="content-section">
                    <h3>Tools:</h3>
                    <p>{topic.content.tools}</p>
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
