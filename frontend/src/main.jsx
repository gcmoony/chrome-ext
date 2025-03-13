import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { BrowserRouter } from "react-router"

import App from "./App.jsx"
const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
})

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider
        theme={theme}
        noSsr
      >
        <CssBaseline enableColorScheme={true} />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
