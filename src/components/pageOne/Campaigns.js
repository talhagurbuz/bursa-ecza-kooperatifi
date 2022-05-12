import React from "react";
import bigBanner from "../../assets/images/image1.webp";
import "../../assets/css/campaigns.css";
const Campaigns = () => {
  return (
    <div className="container">
      <div className="flexSection">
        {/* LEFT AREA */}
      <section className="leftArea">
        <div className="bigBanner">
          <figure>
          <img className="bannerImg" src={bigBanner} />
          </figure>
          <div className="bannerContent">
            <p>Formlar</p>
          </div>
        </div>
        <div className="dualBanner">
          <div className="middleBanner">
          <figure>
          <img className="bannerImg" src={bigBanner} />
          </figure>
          <div className="bannerContent">
            <p>Formlar</p>
          </div>
          </div>
          <div className="smallBanner">
          <figure>
          <img className="bannerImg" src={bigBanner} />
          </figure>
          <div className="bannerContent">
            <p>Formlar</p>
          </div>
          </div>
        </div>
        <div className="dualBanner">
          <div className="middleBanner">
          <figure>
          <img className="bannerImg" src={bigBanner} />
          </figure>
          <div className="bannerContent">
            <p>Formlar</p>
          </div>
          </div>
          <div className="smallBanner">
          <figure>
          <img className="bannerImg" src={bigBanner} />
          </figure>
          <div className="bannerContent">
            <p>Formlar</p>
          </div>
          </div>
        </div>
      </section>
      {/* RIGHT AREA */}
      <section className="rightArea">
        <div className="rightMenu">
          <div className="menuTitle">
            <h5>Menü</h5>
          </div>
          <div className="menuContent">
            <ul className="menuList">
              <li className="menuItem">
                <a className="menuLink">Formlar</a>
              </li>
              <li className="menuItem">
                <a className="menuLink">Faydalı Linkler</a>
              </li>
              <li className="menuItem">
                <a className="menuLink">Araçlar</a>
              </li>
              <li className="menuItem">
                <a className="menuLink">E-Fatura</a>
              </li>
              <li className="menuItem">
                <a className="menuLink">Sizi Düşünüyoruz</a>
              </li>
              <li className="menuItem">
                <a className="menuLink">BEK Akademi</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="rightBannerArea">
        <div className="rightBanner">
          <figure>
          <img className="bannerImg" src={bigBanner} />
          </figure>
          <div className="rightBannerContent">
            <p>Formlar</p>
          </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};
export default Campaigns;
