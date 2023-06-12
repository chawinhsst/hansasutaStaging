import {Link} from 'react-router-dom'
import {FaQuestionCircle, FaTicketAlt} from 'react-icons/fa'

function Home(){
    return(
        <>
            <section className='heading'>
                <h1>Hansasuta Family</h1>
                <p>Project monitoring for Hansasuta's members only</p>
            </section>
            <Link to='/login' className='btn btn-reverse btn-block'>
                <FaQuestionCircle />Login Here!
            </Link>
        </>
    )
}

export default Home;