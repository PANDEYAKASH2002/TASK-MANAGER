import React, { useState, useEffect } from "react";

function Tasks() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!title || !description) return alert("Please fill in all fields");
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setTitle("");
    setDescription("");
  };

  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <h2 className="text-3xl font-semibold mb-4">Task List</h2>

      <div className="mb-6">
        <input
          className="border px-4 py-2 mr-2 w-1/3"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border px-4 py-2 mr-2 w-1/3"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Task
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between bg-white p-4 mb-3 rounded shadow"
          >
            <div>
              <h3 className={`text-xl ${task.completed ? "line-through" : ""}`}>{task.title}</h3>
              <p className="text-gray-600">{task.description}</p>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleStatus(task.id)}
              />
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;