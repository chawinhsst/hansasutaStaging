import{BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'

function App() {

  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            {user?(
              <Route path='/' element={<Home />} />
            ):(
              <Route path='/' element={<Navigate to="/login"/>} />
            )}
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