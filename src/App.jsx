import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute"; 
import Home from "./pages/Home";
import OfficeBasics from "./pages/OfficeBasics";
import CartPage from "./pages/CartPage";
import ProductDescription from "./pages/ProductDescription";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Billing from "./pages/Billing";
import MyOrders from "./pages/MyOrders";
import Tracking from "./pages/Tracking";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import File from "./pages/File";
import Notebook from "./pages/Notebook";
import SupplyHiveCorporate from "./pages/SupplyHiveCorporate";
import Careers from "./pages/Careers";
import Teams from "./pages/Teams";
import HelpSupport from "./pages/HelpSupport";
import TermsAndConditions from "./pages/TermsandConditions";
import PartnersWithUs from "./pages/PartnersWithUs";
import RideWithUs from "./pages/RideWithUs";
import Coimbatore from "./pages/Coimbatore";
import Bengaluru from "./pages/Bengaluru";
import Chennai from "./pages/Chennai";
import Kolkata from "./pages/Kolkata";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Locations from "./pages/Location";
import Social from "./pages/Social";
import Pen from "./pages/pen";
import SchoolSupplies from "./pages/SchoolSupplies";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <ScrollToTop />
            <main className="flex-1">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/office-basics" element={<OfficeBasics />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product/:id" element={<ProductDescription />} />
                <Route path="/corporate" element={<SupplyHiveCorporate />} />
                <Route path="/files-folders" element={<File />} />
                <Route path="/paper-notebooks" element={<Notebook />} />
                 <Route path="/pens-writing" element={<Pen />} />
                  <Route path="/school-supplies" element={<SchoolSupplies />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/team" element={<Teams />} />
                <Route path="/support" element={<HelpSupport />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                 <Route path="/partner" element={<PartnersWithUs />} />
                  <Route path="/ride" element={<RideWithUs />} />
                  <Route path="/coimbatore" element={<Coimbatore />} />
<Route path="/bengaluru" element={<Bengaluru />} />
<Route path="/chennai" element={<Chennai />} />
<Route path="/kolkata" element={<Kolkata />} />
<Route path="/location" element={<Locations />} />
<Route path="/cookies" element={<CookiePolicy />} />
<Route path="/privacy" element={<PrivacyPolicy />} />
<Route path="/social" element={<Social />} />


                {/* Protected Routes */}
                <Route
                  path="/billing"
                  element={
                    <ProtectedRoute>
                      <Billing />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/order-summary"
                  element={
                    <ProtectedRoute>
                      <MyOrders />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/track-order"
                  element={
                    <ProtectedRoute>
                      <Tracking />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}
