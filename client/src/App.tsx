import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashbord from './pages/Dashboard/Dashbord'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Dashboard' element={<Dashbord />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App