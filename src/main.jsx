import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter , RouterProvider } from 'react-router-dom'
// import { BrowserRouter , Routes , Route} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <RouterProvider router={router}/>
  {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/about' element={<div><h3>about</h3></div>}></Route>
    </Routes>
  </BrowserRouter> */}
    
  </StrictMode>,
)
