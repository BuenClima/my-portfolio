import React  from "react";
import bearsGrayScale from "../../../../assets/img/parallax/bearsGrayScale.jpg";
import ParallaxSectionContentProjects from "./parallaxSectionContentProjects";

const ParallaxSectionProjects = () => {
    const parallaxSectionPairStyle = {
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        transformStyle: 'inherit',
        background: 'url(' + bearsGrayScale + ') top center',
        '&::before': {
            content: '',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'block',
            background: 'url(https://picsum.photos/g/1920/1080?random) top center',
            backgroundSize: 'cover',
            transform: 'translateZ(-.5px) scale(1.6)',
            zIndex: -1
        }
    }


        return (
            <section style={parallaxSectionPairStyle} id="projects">
                <ParallaxSectionContentProjects />
            </section>
        )
}
export default ParallaxSectionProjects;