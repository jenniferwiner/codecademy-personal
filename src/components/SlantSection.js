import React from 'react';
import styled from 'styled-components';

const styles = {
  position: 'absolute',
  left: '-75%',
  color: 'black',
  width: '180%'
}

const TextStyle = styled.div`
  padding-top: 50px;
  font-size: 18px;
  width: 90%;
  padding-left: 90px;
  @media (max-width: 975px) {
   font-size: 16px;
  }
  @media (max-width: 500px) {
   font-size: 14px;
  }
`
const headingStyle = {
  fontSize: '36px',
  paddingBottom: '20px'
}
const blankSection = {
  height: '600px',
}

const SlantSection = ({
  id, color, width
}) => (
  <div>
    <ColoredSection color={color} width={width}>
      { id === 'about' &&
      <TextStyle>
        <h1 style={headingStyle}>About</h1>
        I'm Jennifer, a software developer based in Boulder, Colorado.
        <br /><br />
        I am a creative problem solver, coder, and artist&ndash; a big picture thinker fueled by introspection and energized by hard problems.
        <br /><br />
        In my free time, I love creating art (pottery, watercolors, sculpture) and spending as much time as I can outside, hiking and exploring, and chasing Colorado's wildflowers.
      </TextStyle>
      }

      {
        id === 'projects' &&
        <div style={styles} className="has-text-centered">
          <h1>Projects</h1>
          <div className="columns">
            <div className="column">
              First column
            </div>
            <div className="column">
              2 column
            </div>
            <div className="column">
              3 column
            </div>
          </div>
        </div>


      }
    </ColoredSection>

    <div>
      { (id === 'about' || id === 'artwork') &&
        <img src={`images/${id}.jpg`} alt={id}/>
      }
      { id === 'projects' &&
        <div style={blankSection}></div>
      }
    </div>
  </div>
);

const ColoredSection = styled.div`
  background-color: ${props => props.color};
  color: #fff;
  position: relative;
  z-index: 1;
  height: 400px;
  width: 100%;
  &:before {
    background: ${props => props.color};
    top: -7px;
    content: '';
    display: block;
    height: 52%;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(-8deg);
    transform-origin: 0%;
    z-index: -1;
  }
  &:after {
    background: ${props => props.color};
    bottom: 0;
    content: '';
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(-8deg);
    transform-origin: 100%;
    z-index: -1;
  }
`

export default SlantSection;
