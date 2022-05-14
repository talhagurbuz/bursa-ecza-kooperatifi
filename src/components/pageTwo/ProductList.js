import React from 'react'
import '../../assets/css/pagetwo.css'

const ProductList = ({ gifts }) => {
    return (
        <div className='container'>
            <div className='productCardList'>
                {
                    gifts.map((each, index) => {
                        return (
                            <div className='productCard'>
                                <div className='productImg'>
                                    <figure>
                                        <img src={each.url} alt="#" />
                                    </figure>
                                </div>
                                <div className='productContent'>
                                    <h5>{each.brand}</h5>
                                    <p>{each.name}</p>
                                    <span>{each.description}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductList