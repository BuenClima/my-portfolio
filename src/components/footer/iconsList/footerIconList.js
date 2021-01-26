import React from "react"
import {useSelector} from "react-redux";
const FooterIconList = () => {
    const color = {
        color: '#ffc371',
    }

    const margin = {
        marginLeft: '4% !important',
    }

    const footerContent = useSelector(state => state.footerContent)

    return (
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 margin" style={margin}><img src="" alt="" width="180" className="mb-3" />
            <p id="footerIconsMessage" className="font-italic text-muted">
                { footerContent.icons.message }
            </p>
            <ul className="list-inline mt-4">
                <li className="list-inline-item">
                    <a id="#footerLinkToGitHub" href={ footerContent.icons.list.github.url } target="_blank" title=
                    { footerContent.icons.list.github.title }><i style={color}
                    className="fa fa-github"></i></a></li>
                <li id="footerLinkToLinkedIn" className="list-inline-item">
                    <a href={footerContent.icons.list.linkedIn.url} target="_blank" title=
                        {footerContent.icons.list.linkedIn.title}><i style={color}
                    className="fa fa-linkedin"></i></a></li>
                <li className="list-inline-item">
                    <a id="#footerLinkToFacebook" href={footerContent.icons.list.facebook.url} target="_blank" title=
                        {footerContent.icons.list.facebook.title}><i style={color}
                    className="fa fa-facebook"></i></a></li>
                <li className="list-inline-item">
                    <a href={footerContent.icons.list.google.url} target="_blank" title=
                        {footerContent.icons.list.google.title}><i style={color}
                    className="fa fa-google"></i></a></li>
            </ul>
        </div>
    )
}

export default FooterIconList;