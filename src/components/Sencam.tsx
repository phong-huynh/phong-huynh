import { memo } from 'react'
import { WebDevelopment } from '../assets'

export const Sencam = memo(() => {
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
            <h4 className="mb-0 fw-bold">Sencam</h4>
            <p className="mb-0">
              <i>Freelancer | May 2024 - Jul 2024</i>
            </p>
          </div>

          <button
            onClick={() => window.open('http://sencam.vn')}
            className="expanded-button"
          >
            <img
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
          <p className="mb-0">
            Platform enabling users to download free banner templates or request
            custom banners for personal or business use. Integrated free and
            premium options to provide flexible solutions for individuals and
            organizations seeking high quality banner designs.
          </p>

          {/* <button className="expanded-button">
            <img src={Expanded} alt="expanded" style={{ width: 14 }} />
          </button> */}
        </div>
      </div>
    </div>
  )
})
