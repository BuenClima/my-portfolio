import React from "react"
import NavBar from "../navbar/navbar";
import ParallaxSection from "./parallax/parallaxSection";
import Footer from "../footer/footer";

const Landing = () => {
    return (
        <div>
            <NavBar/>
            <ParallaxSection/>
            <Footer />
        </div>
    )
}

export default Landing;