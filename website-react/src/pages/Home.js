import React from 'react';
import { Link } from '@reach/router';
import ShadowBox1 from '../components/ShadowBox1.js'
import Layout from '../components/Layout.js'

export default function Home() {
  return (
    
      <Layout>
             <div className="home">
        <div className="background"></div>
        <div className="front-content">
            <div className="free-text">
                <div className="right-align text-semi-bold">
                My name is <b>Emma</b>, I’m a <b>Computer Science Student</b> at UC Berkeley.
                </div>
                <Link to="/resume" className="button button--secondary">Resume</Link>
                <div className="right-align text-regular">I like making full-stack web projects, as well as learning about distributed systems and blockchain </div>
            </div>
            <div className="shadow-box">
                <ShadowBox1 />
            </div>
        </div>
        
      </div>
      </Layout>
   
  );
}
