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
          <div className="position-relative mb-4 overflow-hidden">
            <h5 className="company-name mb-2">
              Oct 2022 - Apr 2025 | Zien Solutions VietNam
            </h5>
            <div className="milestone-tree" />
            <div className="ps-4 position-relative">
              <div className="milestone" />
              <h5 className="project-name">VinaDAO</h5>
              <p className="mb-2 position-name">
                <i>Frontend Developer - Team Leader</i> |{' '}
                <i>Sep 2024 - Apr 2025</i>
              </p>
              <ul className="ps-4">
                <li className="opacity-75">
                  Lead frontend architecture for VinaDAO, integrating blockchain
                  wallets (Wagmi, Viem) and fiat-onramp services (Transak) using
                  React.js
                </li>
                <li className="opacity-75">
                  Built and deployed with AWS Amplify, S3, CI/CD pipelines via
                  GitHub Actions
                </li>
                <li className="opacity-75">
                  Established coding standards and best practices, improving
                  code quality and team efficiency
                </li>
              </ul>
            </div>

            <div className="ps-4 position-relative">
              <div className="milestone" />
              <h5 className="project-name">
                Chrome Extension for Multi-chain Wallet
              </h5>
              <p className="mb-2 position-name">
                <i>Frontend Developer</i> | <i>Nov 2023 – Sep 2024</i>
              </p>
              <ul className="ps-4">
                <li className="opacity-75">
                  Developed a multi-chain wallet Chrome Extension with React.js,
                  integrating MoonPay, Farcaster, WrapCast and TON blockchain
                  ecosystem
                </li>
                <li className="opacity-75">
                  Collaborated with Web3 and Backend teams to optimize cross
                  chain wallet operations and decentralized notifications
                </li>
              </ul>
            </div>

            <div className="ps-4 position-relative">
              <div className="milestone" />
              <h5 className="project-name">Mozanio</h5>
              <p className="mb-2 position-name">
                <i>Mobile Developer </i>|<i> May 2023 – Nov 2023</i>
              </p>
              <ul className="ps-4">
                <li className="opacity-75">
                  Refactored legacy React Native application for Mozanio
                  Vendor/User, improving performance and stability across
                  Android/iOS platforms
                </li>
                <li className="opacity-75">
                  Built new module for menu management and mobile ordering,
                  integrating backend APIs and enhancing user experience
                </li>
              </ul>
            </div>

            <div className="ps-4 position-relative">
              <div className="milestone" />
              <h5 className="project-name">Celeb Confirmed </h5>
              <p className="mb-2 position-name">
                <i>Mobile Developer </i>|<i> Oct 2022 – May 2023</i>
              </p>
              <ul className="ps-4">
                <li className="opacity-75">
                  Developed a React Native mobile app for Korean celebrity news,
                  transforming Figma design into pixel perfect UI components
                </li>
                <li className="opacity-75">
                  Conducted rigorous debugging and optimization, improving app
                  performance and user satisfaction
                </li>
              </ul>
            </div>
          </div>

          <div className="position-relative mb-4 overflow-hidden">
            <h5 className="company-name mb-2">
              Apr 2022 - Jun 2022 | CTY TNHH Ant-Tech
            </h5>
            <div className="milestone-tree" />
            <div className="ps-4 position-relative">
              <div className="milestone" />
              <h5 className="project-name">Internship</h5>
              <p className="mb-2 position-name">
                <i>Mobile Developer Intern</i> | <i>Apr 2022 - Jun 2022</i>
              </p>
              <ul className="ps-4">
                <li className="opacity-75">
                  Developed cross-platform apps using React Native
                </li>
                <li className="opacity-75">
                  Implemented Redux for state management, integrated Firebase
                  for authentication and image storage
                </li>
                <li className="opacity-75">
                  Contributing to real world e-commerce and social media
                  projects
                </li>
              </ul>
            </div>
          </div>

          <div className="position-relative overflow-hidden">
            <h5 className="company-name mb-2">Freelancer</h5>
            <div className="milestone-tree" />
            <div className="ps-4 position-relative">
              <div className="milestone" />
              <h5 className="project-name">
                <a
                  target="_blank"
                  className="text-dark"
                  href="http://sencam.vn"
                >
                  Sencam
                </a>
              </h5>
              <p className="mb-2 position-name">
                <i>Frontend Developer</i> | <i>May 2024 - Jun 2024</i>
              </p>
              <ul className="ps-4">
                <li className="opacity-75">
                  Delivered a fully responsive web application using React.js
                  and Strapi CMS
                </li>
                <li className="opacity-75">
                  Managed end to end deployment pipeline including build
                  optimization and production release
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ flex: 4 }}>
          <Masonry
            columns={{ xs: 2, sm: 3, md: 3, lg: 4, xl: 5 }}
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
            <TechBox
              src={Tech.AWS}
              className="aws"
              name="Amazon Web Services"
            />
            <TechBox src={Tech.Ethers} name="Ethers" />
            <TechBox src={Tech.Wagmi} className="wagmi" name="Wagmi" />
            <TechBox src={Tech.Viem} name="Viem" />
            <TechBox src={Tech.Ethereum} name="Ethereum" />
            <TechBox src={Tech.Zksync} className="zkSync" name="zkSync" />
            <TechBox src={Tech.Arbitrum} name="Arbitrum" />
            <TechBox src={Tech.MoonPay} className="moonpay" name="MoonPay" />
            <TechBox src={Tech.TON} name="The Open Network" />
            <TechBox src={Tech.WalletConnect} name="Wallet Connect" />
            <TechBox src={Tech.Transak} className="transak" name="Transak" />
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
