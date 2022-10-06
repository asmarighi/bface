import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profile.jpg";
import "./PostShare.css";
import {HiOutlinePhotograph} from 'react-icons/hi'
import {RiVideoLine} from 'react-icons/ri'
import {GoLocation} from 'react-icons/go'
import {RiFileGifLine} from 'react-icons/ri'
import {AiOutlineClose} from 'react-icons/ai'


const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's on your mind?" />
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
          onClick={()=>imageRef.current.click()}
          >
            <HiOutlinePhotograph />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <RiVideoLine />
            Video
          </div>{" "}
          <div className="option" style={{ color: "var(--location)" }}>
            <GoLocation />
            Location
          </div>{" "}
          <div className="option" style={{ color: "var(--gif)" }}>
            <RiFileGifLine />
            Gif
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
      {image && (

        <div className="previewImage">
          <AiOutlineClose onClick={()=>setImage(null)}/>
          <img src={image.image} alt="" />
        </div>

      )}


      </div>
    </div>
  );
};

export default PostShare;
