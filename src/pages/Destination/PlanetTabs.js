import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PlanetTabs = ({ destinations }) => {

    const [clickedTab, setClickedTab ] = useState(0)
    
    const toggleTab = (index) => {
        setClickedTab(index);
    }


    return (
        <div className="tab-list underline-indicators flex">
            {destinations.map( ({name}, index) => (
                <Link  
                onClick={() => toggleTab(index)} 
                style={{textDecoration: "none"}}
                className= {`${clickedTab === index ? "active" : "" } uppercase ff-sans-cond text-accent letter-spacing-2`}
                to = {`./${name.toLowerCase()}`}
                key = {index}
                > 
                {name}
                </Link>
             ) )}
        </div>
    )
}

export default PlanetTabs;
