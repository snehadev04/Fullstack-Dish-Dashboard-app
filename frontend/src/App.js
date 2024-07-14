import React from 'react';
import './App.css';
import DishDashboard from './components/DishDashboard';

function App() {
    // Render the main App component with DishDashboard
    return (
        <div className="App">
            <header className="App-header">
                <DishDashboard />
            </header>
        </div>
    );
}

export default App;
