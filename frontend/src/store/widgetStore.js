import { create } from 'zustand';

const useWidgetStore = create((set) => ({
  widgets: [
    { id: 'card1', title: 'Stats Card', visible: true },
    { id: 'input1', title: 'Live Input', visible: true },
  ],
  toggleWidget: (id) =>
    set((state) => ({
      widgets: state.widgets.map((w) =>
        w.id === id ? { ...w, visible: !w.visible } : w
      ),
    })),
}));
export default useWidgetStore;