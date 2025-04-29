import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { GitHub, LinkedIn, MyCV, VnFlag } from '../assets'
import Avatar from '../assets/resizes/avatar.jpg'
import { author } from '../configs'

export const HomePage = memo(() => {
  const { t } = useTranslation()

  return (
    <section id="home" className="section-container home-page-container">
      <img src={Avatar} alt="avatar" className="avatar" />

      <div className="my-info-container">
        <p className="mb-0 section-sub-title fw-bold">{t('hello-i-am')}</p>
        <h1 className="mb-0 section-title">Phong Huynh</h1>
        <p className="my-position">{t('software-engineer')}</p>

        <div className="btn-container">
          <button onClick={() => window.open(MyCV)} className="btn btn-color-2">
            {t('download-cv')}
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (location.href = '#contact')}
          >
            {t('contact-info')}
          </button>
        </div>

        <div className="d-flex gap-3 align-items-center">
          <img
            loading="lazy"
            src={LinkedIn}
            alt="linked-in"
            className="cursor-pointer"
            onClick={() => window.open(author.linkedIn)}
          />

          <img src={VnFlag} className="vn-flag" alt="vn-flag" />

          <img
            loading="lazy"
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
