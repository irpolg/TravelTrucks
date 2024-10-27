// import { Navigate, Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
import { lazy } from 'react';
import './App.css';
//import Loader from '../../components/Loader/Loader';
import Layout from '../Layout/Layout.jsx';

//const Navigation = lazy(() => import('../../components/Navigation/Navigation'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const DetailsPage = lazy(() => import('../../pages/DetailsPage/DetailsPage'));
// const NotFoundPage = lazy(() =>
//   import('../../pages/NotFoundPage/NotFoundPage')
// );

// const App = () => {
//   return (
//     <Suspense fallback={<Loader />}>
//       <div>
//         <Navigation />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/catalog" element={<CatalogPage />} />
//           <Route path="/campers/:id" element={<DetailsPage />} />
//           {/* <Route path="*" element={<NotFoundPage />} /> */}
//           {/* <Route path="*" element={<Navigate to="/" />} /> */}
//         </Routes>
//       </div>
//     </Suspense>
//   );
// };

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/camper/:camperId" element={<DetailsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
