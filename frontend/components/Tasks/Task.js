import React from "react";

function Task({ task }) {
  return (
    <div>
      <h2>Task Details</h2>
      <p>
        <strong>Assigned By:</strong> {task.assignedBy}
      </p>
      <p>
        <strong>Assigned To:</strong> {task.assignedTo.join(", ")}
      </p>
      <p>
        <strong>Title:</strong> {task.title}
      </p>
      <p>
        <strong>Description:</strong> {task.description}
      </p>
      <p>
        <strong>Status:</strong> {task.status}
      </p>
      <p>
        <strong>Deadline:</strong> {task.deadline}
      </p>
      <p>
        <strong>Attachments:</strong> {task.attachments.join(", ")}
      </p>
    </div>
  );
}


export default Task;
