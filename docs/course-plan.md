## Curso React y React Native Avanzado - Plan de Estudio

### Estructura del Curso

#### Módulo 0: Recapitulación Conceptual (Conversacional)
- React Fundamentals: JSX, Components, Props, State
- Hooks: useState, useEffect, useContext, useMemo, useCallback
- React vs React Native: diferencias y similitudes
- Modern React: Hooks, Functional Components, Composition
- State Management: Context API, Zustand, Redux, React Query
- Performance: memo, useMemo, useCallback, code splitting
- Routing: React Router vs Expo Router
- Testing: Jest, React Testing Library, E2E
- React Native: Expo, Navigation, Native Modules
- Advanced Features: SSR (Next.js), PWA, Micro-frontends
- React 19 & React Native: nuevas características y tendencias

#### Módulo 1: React Hooks Avanzados y Gestión de Estado
- Custom Hooks: creación y patrones avanzados
- useReducer vs useState: cuándo usar cada uno
- Context API avanzado: optimización y patrones
- Zustand: state management moderno y ligero
- React Query: server state management
- State colocation vs global state
- Exercise: dashboard reactivo con múltiples fuentes de estado

#### Módulo 2: Patrones Avanzados de React
- Component composition patterns
- Render props y children patterns
- Higher-Order Components (HOCs)
- Compound Components
- Controlled vs Uncontrolled components
- Error Boundaries y error handling
- Exercise: sistema de componentes reutilizables

#### Módulo 3: Routing y Navegación
- React Router: configuración avanzada
- Expo Router: file-based routing
- Nested routing y layouts
- Route guards y protección de rutas
- Lazy loading y code splitting
- Deep linking
- Exercise: aplicación multi-tenant con routing complejo

#### Módulo 4: Performance y Optimización
- React.memo y cuándo usarlo
- useMemo y useCallback: optimización de renders
- Virtual scrolling para listas grandes
- Code splitting y lazy loading
- Bundle analysis y optimización
- Profiling con React DevTools
- Exercise: lista optimizada con 10k+ items

#### Módulo 5: Forms y Validación Avanzada
- React Hook Form: formularios performantes
- Validación con Zod y Yup
- Form arrays y campos dinámicos
- Async validation
- Multi-step forms
- Exercise: formulario complejo multi-paso con validación

#### Módulo 6: React Native Fundamentals
- Expo vs Bare React Native
- Expo Router: navegación en mobile
- Native components y APIs
- Styling: StyleSheet, NativeWind, Tamagui
- Platform-specific code
- Exercise: aplicación mobile completa con Expo

#### Módulo 7: Testing Avanzado
- Unit testing con Jest
- Component testing con React Testing Library
- Testing hooks personalizados
- Testing async operations
- Mocking y test doubles
- E2E testing con Detox/Appium
- Exercise: suite completa de tests

#### Módulo 8: Features Avanzadas
- Server-Side Rendering (Next.js)
- Progressive Web Apps (PWA)
- Micro-frontends con Module Federation
- React Native: Native Modules
- Expo: EAS Build y Updates
- Exercise: aplicación SSR con PWA y mobile

### Metodología
- Cada módulo combina teoría concisa con ejercicios prácticos independientes
- Cada ejercicio se entrega como componente standalone
- Un proyecto final de integración combina todos los ejercicios
- Code reviews y mejores prácticas integradas en cada módulo
- Q&A en tiempo real durante las sesiones de práctica

### Estructura de Archivos
- `src/app/exercises/` – ejercicios independientes por módulo (`exercise-1-1`, etc.)
- `src/app/integration/` – proyecto final de integración
- `src/app/modules/` – contenedores de módulos con navegación
- `src/app/examples/` – ejemplos y documentación adicional
- Cada ejercicio puede ejecutarse standalone o dentro del proyecto integrado

### Tecnologías Principales
- **React**: 18.3+ (latest)
- **React Native**: 0.76+ con Expo
- **TypeScript**: 5.3+
- **Vite**: Build tool moderno
- **React Router**: Routing para web
- **Expo Router**: Routing para mobile
- **Zustand**: State management
- **React Query**: Server state
- **React Hook Form**: Forms
- **Zod**: Validación
- **Jest + React Testing Library**: Testing
- **Vitest**: Unit testing rápido

