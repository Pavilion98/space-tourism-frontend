import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Commander from '../../assets/crew/image-douglas-hurley.png'

const CrewPage = () => {
    return (
        <body className="crew">
            <a className="skip-to-content" href="#main">Skip to content</a>
            <Navbar />
            <div id="main" className="grid-container grid-container--crew flow">
                <h1 class="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>
                <div class="dot-indicators flex">
                    <button aria-selected="true"><span class="sr-only">The commander</span></button>
                    <button aria-selected="false"><span class="sr-only">The mission specialist</span></button>
                    <button aria-selected="false"><span class="sr-only">The pilot</span></button>
                    <button aria-selected="false"><span class="sr-only">The crew engineer</span></button>
                </div>
                <article className="crew-details flow">
                    <header className="flow flow--space-small">
                        <h2 className="fs-600 ff-serif uppercase">Commander</h2>
                        <p className="fs-700 uppercase ff-serif">Douglas Hurley</p>
                    </header>
                    <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                    and former NASA astronaut. He launched into space for the third time as 
                    commander of Crew Dragon Demo-2.</p>
                </article>

                <img src={Commander} alt="Douglas Hurley" />
            </div>
        </body>
    )
}

export default CrewPage;
