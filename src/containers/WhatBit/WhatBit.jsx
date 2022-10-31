import React from 'react';
import Feature from '../../components/feature/Feature';
import './WhatBit.css';

const WhatBit = () => (
    <div className="bit_whatbit section__margin" id="wgpt3">
      <div className="bit_whatbit-feature">
        <Feature title="What is Bitwise" text="Bitwise is a free site where you can work on coding and algorithms problems together with others. Enhance your skills in coding career and get good opportunity." />
      </div>
      <div className="bit_whatbit-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="bit_whatbit-container">
        <Feature title="Solve Problems" text="Chat and solve problem together. Once you're done, you can browse other people's solutions." />
        <Feature title="Start the room" text="You'll all get the same coding question to solve. Only you can see your editor." />
        <Feature title="Join a room" text="Join or create a room, invite your friends, and get ready to solve problems together." />
      </div>
    </div>
  );
  
  export default WhatBit;
  