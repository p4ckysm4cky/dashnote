import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/home/Homepage';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </div>
    );
}

export default App;
