import React from 'react'
import logo from '../../assets/images/logo.jpg'
import { BiArrowBack } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import '../../assets/css/pagethree.css';
import {Link} from 'react-router-dom';
const HeaderThree = () => {
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
            <div className='searchArea'>
              <input className='searchBox' placeholder='Ürünlerde marka yada ürün yazarak arayın...' type={'search'} />
              <button onClick={() => {console.log('search basıldı.')}}>
                <FiSearch className='searchButton' />
              </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HeaderThree