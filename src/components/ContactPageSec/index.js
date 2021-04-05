import React from 'react'
import ContactArea from '../ContactArea'
const ContactPageSec = () => {
    return(
        <section className="wpo-contact-page">
            <div className="wpo-wpo-contact-form-map">
                <div className="container">
                    <div className="row">
                        <ContactArea contactclass={'wpo-contact-area3'}/>
                        <div className="co-lg-10 offset-lg-1 col-12">
                            <div className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4964.780078916007!2d-0.0838805717488182!3d51.52440556855175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca4fbee1efd%3A0x799b6c9640d63bfd!2sShoreditch%2C%20London!5e0!3m2!1sen!2suk!4v1617642176683!5m2!1sen!2suk"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactPageSec;