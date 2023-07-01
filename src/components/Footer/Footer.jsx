

import React from 'react';
import { ButtonSocial } from '../ButtonSocial';
import './Footer.css';

const Footer = () => {
  

  return (
    <footer className="footer">
      <ButtonSocial type="facebook" />
      <ButtonSocial type="twitter" />
      <ButtonSocial type="google" />
      <ButtonSocial type="instagram" />
    </footer>
  );
}

export { Footer };
