import React from "react";
import bigBanner from "../../assets/images/image1.webp";
import "../../assets/css/campaigns.css";
import { Link } from "react-router-dom";

const RightArea = ({ data }) => {
  return (
    < section className="rightArea" >
      <div className="rightMenu">
        <div className="menuTitle">
          <h5>Menü</h5>
        </div>
        <div className="menuContent">
          <ul className="menuList">
            <li className="menuItem">
              <Link className="menuLink" to="/pagetwo">Page Two</Link>
            </li>
            <li className="menuItem">
              <Link className="menuLink" to="/pagethree">Page Three</Link>
            </li>
            {
              data.map((each, index) => {
                return (
                  <li className="menuItem" key={index}>
                    <a href={each.url} className="menuLink">{each.name}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className="rightBannerArea">
        <div className="rightBanner">
          <figure>
            <img className="bannerImg" src={bigBanner} alt="#" />
          </figure>
          <div className="rightBannerContent">
            <p>Formlar</p>
          </div>
        </div>
      </div>
    </section >
  )
}

const FullBanner = ({ data }) => {
  return (
    <div className="bigBanner">
      <figure>
        <img className="bannerImg" src={data.url} alt="#"/>
      </figure>
      <div className="bannerContent">
        <p> {data.name} </p>
      </div>
    </div>
  )
}

const DualBanner = ({ data }) => {
  return data.map((each, index) =>
    <div key={index} className="dualBanner" >
      {
        each.map((item, index) => {
          return (
            <div className={index === 0 ? 'middleBanner' : 'smallBanner'} key={index}>
              <figure>
                <img className="bannerImg" src={item.url} alt="#"/>
              </figure>
              <div className="bannerContent">
                <p>{item.name}</p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

const LeftArea = ({ data }) => {
  const fullBanner = data[0]
  const dualBanners = data.slice(1)
  const chunckArray = function (array, chunkCount) {
    let chunks = [], i, j;
    for (i = 0, j = array.length; i < j; i += chunkCount) {
      chunks.push(array.slice(i, i + chunkCount));
    }
    return chunks;
  }
  const slicedBanner = chunckArray(dualBanners, 2);
  return (
    <section className="leftArea">
      <FullBanner data={fullBanner} />
      <DualBanner data={slicedBanner} />
    </section>

  )
}

const Campaigns = ({ campaigns, menus }) => {

  return (
    <div className="container">
      <div className="flexSection">
        {/* LEFT AREA */}
        <LeftArea data={campaigns} />
        {/* Right Area */}
        <RightArea data={menus} />
      </div >
    </div >
  );
};

export default Campaigns;
