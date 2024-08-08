import React, { useState } from "react";

function TaskForm() {
  const [task, setTask] = useState({
    assignedBy: "",
    assignedTo: [],
    title: "",
    description: "",
    status: "open",
    deadline: null,
    attachments: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary operations with the task data, such as sending it to a server or updating state.
    console.log(task);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="task-input">
          <label>
            Assigned By:
            <input
              type="text"
              name="assignedBy"
              value={task.assignedBy}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Assigned To:
            <input
              type="text"
              name="assignedTo"
              value={task.assignedTo}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={task.description}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Status:
            <select name="status" value={task.status} onChange={handleChange}>
              <option value="open">Open</option>
              <option value="close">Closed</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Deadline:
            <input
              type="datetime-local"
              name="deadline"
              value={task.deadline}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Attachments:
            <input
              type="file"
              name="attachments"
              multiple
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default TaskForm;

// Task.model {
// 	id
// 	assignedBy : []
//     assignedTo : []
//     title:
//     description:
//     status:
//     deadline:
//     attachments: []
//     comments: []
// }
