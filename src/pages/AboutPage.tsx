import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import * as Techs from '../assets'
import AboutPic from '../assets/resizes/about.jpg'

export const AboutPage = memo(() => {
  const { t } = useTranslation()

  return (
    <section id="about" className="section-container about-page-container">
      <div className="d-flex flex-column align-items-center mb-3">
        <p className="mb-0 section-sub-title">{t('good-to-know-more')}</p>
        <h1 className="section-title">{t('about-me')}</h1>
      </div>

      <div className="about-page-content">
        <div className="portrait-wrapper">
          <img src={AboutPic} />
        </div>
        <div className="info-wrapper">
          <p className="fs-5">{t('objectives')}</p>

          <div className="my-jobs-container">
            <div className="left-jobs">
              <div className="job-card">
                <div className="d-flex mb-2 gap-3 align-items-center">
                  <img
                    loading="lazy"
                    src={Techs.MobilePhone}
                    alt="mobile-phone"
                  />
                  <h5 className="mb-0 fw-bold">
                    {t('mobile-applications-development')}
                  </h5>
                </div>
                <p className="mb-0">
                  {t('mobile-applications-development-description')}
                </p>
              </div>

              <div className="job-card">
                <div className="d-flex mb-2 gap-3 align-items-center">
                  <img
                    loading="lazy"
                    src={Techs.WebDevelopment}
                    alt="website-development"
                  />
                  <h5 className="mb-0 fw-bold">{t('websites-development')}</h5>
                </div>
                <p className="mb-0">{t('websites-development-description')}</p>
              </div>
            </div>

            <div className="right-jobs">
              <div className="job-card">
                <div className="d-flex mb-2 gap-3 align-items-center">
                  <img src={Techs.Blockchain} alt="blockchain" />
                  <h5 className="mb-0 fw-bold">{t('blockchain')}</h5>
                </div>
                <p className="mb-0">{t('blockchain-description')}</p>
              </div>

              <div className="job-card">
                <div className="d-flex mb-2 gap-3 align-items-center">
                  <img
                    loading="lazy"
                    src={Techs.BackendDevelopment}
                    alt="backend-development"
                  />
                  <h5 className="mb-0 fw-bold">{t('backend-development')}</h5>
                </div>
                <p className="mb-0">{t('backend-development-description')}</p>
              </div>

              <div className="job-card">
                <div className="d-flex mb-2 gap-3 align-items-center">
                  <img
                    loading="lazy"
                    src={Techs.Education}
                    alt="backend-development"
                  />
                  <h5 className="mb-0 fw-bold">{t('education')}</h5>
                </div>
                <p className="mb-0">{t('education-school')}</p>
                <p>{t('education-gpa')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
