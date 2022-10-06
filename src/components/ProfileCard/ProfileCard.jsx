import React from 'react'
import Cover from '../../img/cover.png'
import Profile from '../../img/profile.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>
            
            <div className="ProfileName">
                <span>Jane Duff</span>
                <span>Junior web developer</span>
            </div>

            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span> 54,456 </span>
                        <span>Followings</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>123 </span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr />
            </div>
            <span>
                My profile
            </span>
        </div>
    )
}

export default ProfileCard