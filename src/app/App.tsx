import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Module0Overview from './modules/module-0/Module0Overview';
import LoadingSpinner from './components/shared/LoadingSpinner';

const Module1Container = lazy(() => import('./modules/module-1/Module1Container'));
const Module2Container = lazy(() => import('./modules/module-2/Module2Container'));
const Module3Container = lazy(() => import('./modules/module-3/Module3Container'));
const Module4Container = lazy(() => import('./modules/module-4/Module4Container'));
const Module5Container = lazy(() => import('./modules/module-5/Module5Container'));
const Module6Container = lazy(() => import('./modules/module-6/Module6Container'));
const Module7Container = lazy(() => import('./modules/module-7/Module7Container'));
const Module8Container = lazy(() => import('./modules/module-8/Module8Container'));

const Exercise11CustomHooks = lazy(() => import('./exercises/module-1/exercise-1-1-custom-hooks'));
const Exercise12UseReducer = lazy(() => import('./exercises/module-1/exercise-1-2-usereducer'));
const Exercise13Zustand = lazy(() => import('./exercises/module-1/exercise-1-3-zustand'));
const Exercise14ReactQuery = lazy(() => import('./exercises/module-1/exercise-1-4-react-query'));

const Practice11TodoList = lazy(() => import('./exercises/module-1/practice/practice-1-1-todo-list'));
const Practice12ShoppingCart = lazy(() => import('./exercises/module-1/practice/practice-1-2-shopping-cart'));

const Exercise21ComponentComposition = lazy(() => import('./exercises/module-2/exercise-2-1-component-composition'));
const Exercise22ErrorBoundaries = lazy(() => import('./exercises/module-2/exercise-2-2-error-boundaries'));

const Exercise31NestedRouting = lazy(() => import('./exercises/module-3/exercise-3-1-nested-routing'));
const Exercise32RouteGuards = lazy(() => import('./exercises/module-3/exercise-3-2-route-guards'));

const Exercise41OptimizedList = lazy(() => import('./exercises/module-4/exercise-4-1-optimized-list'));
const Exercise42CodeSplitting = lazy(() => import('./exercises/module-4/exercise-4-2-code-splitting'));

const Exercise51MultiStepForm = lazy(() => import('./exercises/module-5/exercise-5-1-multi-step-form'));
const Exercise52AsyncValidation = lazy(() => import('./exercises/module-5/exercise-5-2-async-validation'));

const Exercise61ExpoSetup = lazy(() => import('./exercises/module-6/exercise-6-1-expo-setup'));
const Exercise62NativeComponents = lazy(() => import('./exercises/module-6/exercise-6-2-native-components'));

const Exercise71ComponentTesting = lazy(() => import('./exercises/module-7/exercise-7-1-component-testing'));
const Exercise72HookTesting = lazy(() => import('./exercises/module-7/exercise-7-2-hook-testing'));

const Exercise81SsrPwa = lazy(() => import('./exercises/module-8/exercise-8-1-ssr-pwa'));
const Exercise82NativeModules = lazy(() => import('./exercises/module-8/exercise-8-2-native-modules'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/module-0" replace />} />
          <Route path="module-0" element={<Module0Overview />} />
          
          <Route path="module-1" element={<Module1Container />}>
            <Route index element={<Navigate to="exercise-1-1" replace />} />
            <Route path="exercise-1-1" element={<Exercise11CustomHooks />} />
            <Route path="exercise-1-2" element={<Exercise12UseReducer />} />
            <Route path="exercise-1-3" element={<Exercise13Zustand />} />
            <Route path="exercise-1-4" element={<Exercise14ReactQuery />} />
            <Route path="practice-1-1" element={<Practice11TodoList />} />
            <Route path="practice-1-2" element={<Practice12ShoppingCart />} />
          </Route>

          <Route path="module-2" element={<Module2Container />}>
            <Route index element={<Navigate to="exercise-2-1" replace />} />
            <Route path="exercise-2-1" element={<Exercise21ComponentComposition />} />
            <Route path="exercise-2-2" element={<Exercise22ErrorBoundaries />} />
          </Route>

          <Route path="module-3" element={<Module3Container />}>
            <Route index element={<Navigate to="exercise-3-1" replace />} />
            <Route path="exercise-3-1" element={<Exercise31NestedRouting />} />
            <Route path="exercise-3-2" element={<Exercise32RouteGuards />} />
          </Route>

          <Route path="module-4" element={<Module4Container />}>
            <Route index element={<Navigate to="exercise-4-1" replace />} />
            <Route path="exercise-4-1" element={<Exercise41OptimizedList />} />
            <Route path="exercise-4-2" element={<Exercise42CodeSplitting />} />
          </Route>

          <Route path="module-5" element={<Module5Container />}>
            <Route index element={<Navigate to="exercise-5-1" replace />} />
            <Route path="exercise-5-1" element={<Exercise51MultiStepForm />} />
            <Route path="exercise-5-2" element={<Exercise52AsyncValidation />} />
          </Route>

          <Route path="module-6" element={<Module6Container />}>
            <Route index element={<Navigate to="exercise-6-1" replace />} />
            <Route path="exercise-6-1" element={<Exercise61ExpoSetup />} />
            <Route path="exercise-6-2" element={<Exercise62NativeComponents />} />
          </Route>

          <Route path="module-7" element={<Module7Container />}>
            <Route index element={<Navigate to="exercise-7-1" replace />} />
            <Route path="exercise-7-1" element={<Exercise71ComponentTesting />} />
            <Route path="exercise-7-2" element={<Exercise72HookTesting />} />
          </Route>

          <Route path="module-8" element={<Module8Container />}>
            <Route index element={<Navigate to="exercise-8-1" replace />} />
            <Route path="exercise-8-1" element={<Exercise81SsrPwa />} />
            <Route path="exercise-8-2" element={<Exercise82NativeModules />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

