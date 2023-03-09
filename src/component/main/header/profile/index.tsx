import "./index.css";
import React from 'react';
import { PROFILE_NAME } from "../../../../const/profile";

export const Profile: React.FC = () => {
  return (
    <div className="profile">
      {PROFILE_NAME}
    </div>
  );
};