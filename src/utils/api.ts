// Real data fetching from ESP32
// Replace ESP32_IP with your device's IP address or domain
const ESP32_URL = 'http://ESP32_IP';

interface SensorData {
  sensorValue: number;
  distance: number;
}

// Mock data generation for development
const generateMockData = (): SensorData => {
  // Generate realistic mock values
  // sensorValue: 0-100 range for percentage
  // distance: 10-50 cm range for typical ultrasonic sensor
  return {
    sensorValue: Math.floor(Math.random() * 100),
    distance: Math.floor(Math.random() * 40) + 10
  };
};

export const fetchSensorData = async (): Promise<SensorData> => {
  // Check if we're in development mode
  if (import.meta.env.DEV) {
    // Use mock data in development
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(generateMockData());
      }, 1000); // Add slight delay to simulate network request
    });
  }

  try {
    const response = await fetch(`${ESP32_URL}/sensor-data`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch sensor data');
    }
    
    const data = await response.json();
    
    return {
      sensorValue: Number(data.sensorValue),
      distance: Number(data.distance)
    };
  } catch (error) {
    console.error('Error fetching data from ESP32:', error);
    // Return mock data in case of error
    return generateMockData();
  }
};