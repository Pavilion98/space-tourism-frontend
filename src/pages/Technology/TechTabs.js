import React from 'react';
import { Link } from 'react-router-dom';

const TechTabs = ({ name, index }) => {
    const hyphenated = name.split(" ").join("-");

    // const [dotClicked, setDotClicked ] = useState();
    
    // const toggleTab = (index) => {
    //     setDotClicked(index);
    // }
    return <Link to={`./${hyphenated}`}>{index}<span className="sr-only"> {name} </span></Link>
};

export default TechTabs;