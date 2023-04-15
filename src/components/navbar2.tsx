import { Link} from 'react-router-dom'
import { auth } from '../../src/config/firebase'
// import './navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { signOut } from 'firebase/auth'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome, faAddressCard, faRightToBracket, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
export const Navigationbar2 = () => {
    const [user] = useAuthState(auth)
    
    const logOutUser = async () => {
        await signOut(auth);

    }
    return (
        <div>
            <Navbar  className='navbar' style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Nav>
                        {
                            !user ? <Nav.Link href="#"><Link to="/" className='sidebarItem' style={{marginTop: '10px', padding: '2px', width: '100px'}}>Log In</Link></Nav.Link>
                            : <Nav.Link onClick={logOutUser} ><Link to="/">Log Out</Link></Nav.Link>
                        
                        }                       
                    </Nav>
            </Navbar>
            <br />
        </div>
    )
}

// {/* <Link to='/'>HOME</Link>
//             <Link to='/login'>LOGIN</Link>
            
//             <div>
//                 <p></p>
//                 <img src={ user?.photoURL || ""} width = "100" height="100" alt = "displayPhoto" /> 
//             </div> */}