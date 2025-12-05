import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Module0Overview from './modules/module-0/Module0Overview';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/module-0" replace />} />
        <Route path="module-0" element={<Module0Overview />} />
        {/* Module routes will be added as modules are created */}
        {/* <Route path="module-1" element={<Module1Container />} /> */}
        {/* <Route path="module-2" element={<Module2Container />} /> */}
        {/* <Route path="module-3" element={<Module3Container />} /> */}
        {/* <Route path="module-4" element={<Module4Container />} /> */}
        {/* <Route path="module-5" element={<Module5Container />} /> */}
        {/* <Route path="module-6" element={<Module6Container />} /> */}
        {/* <Route path="module-7" element={<Module7Container />} /> */}
        {/* <Route path="module-8" element={<Module8Container />} /> */}
      </Route>
    </Routes>
  );
}

export default App;

