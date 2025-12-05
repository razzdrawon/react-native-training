## Advanced React & React Native Course - Study Plan

### Course Structure

#### Module 0: Conceptual Recap (Conversational)
- React Fundamentals: JSX, Components, Props, State
- Hooks: useState, useEffect, useContext, useMemo, useCallback
- React vs React Native: differences and similarities
- Modern React: Hooks, Functional Components, Composition
- State Management: Context API, Zustand, Redux, React Query
- Performance: memo, useMemo, useCallback, code splitting
- Routing: React Router vs Expo Router
- Testing: Jest, React Testing Library, E2E
- React Native: Expo, Navigation, Native Modules
- Advanced Features: SSR (Next.js), PWA, Micro-frontends
- React 19 & React Native: new features and trends

#### Module 1: Advanced React Hooks and State Management
- Custom Hooks: creation and advanced patterns
- useReducer vs useState: when to use each
- Advanced Context API: optimization and patterns
- Zustand: modern and lightweight state management
- React Query: server state management
- State colocation vs global state
- Exercise: reactive dashboard with multiple state sources

#### Module 2: Advanced React Patterns
- Component composition patterns
- Render props and children patterns
- Higher-Order Components (HOCs)
- Compound Components
- Controlled vs Uncontrolled components
- Error Boundaries and error handling
- Exercise: reusable component system

#### Module 3: Routing and Navigation
- React Router: advanced configuration
- Expo Router: file-based routing
- Nested routing and layouts
- Route guards and route protection
- Lazy loading and code splitting
- Deep linking
- Exercise: multi-tenant application with complex routing

#### Module 4: Performance and Optimization
- React.memo and when to use it
- useMemo and useCallback: render optimization
- Virtual scrolling for large lists
- Code splitting and lazy loading
- Bundle analysis and optimization
- Profiling with React DevTools
- Exercise: optimized list with 10k+ items

#### Module 5: Forms and Advanced Validation
- React Hook Form: performant forms
- Validation with Zod and Yup
- Form arrays and dynamic fields
- Async validation
- Multi-step forms
- Exercise: complex multi-step form with validation

#### Module 6: React Native Fundamentals
- Expo vs Bare React Native
- Expo Router: mobile navigation
- Native components and APIs
- Styling: StyleSheet, NativeWind, Tamagui
- Platform-specific code
- Exercise: complete mobile application with Expo

#### Module 7: Advanced Testing
- Unit testing with Jest
- Component testing with React Testing Library
- Testing custom hooks
- Testing async operations
- Mocking and test doubles
- E2E testing with Detox/Appium
- Exercise: complete test suite

#### Module 8: Advanced Features
- Server-Side Rendering (Next.js)
- Progressive Web Apps (PWA)
- Micro-frontends with Module Federation
- React Native: Native Modules
- Expo: EAS Build and Updates
- Exercise: SSR application with PWA and mobile

### Methodology
- Each module combines concise theory with independent hands-on exercises
- Each exercise is delivered as a standalone component
- A final integration project combines all exercises
- Code reviews and best practices integrated into each module
- Real-time Q&A during practice sessions

### File Structure
- `src/app/exercises/` – independent exercises per module (`exercise-1-1`, etc.)
- `src/app/integration/` – final integration project
- `src/app/modules/` – module containers with navigation
- `src/app/examples/` – examples and additional documentation
- Each exercise can run standalone or within the integrated project

### Main Technologies
- **React**: 18.3+ (latest)
- **React Native**: 0.76+ with Expo
- **TypeScript**: 5.3+
- **Vite**: Modern build tool
- **React Router**: Routing for web
- **Expo Router**: Routing for mobile
- **Zustand**: State management
- **React Query**: Server state
- **React Hook Form**: Forms
- **Zod**: Validation
- **Jest + React Testing Library**: Testing
- **Vitest**: Fast unit testing
