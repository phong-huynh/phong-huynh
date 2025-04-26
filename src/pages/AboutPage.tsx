import { memo } from 'react'
import * as Techs from '../assets'
import AboutPic from '../assets/images/about.jpg'

export const AboutPage = memo(() => {
  return (
    <section id="about" className="section-container about-page-container">
      <div className="d-flex flex-column align-items-center mb-3">
        <p className="mb-0 section-sub-title">Good To Know More</p>
        <h1 className="section-title">About Me</h1>
      </div>

      <div className="about-page-content">
        <div className="portrait-wrapper">
          <img src={AboutPic} />
        </div>
        <div className="info-wrapper">
          <p className="fs-5">
            Software Engineer with 2.5+ years of experience building responsive
            web and mobile applications using React.js and React Native with
            strong interest and hands-on experience in Web3/blockchain
            integration. Proficient in modern JavaScript/TypeScript frameworks,
            UI development and API integration. Comfortable collaborating with
            backend systems and deploying full-stack solutions.
          </p>

          <div className="my-jobs-container">
            <div className="left-jobs">
              <div className="job-card">
                <div className="d-flex mb-2 gap-3 align-items-center">
                  <img src={Techs.MobilePhone} alt="mobile-phone" />
                  <h5 className="mb-0 fw-bold">
                    Mobile Applications Development
                  </h5>
                </div>
                <p className="mb-0">
                  Developed cross-platform mobile applications with a strong
                  focus on clean UI, smooth UX and responsive design
                </p>
              </div>

              <div className="job-card">
                <div className="d-flex mb-2 gap-3 align-items-center">
                  <img src={Techs.WebDevelopment} alt="website-development" />
                  <h5 className="mb-0 fw-bold">Websites Development</h5>
                </div>
                <p className="mb-0">
                  Aspiring Frontend Developer with blockchain technologies.
                  Aiming to build efficient, user-friendly web apps integrating
                  Web3 and Smart Contracts
                </p>
              </div>
            </div>

            <div className="right-jobs">
              <div className="job-card">
                <div className="d-flex mb-2 gap-3 align-items-center">
                  <img src={Techs.Blockchain} alt="blockchain" />
                  <h5 className="mb-0 fw-bold">Blockchain</h5>
                </div>
              </div>

              <div className="job-card">
                <div className="d-flex mb-2 gap-3 align-items-center">
                  <img
                    src={Techs.BackendDevelopment}
                    alt="backend-development"
                  />
                  <h5 className="mb-0 fw-bold">Backend Development</h5>
                </div>
              </div>

              <div className="job-card">
                <div className="d-flex mb-2 gap-3 align-items-center">
                  <img src={Techs.Education} alt="backend-development" />
                  <h5 className="mb-0 fw-bold">Education</h5>
                </div>
                <p className="mb-0">
                  Software Engineering | Cao Thang Technical College
                </p>
                <p>Sep 2019 - Sep 2022 | GPA 7.6 / 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
