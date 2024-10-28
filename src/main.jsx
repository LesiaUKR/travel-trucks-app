import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import { DatePickerStyles } from "@components/InputDatePicker/InputDatePicker.styled";

import { GlobalStyle } from "@styles/Globalstyle";
import { darkTheme, lightTheme } from "./Themes";
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
          <DatePickerStyles />
          <GlobalStyle />
          <Provider store={store}>
            <HelmetProvider>
              <App toggleTheme={toggleTheme} />
            </HelmetProvider>
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
