import "./index.css";

import React from 'react';
import { ITestItemProps } from "../../../../../../interface/ITestItemProps";

export const TestItem: React.FC<ITestItemProps> = ({
  title,
  description,
  date,
}) => {
  return (
    <div className="test-item-zone">
      <div className="test-item-zone-1">
        <div className="avatar">
          {title[0]}
        </div>
      </div>
      <div className="test-item-zone-2">
        <div className="title">
          {title}
        </div>
        <div className="description">
          {description}
        </div>
      </div>
      <div className="test-item-zone-3">
        {date}
      </div>
    </div>
  );
};