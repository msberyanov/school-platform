import "./index.css";

import React from 'react';
import { NextLessonItem } from "./item";
import { INextLessonItemProps } from "../../../../../interface/INextLessonItemProps";

const nextLessonItems: INextLessonItemProps[] = [
  {
    title: "История",
    room: "309",
    time: "10:50 - 11:35"
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