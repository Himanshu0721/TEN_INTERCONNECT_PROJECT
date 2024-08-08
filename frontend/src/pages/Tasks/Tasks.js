import React, { useState, useEffect } from "react";
import Task from "../../components/Tasks/Task";
import TaskList from "../../components/Tasks/TaskList";
import TaskForm from "../../components/Tasks/TaskForm";
import ViewTask from "./ViewTask";
import api from "../../api/base";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = React.useState(null);

  // GET all tasks
  const retriveTasks = async () => {
    const response = await api.get("/tasks");
    return response.data;
  };

  // ADD job
  const addTaskHandler = async (job) => {
    const request = {
      id: job.id,
      ...job,
    };
    const response = await api.post("/tasks", request);
    setTasks([...tasks, response.data]);
  };

  // DELETE job
  const removeTaskHandler = async (id) => {
    await api.delete(`/tasks/${id}`);
    const newTasksList = tasks.filter((job) => {
      return job.id !== id;
    });

    setTasks(newTasksList);
  };

  // update job
  const updateTaskHandler = async (job) => {
    const response = await api.put(`/tasks/${job.id}`, job);
    const { id, role, company, location, description, datePosted } =
      response.data;
    setTasks(
      tasks.map((job) => {
        return job.id === id ? { ...response.data } : job;
      })
    );
  };

  useEffect(() => {
    const getAllTasks = async () => {
      const allTasks = await retriveTasks();
      if (allTasks) setTasks(allTasks);
    };

    getAllTasks();
  }, []);

  return (
    <>
      <div className="container-ulist-uprofile ">
        <div className="uform">
          <TaskForm />
        </div>
        <div className="ulist">
          <TaskList tasks={tasks} />
        </div>
        <div className="u-profile">
          {currentTask && <ViewTask job={currentTask} />}
        </div>
      </div>
    </>
  );
};

export default Tasks;
