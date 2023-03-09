import "./index.css";
import React from 'react';
import { Logo } from "./logo";
import { Navigation } from "./navigation";
import { Profile } from "./profile";

export const Header: React.FC = () => {
  return (
    <nav className="header">
      <Logo/>
      <Navigation/>
      <Profile/>
    </nav>
  );
};