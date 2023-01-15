import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppsList } from './AppsList/AppsList';
import { Layout } from './Layout/Layout';
import { AppDetails } from './AppDetails/AppDetails';

export const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AppsList />} />
          <Route path="games/:gameId" element={<AppDetails />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
