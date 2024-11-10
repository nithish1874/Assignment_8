// frontend/src/App.js
import React from 'react';
import Register from './components/Register';
import Login from './components/Login';

function App() {
    return (
        <div className="App">
            <h1>Authentication App</h1>
            <Register />
            <Login />
        </div>
    );
}

export default App;
