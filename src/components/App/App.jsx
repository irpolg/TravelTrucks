// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import CatalogPage from '../../pages/CatalogPage/CatalogPage.jsx';
import DetailsPage from '../../pages/DetailsPage/DetailsPage.jsx';

const App = () => {
  return (
    // <BrowserRouter>
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/camper/:camperId" element={<DetailsPage />} />
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
