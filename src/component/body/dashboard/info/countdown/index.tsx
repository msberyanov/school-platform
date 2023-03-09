import "./index.css";

import React from 'react';

export const Countdown: React.FC = () => {
  return (
    <div className="countdown">
      <div className="title">
        Осталось
      </div>

      <div className="time">
        05:00 минут до конца урока
      </div>
    </div>
  );
};