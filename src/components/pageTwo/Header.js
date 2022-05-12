import React from 'react'
import '../../assets/css/pagetwo.css'
import logo from '../../assets/images/logo.jpg'
import { BiArrowBack } from 'react-icons/bi';
const Header = () => {
  return (
    <div className='container'>
        <div className='headerWhole'>
        <div className='logo'>
            <img src={logo} />
        </div>
        <div className='headerBottom'>
            <button className='backButton'>
                <i>
                <BiArrowBack />
                </i>
                <span> Ana Ekrana Dön</span>
            </button>
            <span>
                Sponsorlar Ürün Listesi
            </span>
        </div>
        </div>
    </div>
  )
}

export default Header