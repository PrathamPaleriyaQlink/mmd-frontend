import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import RootLayout from './layouts/RootLayout'
import NotFound from './pages/NotFound'
import Auth from './pages/Auth'
import Begin from './pages/Begin'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route element={<RootLayout/>}>
              <Route path="" element={<Main />}/>
            </Route>
            <Route path="auth" element={<Auth/>} />
            <Route path="begin" element={<Begin/>} />
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
