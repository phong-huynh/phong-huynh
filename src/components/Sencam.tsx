import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { WebDevelopment } from '../assets'
import SencamThumbnail from '../assets/resizes/sencam.png'

export const Sencam = memo(() => {
  const { t } = useTranslation()

  return (
    <div className="project-card gap-3">
      <div className="project-thumbnail">
        <img src={SencamThumbnail} alt="project-thumbnail" />
      </div>

      <div className="project-info">
        <div className="d-flex justify-content-between align-items-start">
          <div className="mb-2">
            <h4 className="mb-0 fw-bold">Sencam</h4>
            <p className="mb-0">
              <i>Freelancer </i>| <i>{t('sencam-duration')}</i>
            </p>
          </div>

          <button
            onClick={() => window.open('http://sencam.vn')}
            className="expanded-button"
          >
            <img
              loading="lazy"
              src={WebDevelopment}
              alt="web-development"
              style={{ width: 20 }}
            />
          </button>
        </div>

        <div className="tags-container mb-2">
          <p className="mb-0 tag">React.js</p>
          <p className="mb-0 tag">Redux</p>
          <p className="mb-0 tag">Vite</p>
          <p className="mb-0 tag">Ant Design</p>
          <p className="mb-0 tag">GitLab</p>
        </div>

        <div className="d-flex gap-3 align-items-end">
          <p className="mb-0">{t('sencam-summary')}</p>

          {/* <button className="expanded-button">
            <img loading='lazy' src={Expanded} alt="expanded" style={{ width: 14 }} />
          </button> */}
        </div>
      </div>
    </div>
  )
})
