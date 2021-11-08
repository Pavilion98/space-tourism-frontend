import React, {useState, useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useParams } from "react-router-dom";
import TechTabs from './TechTabs';
import ErrorDisplay from '../ErrorDisplay';

const TechPage = ({data}) => {

    const {technology} = data[0];
    const { techId } = useParams();
    const tech = techId.replace(/-/g, " ");

    const [isError, setIsError] = useState(false);
    const [techInfo, setTechInfo] = useState([]);

    useEffect(() => {
        const techItem = technology.filter( ({name}) => name === tech);
        if(techItem.length === 0){
            setIsError(true);
            return false;
        }

        setTechInfo(techItem[0]);

    }, [technology, tech])


    const handleNoDataError = () =>
    isError && <ErrorDisplay dataName="Tech Item" pageName="technology" />;

    const { name, images: { portrait, landscape } = {}, description } = techInfo;

    const showContent = () => 
        Object.keys(techInfo).length > 0 && (
            <>
                <h1 className="numbered-title"><span aria-hidden="true">03</span> Space launch 101</h1>
                <div>
                    <img className="img-land" src={require(`../../${landscape}`).default} alt={`${name}`} />
                    <img className="img-port" src={require(`../../${portrait}`).default} alt={`${name}`} />
                </div>

                <TechTabs technology={technology} />

                <article className="tech-details flow">
                    <header className="flow flow--space-small">
                        <h2 className="fs-600 ff-serif uppercase"> The technology </h2>
                        <p className="fs-700 uppercase ff-serif"> {name} </p>
                    </header>
                    <p> {description} </p>
                </article>
            </>
        )

    return (
        <body className="technology">
            <a className="skip-to-content" href="#main">Skip to content</a>
            <Navbar />
            <div id="main" className="grid-container grid-container--technology flow">
                {showContent()}
                {handleNoDataError()}
            </div>
        </body>
    )
}

export default TechPage;
