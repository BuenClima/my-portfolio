import React from "react"
import {useSelector} from "react-redux";

const FooterRights = () => {
    const rightsMessage = useSelector(state => state.footerContent)

    return (
        <div className="bg-light py-4">
            <div className="container text-center">
                <p className="text-muted mb-0 py-2">{rightsMessage.rights.message}</p>
            </div>
        </div>
    )
}

export default FooterRights;