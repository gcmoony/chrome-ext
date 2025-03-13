import { useState } from "react"

import { Badge, Box, Container } from "@mui/material"
import ProjectList from "./components/Projects/ProjectList"

function App() {
  return (
    <>
      <Container maxWidth='md'>
        <ProjectList />
      </Container>
    </>
  )
}

export default App
