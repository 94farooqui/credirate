
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route index element={<LandingPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
