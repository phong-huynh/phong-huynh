import { Masonry } from '@mui/lab'
import * as Tech from '../assets'
import { TechBox } from '../components'
import { memo } from 'react'

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
          style={{ flex: 4 }}
        >
          <div className="milestone-tree" />
          <div style={{ height: 20 }} />

          <div className="mb-5 ps-4 position-relative">
            <div className="milestone" />
            <h5 className="mb-0 fw-bold">Software Engineer</h5>
            <p className="mb-2">
              <i>Zien Solutions VietNam | Oct 2022 - Apr 2025</i>
            </p>
            <ul>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum animi minus provident fuga saepe perferendis est
                possimus dolor, debitis doloribus aperiam nam mollitia
                blanditiis beatae quidem voluptatibus laborum hic eaque?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                eius quasi dolorum praesentium blanditiis ducimus rerum iste
                commodi sunt veritatis aperiam, dolores quaerat possimus unde
                alias esse optio delectus voluptatem.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corrupti, aut consequuntur dolorem vitae impedit error
                temporibus aliquid ullam quia natus laborum perferendis
                voluptatem iusto sapiente, quam eveniet, provident quod
                laudantium.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem alias, eligendi minus, laboriosam autem quasi
                rerum corporis non tenetur et iste. Id repellendus quam corrupti
                iure quis veritatis, porro sapiente.
              </li>
            </ul>
          </div>

          <div className="ps-4 position-relative">
            <div className="milestone" />
            <h5 className="mb-0 fw-bold">Mobile Developer - Internship</h5>
            <p className="mb-2">
              <i>CTY TNHH Ant-Tech | Apr 2022 - Jun 2022</i>
            </p>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                et qui, velit totam dolores ipsa pariatur tempora nostrum
                eligendi ducimus perferendis repudiandae odio, nisi quo sunt ad
                earum. A, illum!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus ad maiores debitis neque ipsam praesentium dolorem,
                quia nesciunt quidem officia quo maxime commodi eaque
                perspiciatis incidunt facere voluptates dicta voluptas.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                odit consectetur, cumque, quae aliquam optio natus voluptatum
                blanditiis ea tempora tenetur illum quasi animi placeat sunt.
                Vel sit nobis veniam.
              </li>
            </ul>
          </div>

          <div style={{ height: 20 }} />
        </div>

        <div style={{ flex: 6 }}>
          <Masonry
            columns={{ xs: 2, sm: 3, md: 3, lg: 5 }}
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
