import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { MobilePhone } from '../assets'
import CelebConfirmedThumbnail from '../assets/resizes/celeb-confirmed.png'

export const CelebConfirmed = memo(() => {
  const { t } = useTranslation()

  return (
    <div className="project-card gap-3">
      <div className="project-thumbnail">
        <img
          loading="lazy"
          src={CelebConfirmedThumbnail}
          alt="project-thumbnail"
        />
      </div>

      <div className="project-info">
        <div className="d-flex justify-content-between align-items-start">
          <div className="mb-2">
            <h4 className="mb-0 fw-bold">Celeb Confirmed</h4>
            <p className="mb-0">
              <i>Zien Solutions Vietnam</i> |{' '}
              <i> {t('celeb-confirmed-duration')}</i>
            </p>
          </div>

          <button disabled className="expanded-button">
            <img
              loading="lazy"
              src={MobilePhone}
              alt="web-development"
              style={{ width: 15 }}
            />
          </button>
        </div>

        <div className="tags-container mb-2">
          <p className="mb-0 tag">React Native</p>
          <p className="mb-0 tag">Redux</p>
          <p className="mb-0 tag">Figma</p>
          <p className="mb-0 tag">Axios</p>
          <p className="mb-0 tag">Xcode</p>
          <p className="mb-0 tag">Android Studio</p>
          <p className="mb-0 tag">Postman</p>
          <p className="mb-0 tag">Firebase</p>
          <p className="mb-0 tag">Git</p>
        </div>

        <div className="d-flex gap-3 align-items-end">
          <p className="mb-0">{t('celeb-confirmed-summary')}</p>

          {/* <button className="expanded-button">
            <img loading='lazy' src={Expanded} alt="expanded" style={{ width: 14 }} />
          </button> */}
        </div>
      </div>
    </div>
  )
})
