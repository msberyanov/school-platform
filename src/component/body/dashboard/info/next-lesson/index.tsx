import "./index.css";

import React from 'react';
import { NextLessonItem } from "./item";
import { INextLessonItemProps } from "../../../../../interface/INextLessonItemProps";

const nextLessonItems: INextLessonItemProps[] = [
  {
    title: "Английский язык",
    room: "309",
    time: "09:00 - 10:30"
  }
];

export const NextLesson: React.FC = () => {
  return (
    <div className="next-lesson">
      <div className="title">
        Следующий урок
      </div>
      {
        nextLessonItems.map(nextLesson => (
          <NextLessonItem
            title={nextLesson.title}
            room={nextLesson.room}
            time={nextLesson.time}
          />
        ))
      }
    </div>
  );
};