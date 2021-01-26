import React  from "react";
import mountainsGrayScale from "../../../../assets/img/parallax/mountainsGrayScale.jpg";
import ParallaxSectionContentHome from "./parallaxSectionContentHome";

const ParallaxSectionHome = () => {

    const parallaxSectionHeaderStyle = {
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        transformStyle: 'inherit',
        zIndex: -1,
        background: 'url('+ mountainsGrayScale +') top center',
        "&::before": {
            content: '',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'block',
            background: 'url(https://picsum.photos/g/1920/1080?random) top center',
            backgroundSize: 'cover',
            transform: 'translateZ(-1px) scale(2.1)',
            minHeight: '100%',
            zIndex: '-2',
        }
    }

        return (
            <section style={parallaxSectionHeaderStyle} id="home">
                <ParallaxSectionContentHome />
            </section>
        )
}
export default ParallaxSectionHome;