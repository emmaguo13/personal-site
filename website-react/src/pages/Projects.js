import React from 'react';
import ShadowBox3 from '../components/ShadowBox3.js'
import BlueBar from '../components/BlueBar.js'
import { Link } from '@reach/router';

function Projects () {
    return (
        <div className='projects'>
            <div className='project-section'>
                <div className='project-media'>
                    <ShadowBox3 />

                </div>
                <div className='project-text'>
                    <div className='text-bold proj-txt'>
                        landrules
                    </div>
                    <div className='text-semi-bold proj-txt'>
                        A decentralized web application that serves as a notarization platform for 
                        property owners. Users can fill out a form that stores their property information
                        on the Ethereum blockchain to prevent corrupt actors from tampering with information
                        on their land ownership. 
                    </div>
                    <div className='text-italic proj-txt'>
                        Built with javascript, solidity, React.js, Ant Design, Node.js, MongoDB, and Express APIs. 
                    </div>
                    <BlueBar />
                    <Link to="/resume" className="project-button button button--secondary">Github Repo</Link>

                </div>

            </div>
            <div className='project-section'>
                <div className='project-media'>
                <ShadowBox3 />
                </div>
                <div className='project-text'>
                    <div className='text-bold proj-txt'>
                        a* blocker
                    </div>
                    <div className='text-semi-bold proj-txt'>
                    An A* program that uses a GUI to display the shortest path between two selected points, with blockages that can be drawn in 
                    </div>
                    <div className='text-italic proj-txt'>
                        Python, Data structures
                    </div>
                    <BlueBar />
                    <Link to="/resume" className="project-button button button--secondary">Github Repo</Link>
                </div>

            </div>
           

         
          

        </div>
    )
}

export default Projects