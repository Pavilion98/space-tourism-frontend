import React from 'react';
import { Link } from 'react-router-dom';

const TechTabs = ({ name, number }) => {
    const hyphenated = name.split(" ").join("-");

    // const [numClicked, setNumClicked ] = useState();

    // const toggleClick = (number) => {
    //     setNumClicked(number);
    //     console.log(number);
    // }
    
    return <Link style={{textDecoration: "none"}} to={`./${hyphenated}`}><span className="sr-only"> {name} </span>{number}</Link>
};

export default TechTabs;