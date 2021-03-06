import React from "react";
/**
 * @function Profile 
 * @returns A component which display a My profile data
 */
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img
          className="profile-pic"
          src="https://avatars.githubusercontent.com/u/59208992?v=4"
          alt="UKWITEGETSE"
        />
      </div>
      <div className="profile-name-container">
        <h5 className="profile-name">JEAN DE DIEU UKWITEGETSE</h5>
        <h6 className="profile-skills">
          Skills: React Js,Node Js, antd,Material ui,FireBase-Cloude
          firestore,MongoDB,
          <br />
          ReactBoostrap,Html and Css
        </h6>
      </div>
    </div>
  );
};

export default Profile;
