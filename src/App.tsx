import { Box, Drawer } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BreadIcon, CloseIcon, GitHub, LinkedIn } from './assets'
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
  const { t } = useTranslation()
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
            {t('about')}
          </a>
          <a className="nav-link" href="#experience">
            {t('experience')}
          </a>
          <a className="nav-link" href="#project">
            {t('project')}
          </a>
          <a className="nav-link" href="#contact">
            {t('contact')}
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
        <Box
          maxWidth={350}
          width={window.innerWidth * 0.5}
          className="drawer-nav-links"
        >
          <div className="nav-links-container">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <img
                src={CloseIcon}
                onClick={toggleDrawer}
                className="close-icon cursor-pointer"
                alt="close-icon"
              />
            </div>
            <a onClick={toggleDrawer} className="nav-link mb-3" href="#home">
              Phong Huynh
            </a>
            <a onClick={toggleDrawer} className="nav-link" href="#about">
              {t('about')}
            </a>
            <a onClick={toggleDrawer} className="nav-link" href="#experience">
              {t('experience')}
            </a>
            <a onClick={toggleDrawer} className="nav-link" href="#project">
              {t('project')}
            </a>
            <a onClick={toggleDrawer} className="nav-link" href="#contact">
              {t('contact')}
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
