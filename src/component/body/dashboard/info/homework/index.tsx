import "./index.css";

import React from 'react';
import { HomeworkItem } from "./item";
import { IHomeWorkItemProps } from "../../../../../interface/IHomeWorkItemProps";

const homeworkList: IHomeWorkItemProps[] = [
  {
    title: "Физика",
    description: "Стр. 15 – Упр. 2,3",
    done: true
  },
  {
    title: "Биология",
    description: "Стр. 7 – Упр. 1-5",
    done: true
  },
  {
    title: "Математика",
    description: "Стр. 25 – Упр. 1",
    done: true
  },
  {
    title: "Литература",
    description: "Прочитать \"Алые паруса\"",
    done: true
  }
];

export const Homework: React.FC = () => {
  return (
    <div className="homework">
      <div className="homework-title">
        Домашнее задание
      </div>
      {
        homeworkList.map(homeworkItem => (
          <HomeworkItem
            title={homeworkItem.title}
            description={homeworkItem.description}
            done={homeworkItem.done}
          />
        ))
      }
    </div>
  );
};