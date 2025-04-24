import React from "react";
import Alertme from "../utils/alertme.png";


export const Hero: React.FC = () => {
    return (
      <section className="flex items-center justify-around bg-white shadow-sm">
        <div className="max-w-screen mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={Alertme} className="min-h-10 min-w-20" />
          </div>
        </div>
      </section>
    );
  };
  