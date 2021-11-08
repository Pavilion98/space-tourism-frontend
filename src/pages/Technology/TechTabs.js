import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const TechTabs = ({ technology }) => {

    const [clickedNum, setClickedNum ] = useState(0);

    const toggleClick = (index) => {
        setClickedNum(index);  
    }
    
    return (
        <div className="tech-dot-indicators flex"> 
            {technology.map( ({name, number}, index) => (
                <Link 
                onClick={() => toggleClick(index)}
                className={`${clickedNum === index ? "active" : ""}`}
                style={{textDecoration: "none"}} 
                to={`./${name.split(" ").join("-")}`}>
                <span className="sr-only"> {name} </span>
                {number}
                </Link>
            ))}
                

        </div>
    )
};

export default TechTabs;