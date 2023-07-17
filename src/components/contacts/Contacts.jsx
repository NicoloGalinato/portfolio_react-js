import React from 'react'
import './contacts.scss'

const Contacts = () => {
    return (
        <section className="pf__contact gradient__bg" id="pf__contact">
            <div className="pf__contact-container content__padding">
                <h4>contact me</h4>
                <h2 className="gradient__text">Don't be shy! Hit me up!</h2>

                <div className="pf__contact-container__content">

                    <div className="pf__contact-container__content-icons">
                        <div className="pf__contact-icon_container">
                            <i className="fa-solid fa-map-location-dot"></i>
                        </div>
                        <div className="pf__contact-icon_container-content">
                            <h3>Location</h3>
                            <p>General Trias, Cavite</p>
                        </div>
                    </div>

                    <div className="pf__contact-container__content-icons">
                        <div className="pf__contact-icon_container">
                            <i className="fa-solid fa-envelope-open-text"></i>
                        </div>
                        <div className="pf__contact-icon_container-content">
                            <h3>Mail</h3>
                            <a href="nicologalinato80@gmail.com">nicologalinato80@gmail.com</a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts
