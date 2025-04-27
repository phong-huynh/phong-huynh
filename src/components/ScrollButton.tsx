import classNames from 'classnames'
import { useCallback, useState } from 'react'
import { ArrowDown } from '../assets'

const ScrollMap = {
  home: '#about',
  about: '#experience',
  experience: '#project',
  project: '#contact',
  contact: '#home',
}

export const ScrollButton = () => {
  const [pathname, setPathname] = useState('home')

  const _onClick = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    location.href = ScrollMap[pathname]
  }, [pathname])

  window.addEventListener('hashchange', (payload) => {
    setPathname(payload.newURL.split('#')[1])
  })

  window.addEventListener('scroll', (payload) => {
    console.log({ payload: payload })
  })

  return (
    <button onClick={_onClick} className="scroll-button">
      <ArrowDownIcon
        className={classNames({
          'rotate-arrow-icon': pathname === 'contact',
        })}
      />
    </button>
  )
}

const ArrowDownIcon = (props: { className?: string }) => {
  return (
    <img
      loading="lazy"
      src={ArrowDown}
      alt="arrow-down"
      className={classNames(props.className)}
    />
  )
}
