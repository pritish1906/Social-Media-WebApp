import { auth, provider} from '../config/firebase'
import { signInWithPopup} from 'firebase/auth'
import { useNavigate} from 'react-router-dom'


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
            <p>Sign In with google to continue</p>
            <button onClick={loginWithGoogle}>Sign in with google</button>
        </div>
    )
}