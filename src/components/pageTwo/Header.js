import React from 'react'
import '../../assets/css/pagetwo.css'
import logo from '../../assets/images/logo.jpg'
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='container'>
            <div className='headerWhole'>
                <div className='logo'>
                    <img src={logo} alt="#" />
                </div>
                <div className='headerBottom'>
                    <Link className='backButton' to="/">
                        <i>
                            <BiArrowBack />
                        </i>
                        <span>Ana Ekrana Dön</span>
                    </Link>
                    <span>
                        Sponsorlar Ürün Listesi
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header