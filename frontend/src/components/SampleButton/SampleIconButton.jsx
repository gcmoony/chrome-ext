import { IconButton } from "@mui/material"
import Icon from "@mdi/react"
import { mdiBlackMesa } from "@mdi/js"

const SampleIconButton = () => {
  return (
    <IconButton color='error'>
      <Icon
        path={mdiBlackMesa}
        size={1}
        aria-label='Description of Button'
      ></Icon>
    </IconButton>
  )
}

export default SampleIconButton
