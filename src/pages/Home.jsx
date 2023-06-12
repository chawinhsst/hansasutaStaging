import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import {Link, useNavigate} from 'react-router-dom'
import {FaQuestionCircle, FaTicketAlt} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import { logout, reset } from "../features/auth/authSlice";

function Home(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return(
        <>
            <section className='heading'>
                <h1>Hansasuta Family</h1>
                <p>Project monitoring for Hansasuta's members only</p>
            </section>
            
            {user?(
                <Link onClick={onLogout} className='btn btn-reverse btn-block'>
                    <FaSignOutAlt />Logout Here!
                </Link>
            ):(
                <>
                    <Link to='/login' className='btn btn-reverse btn-block'>
                        <FaSignInAlt />Login Here!
                    </Link>
                </>
            )}
        </>
    )
}

export default Home;