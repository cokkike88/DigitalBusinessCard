import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import emailLogo from './assets/Mail.svg'
import linkedInLogo from './assets/linkedin.svg'
import twitterIcon from './assets/TwitterIcon.svg'
import facebookIcon from './assets/FacebookIcon.svg'
import instagramIcon from './assets/InstagramIcon.svg'
import githubIcon from './assets/GitHubIcon.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <body>
        <div className="container">
          <div className="picture"></div>
          <div className="information">
            <div className="name">Laura Smith</div>
            <div className="job">Frontend Developer</div>
            <div className="webSite">laurasmith.website</div>
            <div className="buttons">
              <button type="button" className="email">
                <div className="buttonContent">
                  <img src={emailLogo} alt=""/>
                  <div className='buttonText'>Email</div>
                </div>                
              </button>
              <button type="button" className="linkedIn">
                <div className="buttonContent">
                  <img src={linkedInLogo} alt="" />
                  <div className='buttonText linkedinText'>LinkedIn</div>
                </div>
              </button>
            </div>
            <div className="about">About</div>
            <div className="contents">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>
            <div className="interests">Interests</div>
            <div className="contents">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</div>
          </div>
          <div className="socialMedia">   
            <img className='socialMediaIcon' src={twitterIcon} alt="" />
            <img className='socialMediaIcon' src={facebookIcon} alt="" />
            <img className='socialMediaIcon' src={instagramIcon} alt="" />
            <img className='socialMediaIcon' src={githubIcon} alt="" />
          </div>

        </div>
      </body>


      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
