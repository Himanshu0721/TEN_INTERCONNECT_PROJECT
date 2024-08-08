import React from "react";

function TaskCard({ task }) {
  const { assignedBy, title, deadline } = task;

  return (
    <div className="task-card">
      <h3>{assignedBy}</h3>
      <h4>{title}</h4>
      <p>Deadline: {deadline}</p>
    </div>
  );
}

export default TaskCard;
