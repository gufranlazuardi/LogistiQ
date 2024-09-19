import { create } from "zustand";

// interface
interface SidebarState {
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

// state
const useSidebarToggle = create<SidebarState>((set) => ({
  isSidebarCollapsed: false,
  toggleSidebar: () =>
    set((state) => ({
      isSidebarCollapsed: !state.isSidebarCollapsed,
    })),
}));

export default useSidebarToggle;
