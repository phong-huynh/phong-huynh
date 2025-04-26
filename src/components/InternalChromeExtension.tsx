import { memo } from 'react'
import { WebDevelopment } from '../assets'

export const InternalChromeExtension = memo(() => {
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
            <h4 className="mb-0 fw-bold">Internal Chrome Extension</h4>
            <p className="mb-0">
              <i>Zien Solutions Vietnam | Nov 2023 - Sep 2024</i>
            </p>
          </div>

          <button disabled className="expanded-button">
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
          <p className="mb-0 tag">Viem</p>
          <p className="mb-0 tag">Wagmi</p>
          <p className="mb-0 tag">MoonPay</p>
          <p className="mb-0 tag">WalletConnect</p>
          <p className="mb-0 tag">Farcaster</p>
          <p className="mb-0 tag">TON</p>
          <p className="mb-0 tag">Sketch</p>
        </div>

        <div className="d-flex gap-3 align-items-end">
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            laudantium quos voluptatem vero consequuntur
          </p>

          {/* <button className="expanded-button">
            <img src={Expanded} alt="expanded" style={{ width: 14 }} />
          </button> */}
        </div>
      </div>
    </div>
  )
})
