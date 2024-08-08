import React from "react";
import Task from "../../components/Tasks/Task";

const ViewTask = () => {
  const tempTask = {
    assignedBy: "John Smith",
    assignedTo: ["Alice Johnson", "Bob Thompson"],
    title: "Update Website UI",
    description:
      "Revamp the user interface of the website to improve user experience.",
    status: "open",
    deadline: "2023-07-15 18:00",
    attachments: ["design_mockup.png", "style_guide.pdf"],
  };

  return (
    <>
      <Task task={tempTask} />
    </>
  );
};

export default ViewTask;
