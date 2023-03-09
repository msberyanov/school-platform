import "./index.css";

import React from 'react';
import { TestItem } from "./item";
import { ITestItemProps } from "../../../../../interface/ITestItemProps";

const testItems: ITestItemProps[] = [
  {
    title: "Английский язык",
    description: "Past Simple",
    date: "Фев, 09"
  },
  {
    title: "Английский язык",
    description: "Past Simple",
    date: "Фев, 09"
  },
  {
    title: "Английский язык",
    description: "Past Simple",
    date: "Фев, 09"
  },
  {
    title: "Английский язык",
    description: "Past Simple",
    date: "Фев, 09"
  },
  {
    title: "Английский язык",
    description: "Past Simple",
    date: "Фев, 09"
  }
];

export const Test: React.FC = () => {
  return (
    <div className="next-lesson">
      <div className="title">
        Контрольные работы
      </div>
      {
        testItems.map(nextLesson => (
          <TestItem
            title={nextLesson.title}
            description={nextLesson.description}
            date={nextLesson.date}
          />
        ))
      }
    </div>
  );
};