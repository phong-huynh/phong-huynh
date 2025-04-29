import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Email, LinkedIn } from '../assets'
import { author } from '../configs'

export const ContactPage = memo(() => {
  const { t } = useTranslation()

  return (
    <section id="contact" className="section-container contact-page-container">
      <div className="d-flex flex-column align-items-center justify-content-center flex-fill">
        <p className="mb-0 section-sub-title">{t('get-in-touch')}</p>
        <h1 className="section-title">{t('contact-me')}</h1>

        <div className="contact-info-container">
          <div className="contact-info">
            <img src={Email} alt="email-address" />
            <a href={`mailto:${author.email}`} className="nav-link">
              {author.email}
            </a>
          </div>

          <div className="contact-info">
            <img src={LinkedIn} alt="linked-in" />
            <a href={author.linkedIn} target="_blank" className="nav-link">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <footer className="mb-3">
        <p className="mb-0 copyright-text">
          Copyright &#169; 2025 Phong Huynh. All Rights Reserved.
        </p>
      </footer>
    </section>
  )
})
