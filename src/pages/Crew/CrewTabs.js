import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const CrewTabs = ({ crew }) => {

    const [clickedDot, setClickedDot ] = useState(0);

    const toggleTab = (index) => {
        setClickedDot(index);  
    }

    return (
        <div className="dot-indicators flex">
            {crew.map( ({name}, index) => (
                
                <Link 
                onClick={() => toggleTab(index)} 
                className={`${clickedDot === index ? "active" : ""}`} 
                to={`./${name.split(" ").join("-")}`}
                key = {index}
                >
                <span className="sr-only"> {name} </span>
                </Link>
            ))}
        </div>
    )
    
};

export default CrewTabs;
