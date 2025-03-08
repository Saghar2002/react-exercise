import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter , Routes , Route} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/about' element={<div><h3>about</h3></div>}></Route>
    </Routes>
  </BrowserRouter>
    
  </StrictMode>,
)
