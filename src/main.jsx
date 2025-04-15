import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { Users } from './components/pages/hooks/Users.jsx'
import  User  from './components/pages/hooks/User.jsx'
import { AddUser } from './components/pages/hooks/AddUser.jsx'
// import { BrowserRouter , Routes , Route} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/user/:userId",
    element: <User />,
  },
  {
    path: "/AddUser",
    element: <AddUser />,
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
