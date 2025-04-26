import { memo } from 'react'
import { WebDevelopment } from '../assets'
import VinaDAOThumbnail from '../assets/images/vinadao.png'

export const VinaDAO = memo(() => {
  return (
    <div className="project-card gap-3">
      <div className="project-thumbnail">
        <img src={VinaDAOThumbnail} alt="project-thumbnail" />
      </div>

      <div className="project-info">
        <div className="d-flex justify-content-between align-items-start">
          <div className="mb-2">
            <h4 className="mb-0 fw-bold">VinaDAO</h4>
            <p className="mb-0">
              <i>Zien Solutions Vietnam | Sep 2024 - Apr 2025</i>
            </p>
          </div>

          <button
            onClick={() => window.open('http://vinadao.io')}
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
          <p className="mb-0 tag">MUI</p>
          <p className="mb-0 tag">Wagmi</p>
          <p className="mb-0 tag">Tanstack</p>
          <p className="mb-0 tag">Web3Auth</p>
          <p className="mb-0 tag">Graphql</p>
          <p className="mb-0 tag">AWS</p>
          <p className="mb-0 tag">Github Actions</p>
        </div>

        <div className="d-flex gap-3 align-items-end">
          <p className="mb-0">
            VinaDAO is a decentralized real estate investment platform that
            harnesses the power of blockchain technology to ensure secure,
            transparent, and efficient transactions, revolutionizing the way
            real estate investments are made.
          </p>

          {/* <button className="expanded-button">
            <img src={Expanded} alt="expanded" style={{ width: 14 }} />
          </button> */}
        </div>
      </div>
    </div>
  )
})
