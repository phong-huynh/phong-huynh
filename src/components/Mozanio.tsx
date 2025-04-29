import { memo } from 'react'
import { MobilePhone } from '../assets'
import MozanioThumbnail from '../assets/resizes/no-image.png'

export const Mozanio = memo(() => {
  return (
    <div className="project-card gap-3">
      <div className="project-thumbnail">
        <img src={MozanioThumbnail} alt="project-thumbnail" />
      </div>

      <div className="project-info">
        <div className="d-flex justify-content-between align-items-start">
          <div className="mb-2">
            <h4 className="mb-0 fw-bold">Mozanio</h4>
            <p className="mb-0">
              <i>Zien Solutions Vietnam </i>| <i>May 2023 - Nov 2023</i>
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
          <p className="mb-0">
            Mobile app streamlining coffee shop operations through integrated
            menu management, inventory tracking, and order processing to enhance
            business efficiency and customer engagement
          </p>

          {/* <button className="expanded-button">
            <img loading='lazy' src={Expanded} alt="expanded" style={{ width: 14 }} />
          </button> */}
        </div>
      </div>
    </div>
  )
})
