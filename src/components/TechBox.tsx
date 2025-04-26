import classNames from 'classnames'

type TechBoxProps = {
  src: string
  name?: string
  className?: string
}

export const TechBox = (props: TechBoxProps) => {
  return (
    <div className={classNames('tech-box', props.className)}>
      <img src={props.src} alt="tech-box" />
      {props.name && <p className="mb-0">{props.name}</p>}
    </div>
  )
}
