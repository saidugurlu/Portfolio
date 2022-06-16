import React from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex items-center justify-between text-white px-6 py-4 h16 max-w-5xl mx-auto mt-12 bg-transparent">
      <span></span>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="px-6 py-2 bg-pink-600 text-yellow-50 rounded-tr-lg rounded-bl-lg font-semibold uppercase"
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </header>
  );
};

export default Header;
