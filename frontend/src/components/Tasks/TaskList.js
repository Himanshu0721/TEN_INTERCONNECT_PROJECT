
import React from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
