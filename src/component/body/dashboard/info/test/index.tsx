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
    title: "Математика",
    description: "Биномиальные уравнения",
    date: "Фев, 09"
  },
  {
    title: "Литература",
    description: "Серебрянный век",
    date: "Фев, 10"
  },
  {
    title: "История",
    description: "НЭП",
    date: "Фев, 15"
  },
  {
    title: "Физика",
    description: "Взаимодействие атомов",
    date: "Фев, 17"
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