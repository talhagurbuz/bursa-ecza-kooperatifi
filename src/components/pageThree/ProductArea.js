import React from "react";
import image from "../../assets/images/image1.webp";
import { BsCart } from 'react-icons/bs';
const ProductArea = () => {
  return (
    <div className="container">
      <div className="flexSection">
        {/* LEFT AREA */}
        <section className="proLeftArea">
        <div className='productList'>
            <div className='productCard'>
                <div className='productImg'>
                    <figure>
                        <img src={image} />
                    </figure>
                </div>
                <div className='proContent'>
                    <h5>Wee Göğüs Pompası Manuel</h5>
                    <p><b>752</b> Paket İçeriği 2 Adet</p>
                    <div className="cardFooter">
                        <span>150 BEK Puan</span>
                        <div className="counterButtonArea">
                           <button className="counterButton">-</button>
                           <p>0</p>
                           <button className="counterButton">+</button>
                        </div>
                    </div>
                </div>
            </div>    
            <div className='productCard'>
                <div className='productImg'>
                    <figure>
                        <img src={image} />
                    </figure>
                </div>
                <div className='proContent'>
                    <h5>Wee Göğüs Pompası Manuel</h5>
                    <p><b>752</b> Paket İçeriği 2 Adet</p>
                    <div className="cardFooter">
                        <span>150 BEK Puan</span>
                        <div className="counterButtonArea">
                           <button className="counterButton">-</button>
                           <p>0</p>
                           <button className="counterButton">+</button>
                        </div>
                    </div>
                </div>
            </div>     
            <div className='productCard'>
                <div className='productImg'>
                    <figure>
                        <img src={image} />
                    </figure>
                </div>
                <div className='proContent'>
                    <h5>Wee Göğüs Pompası Manuel</h5>
                    <p><b>752</b> Paket İçeriği 2 Adet</p>
                    <div className="cardFooter">
                        <span>150 BEK Puan</span>
                        <div className="counterButtonArea">
                           <button className="counterButton">-</button>
                           <p>0</p>
                           <button className="counterButton">+</button>
                        </div>
                    </div>
                </div>
            </div>     
            <div className='productCard'>
                <div className='productImg'>
                    <figure>
                        <img src={image} />
                    </figure>
                </div>
                <div className='proContent'>
                    <h5>Wee Göğüs Pompası Manuel</h5>
                    <p><b>752</b> Paket İçeriği 2 Adet</p>
                    <div className="cardFooter">
                        <span>150 BEK Puan</span>
                        <div className="counterButtonArea">
                           <button className="counterButton">-</button>
                           <p>0</p>
                           <button className="counterButton">+</button>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
        </section>
        {/* RIGHT AREA */}
        <section className="proRightArea">
                <div className="pointArea">
                    BEK Puanınız: 
                </div>
            <div className="basketArea">
                <div className="basketTitle">
                    <h5>Sepetiniz</h5>
                    <BsCart/>
                </div>
                <div className="basketContent">
                    <span>Toplam Sepet Parası 0 Bek Parası</span>
                    <p>Kalan Sepet Puanı: 0</p>
                </div>
            </div>
            <div>
                <button className="submitButton">
                    Siparişi Tamamla
                </button>
            </div>
        </section>
      </div>
    </div>
  );
};

export default ProductArea;
