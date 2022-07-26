import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
} from 'react-icons/ai';
import logo from '../../assets/images/logo.png';

import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="footer__item about__section">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <p className="desc">
            Welcome to our web design agency. Lorem ipsum is
            simply free text dolor sit amet consectetur
            adipisicing elit. Tempore corrupti temporibus
            fuga earum asperiores, alias excepturi sit
            mpedit fugit laudantium.
          </p>
        </div>

        <div className="footer__item contact__section">
          <h3 className="title">CONTACT</h3>
          <p className="address">
            66 Broklyn Street, New York United States of
            America
          </p>
          <p className="telNumber">P: 666 888 000</p>
          <p className="email">E: needhelp@meipaly.com</p>
        </div>

        <div className="footer__item social__section">
          <h3 className="title">SOCIAL</h3>
          <a href="#" className="social__section__item">
            <AiOutlineTwitter /> Twitter
          </a>
          <a href="#" className="social__section__item">
            <AiFillFacebook /> Facebook
          </a>
          <a href="#" className="social__section__item">
            <AiFillYoutube /> Youtube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
