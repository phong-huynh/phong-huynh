import { memo } from 'react'
import { MobilePhone } from '../assets'

export const CelebConfirmed = memo(() => {
  return (
    <div className="project-card gap-3">
      <div className="project-thumbnail">
        <img
          src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg"
          alt="project-thumbnail"
        />
      </div>

      <div className="project-info">
        <div className="d-flex justify-content-between align-items-start">
          <div className="mb-2">
            <h4 className="mb-0 fw-bold">Celeb Confirmed</h4>
            <p className="mb-0">
              <i>Zien Solutions Vietnam | Oct 2022 - May 2023</i>
            </p>
          </div>

          <button disabled className="expanded-button">
            <img
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
            Mobile app providing the latest news and updates about popular
            Korean celebrities. The app allows users to stay informed with real
            time news, interviews and insights into the lives of their favorite
            stars. Creating a dedicated platform for K-pop fans and celebrity
            enthusiasts.
          </p>

          {/* <button className="expanded-button">
            <img src={Expanded} alt="expanded" style={{ width: 14 }} />
          </button> */}
        </div>
      </div>
    </div>
  )
})
