import React from 'react';
import {useSelector} from "react-redux";


const ParallaxSectionContentProjects = () => {
        const parallaxContent = useSelector(state => state.parallaxContent)

        const parallaxContentSectionPairStyle = {
            fontSize: '4rem',
            textAlign: 'center',
            position: 'absolute',
            padding: '1rem',
            background: '#fafafa',
            boxShadow: '0 0 20px #333',
            top: '50%',
            left: '50%',
            transform : 'translateZ(-.3px) scale(1.3) translate(-39%, -39%)',
            zIndex: 3,
        }

        return (
            <div>
                {
                    <h1 style={parallaxContentSectionPairStyle}> {parallaxContent.projects.title}</h1>
                }
            </div>
        )
}

export default ParallaxSectionContentProjects;