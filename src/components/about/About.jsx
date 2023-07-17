import React from 'react'
import './about.scss'
import my_picture from '../../assets/my_picture.png'

const About = () => {
    return (
        <section className="pf__about section__padding">
            <div className="pf__about-container gradient__bg">
                <div className="pf__about-container__image">
                    <img src={my_picture} alt="" />
                </div>
                <div className="pf__about-container__content">
                    <h4>About Me and Myself</h4>
                    <h2 className="gradient__text">A dedicated Front-end Developer based in General Trias, Cavite.</h2>
                    <p>
                        As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
                        in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging
                        interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player
                        who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
