import React, { useState, useEffect } from 'react';
import CardImages from '../components/ImagesList';

const CYOA = ({ Image, Title, Description, GameLink, PostLink, Tags }) => {
    const [backgroundImage, setBackgroundImage] = useState(null);

    useEffect(() => {
        const image = CardImages[Image];
        if (image) {
            setBackgroundImage(`url(${image})`);
        }
    }, [Image, CardImages]);

    return (
        <div className="card" style={{ backgroundImage }}>
            <div className="card-overlay">
                <p className="card-tags">{Tags}</p>
            </div>
            <div className="card-content">
                <h2 className="card-title">{Title}</h2>
                <p className="card-body">{Description}</p>
                <a href={GameLink} className="button">
                    Enjoy!
                </a>
                <a href={PostLink} className="button">
                    💬 Comments
                </a>
            </div>
        </div>
    );
};

export default CYOA;
