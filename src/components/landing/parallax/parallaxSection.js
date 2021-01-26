import React from "react";
import ParallaxSectionHome from "./home/parallaxSectionHome";
import ParallaxSectionContentHome from "./home/parallaxSectionContentHome";
import ParallaxSectionAboutMe from "./aboutMe/parallaxSectionAboutMe";
import ParallaxSectionContentAboutMe from "./aboutMe/parallaxSectionContentAboutMe";
import ParallaxSectionProjects from "./projects/parallaxSectionProjects";
import ParallaxSectionContentProjects from "./projects/parallaxSectionContentProjects";
import ParallaxSectionLetsTalk from "./letsTalk/parallaxSectionLetsTalk";
import ParallaxSectionContentLetsTalk from "./letsTalk/parallaxSectionContentLetsTalk";

const ParallaxSection = () => {
    return (
        <section>
            <ParallaxSectionHome>
                <ParallaxSectionContentHome />
            </ParallaxSectionHome>
            <ParallaxSectionAboutMe>
                <ParallaxSectionContentAboutMe />
            </ParallaxSectionAboutMe>
            <ParallaxSectionProjects>
                <ParallaxSectionContentProjects />
            </ParallaxSectionProjects>
            <ParallaxSectionLetsTalk>
                <ParallaxSectionContentLetsTalk />
            </ParallaxSectionLetsTalk>
        </section>
    )
}

export default ParallaxSection;