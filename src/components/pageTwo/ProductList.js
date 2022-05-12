import React from 'react'
import '../../assets/css/pagetwo.css'
import image from '../../assets/images/image1.webp'

const ProductList = () => {
  return (
    <div className='container'>
        <div className='productCardList'>
            <div className='productCard'>
                <div className='productImg'>
                    <figure>
                        <img src={image} />
                    </figure>
                </div>
                <div className='productContent'>
                    <h5>Arçelik Robot Süpürge</h5>
                    <p> RS B034 HM</p>
                    <span>Çekilişte Verilecek Ürün Sayısı: 2 Adet</span>
                </div>
            </div>
            <div className='productCard'>
                <div className='productImg'>
                    <figure>
                        <img src={image} />
                    </figure>
                </div>
                <div className='productContent'>
                    <h5>Arçelik Robot Süpürge</h5>
                    <p> RS B034 HM</p>
                    <span>Çekilişte Verilecek Ürün Sayısı: 2 Adet</span>
                </div>
            </div>
            <div className='productCard'>
                <div className='productImg'>
                    <figure>
                        <img src={image} />
                    </figure>
                </div>
                <div className='productContent'>
                    <h5>Arçelik Robot Süpürge</h5>
                    <p> RS B034 HM</p>
                    <span>Çekilişte Verilecek Ürün Sayısı: 2 Adet</span>
                </div>
            </div>
            <div className='productCard'>
                <div className='productImg'>
                    <figure>
                        <img src={image} />
                    </figure>
                </div>
                <div className='productContent'>
                    <h5>Arçelik Robot Süpürge</h5>
                    <p> RS B034 HM</p>
                    <span>Çekilişte Verilecek Ürün Sayısı: 2 Adet</span>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ProductList