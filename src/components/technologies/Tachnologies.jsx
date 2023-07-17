import React from 'react'
import './technologies.scss'
import { HTML, CSS, JS, React_js, SASS, Tailwind } from './import'

const Technologies = () => {
    return (
        <div className="pf__technologies" id="pf__about">
            <div className="pf__technologies-container">
                <div>
                    <img src={HTML} alt="HTML" />
                </div>
                <div>
                    <img src={CSS} alt="CSS" />
                </div>
                <div>
                    <img src={SASS} alt="SASS" />
                </div>
                <div>
                    <img src={Tailwind} alt="Tailwind" />
                </div>
                <div>
                    <img src={JS} alt="JS" />
                </div>
                <div>
                    <img src={React_js} alt="React_js" />
                </div>
            </div>
        </div>
    )
}

export default Technologies
