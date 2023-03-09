import "./index.css";
import React from 'react';
import { useNavigationStore } from "../../../../store/hooks/use-navigation-store";
import { NavigationType } from "../../../../util/enum/NavigationType";

interface NavigationButtonProps {
  type: number;
  title: string;
  disabled: boolean;
}

const navigationButtons: NavigationButtonProps[] = [
  {
    type: NavigationType.Dashboard,
    title: "Главная",
    disabled: false,
  },
  {
    type: NavigationType.Subjects,
    title: "Предметы",
    disabled: true,
  },
  {
    type: NavigationType.Assessment,
    title: "Оценки",
    disabled: true,
  },
]

export const Navigation: React.FC = () => {
  const {selectedType, setSelectedType} = useNavigationStore();

  return (
    <div className="navigation">
      {navigationButtons.map(navigationButton =>
        <>
          <div
            className={`navigation-item ${isSelected(selectedType, navigationButton.type)} ${isDisabled(navigationButton.disabled)}`}
            onClick={() => {
              if (!navigationButton.disabled) {
                setSelectedType(navigationButton.type)
              }
            }}
          >
            {navigationButton.title}
          </div>
        </>)}
    </div>
  );
};

const isSelected = (selected: number, index: number) => (selected === index) ? "selected " : "";
const isDisabled = (disabled: boolean) => disabled ? "disabled " : "";