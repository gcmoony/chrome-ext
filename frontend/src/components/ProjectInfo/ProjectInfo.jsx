import { useNavigate, useParams } from "react-router"
import useLinkStore from "../../stores/useLinkStore"
import useQAStore from "../../stores/useQAStore"
import { useEffect } from "react"
import Paper from "@mui/material/Paper"
import {
  Button,
  Container,
  Divider,
  CircularProgress,
  Grid2,
} from "@mui/material"
import LinkCard from "../Cards/LinkCard"
import QACard from "../Cards/QACard"

const ProjectInfo = () => {
  const { projectID } = useParams() // projectID is defined in the route from main.jsx, obtained from URL
  const navigate = useNavigate() // Allows navigation
  const { links, fetchLinks } = useLinkStore()
  const { qas, fetchQAs } = useQAStore()

  useEffect(() => {
    fetchLinks(projectID)
    fetchQAs(projectID)
  }, [projectID, fetchLinks, fetchQAs])

  return (
    <Container
      variant='elevation'
      sx={{ marginTop: 10 }}
      elevation={3}
    >
      <Paper sx={{ padding: 2 }}>
        <h2 style={{ textAlign: "center" }}>Project Resources</h2>
        {/* ==== Link Section ==== */}
        <Divider>Links</Divider>
        <Container>
          {links.length === 0 ? (
            <CircularProgress
              size={40}
              sx={{ display: "block", margin: "1rem auto" }}
            />
          ) : (
            <Grid2
              container
              spacing={2}
            >
              {links.map((link) => {
                return (
                  <LinkCard
                    key={link._id}
                    link={link}
                  />
                )
              })}
            </Grid2>
          )}
        </Container>

        {/* ==== QA Section ==== */}
        <Divider sx={{ marginTop: 3 }}>Q&A's</Divider>
        <Container>
          {qas.length === 0 ? (
            <CircularProgress
              size={40}
              sx={{ display: "block", margin: "1rem auto" }}
            />
          ) : (
            <Grid2
              container
              spacing={2}
            >
              {qas.map((qa) => {
                return (
                  <QACard
                    key={qa._id}
                    qa={qa}
                  />
                )
              })}
            </Grid2>
          )}
        </Container>
        <Button
          sx={{ marginTop: 5 }}
          variant='outlined'
          onClick={() => navigate("/")}
        >
          Back
        </Button>
      </Paper>
    </Container>
  )
}

export default ProjectInfo
