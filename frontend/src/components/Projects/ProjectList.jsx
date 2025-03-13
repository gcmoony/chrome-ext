import { CircularProgress, Container, Grid2 } from "@mui/material"
import RefreshButton from "../Buttons/RefreshButton"
import useProjectStore from "../../stores/useProjectStore"
import { useEffect } from "react"
import ProjectCard from "../Cards/ProjectCard"

const ProjectList = () => {
  const { projects, fetchProjects } = useProjectStore()

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])
  return (
    <Container
      sx={
        {
          // bgcolor: "#181818",
        }
      }
    >
      <h1 style={{ textAlign: "center" }}>Project List</h1>
      {projects.length === 0 ? (
        <CircularProgress
          size={40}
          sx={{ display: "block", margin: "1rem auto" }}
        />
      ) : (
        <Grid2
          container
          spacing={1}
        >
          {projects.map((project) => {
            return (
              <ProjectCard
                project={project}
                key={project._id}
              />
            )
          })}
        </Grid2>
      )}

      <RefreshButton
        sx={{ width: "100%", margin: "1rem 0" }}
        varient={"outlined"}
      />
    </Container>
  )
}

export default ProjectList
