import React from "react";

interface PropsType {
  name: string;
  meaning: string;
  serial: number;
}

const Surah: React.FC<PropsType> = ({ name, meaning, serial }) => {
  return (
    <div className="flex gap-6 p-4 border group bg-slate-50 border-slate-300">
      <p className="grid w-12 h-12 text-3xl transform rotate-45 rounded-md group-hover:text-white group-hover:bg-primary bg-slate-200 text-slate-800 place-content-center">
        <span className="transform -rotate-45">{serial}</span>
      </p>
      <div>
        <h3 className="text-xl">{name}</h3>
        <p>{meaning}</p>
      </div>
    </div>
  );
};

export default Surah;
