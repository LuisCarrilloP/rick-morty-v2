import React from 'react';
import banner from '../images/o6cwlzg3exk41.webp'

const Header = () => {
  return (
    <div className='Header'>
      <img src={banner} alt="banner" />
      <h2>Rick & Morty Wiki</h2>
    </div>
  );
};

export default Header;