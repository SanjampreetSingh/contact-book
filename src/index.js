import * as React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
// custom css
import "./assets/css/index.css"
import theme from "./assets/js/theme";

// UI Router
import UIRouter from "./routes/UIRouter"

const app = (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <UIRouter />
    </ThemeProvider>
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById("root"))
