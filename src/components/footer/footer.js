import React from "react";
import FooterIconList from "./iconsList/footerIconList";
import FooterIndexList from "./indexList/footerIndexList";
import FooterDataList from "./dataList/footerDataList";
import FooterContactForm from "./contactForm/footerContactForm";
import FooterRights from "./rights/footerRights";

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="container py-5 custom-size">
                <div className="row py-4">
                    <FooterIconList />
                    <FooterIndexList />
                    <FooterDataList />
                    <FooterContactForm />
                </div>
            </div>
            <FooterRights />
        </footer>
    )
}

export default Footer;