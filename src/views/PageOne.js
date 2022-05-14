import React, { useEffect, useState } from "react";
import Campaigns from "../components/pageOne/Campaigns";
import Story from "../components/pageOne/Story";
const PageOne = () => {
  const [story, setStory] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function getStories() {
      try {
        const response = await fetch(`https://api.bek.org.tr/api/Test/GetStories`)
        const data = await response.json();
        setStory(data.$values);
      }
      catch (err) {
        console.log(err);
      }
    }
    async function getCampaigns() {
      try {
        const response = await fetch(`https://api.bek.org.tr/api/Test/GetCampaigns`)
        const data = await response.json();
        setCampaigns(data.$values);
      }
      catch (err) {
        console.log(err);
      }
    }
    async function getMenus() {
      try {
        const response = await fetch(`https://api.bek.org.tr/api/Test/GetMenus`)
        const data = await response.json();
        setMenu(data.$values);
      }
      catch (err) {
        console.log(err);
      }
    }

    getStories();
    getCampaigns();
    getMenus();
  }, []);
  return (
    <div>
      {
        story.length > 0 ? < Story stories={story} /> : null
      }
      {
        campaigns.length > 0 && menu.length > 0 ? <Campaigns
          campaigns={campaigns}
          menus={menu}
        /> : null
      }


    </div>
  );
};

export default PageOne;
