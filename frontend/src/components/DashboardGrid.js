// src/components/DashboardGrid.js
import { useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import Card from './Card';
import LiveInput from './LiveInput';
import useWidgetStore from '../store/widgetStore';
import { fetchWidgetData } from '../api/widgetAPI';

const DashboardGrid = () => {
  const { widgets, toggleWidget } = useWidgetStore();

  // Fetch widget data on mount (prepare for backend integration)
  useEffect(() => {
    fetchWidgetData().then((data) => {
      console.log('Fetched widget data:', data);
      // You can later sync Zustand state here with fetched data
    });
  }, []);

  // Generate layout for Grid
  const layout = widgets.map((widget, index) => ({
    i: widget.id,
    x: (index * 4) % 12,
    y: Math.floor(index / 3) * 2,
    w: 4,
    h: 2,
  }));

  return (
    <div className="p-4">
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        {widgets.map(
          (widget) =>
            widget.visible && (
              <div key={widget.id} className="bg-white p-4 shadow-md rounded">
                {widget.id === 'card1' && (
                  <>
                    <Card title={widget.title} />
                    <button
                      onClick={() => toggleWidget(widget.id)}
                      className="mt-2 text-sm text-blue-500 underline"
                    >
                      Hide Widget
                    </button>
                  </>
                )}
                {widget.id === 'input1' && (
                  <>
                    <LiveInput />
                    <button
                      onClick={() => toggleWidget(widget.id)}
                      className="mt-2 text-sm text-blue-500 underline"
                    >
                      Hide Widget
                    </button>
                  </>
                )}
              </div>
            )
        )}
      </GridLayout>
    </div>
  );
};

export default DashboardGrid;