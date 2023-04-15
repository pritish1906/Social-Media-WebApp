import { auth, provider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Login = () => {


    const navigate = useNavigate();
    const loginWithGoogle = async () => {
        console.log("hi")
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate("/home")
    }

    return (
        <div>
            <div className="loginForm">
                <Button className='btn' onClick={loginWithGoogle}>
                    Sign in with google
                </Button>
            </div>

        </div>
    )
}