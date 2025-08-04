// src/api/widgetAPI.js
import axiosInstance from './axiosInstance';

// Fetch widget data from backend
export const fetchWidgetData = async () => {
  try {
    const res = await axiosInstance.get('/api/widgets');
    return res.data;
  } catch (error) {
    console.error('Error fetching widget data:', error);
    return [];
  }
};