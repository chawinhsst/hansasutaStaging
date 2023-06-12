// useState ใช้เก็บคัวแปรข้ามเพจ
import {useState} from 'react'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'

//Create variable that use to across the page
function Register() {
    //Name = formData and if change value inside is setFormData
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    //สกัดข้อมูลออกมา
    const {name, email, password, password2} = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const onSubmit = (e) => {
        //preventDefault เพื่อไม่ต้องให้ไปอีกหน้าเพจ กะนการ reload
        e.preventDefault()
        if(password!==password2) {
            toast.error('password do not match')
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
                    <div className='for-group'>
                        <button className='btn btn-block'>Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register;