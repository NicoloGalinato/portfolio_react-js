import React from 'react'
import './projects.scss'
import project1 from '../../assets/car_rental.png'
import ProBox from '../probox/Probox'

const Projects = () => {
    return (
        <section className="pf__projects section__padding" id="pf__projects">
            <div className="pf__projects-container margin__section">
                <h4>Portfolio</h4>
                <h2 className="gradient__text">Each project is a unique piece of development</h2>

                <div className="pf__projects-container__project-card">
                    <ProBox
                        title="Car Rental"
                        img={project1}
                        description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
                        techno1="React"
                        techno2="SCSS"
                        code="https://github.com/NicoloGalinato/portfolio_react-js.git"
                        scrollY="-83%"
                        cName="reversed-proj"
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects
