import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const CrewTabs = ({ name, index }) => {
    const hyphenated = name.split(" ").join("-");

    const [tabClicked, setTabClicked ] = useState()
    
    const toggleTab = (index) => {
        setTabClicked(index)
    }
    return <Link key={index} className={`${tabClicked === index ? "active" : "" }`} onClick={() => toggleTab(index)} to={`./${hyphenated}`} ><span className="sr-only"> {name} </span></Link>
};

export default CrewTabs;
