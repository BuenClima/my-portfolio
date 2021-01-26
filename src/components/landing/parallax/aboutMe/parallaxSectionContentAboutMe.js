import React from 'react';
import {useSelector} from "react-redux";


const ParallaxSectionContentAboutMe = () => {
        const parallaxContent = useSelector(state => state.parallaxContent)

        const parallaxContentSectionOddStyle = {
            fontSize: '4rem',
            textAlign: 'center',
            position: 'absolute',
            padding: '1rem',
            background: '#fafafa',
            top: '50%',
            left: '50%',
            zIndex: 3,
            transform: 'translate(-50%, -50%)',
            boxShadow: 'none',
        }

        return (
            <div>
                {
                    <h1 style={parallaxContentSectionOddStyle}> {parallaxContent.aboutMe.title}</h1>
                }
            </div>
        )
}

export default ParallaxSectionContentAboutMe;