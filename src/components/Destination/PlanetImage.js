import React from 'react'

const PlanetImage = ({ src }) => {
    return <img 
    src={require(`../../${src}`).default}
    alt="The Moon" 
    />
}

export default PlanetImage;

