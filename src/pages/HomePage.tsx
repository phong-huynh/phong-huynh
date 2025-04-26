import { memo } from 'react'
import { GitHub, LinkedIn, MyCV } from '../assets'
import Avatar from '../assets/images/avatar.jpg'
import { author } from '../configs'

export const HomePage = memo(() => {
  return (
    <section id="home" className="section-container home-page-container">
      <img src={Avatar} alt="avatar" className="avatar" />

      <div className="my-info-container">
        <p className="mb-0 section-sub-title fw-bold">Hello I'm</p>
        <h1 className="mb-0 section-title">Phong Huynh</h1>
        <p className="my-position">Software Engineer</p>

        <div className="btn-container">
          <button onClick={() => window.open(MyCV)} className="btn btn-color-2">
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (location.href = '#contact')}
          >
            Contact Info
          </button>
        </div>

        <div className="d-flex gap-3">
          <img
            src={LinkedIn}
            alt="linked-in"
            className="cursor-pointer"
            onClick={() => window.open(author.linkedIn)}
          />
          <img
            src={GitHub}
            alt="github"
            className="cursor-pointer"
            onClick={() => window.open(author.github)}
          />
        </div>
      </div>
    </section>
  )
})
