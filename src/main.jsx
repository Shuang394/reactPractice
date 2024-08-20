import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Words from './myComponent.jsx'
import { MyPicture } from './myComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyPicture />
  </StrictMode>,
)
