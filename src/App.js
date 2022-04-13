import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AuthContextProvider from "./utils/AuthContext";
import { Header } from "./components/Header";
import { DetailProductPage } from "./pages/DetailProductPage/DetailProductPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { PaymentPage } from "./pages/PaymentPage/PaymentPage";

const App = () => {
  return (
    <AuthContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="product/:productId" element={<DetailProductPage />} />
        <Route path="/user/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
