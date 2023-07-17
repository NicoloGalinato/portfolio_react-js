import React from 'react'
import './App.scss'
import { Navbar, Header, Technologies, About, Projects, Contacts, Footer } from './components'

const App = () => {
    return (
        <div className="app" id="tsparticles">
            <div className="gradient__bg">
                <Navbar />
                <Header title="Home" id="pf__home" />
            </div>
            <Technologies title="About" id="pf__about" />
            <About />
            <Projects title="Projects" id="pf__projects" />
            <Contacts title="Contact" id="pf__contact" />
            <Footer />
        </div>
    )
}

export default App
