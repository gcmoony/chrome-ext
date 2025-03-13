import { Container } from "@mui/material"
import RefreshButton from "../Buttons/RefreshButton"
import { useEffect, useState } from "react"
import axios from "axios"

const ProjectList = () => {
  const [projectData, setProjectData] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/projects")
      .then((res) => {
        console.log(res)
        setProjectData(res.data)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <Container
      sx={{
        bgcolor: "#181818",
        // padding: "0px 0px 0px 0px !important",
        // outline: "solid red 2px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Project List</h1>
      <ul>
        {projectData &&
          projectData.map((project, key) => <li key={key}>{project.name}</li>)}
      </ul>
      <RefreshButton
        sx={{ width: "100%" }}
        varient={"outlined"}
      />
    </Container>
  )
}

export default ProjectList
