import * as React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
// custom css
import "./assets/css/index.css"
import theme from "./assets/js/theme"

// UI Router
import UIRouter from "./routes/UIRouter"
import configuredStore from "./store/ConfiguredStore"

const store = configuredStore()

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <UIRouter />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById("root"))
