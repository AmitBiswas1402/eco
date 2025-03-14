import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { useThemeStore } from "./store/useThemeStore";
import { Toaster } from "react-hot-toast";

function App() {
  const { theme } = useThemeStore();

  // Apply theme when `theme` state changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]); // Runs every time theme changes

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
