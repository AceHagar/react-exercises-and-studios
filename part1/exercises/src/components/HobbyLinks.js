import React from 'react';

export default function HobbyLinks() {
    const hobbyLinks = ['https://www.feastingathome.com/sourdough-bread/', 'https://www.guitarplayer.com/']
    return (
        <div>
        <h3>Links to my hobbies</h3>
        <ul>
            <li><a href={hobbyLinks[0]}>Baking with sourdough</a></li>
            <li><a href={hobbyLinks[1]}>Playing Guitar</a></li>
        </ul>
    
        </div>
    )
}