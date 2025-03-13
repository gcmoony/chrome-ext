import { useState } from "react"
import { Badge, Box, Container } from "@mui/material"
import ProjectList from "./components/Projects/ProjectList"
import { Route, Routes } from "react-router"
import ProjectInfo from "./components/ProjectInfo/ProjectInfo"

function App() {
  return (
    <>
      <Container maxWidth='md'>
        <Routes>
          <Route
            path='/'
            element={<ProjectList />}
          />
          <Route
            path='/:projectID/info'
            element={<ProjectInfo />}
          />
          <Route
            path='*'
            element={<div>404 Not Found</div>}
          />
        </Routes>
      </Container>
    </>
  )
}

export default App
