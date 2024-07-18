import React from 'react';
import logo from '../../images/logo_DStore.png'; 
import logoBranca from '../../images/logo_DStore_branca.png'; 

const Logo = ({cor = 'rosa'}) => {
    return (
      <>
          
          {cor == 'branca' && <img src={logoBranca} alt="Digital Store Logo" style={{ 
   
             left: '0%',
             right: '86.96%',
             top: '86.36%',
             bottom: '-61.36%',
                        }} />}
          {cor == 'rosa' && <img src={logo} alt="Digital Store Logo" style={{ 
   
             left: '0%',
             right: '86.96%',
             top: '86.36%',
             bottom: '-61.36%',
                        }} />}
      </>
    );
};

export default Logo;
