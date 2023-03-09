import "./index.css";

import React from 'react';
import { INextLessonItemProps } from "../../../../../../interface/INextLessonItemProps";

export const NextLessonItem: React.FC<INextLessonItemProps> = ({
  title,
  room,
  time
}) => {
  return (
    <div className="next-lesson-item-zone">
      <div className="next-lesson-item-zone-1">
        <div className="avatar">
          {title[0]}
        </div>
      </div>
      <div className="next-lesson-item-zone-2">
        <div className="title">
          {title}
        </div>
        <div className="description">
          {room} → {time}
        </div>
      </div>
    </div>
  );
};