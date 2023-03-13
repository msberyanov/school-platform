import "./index.css";

import React from 'react';
import { INextLessonItemProps } from "../../../../interface/INextLessonItemProps";
import { NextLessonItem } from "../info/next-lesson/item";
import Calendar from "react-beautiful-calendar";
import {ScheduleItem} from "./item";

const scheduleItems: INextLessonItemProps[] = [
  {
    title: "Английский язык",
    room: "309",
    time: "09:00 - 09:45"
  },
  {
    title: "Математика",
    room: "312",
    time: "09:55 - 10:40"
  },
  {
    title: "История",
    room: "514",
    time: "10:50 - 11:35"
  },
  {
    title: "Физика",
    room: "222",
    time: "11:55 - 12:40"
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
            <ScheduleItem
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