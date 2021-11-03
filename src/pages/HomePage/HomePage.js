import React from 'react';
import { Link } from 'react-router-dom';


import Button from '../../components/Button-lg/Button';
import Navbar from '../../components/Navbar/Navbar';

const  HomePage = () => {
    return (
        <body className="home">
            <a className="skip-to-content" href="#main">Skip to content</a>
            <Navbar />
            <div id="main" className="grid-container grid-container--home">
                <div>
                    <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to
                    <span className="d-block fs-900 ff-serif text-white">Space</span></h1>
                    <p>Let’s face it, if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience! </p>
                </div>

                <div>
                    <Link 
                    style={{textDecoration: "none"}} 
                    to="/destination"
                    >

                        <Button/>
                        
                    </Link>
                </div>
            </div>
        </body>
    )
}

export default HomePage;
