import React from "react";
import Alertme from "../utils/alertme.png";
import { RiskMonitor } from "./RiskMonitor";

export const Hero: React.FC = () => {
    return (
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white shadow-sm p-6">
        <div className="flex-shrink-0">
          <img src={Alertme} alt="AlertME Logo" className="h-64 w-auto" />
        </div>
        <div className="w-full max-w-2xl">
          <RiskMonitor />
        </div>
      </section>
    );
  };