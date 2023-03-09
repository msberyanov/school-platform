import "./index.css";

import React from 'react';
import { Header } from "./header";
import { useNavigationStore } from "../../store/hooks/use-navigation-store";
import { NavigationType } from "../../util/enum/NavigationType";
import { Dashboard } from "../body/dashboard";

const mapHome = (type: NavigationType): React.ReactElement => {
  switch (type) {
    case NavigationType.Dashboard:
      return <Dashboard/>;
    case NavigationType.Subjects:
      return <div>2</div>;
    case NavigationType.Assessment:
      return <div>3</div>;
    default:
      throw Error("Неправильный тип поля");
  }
}

export const Main: React.FC = () => {
  const {selectedType} = useNavigationStore();

  return (
    <>
      <Header/>
      <div className="home">
        {mapHome(selectedType)}
      </div>
    </>
  );
};