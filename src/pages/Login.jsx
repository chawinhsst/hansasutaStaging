import {useState} from 'react'
import {toast} from 'react-toastify' 
import {FaSignInAlt} from 'react-icons/fa'


function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '', 
    });
    //extract value inside formData
    const {name,email,password,password2} = formData;
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }
    
    return (
        <>
            <div className="login">
                <div className="left-side">
                <div className="login-container">
                    <div className="login-header">
                    <h2>Welcome back!</h2>
                    <h4>Hansasuta family</h4>
                    </div>
                    
                    <section className='form'>
                        <form onSubmit={onSubmit}>
                            <div className='form-group'>
                                <label for='email'>Email address</label>
                                <input type='email' className='form-control' id='email' name='email' value={email} onChange={onChange} placeholder='Enter your email' required />
                            </div>
                            <div className='form-group'>
                                <label for='password'>Password</label>
                                <input type='password' className='form-control' id='password' name='password' value={password} onChange={onChange} placeholder='Enter your password' required />
                            </div>
                            <div className='for-group'>
                                <button className='btn btn-block'>Submit</button>
                            </div>
                        </form>
                    </section>

                    <div className="other-login">
                    <p>or</p>
                    <div className="google-login">
                        <p>login with Google</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="right-side">
                <img className="login-image" src="/images/login_image.png"></img>
                </div>
            </div>
        </>
    )
  }
  
  export default Login;