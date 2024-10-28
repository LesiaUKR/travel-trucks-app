import { Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CamperDetailsPage from "./pages/CamperDetailsPage/CamperDetailsPage";
import Reviews from "./components/Reviews/Reviews";
import Features from "./components/Features/Features";

function App({ toggleTheme }) {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout toggleTheme={toggleTheme} />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<CamperDetailsPage />}>
          <Route index element={<Features />} /> 
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;