import { TabContext, TabPanel } from '@mui/lab'
import { Tab, Tabs } from '@mui/material'
import { memo, SyntheticEvent, useState } from 'react'
import {
  CelebConfirmed,
  InternalChromeExtension,
  Mozanio,
  Sencam,
  VinaDAO,
} from '../components'

export const ProjectPage = memo(() => {
  const [value, setValue] = useState('all')

  const handleChange = (_: SyntheticEvent, tab: string) => setValue(tab)

  return (
    <section id="project" className="section-container project-page-container">
      <div className="d-flex flex-column align-items-center">
        <p className="mb-0 section-sub-title">Browse My Recent</p>
        <h1 className="section-title">Projects</h1>
      </div>

      <TabContext value={value}>
        <Tabs value={value} onChange={handleChange}>
          <Tab value="all" label="All" />
          <Tab value="websites" label="Websites" />
          <Tab value="mobile-apps" label="Mobile Apps" />
        </Tabs>
        <TabPanel value="all">
          <AllProjectPanel />
        </TabPanel>
        <TabPanel value="websites">
          <WebsitePanel />
        </TabPanel>
        <TabPanel value="mobile-apps">
          <MobileAppPanel />
        </TabPanel>
      </TabContext>
    </section>
  )
})

const AllProjectPanel = memo(() => {
  return (
    <div className="py-2 all-projects-panel">
      <VinaDAO />
      <InternalChromeExtension />
      <Mozanio />
      <CelebConfirmed />
      <Sencam />
    </div>
  )
})

const WebsitePanel = memo(() => {
  return (
    <div className="py-2 websites-panel">
      <VinaDAO />
      <InternalChromeExtension />
      <Sencam />
    </div>
  )
})

const MobileAppPanel = memo(() => {
  return (
    <div className="py-2 mobile-apps-panel">
      <Mozanio />
      <CelebConfirmed />
    </div>
  )
})
