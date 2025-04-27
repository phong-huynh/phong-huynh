import { Box, Drawer } from '@mui/material'
import { useState } from 'react'
import { BreadIcon, GitHub, LinkedIn } from './assets'
import { ScrollButton } from './components'
import { author } from './configs'
import {
  AboutPage,
  ContactPage,
  ExperiencePage,
  HomePage,
  ProjectPage,
} from './pages'

export const App = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => setOpen((prev) => !prev)

  return (
    <div className="app-container position-relative">
      <nav className="nav-bar-container">
        <a href="#home" className="logo">
          Phong Huynh
        </a>

        <div className="nav-links-container">
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#experience">
            Experience
          </a>
          <a className="nav-link" href="#project">
            Project
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </div>

        <div onClick={toggleDrawer} className="menu-icon-container">
          <img src={BreadIcon} alt="menu-icon" />
        </div>
      </nav>

      <HomePage />
      <AboutPage />
      <ExperiencePage />
      <ProjectPage />
      <ContactPage />

      <ScrollButton />

      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box width={200} className="drawer-nav-links">
          <div className="nav-links-container">
            <a onClick={toggleDrawer} className="nav-link mb-3" href="#home">
              Phong Huynh
            </a>
            <a onClick={toggleDrawer} className="nav-link" href="#about">
              About
            </a>
            <a onClick={toggleDrawer} className="nav-link" href="#experience">
              Experience
            </a>
            <a onClick={toggleDrawer} className="nav-link" href="#project">
              Project
            </a>
            <a onClick={toggleDrawer} className="nav-link" href="#contact">
              Contact
            </a>
          </div>

          <div className="d-flex gap-3 align-self-center">
            <img
              loading="lazy"
              src={LinkedIn}
              alt="linked-in"
              className="cursor-pointer"
              onClick={() => window.open(author.linkedIn)}
            />
            <img
              loading="lazy"
              src={GitHub}
              alt="github"
              className="cursor-pointer"
              onClick={() => window.open(author.github)}
            />
          </div>
        </Box>
      </Drawer>
    </div>
  )
}
