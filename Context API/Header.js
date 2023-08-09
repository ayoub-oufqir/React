import React from "react";
import { useTheme } from "./ThemeContext";

function Header() {
  // consume the context using the custom hook (take/distructure only the values you need in this component)
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}

export default Header;
