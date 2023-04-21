import { useState } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import App from './App'
import emoji from 'react-easy-emoji'

function Overlay() {
  const [ready, set] = useState(false)
  return (
    <>
      {ready && <App />}
      <div className={`fullscreen bg ${ready ? 'ready' : 'notready'} ${ready && 'clicked'}`}>
        <div className="stack">
          <button onClick={() => set(true)}><img wdith={127.2} height={127.2} src="/saylss-icon.png" /></button>
        </div>

      </div>
      <div className='pmndrs-menu' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img width={300} height={100} src="/logo.png" />
       
      </div>
      <div className='pmndrs-menu-btm'>
          <a href="https://huggingface.co/SaylssHFORG" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
            {emoji('🤫')}
          </a>

          <a href="" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
            {emoji('🕹️')}
          </a>

          <a href="https://github.com/Saylss-Dev-Org" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
            {emoji('🐱')}
          </a>

          <a href="https://github.com/Saylss-Dev-Org" target="_blank" rel="noopener noreferrer">
            {emoji('💻')}
          </a>
        </div>


      {/* <Footer /> */}
    </>
  )
}

ReactDOM.render(<Overlay />, document.getElementById('root'))
