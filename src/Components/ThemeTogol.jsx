import React, { useEffect, useState } from "react";
import { getInitialTheme, applyTheme } from "../utils/theme";
import { MdDarkMode, MdLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <button className="flex justify-center" onClick={toggle}>
      {theme === "light" ? "On"  : "Off"}
    </button>
  );
}
