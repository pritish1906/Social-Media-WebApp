import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './pages/main'
import { Login } from './pages/login'
import {Navigationbar} from './components/navbar'
import {Navigationbar2} from './components/navbar2'
import { CreatePost } from './pages/createpost';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '../src/config/firebase'
function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App" >
      <Router>
        {user==null?<Navigationbar2/>:<Navigationbar/>}
        {/* {user==null && <Navigationbar2/>} */}
        
        <Routes >
          <Route path='/home' element = {<Main />}/>
          <Route path='/' element = {<Login />}/>
          <Route path='/createpost' element = {< CreatePost/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
