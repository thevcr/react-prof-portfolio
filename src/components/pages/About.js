import React from 'react';
import image from '../../assets/about/wave-emoji.png';

export default function About() {
  return (
    <div className="about-me col-9 col-md-6 mb-4" id="about">
      <img src={image} alt="single-hand emoji waving" className="img-fluid p-5" height="230px" width="230px"/>
      <h3>
      Hi, my name is Veronica. With 6+ years of experience within the Software as a Service (SaaS) space from customer support to quality assurance, I am looking for opportunities in software development. This portfolio outlines the projects I have done to prepare me for that role.
      </h3>
    </div>
  );
}