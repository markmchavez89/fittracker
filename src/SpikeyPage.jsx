import React from 'react';
import { Link } from 'react-router-dom';

function SpikeyPage() {
    return (
        <div>
            <h1>I'm a lil kitty</h1>
            <Link to ="/">
                <p>Meow Meow Go Home</p>
            </Link>
        </div>
        
    )
}

export default SpikeyPage;