import React from 'react';
import {useSelector} from "react-redux";


const ParallaxSectionContentHome = () => {
        const parallaxContent = useSelector(state => state.parallaxContent)

        const parallaxContentSectionHeaderStyle = {
            fontSize: '4rem',
            textAlign: 'center',
            position: 'absolute',
            padding: '1rem',
            background: '#fafafa',
            boxShadow: '0 0 20px #333',
            top: '50%',
            left: '50%',
            transform: 'translateZ(-1px) scale(2) translate(-25%, -25%)'
        }

        return (
            <div>
                {
                    <h1 style={parallaxContentSectionHeaderStyle}> {parallaxContent.home.title}</h1>
                }
            </div>
        )
}

export default ParallaxSectionContentHome;