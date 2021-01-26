import React from "react"
import {useSelector} from "react-redux";

const FooterIndexList = () => {

    const footerContent = useSelector(state => state.footerContent)

    return (
        <div className="col-lg-1 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4"> { footerContent.index.title }</h6>
            <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href={ footerContent.index.list.home.url } className="text-muted"> { footerContent.index.list.home.title }</a></li>
                <li className="mb-2"><a href={ footerContent.index.list.aboutMe.url } className="text-muted"> { footerContent.index.list.aboutMe.title }</a></li>
                <li className="mb-2"><a href={ footerContent.index.list.projects.url } className="text-muted"> { footerContent.index.list.projects.title }</a></li>
                <li className="mb-2"><a href={ footerContent.index.list.letsTalk.url } className="text-muted"> { footerContent.index.list.letsTalk.title }</a></li>
            </ul>
        </div>
    )
}

export default FooterIndexList;