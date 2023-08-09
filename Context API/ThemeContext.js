import React, { createContext, useContext, useState } from "react";

// Create the context
const ThemeContext = createContext();

// Create the Provider component which conatins all state logic
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create the custom hook to consume the provider
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("ThemeContext is used outside its scope");
  return context;
};

// Export the hook and the provider
export { ThemeProvider, useTheme };
