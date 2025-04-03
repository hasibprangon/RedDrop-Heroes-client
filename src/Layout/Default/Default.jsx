import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../Shared/NavBar";
import Footer from "../../Shared/Footer";

const Default = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // 🔥 Save theme in local storage
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("register");

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} font-prata`}>
      {!noHeaderFooter && <NavBar handleTheme={handleTheme} theme={theme} />}
      
      {/* ✅ Pass theme & handleTheme to all pages */}
      <div className="min-h-[calc(100vh-180px)]">
        <Outlet context={{ theme, handleTheme }} />
      </div>

      {!noHeaderFooter && <Footer />}
    </div>
  );
};

export default Default;
