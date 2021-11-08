import React from 'react'

const PlanetStats = ({ distance, travelTime }) => {
    return (
        <div className="destination-meta flex">
            <div>
                <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
                <p className="ff-serif uppercase"> {distance} </p>
            </div>
            <div>
                <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
                <p className="ff-serif uppercase"> {travelTime} </p>
            </div>
        </div>
    )
}

export default PlanetStats;
