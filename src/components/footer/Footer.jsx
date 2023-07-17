import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <footer className="pf__footer">
            <div className="pf__footer-container section__padding">
                <p>Copyright © {new Date().getFullYear()}. All rights are reserved</p>
                <div className="pf__footer-icons">
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer
