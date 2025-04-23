import React, { useState, useEffect } from 'react';
import { RiskIndicator } from './RiskIndicator';
import { SensorData } from './SensorData';
import { WaveAnimation } from './WaveAnimation';
import { fetchSensorData } from '../utils/api';
import { calculateRisk } from '../utils/calculations';

export const RiskMonitor: React.FC = () => {
  const [sensorValue, setSensorValue] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);
  const [riskPercentage, setRiskPercentage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Initial data fetch
    updateSensorData();
    
    // Set up interval for data updates
    const interval = setInterval(updateSensorData, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const updateSensorData = async () => {
    try {
      setLoading(true);
      const data = await fetchSensorData();
      setSensorValue(data.sensorValue);
      setDistance(data.distance);
      
      // Calculate risk percentage based on sensor data
      const risk = calculateRisk(data.sensorValue, data.distance);
      setRiskPercentage(risk);
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching sensor data:', error);
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative">
          <WaveAnimation riskPercentage={riskPercentage} />
          <div className="relative z-10 p-6">
            <RiskIndicator 
              riskPercentage={riskPercentage} 
              loading={loading} 
            />
            
            <div className="mt-8">
              <SensorData 
                sensorValue={sensorValue} 
                distance={distance} 
                riskPercentage={riskPercentage}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};