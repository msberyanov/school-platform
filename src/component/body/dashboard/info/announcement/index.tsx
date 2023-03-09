import "./index.css";

import React from 'react';
import { IAnnouncementItemProps } from "../../../../../interface/IAnnouncementItemProps";

const announcementList: IAnnouncementItemProps[] = [
  {
    content: "Принести тетради (36 и 48 листов)"
  },
  {
    content: "Регистрация на олимпиаду по физике"
  },
  {
    content: "Регистрация на олимпиаду по биологии"
  },
];

export const Announcement: React.FC = () => {
  return (
    <div className="announcement">
      <div className="title">
        Объявления
      </div>
      {
        announcementList.map(announcement => (
          <div className="content">
            ⦁ {announcement.content}
          </div>
        ))
      }
    </div>
  );
};