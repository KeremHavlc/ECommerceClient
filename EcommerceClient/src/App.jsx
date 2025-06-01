import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-fox-toast";
import HomePage from "./Pages/HomePage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import ProfilePage from "./Pages/ProfilePage";
import AllOrdersPage from "./Pages/AllOrdersPage";
import RatingsAndReviewsPage from "./Pages/RatingsAndReviewsPage";
import AccountInfoPage from "./Pages/AccountInfoPage";
import AddressesPage from "./Pages/AddressesPage";
import CategoryProductsPage from "./Pages/CategoryProductsPage";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productDetails/:id" element={<ProductDetailsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/allOrder" element={<AllOrdersPage />} />
        <Route path="/profile/review" element={<RatingsAndReviewsPage />} />
        <Route path="/profile/Account" element={<AccountInfoPage />} />
        <Route path="/profile/Addresses" element={<AddressesPage />} />
        <Route
          path="/categories/:categoryId"
          element={<CategoryProductsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
