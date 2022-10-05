import { Tooltip } from "antd";
import React from "react";

interface PropsType {
  arabic_name: string;
  english_name: string;
  number_of_verses: number;
  meaning: string;
  serial: number;
  revelation_place: string;
}

const Surah: React.FC<PropsType> = ({
  arabic_name,
  english_name,
  number_of_verses,
  meaning,
  serial,
  revelation_place,
}) => {
  return (
    <div className="flex gap-6 p-4 border group bg-slate-50 border-slate-300">
      <div className="flex flex-col items-center gap-2">
        <div className="grid w-10 h-10 text-2xl text-white transition-all duration-300 transform rotate-45 rounded-md place-content-center group-hover:bg-primary bg-slate-700">
          <span className="transform -rotate-45">{serial}</span>
        </div>
        <Tooltip title="Number of verses" color="cyan" placement="bottom">
          <span className="text-lg">{number_of_verses}</span>
        </Tooltip>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl">
          {arabic_name} ({english_name})
        </h3>
        <Tooltip title="English meaning of this surah">
          <p className=" text-slate-500">{meaning}</p>
        </Tooltip>
        <Tooltip title="Revealed Location">
          <p className=" text-slate-500">{revelation_place}</p>
        </Tooltip>
      </div>
    </div>
  );
};

export default Surah;
