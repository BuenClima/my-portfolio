import React  from "react";
import ParallaxSectionContentAboutMe from "./parallaxSectionContentAboutMe";

const ParallaxSectionAboutMe = () => {

        const parallaxSectionOddStyle = {
            background: '#fafafa',
            boxShadow: '0 0 20px #333',
            zIndex: '1',
            position: 'relative',
            minHeight: '100vh',
            width: '100%',
            transformStyle: 'inherit'
        }


        return (
            <section style={parallaxSectionOddStyle} id="aboutMe">
                <ParallaxSectionContentAboutMe />
            </section>
        )
}
export default ParallaxSectionAboutMe;