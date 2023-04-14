import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './pages/main'
import { Login } from './pages/login'
import {Navigationbar} from './components/navbar'
import { CreatePost } from './pages/createpost';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar/>
        <Routes>
          <Route path='/home' element = {<Main />}/>
          <Route path='/' element = {<Login />}/>
          <Route path='/createpost' element = {< CreatePost/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
