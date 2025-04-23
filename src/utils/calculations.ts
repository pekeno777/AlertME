/**
 * Calculate the risk percentage based on sensor values
 * 
 * In a real application, this would use a more sophisticated algorithm
 * based on historical data and environmental factors
 * 
 * @param sensorValue Water level sensor reading (0-100)
 * @param distance Distance from sensor to water surface in cm
 * @returns Risk percentage (0-100)
 */
export const calculateRisk = (sensorValue: number, distance: number): number => {
  // This is a simplified calculation for demonstration
  // Higher sensor value and lower distance both increase risk
  
  // Normalize sensor value (0-100 range)
  const normalizedSensorValue = sensorValue;
  
  // Normalize distance (inverse relationship - lower distance means higher risk)
  // Assuming typical distance ranges from 5-30cm
  const maxDistance = 30;
  const minDistance = 5;
  const normalizedDistance = Math.max(0, 100 - (((distance - minDistance) / (maxDistance - minDistance)) * 100));
  
  // Combine both factors with different weights
  // In this example, we give more weight to the distance sensor
  const weightedRisk = (normalizedSensorValue * 0.4) + (normalizedDistance * 0.6);
  
  // Add some randomization for demonstration purposes
  // In a real app, you wouldn't have this randomization
  const randomFactor = Math.random() * 10 - 5; // -5 to +5
  
  // Ensure risk stays within 0-100 range
  return Math.min(100, Math.max(0, Math.round(weightedRisk + randomFactor)));
};