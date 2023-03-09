import create from "zustand";
import { combine } from "zustand/middleware";
import { NavigationType } from "../../util/enum/NavigationType";

interface NavigationStateProps {
  selectedType: NavigationType;
  setSelectedType: (_selectedType: NavigationType) => void;
}

export const useNavigationStore = create<NavigationStateProps>(
  combine({
    selectedType: NavigationType.Dashboard
  }, (set) => ({
    setSelectedType: (_selectedType: NavigationType) => set(() => ({selectedType: _selectedType})),
  }))
)