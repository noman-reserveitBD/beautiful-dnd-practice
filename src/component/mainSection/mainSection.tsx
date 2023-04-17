import React from "react";
import { Task, Tasks } from "./type";
import { Subsection } from "../subSection";
import { Droppable } from "react-beautiful-dnd";

const MainSection: React.FC<Tasks> = ({ data, header }: Tasks): JSX.Element => {
  //   console.log(data);
  const filterData = data.filter((data) => data.task === header);

  return (
    <div
      style={{
        width: "20rem",
        height: "100vh",
        background: "grey",
        padding: "20px",
      }}
    >
      <h1>{header}</h1>
      <Droppable>
        <Subsection data={filterData} />
      </Droppable>
    </div>
  );
};

export default MainSection;
