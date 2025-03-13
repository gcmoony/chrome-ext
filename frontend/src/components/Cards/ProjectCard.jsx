import { Button, Chip, Grid2, Stack } from "@mui/material"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined"

const ProjectCard = ({ size, project }) => {
  return (
    <Grid2 size={size ? size : 12}>
      <Card>
        <CardContent>
          {/* Card Title */}
          <Typography
            variant='h5'
            component='div'
          >
            {project.name}
          </Typography>
          {/* Card Desc */}
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {project.desc || "No description available"}
          </Typography>
          {/* Card Tags */}
          <Stack
            direction={"row"}
            spacing={1}
          >
            {project.tags &&
              project.tags.length > 0 &&
              project.tags.map((tag, key) => {
                return (
                  <Chip
                    color={"info"}
                    key={key}
                    label={tag}
                    size='small'
                  />
                )
              })}
          </Stack>
        </CardContent>
        {/* A button for the card */}
        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button
            sx={{ textAlign: "center" }}
            href={`/${project._id}/info`}
            onClick={() => console.log(project)}
          >
            Learn More
            <ArrowForwardOutlinedIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid2>
  )
}

export default ProjectCard
