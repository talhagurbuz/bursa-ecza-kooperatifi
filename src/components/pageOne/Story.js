import React from "react";
import "../../assets/css/story.css";
import { FaTimes } from 'react-icons/fa';

const Story = ({ stories }) => {
  const imagePreview = (id,src) => () => {
    document.getElementById('overlayArea').classList.add('storyFullAreaShow');
    document.getElementById('overlay').src=src;
    document.getElementsByTagName("BODY")[0].classList.add('bodyScrollRemove')
  }
  const closeStory = () => {
    document.getElementById('overlayArea').classList.remove('storyFullAreaShow');
    document.getElementsByTagName("BODY")[0].classList.remove('bodyScrollRemove')

  }
  return (
    <>
    <div id="overlayArea" className="storyFullArea">
      <div className="exitIcon">
        <button onClick={closeStory} className="exitButton">
          <FaTimes />
        </button>
      </div>
      <div className="storyImageFull">
        <img id="overlay" className="storyFull" src="" alt="#" />
      </div>
      </div>
    <div className="container">
      <div className="storyArea">
        {
          stories.map((each, index) => {
            return (
              <div className="storyBorder" key={index}>
                <button onClick={imagePreview(each.$id, each.url)} className="storyIcon" href="/#">
                  <img id={each.$id} className="storyImage" src={each.url} alt="#" />
                  <p >{each.title}</p>
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
    </>
  );
};

export default Story;
