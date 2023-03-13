import "./index.css";
import React from 'react';
import { PROFILE_NAME } from "../../../../const/profile";

const avatar = require("../../../../avatar/avatar.jpg");

export const Profile: React.FC = () => {
  return (
    <div className="profile">
      <img src={avatar} className="avatar"/>
      {PROFILE_NAME}
    </div>
  );
};