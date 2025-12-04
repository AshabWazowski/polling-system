import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import CreatePoll from './components/CreatePoll';
import RegisterVote from './components/RegisterVote';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <header>
        <div className='nav'>
          <div className='nav-container'>
            <div className='nav-item'>
              <Link to="/" className='nav-link'>Create Poll</Link>
              <Link to="/register-poll" className='nav-link'>Register Poll</Link>
              <Link to="/review-result" className='nav-link'>Review Result</Link>
            </div>
          </div>
        </div>
      </header>
      <div className='main-container'>
        {/* Component Routing here */}
        <Routes>
          <Route path='/' element={<CreatePoll/>}/>
          <Route path='/register-poll' element={<RegisterVote/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
