import { Button } from "@mui/material"
import Icon from "@mdi/react"
import { mdiRefresh } from "@mdi/js"

const RefreshButton = ({ clickFunction, sx, varient }) => {
  return (
    <Button
      onClick={clickFunction}
      sx={sx}
      variant={varient}
    >
      <Icon
        path={mdiRefresh}
        size={1}
        aria-label='Refresh Projects'
      ></Icon>
      Refresh
    </Button>
  )
}

export default RefreshButton
