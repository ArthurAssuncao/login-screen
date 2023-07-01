import PropTypes from 'prop-types';
import React from 'react';
import { BiLogoFacebook, BiLogoGoogle, BiLogoTwitter } from "react-icons/bi";
import './ButtonSocial.css';

const icons = {
  'facebook': <BiLogoFacebook className="button-social-icon"/>,
  'twitter': <BiLogoTwitter className="button-social-icon"/>,
  'google': <BiLogoGoogle className="button-social-icon"/>
}

const ButtonSocial = (props) => {
  const { type } = props;

  if (!(type in icons)){
    return <div>{`icon ${type} não existe`}</div>;
  }

  const Icon = icons[type];

  return (
    <div className="button-social">
      {Icon}
    </div>
  );
}

ButtonSocial.propTypes = {
  type: PropTypes.string
}

export { ButtonSocial };
