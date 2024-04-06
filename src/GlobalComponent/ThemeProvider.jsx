import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const storedTheme = localStorage.getItem("theme");
  
  console.log("Stored theme:", storedTheme); // Log the stored theme value
  const [theme, setTheme] = useState(
    storedTheme ? JSON.parse(storedTheme) : null
  );
  
  useEffect(() => {
    console.log("Theme changed:", theme); // Log the new theme value
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  const setThemeMode = (mode) => setTheme(mode);
  
  return (
    <ThemeContext.Provider value={{ theme, setThemeMode }}>
      {props.children}
    </ThemeContext.Provider>
    // Uses the useContext hook to access the theme context.
    // Returns the theme value obtained from the context.
  );
};

const useThemeHook = () => {
  const { theme } = useContext(ThemeContext);
  return [theme];
};
export { ThemeContext, ThemeProvider, useThemeHook };
