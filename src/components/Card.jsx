//Card.jsx

import React, { useState, useEffect } from 'react';
import CardImages from '../components/ImagesList';

const CYOA = ({ Image, Title, Description, GameLink, PostLink, Tags, Button1, Button2, Button3, Button3Link }) => {
    const [backgroundImage, setBackgroundImage] = useState(null);

    useEffect(() => {
        const image = CardImages[Image];
        if (image) {
            setBackgroundImage(`url(${image})`);
        }
    }, [Image, CardImages]);

    const button1Text = Button1 || 'Enjoy!';
    const button2Text = Button2 || '💬 Comments';

    return (
        <div className="card" style={{ backgroundImage }}>
            <div className="card-overlay">
                <p className="card-tags">{Tags}</p>
            </div>
            <div className="card-content">
                <h2 className="card-title">{Title}</h2>
                <p className="card-body">{Description}</p>
                <a href={GameLink} className="button">
                    {button1Text}
                </a>
                <a href={PostLink} className="button">
                    {button2Text}
                </a>
                {Button3 && Button3Link && (
                    <a href={Button3Link} className="button">
                        {Button3}
                    </a>
                )}
            </div>
        </div>
    );
};

export default CYOA;
