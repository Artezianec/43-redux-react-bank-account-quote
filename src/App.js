import React from 'react';
import './App.css';
import Balance from "./components/Balance";
import Operation from "./components/Operation";

const App = () => {
    return (
        <div className='App'>
            <Balance/>
            <Operation/>
        </div>
    );
};

export default App;