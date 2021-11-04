import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const CrewTabs = ({ name, index }) => {
    const hyphenated = name.split(" ").join("-");

    const [dotClicked, setDotClicked ] = useState();
    
    const toggleTab = (index) => {
        setDotClicked(index);
    }
    return <Link className={dotClicked === index ? "active" : ""} onClick={() => toggleTab(index)} to={`./${hyphenated}`}><span className="sr-only"> {name} </span></Link>
};

export default CrewTabs;
