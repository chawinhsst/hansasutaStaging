import{BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/' element={<Navigate to="/login"/>} /> */}
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
          </Routes> 
        </div>
      </Router>
      <ToastContainer />
    </>
  ); 
}

export default App;