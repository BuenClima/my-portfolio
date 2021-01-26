import React from "react";
import {useSelector} from "react-redux";

const FooterContactForm = () => {
    const buttonColor = {
        color: '#ffc371',
    }
    const formControl= {
        '&::placeholder': {
            fontSize: '0.95rem',
            color: '#aaa',
            fontStyle: 'italic',
        },
        '&:focus' : {
            boxShadow: 'none',
        }
    }

    const footerContent = useSelector(state => state.footerContent)
    return (
        <div className="col-lg-4 col-md-6 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">{footerContent.newsLetter.title}</h6>
            <p className="text-muted mb-4">{footerContent.newsLetter.message}</p>
            <div className="p-1 rounded border">
                <div className="input-group">
                    <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1"
                           className="form-control border-0 shadow-0" style={formControl}/>
                    <div className="input-group-append">
                        <button id="button-addon1" type="submit" className="btn btn-link" style={buttonColor}><i
                            className="fa fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterContactForm;