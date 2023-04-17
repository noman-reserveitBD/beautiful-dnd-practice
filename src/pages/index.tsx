import Image from "next/image";

import { MainSection } from "@/component/mainSection";
import task from "../data/task.json";
import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function Home() {
  // console.log(task);
  const MainSectionObj = task.map((data) => data.task);

  return (
    <main className="min-h-screen bg-slate-800 text-white">
      <h1>---------------------Demo project-------------------</h1>
      <DragDropContext
        onDragEnd={() => {
          console.log("drag is happen.");
        }}
      >
        <div className="flex flex-row items-start justify-start gap-10">
          {MainSectionObj.map((data: any): JSX.Element => {
            return (
              <Droppable droppableId={data}>
                {(propvided: any) => (
                  <MainSection
                    header={data}
                    data={task}
                    {...propvided.droppaleProps}
                    innerRef={propvided.innerRef}
                  />
                )}
              </Droppable>
            );
          })}
        </div>
      </DragDropContext>
    </main>
  );
}
