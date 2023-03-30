import React from "react";
import '../styles/contact.css'

function Contact() {
    return(
        <div className="contact-container">
            <a id="contact"></a>
             <div className='contactme-title-div'>
                    <h2 className='contactme-title'>Contact Me</h2>
                    <p className='contactme-description'>
                        Here's a few ways you can contact me
                    </p>
             </div>
             <div className="contactme-links-div">
                <div className="contact-link-title-div">
                    <h3 className="contact-link-title">Contact Information</h3>
                </div>
                  <div className="contact-information">
                    <div className="contactme-left">
                        <label for='phone number'>Call Me</label>
                        <p><i className="phone"></i>-253-888-6555</p>
                        <label for='phone number'>Email Me</label>
                        <p><i className="email"></i>-cortesnicholas04@gmail.com</p>
                    </div>
                    <div className="contactme-right">
                        <div className='nav-link-div-contacts'>
                            <label for='phone number'>Message Me</label>
                                <span>
                                    <a 
                                    href="https://github.com/ncortes04"
                                    target='_blank'
                                    className='githubBtn'></a>
                                    <p>Github</p>
                                </span>
                                <span>
                                    <a href=''
                                    target='_blank'
                                    className='linkedinBtn'></a> <p>Linked In</p>
                                </span>
                                <span>
                                    <a 
                                    href='https://stackoverflow.com/users/21443127/ncortes' 
                                    target='_blank' className='stackoverflowBtn'></a>
                                    <p>Stack Overflow</p>
                                </span>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Contact