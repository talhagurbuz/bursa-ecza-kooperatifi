import React from "react";
import { BsCart } from 'react-icons/bs';
const ProductArea = ({ product }) => {
    const counterMines = id => () => {
        let counter = document.getElementById(id).innerHTML;
        if(counter != 0){
            counter--;
        }
        document.getElementById(id).innerHTML = counter;
    }
    const counterPlus = id => () => {
        let counter = document.getElementById(id).innerHTML;
        counter++;
        document.getElementById(id).innerHTML = counter;
    }
    return (
        <div className="container">
            <div className="flexSection">
                {/* LEFT AREA */}
                <section className="proLeftArea">
                    <div className='productList'>
                        {
                            product.map((each, index) => {
                                return (<div className='productCard' key={index}>
                                    <div className='productImg'>
                                        <figure>
                                            <img src={each.url} alt="#" />
                                        </figure>
                                    </div>
                                    <div className='proContent'>
                                        <h5>{each.name}</h5>
                                        <p><b>752</b> Paket İçeriği 2 Adet</p>
                                        <div className="cardFooter">
                                            <span>{each.price} BEK Puan</span>
                                            <div className="counterButtonArea">
                                                <button onClick={counterMines(each.$id)} className="counterButton">-</button>
                                                <p id={each.$id}>0</p>
                                                <button onClick={counterPlus(each.$id)} className="counterButton">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
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
                            <BsCart />
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
