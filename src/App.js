import "./App.css";
import AboutPage from "./Components/About/AboutPage";
import ContactPage from "./Components/Contact/ContactPage";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/Home/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { RouterContextProvider } from "./Components/Context/RouteProtectionContext";

import ProtectedRoute from "./Utils/ProtectedRoute";

function App() {
  return (
    <RouterContextProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </RouterContextProvider>
  );
}

export default App;
