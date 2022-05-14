import React, { useEffect, useState } from 'react'
import HeaderThree from '../components/pageThree/HeaderThree'
import ProductArea from '../components/pageThree/ProductArea'

const PageThree = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(`https://api.bek.org.tr/api/Test/GetProducts`)
        const data = await response.json();
        setProducts(data.$values);
      }
      catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, []);
  return (
    <div>
      <HeaderThree />
      <ProductArea 
      product={products}
      />
    </div>
  )
}

export default PageThree