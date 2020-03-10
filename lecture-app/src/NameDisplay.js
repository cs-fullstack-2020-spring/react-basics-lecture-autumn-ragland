import React from 'react';
import './App.css';

function NameDisplay(prop) {
    return (
        <div>
            <header >
                <p>Welcome {prop.name}</p>
                <p>Your grade is {prop.grade}</p>
            </header>
        </div>
    );
}

export default NameDisplay;
