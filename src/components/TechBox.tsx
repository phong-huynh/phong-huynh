import { Tooltip } from '@mui/material'
import classNames from 'classnames'

type TechBoxProps = {
  src: string
  name: string
  className?: string
}

export const TechBox = (props: TechBoxProps) => {
  return (
    <Tooltip title={props.name} arrow placement="bottom">
      <div className={classNames('tech-box', props.className)}>
        <img loading="lazy" src={props.src} alt="tech-box" />
      </div>
    </Tooltip>
  )
}
