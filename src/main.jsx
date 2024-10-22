import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Globalstyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Themes";
import { Provider } from "react-redux";
import { store } from "./redux/store";



const Index = () => {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
        <BrowserRouter basename="/">
          <GlobalStyle />
 <Provider store={store}>
          <App toggleTheme={toggleTheme} />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
