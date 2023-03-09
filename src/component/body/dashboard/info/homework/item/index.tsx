import "./index.css";

import React from 'react';
import { IHomeWorkItemProps } from "../../../../../../interface/IHomeWorkItemProps";

export const HomeworkItem: React.FC<IHomeWorkItemProps> = ({
  title,
  description,
  done
}) => {
  return (
    <div className="homework-item-zone">
      <div className="homework-item-zone-1">
        <div className="avatar">
          {title[0]}
        </div>
      </div>
      <div className="homework-item-zone-2">
        <div className="title">
          {title}
        </div>
        <div className="description">
          {description}
        </div>
      </div>
      <div className="homework-item-zone-3">
        <input type="checkbox" className="checkbox" checked={done}/>
      </div>
    </div>
  );
};