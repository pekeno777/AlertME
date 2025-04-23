import React from 'react';
import {
  Ruler,
  Waves,
  Percent,
  UserCircle as LoaderCircle,
} from 'lucide-react';

interface SensorDataProps {
  sensorValue: number;
  distance: number;
  riskPercentage: number;
  loading: boolean;
}

export const SensorData: React.FC<SensorDataProps> = ({
  sensorValue,
  distance,
  riskPercentage,
  loading,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <DataCard
        title="Nivel de Agua"
        value={`${sensorValue}%`}
        icon={<Waves className="h-5 w-5 text-blue-500" />}
        loading={loading}
      />
      <DataCard
        title="Distancia"
        value={`${distance} cm`}
        icon={<Ruler className="h-5 w-5 text-indigo-500" />}
        loading={loading}
      />
      <DataCard
        title="Riesgo Calculado"
        value={`${riskPercentage}%`}
        icon={<Percent className="h-5 w-5 text-purple-500" />}
        loading={loading}
      />
    </div>
  );
};

interface DataCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  loading: boolean;
}

const DataCard: React.FC<DataCardProps> = ({ title, value, icon, loading }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
      <div className="flex items-center mb-2">
        {icon}
        <h3 className="ml-2 text-lg font-semibold text-gray-700">{title}</h3>
      </div>
      {loading ? (
        <div className="flex justify-center">
          <LoaderCircle className="h-6 w-6 text-blue-400 animate-spin" />
        </div>
      ) : (
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      )}
    </div>
  );
};
