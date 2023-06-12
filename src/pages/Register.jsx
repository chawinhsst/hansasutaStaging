// useState ใช้เก็บคัวแปรข้ามเพจ
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {register, reset} from '../features/auth/authSlice'

//Create variable that use to across the page
function Register() {
    //Name = formData and if change value inside is setFormData
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        role: 'user'
    });

    //สกัดข้อมูลออกมา
    const {name, email, password, password2, role} = formData;
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => {
        return state.auth
    })

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        //redirect when logged in
        if(isSuccess || user) {
            navigate('/')
        }
        dispatch(reset())
    }, [isError, isSuccess, user, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const onSubmit = (e) => {
        //preventDefault เพื่อไม่ต้องให้ไปอีกหน้าเพจ กะนการ reload
        e.preventDefault()
        if(password !== password2) {
            toast.error('password do not match')
        } else {
            const userData = {
                name,
                email,
                password,
                role
            }
            dispatch(register(userData))
        }
    }

    return(
        <>
            <section className='heading'>
                <h1>
                    <FaUser /> Register
                </h1>
                <p> Please create an account</p>
            </section>
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input type='text' className='form-control' id='name' name='name' value={name} onChange={onChange} placeholder='Enter your name' required />
                    </div>
                    <div className='form-group'>
                        <input type='text' className='form-control' id='email' name='email' value={email} onChange={onChange} placeholder='Enter your email' required />
                    </div>
                    <div className='form-group'>
                        <input type='password' className='form-control' id='password' name='password' value={password} onChange={onChange} placeholder='Enter your password' required />
                    </div>
                    <div className='form-group'>
                        <input type='password' className='form-control' id='password2' name='password2' value={password2} onChange={onChange} placeholder='Enter your password' required />
                    </div>
                    <div className='form-group'>
                        <input type='text' className='form-control' id='role' name='role' value={role} onChange={onChange} placeholder='Enter your role' required />
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-block'>Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register;