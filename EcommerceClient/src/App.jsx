import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-fox-toast";
import HomePage from "./Pages/HomePage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import ProfilePage from "./Pages/ProfilePage";
import AllOrdersPage from "./Pages/AllOrdersPage";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productDetails" element={<ProductDetailsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/allOrder" element={<AllOrdersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
