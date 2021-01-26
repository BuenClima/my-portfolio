import React from "react";
import {useSelector} from "react-redux";

const FooterDataList= () => {
    const color = {
        color: '#ffc371',
    }

    const footerContent = useSelector(state => state.footerContent)
    return(
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4"> { footerContent.contact.title }</h6>
            <ul className="list-unstyled mb-0">
                <li className="mb-2"><p className="text-muted">{ footerContent.contact.address }</p></li>
                <li className="mb-2"><p className="text-muted"><i style={color} className="fa fa-volume-control-phone"
                                                                  aria-hidden="true"></i> {footerContent.contact.phone}</p></li>
                <li className="mb-2"><p className="text-muted"><i style={color}
                    className="fa fa-paper-plane"></i> { footerContent.contact.mail }</p></li>
            </ul>
        </div>
    )
}
export default FooterDataList;