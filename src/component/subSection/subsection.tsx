import React from "react";
import { Task, Tasks } from "../mainSection/type";
import { Draggable } from "react-beautiful-dnd";

const Subsection: React.FC<Tasks> = ({ data }: Tasks) => {
  return (
    <div
      className="w-full h-20 bg-slate-400"
      style={{
        width: "100%",
        background: "#fff",
        color: "#000",
        height: "5rem",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      {data.map((data) => {
        return (
          <>
            <div>{data.name}</div>
          </>
        );
      })}
    </div>
  );
};

export default Subsection;
