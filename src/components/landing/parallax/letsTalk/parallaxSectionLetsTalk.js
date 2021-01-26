import React  from "react";
import ParallaxSectionContentLetsTalk from "./parallaxSectionContentLetsTalk";

const ParallaxSectionLetsTalk = () => {
    const parallaxSectionOddStyle = {
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        transformStyle: 'inherit',
        background: '#fafafa',
        boxShadow: '0 0 20px #333',
        zIndex: '1'
    }


        return (
            <section style={parallaxSectionOddStyle} id="letsTalk">
                <ParallaxSectionContentLetsTalk />
            </section>
        )
}
export default ParallaxSectionLetsTalk;