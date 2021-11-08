import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PlanetImage from './PlanetImage';
import PlanetTabs from './PlanetTabs';
import PlanetStats from './PlanetStats';
import ErrorDisplay from '../ErrorDisplay';

import { useParams } from 'react-router';



const DestinationPage = ({data}) => {
    const { destinations } = data[0];
    const { planetId } = useParams();
    const slug = planetId.replace(/-/g, " ").toUpperCase();

    const [planetData, setPlanetData] = useState([]);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        const planet = destinations.filter(
          ({ name }) => name.toUpperCase() === slug
        );
    
        if (planet.length === 0) {
          setIsError(true);
          return false;
        }
    
        setPlanetData(planet[0]);
      }, [destinations, slug]);

    const handleNoDataError = () =>
    isError && <ErrorDisplay dataName="Planet" pageName="destination" />;
    
    const {
        name,
        description,
        images: { png } = {},
        distance,
        travel,
    } = planetData;

    
    const showContent = () => 
        Object.keys(planetData).length > 0 && (
            <>
                <h1 className="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>
                <PlanetImage src={png} />
                
                <PlanetTabs destinations= {destinations} />
                <article className = "destination-info flow" >
                    <h2 className="fs-800 uppercase ff-serif"> {name} </h2>
                    <p> {description} </p>  
                    <PlanetStats distance={distance} travelTime={travel} />  
                </article>
            
            </>
        )


    return (
        <body className="destination">
            <a className="skip-to-content" href="#main">Skip to content</a>
            <Navbar />
            <div id="main" className="grid-container grid-container--destination flow">
                {handleNoDataError()}
                {showContent()}
            </div>
        </body>
    )
}

export default DestinationPage;
