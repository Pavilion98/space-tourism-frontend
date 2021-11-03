import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useParams } from "react-router-dom";
import CrewTabs from "./CrewTabs";

// import Commander from '../../assets/crew/image-douglas-hurley.png';

const CrewPage = ({data}) => {

    const {crew} =data[0];
    const { crewId } = useParams();
    const person = crewId.replace(/-/g, " ");

    const [isError, setIsError] = useState(false);
    const [crewInfo, setCrewInfo] = useState([]);

    useEffect(() => {
        const member = crew.filter( ({name}) => name === person);
        if(member.length === 0){
            setIsError(true);
            return false;
        }

        setCrewInfo(member[0]);

    }, [crew, person])

    const Tabs = () => crew.map(({ name }, index) => <CrewTabs name={name} key={index} />)
    const { name, images: { png } = {}, role, bio } = crewInfo;


    const showContent = () => 
        Object.keys(crewInfo).length > 0 && (
            <>
                <h1 class="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>
                
                <div class="dot-indicators flex">
                    <Tabs />
                </div>
                
                <article className="crew-details flow">
                    <header className="flow flow--space-small">
                        <h2 className="fs-600 ff-serif uppercase"> {role} </h2>
                        <p className="fs-700 uppercase ff-serif"> {name} </p>
                    </header>
                    <p> {bio} </p>
                </article>
                <img src={require(`../../${png}`).default} alt={`${role} ${name}`} />
            </>
        )


    return (
        <body className="crew">
            <a className="skip-to-content" href="#main">Skip to content</a>
            <Navbar />
            <div id="main" className="grid-container grid-container--crew flow">
                {showContent()}
            </div>
        </body>
    )
}

export default CrewPage;
