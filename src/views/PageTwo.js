import React, { useEffect, useState } from "react";
import Header from "../components/pageTwo/Header";
import Information from "../components/pageTwo/Information";
import ProductList from "../components/pageTwo/ProductList";
const PageTwo = () => {
  const [gifts, setGifts] = useState([])

  useEffect(() => {
    async function getGifts() {
      try {
        const response = await fetch(`https://api.bek.org.tr/api/Test/GetGifts`)
        const data = await response.json();
        setGifts(data.$values);
      }
      catch (err) {
        console.log(err);
      }
    }
    getGifts();
  }, []);
  return (
    <div>
        <Header />
        {
          gifts.length > 0 ? 
          <ProductList
          gifts= {gifts}
          /> : null
        }
        <Information />
    </div>
  );
};

export default PageTwo;
