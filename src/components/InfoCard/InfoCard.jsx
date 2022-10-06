import React, { useState } from "react";
import "./InfoCard.css";
import {BiPencil} from 'react-icons/bi'
import ProfileModal from "../ProfileModal.jsx/ProfileModal";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>My Informations</h4>
        <div>
          <BiPencil
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>Married</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Brussels</span>
      </div>

      <div className="info">
        <span>
          <b>Trainee at </b>
        </span>
        <span>Becode</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
