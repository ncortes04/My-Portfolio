import React from "react";
import '../styles/contact.css'

function Contact() {
    return(
        <div className="contact-container">
            <a id="contact"></a>
             <div className='contactme-title-div'>
                    <h3 className='header-intro m-0'>Here's a few ways you can contact me</h3>
                    <h2 className="timeline-header m-0">Contact Me</h2>
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
                                    rel="noreferrer"
                                    target='_blank'
                                    className='githubBtn'></a>
                                    <p>Github</p>
                                </span>
                                <span>
                                    <a href='https://www.linkedin.com/in/nicholas-cortes-9912b2269/'
                                    rel="noreferrer"
                                    target='_blank'
                                    className='linkedinBtn'></a> <p>Linked In</p>
                                </span>
                                <span>
                                    <a 
                                    href='https://stackoverflow.com/users/21443127/ncortes' 
                                    rel="noreferrer"
                                    target='_blank' 
                                    className='stackoverflowBtn'></a>
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