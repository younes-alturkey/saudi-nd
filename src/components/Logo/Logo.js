import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import iris from './iris.png';

const Logo = () => {
  return (
    <div className='ma4'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ margin: "auto", height: 220, width: 200 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '5px'}} alt='logo' src={iris}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
