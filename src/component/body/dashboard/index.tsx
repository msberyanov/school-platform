import "./index.css";

import React from 'react';
import { Countdown } from "./info/countdown";
import { Homework } from "./info/homework";
import { Announcement } from "./info/announcement";
import { NextLesson } from "./info/next-lesson";
import { Test } from "./info/test";
import { Schedule } from "./schedule";
import Calendar from 'react-calendar';
import { PROFILE_NAME } from "../../../const/profile";

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="info">
        <div className="greeting">
          <div className="title">
            Привет, {PROFILE_NAME}!
          </div>
        </div>
        <div className="info-col-zone">
          <div className="info-col-1">
            <Countdown/>
            <Homework/>
            <Announcement/>
          </div>
          <div className="info-col-2">
            <NextLesson/>
            <Test/>
          </div>
        </div>
      </div>
      <Schedule/>
    </div>
  );
};