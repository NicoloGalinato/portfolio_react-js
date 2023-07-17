import React from 'react'
import './header.scss'
import Github from '../../assets/github.png'
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <section className="pf__header" id="pf__home">
            <div className="pf__header-container section__padding">
                <div className="pf__header-container__content">
                    <h1 className="gradient__text">Front-End React Developer</h1>
                    <p>Hi 👋, I'm Nicolo G. Galinato. A passionate Front-end React Developer based in General Trias, Cavite. 📍</p>

                    <div className="pf__header-container__content-image">
                        <img src={Github} alt="GitHub" />
                        <img src={Facebook} alt="FaceBook" />
                        <img src={Instagram} alt="Instagram" />
                    </div>
                </div>
                <div className="pf__header-container__image">
                  <img src={ai} alt="AI" />
                </div>
            </div>
        </section>
    )
}

export default Header
