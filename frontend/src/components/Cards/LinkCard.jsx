import { Button, Chip, Grid2, Stack } from "@mui/material"
import Typography from "@mui/material/Typography"
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined"

const LinkCard = ({ size, link }) => {
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
          variant='h5'
          component='div'
        >
          {link.title}
        </Typography>
        {/* Card Desc */}
        <Typography
          gutterBottom
          sx={{ color: "text.secondary", fontSize: 14 }}
        >
          {link.notes || "No notes available"}
        </Typography>
        {/* Card Tags */}
        <Stack
          direction={"row"}
          spacing={1}
        >
          {link.tags &&
            link.tags.length > 0 &&
            link.tags.map((tag, key) => {
              return (
                <Chip
                  key={key}
                  label={tag}
                  color={"info"}
                  size='small'
                />
              )
            })}
        </Stack>
      </Grid2>
      <Grid2 size={1}>
        <Button
          href={link.url}
          target='_blank'
        >
          Read
          <ArrowOutwardOutlinedIcon />
        </Button>
      </Grid2>
    </Grid2>
  )
}

export default LinkCard
