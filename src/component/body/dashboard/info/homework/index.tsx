import "./index.css";

import React from 'react';
import { HomeworkItem } from "./item";
import { IHomeWorkItemProps } from "../../../../../interface/IHomeWorkItemProps";

const homeworkList: IHomeWorkItemProps[] = [
  {
    title: "Физика",
    description: "Страница 15 – Упражнение 2,3",
    done: true
  },
  {
    title: "Биология",
    description: "Страница 7 – Упражнение 1",
    done: true
  },
  {
    title: "Математика",
    description: "Страница 7 – Упражнение 1,2,3,4",
    done: true
  },
  {
    title: "Литература",
    description: "Книга – Алые паруса",
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