import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Fiyatlandırma</h1>
          <div className='pricing__container'>
            <Link to='/signup' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Başlangıç</h3>
                <h4>₺5.00</h4>
                <p>Lorem</p>
                <ul className='pricing__container-features'>
                  <li>10 şablon örneği</li>
                  <li>2% İndirim</li>
                  <li>10.000 Limit</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Planı seç
                </Button>
              </div>
            </Link>
            <Link to='/signup' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Gelişmiş</h3>
                <h4>₺19.99</h4>
                <p>Lorem</p>
                <ul className='pricing__container-features'>
                  <li>100 Şablon Örneği</li>
                  <li>3.5% İndirim</li>
                  <li>100,000 Limit</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Planı seç
                </Button>
              </div>
            </Link>
            <Link to='/signup' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Uzman</h3>
                <h4>₺99.99</h4>
                <p>Lorem</p>
                <ul className='pricing__container-features'>
                  <li>Limitsiz Şablon</li>
                  <li>5% İndirim</li>
                  <li>100.000 Limit</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Planı seç
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;