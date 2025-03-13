import { Button, Chip, Grid2, Stack } from "@mui/material"
import Typography from "@mui/material/Typography"
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined"

const QACard = ({ size, qa }) => {
  return (
    <Grid2
      container
      size={size ? size : 12}
      sx={{
        alignItems: "center",
      }}
    >
      <Grid2 size={11}>
        {/* Card Title */}
        <Typography
          // variant='h5'
          component='div'
          sx={{ fontSize: 14, fontWeight: "700" }}
        >
          {qa.question}
        </Typography>
        {/* Card Desc */}
        <Typography
          gutterBottom
          sx={{ color: "text.secondary", fontSize: 14 }}
        >
          {qa.answer || "No answer yet..."}
        </Typography>
        {/* Card Tags */}
        {/* <Stack
          direction={"row"}
          spacing={1}
        >
          {qa.tags &&
            qa.tags.length > 0 &&
            qa.tags.map((tag, key) => {
              return (
                <Chip
                  key={key}
                  label={tag}
                  color={"primary"}
                  size='small'
                />
              )
            })}
        </Stack> */}
      </Grid2>
      <Grid2 size={1}>
        <Button
          href={qa.url}
          target='_blank'
        >
          Read
          <ArrowOutwardOutlinedIcon />
        </Button>
      </Grid2>
    </Grid2>
  )
}

export default QACard
