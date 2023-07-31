import { Route, Routes } from 'react-router';
import { Dashboard } from '../../features/dashboard/Dashboard';
import { Layout } from './Layout';

export function AppRoutes() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        {/* <Route path="home" element={<Home />} /> */}
        {/* <Route path='/activity/:itemId' element={<Dashboard />} /> */}
        <Route path='/activity/:id' element={<Dashboard />} />
        {/* <Route path='/activity/*' element={<Dashboard />} /> */}
        <Route path='*' element={<p>There's nothing here: 404!</p>} />
      </Route>
    </Routes>
  );
}
