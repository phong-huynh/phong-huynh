import { Masonry } from '@mui/lab'
import { memo } from 'react'
import * as Tech from '../assets'
import { TechBox } from '../components'

export const ExperiencePage = memo(() => {
  return (
    <section
      id="experience"
      className="section-container experience-page-container"
    >
      <div className="d-flex flex-column align-items-center mb-3">
        <p className="mb-0 section-sub-title">Explore My</p>
        <h1 className="section-title">Experiences</h1>
      </div>

      <div className="experience-page-content">
        <div
          className="flex-1 position-relative height-fit-content"
          style={{ flex: 6 }}
        >
          <div className="milestone-tree" />
          <div style={{ height: 20 }} />

          <div className="mb-5 ps-4 position-relative">
            <div className="milestone" />
            <h5 className="position-name">Software Engineer</h5>
            <p className="mb-2">
              <i>Zien Solutions VietNam | Oct 2022 - Apr 2025</i>
            </p>
            <ul className="mb-0 ps-3" style={{ listStyleType: 'square' }}>
              <li className="mb-2">
                <p className="project-name">VinaDAO | Sep 2024 - Apr 2025</p>
                <ul className="ps-4">
                  <li className="opacity-75">
                    Built responsive and reusable interfaces using React.js
                  </li>
                  <li className="opacity-75">
                    Integrated real time blockchain data, crypto wallets, and
                    smart contracts with Wagmi and Viem
                  </li>
                  <li className="opacity-75">
                    Integrated Transak for fiat to crypto token purchases
                  </li>
                  <li className="opacity-75">
                    Configured CI/CD pipelines using GitHub Actions and deployed
                    via AWS (Amplify, S3, Secrets Manager)
                  </li>
                  <li className="opacity-75">
                    Participated in Agile sprints, performed code reviews, and
                    resolved critical frontend bugs
                  </li>
                  <li className="opacity-75">
                    Established frontend best practices for component design,
                    styling and code consistency
                  </li>
                </ul>
              </li>

              <li className="mb-2">
                <p className="project-name">
                  Internal Chrome Extension | Nov 2023 - Sep 2024
                </p>
                <ul className="ps-4">
                  <li className="opacity-75">
                    Built and maintained a React.js Chrome Extension for multi
                    chain wallet connection, token swaps, purchases and NFT
                    viewing across EVM compatible chains
                  </li>
                  <li className="opacity-75">
                    Integrated MoonPay for fiat based token purchases
                  </li>
                  <li className="opacity-75">
                    Embedded Farcaster and WrapCast for decentralized social
                    layers, added real time wallet based notifications via
                    Daylight
                  </li>
                  <li className="opacity-75">
                    Integrated the TON ecosystem and worked with Web3/backend
                    teams to ensure secure and efficient cross chain operations
                  </li>
                </ul>
              </li>

              <li className="mb-2">
                <p className="project-name">Mozanio | May 2023 - Nov 2023</p>
                <ul className="ps-4">
                  <li className="opacity-75">
                    Maintained and refactored legacy React Native code to boost
                    stability and performance
                  </li>
                  <li className="opacity-75">
                    Developed new features for menu management and in app coffee
                    ordering
                  </li>
                  <li className="opacity-75">
                    Integrated backend APIs for inventory and order processing
                  </li>
                  <li className="opacity-75">
                    Participated in testing and preparing app releases for both
                    Android and iOS
                  </li>
                </ul>
              </li>

              <li>
                <p className="project-name">
                  Celeb Confirmed | Oct 2022 - May 2023
                </p>
                <ul className="ps-4">
                  <li className="opacity-75">
                    Collaborated in developing a React Native mobile app
                    delivering Korean celebrity news content
                  </li>
                  <li className="opacity-75">
                    Transformed Figma designs into pixel perfect, responsive UI
                    components across Android and iOS platforms
                  </li>
                  <li className="opacity-75">
                    Participated in debugging and resolving UI/UX issues to
                    improve app stability
                  </li>
                  <li className="opacity-75">
                    Assisted in preparing and submitting builds for internal
                    testing environments
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-5 ps-4 position-relative">
            <div className="milestone" />
            <h5 className="position-name">Mobile Developer - Internship</h5>
            <p className="mb-2">
              <i>CTY TNHH Ant-Tech | Apr 2022 - Jun 2022</i>
            </p>
            <ul className="mb-0 ps-3">
              <li className="opacity-75">
                Developed cross-platform apps using React Native
              </li>
              <li className="opacity-75">
                Implemented Redux for state management and integrated Firebase
                for authentication and image storage
              </li>
              <li className="opacity-75">
                Contributing to real-world e-commerce and social media projects
              </li>
            </ul>
          </div>

          <div className="ps-4 position-relative">
            <div className="milestone" />
            <h5 className="position-name">Others</h5>
            <p className="mb-2">
              <i>Here are some projects I’ve worked on and contributed to</i>
            </p>
            <ul className="mb-0 ps-3" style={{ listStyleType: 'square' }}>
              <li className="mb-2">
                <p className="project-name">
                  <a
                    href="https://sencam.vn"
                    target="_blank"
                    className="text-dark"
                  >
                    Sencam
                  </a>{' '}
                  | May 2024 - Jul 2024
                </p>
                <ul className="ps-4">
                  <li className="opacity-75">
                    Designed and developed a responsive website using React.js,
                    enabling users to download and request custom banners for
                    festivals, commemorative days, and public organizations
                  </li>
                  <li className="opacity-75">
                    Integrated frontend with Strapi CMS via RESTful APIs to
                    manage dynamic content
                  </li>
                  <li className="opacity-75">
                    Managed the full deployment process, including build
                    optimization and release to production environment
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div style={{ height: 20 }} />
        </div>

        <div style={{ flex: 4 }}>
          <Masonry
            columns={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 3 }}
            spacing={2}
            className="m-0"
          >
            <TechBox src={Tech.JavaScript} name="JavaScript" />
            <TechBox src={Tech.TypeScript} name="TypeScript" />
            <TechBox src={Tech.ReactJs} name="React.js" />
            <TechBox src={Tech.ReactNative} name="React Native" />
            <TechBox src={Tech.Redux} name="Redux" />
            <TechBox src={Tech.HTML5} name="HTML5" />
            <TechBox src={Tech.CSS3} name="CSS3" />
            <TechBox src={Tech.Bootstrap} name="Bootstrap" />
            <TechBox src={Tech.Sass} name="Sass" />
            <TechBox src={Tech.Antd} name="Ant Design" />
            <TechBox src={Tech.MUI} name="Material UI" />
            <TechBox src={Tech.Axios} name="Axios" />
            <TechBox src={Tech.Tanstack} name="Tanstack" />
            <TechBox src={Tech.Postman} name="Postman" />
            <TechBox src={Tech.Swagger} name="Swagger" />
            <TechBox src={Tech.Graphql} name="Graphql" />
            <TechBox src={Tech.Figma} name="Figma" />
            <TechBox src={Tech.Sketch} name="Sketch" />
            <TechBox src={Tech.Vite} name="Vite" />
            <TechBox src={Tech.Jest} name="Jest" />
            <TechBox src={Tech.Git} name="Git" />
            <TechBox src={Tech.GitHub} name="GitHub" />
            <TechBox src={Tech.GitHubActions} name="GitHub Actions" />
            <TechBox src={Tech.NodeJs} name="Node.js" />
            <TechBox src={Tech.ExpressJs} name="Express.js" />
            <TechBox src={Tech.AWS} className="aws" />
            <TechBox src={Tech.Ethers} name="Ethers" />
            <TechBox src={Tech.Wagmi} className="wagmi" />
            <TechBox src={Tech.Viem} name="Viem" />
            <TechBox src={Tech.Ethereum} name="Ethereum" />
            <TechBox src={Tech.Zksync} className="zkSync" />
            <TechBox src={Tech.Arbitrum} name="Arbitrum" />
            <TechBox src={Tech.MoonPay} className="moonpay" />
            <TechBox src={Tech.TON} name="TON" />
            <TechBox src={Tech.WalletConnect} name="Wallet Connect" />
            <TechBox src={Tech.Transak} className="transak" />
            <TechBox src={Tech.Web3Auth} name="Web3Auth" />
            <TechBox src={Tech.Farcaster} name="Farcaster" />
            <TechBox src={Tech.Firebase} name="Firebase" />
            <TechBox src={Tech.XCode} name="Xcode" />
            <TechBox src={Tech.AndroidStudio} name="Android Studio" />
            <TechBox src={Tech.VSCode} name="VS Code" />
            <TechBox src={Tech.Yarn} name="Yarn" />
            <TechBox src={Tech.Gitlab} name="GitLab" />
            <TechBox src={Tech.Docker} name="Docker" />
          </Masonry>
        </div>
      </div>
    </section>
  )
})
