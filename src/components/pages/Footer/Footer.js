import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Dijital pazarlama alanında çalışmalarımızdan ve bloglarımızdan haberdar olmak için abone olun
        </p>
        <p className='footer-subscription-text'>
          Dilediğin zaman abonelikten çık
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Abone Ol</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Hakkımızda</h2>
            <Link to='/sign-up'>Lorem</Link>
            <Link to='/'>Lorem ipsum</Link>
            <Link to='/'>Kariyer</Link>
            <Link to='/'>İK</Link>
            <Link to='/'>Gizlilik</Link>
          </div>
          <div className='footer-link-items'>
            <h2>İletişime Geç</h2>
            <Link to='/'>İletişim</Link>
            <Link to='/'>Destek</Link>
            <Link to='/'>Sponsorlar</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Videoya Git</Link>
            <Link to='/'>Ajans</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Sosyal Medya</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <IoRocketSharp className='navbar-icon' />
              emailrockets
            </Link>
          </div>
          <small className='website-rights'>emailrockets © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;