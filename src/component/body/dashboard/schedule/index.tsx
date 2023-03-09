import "./index.css";

import React from 'react';
import { INextLessonItemProps } from "../../../../interface/INextLessonItemProps";
import { NextLessonItem } from "../info/next-lesson/item";
import Calendar from "react-beautiful-calendar";

const scheduleItems: INextLessonItemProps[] = [
  {
    title: "Английский язык",
    room: "309",
    time: "09:00 - 10:30"
  },
  {
    title: "Английский язык",
    room: "309",
    time: "09:00 - 10:30"
  },
  {
    title: "Английский язык",
    room: "309",
    time: "09:00 - 10:30"
  },
  {
    title: "Английский язык",
    room: "309",
    time: "09:00 - 10:30"
  }
];

export const Schedule: React.FC = () => {
  return (
    <div className="schedule">
      <div className="calendar">
        <Calendar font="sans-serif"/>
      </div>
      <div className="schedule-item">
        <div className="title">
          Уроки
        </div>
        {
          scheduleItems.map(scheduleItem => (
            <NextLessonItem
              title={scheduleItem.title}
              room={scheduleItem.room}
              time={scheduleItem.time}
            />
          ))
        }
      </div>
    </div>
  );
};