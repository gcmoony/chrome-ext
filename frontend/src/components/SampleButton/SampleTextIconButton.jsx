import { Button } from "@mui/material"
import Icon from "@mdi/react"
import { mdiTrashCan } from "@mdi/js"

const SampleTextIconButton = () => {
  return (
    <Button>
      <Icon
        path={mdiTrashCan}
        size={1}
        aria-label='Description of Button'
      ></Icon>
      Text
    </Button>
  )
}

export default SampleTextIconButton
