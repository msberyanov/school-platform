import "./index.css";

import React from 'react';
import { INextLessonItemProps } from "../../../../../interface/INextLessonItemProps";

export const ScheduleItem: React.FC<INextLessonItemProps> = ({
  title,
  room,
  time
}) => {
  return (
    <div className="schedule-item-zone">
      <div className="schedule-item-zone-1">
        <div className="avatar">
          {title[0]}
        </div>
      </div>
      <div className="schedule-item-zone-2">
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