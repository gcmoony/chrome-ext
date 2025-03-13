import { useState } from "react"
import CssBaseline from "@mui/material/CssBaseline"
import { Box, Container } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"

function App() {
  const theme = createTheme({
    colorSchemes: {
      dark: true,
    },
  })
  return (
    <>
      <ThemeProvider
        theme={theme}
        noSsr
      >
        <CssBaseline enableColorScheme={true} />
        <Container sx={{}}>
          <Box sx={{ minHeight: "95vh" }}>
            <h1>Hello World</h1>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
