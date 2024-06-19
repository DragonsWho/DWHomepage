import React, { useState, useEffect } from 'react';
import './css/App.css';
import Navbar from './components/Navbar.jsx';
import AdAndChat from './components/AdAndChat.jsx';
import CardsContainer from './components/CardsContainer.jsx';

export default function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => { 
        setIsLoaded(true);
    }, []);

    if (!isLoaded) {
        return (
            <div style={{ backgroundColor: '#151515' }}>
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <AdAndChat />
            <CardsContainer />
            <br /><br /><br />
            <h1>Footer</h1>
        </>
    );
}