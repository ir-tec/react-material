import MainBody from "./components/MainBody";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Store from "./redux/Store";
import Layout from "./components/Layout";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";


export default function App() {
  const theme = createMuiTheme({
    direction: "rtl",
    typography: {
      fontFamily: "Vazir,Roboto",
    },
    shape:{borderRadius:"50px"}
  });


  return (
    <Router>
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <Layout>
            <MainBody />
          </Layout>
        </ThemeProvider>
      </Provider>
    </Router>
  );
}
