import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import taskFinder from "./apis/taskFinder";
import {Circles} from "react-loader-spinner";

function App() {
  const [isLoading, setIsLodding] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Loads Tasks on page loads
  useEffect(() => {
    setIsLodding(true);
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
      setIsLodding(false);
    };
    getTasks();
  }, []);

  //Fetch Tasks
  const fetchTasks = async () => {
    try {
      const response = await taskFinder.get("/");
      const data = await response.data.data;
      return data;
    } catch (error) {
      alert(error);
    }
  };
  // Add Task

  const addTask = async (task) => {
    console.log({ ...task });
    const { text, day, reminder } = task;
    const response = await taskFinder.post("/", { text, day, reminder });
    const data = await response.data.data;
    setTasks([...tasks, data]);
    alert(response.data.message);
  };
  // DELETE TASK
  const deleteTask = async (id) => {
    const response = await taskFinder.delete(`/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
    alert(response.data.message);
  };

  //Fetch a Task
  const fetchTask = async (id) => {
    try {
      const response = await taskFinder.get(`/${id}`);
      const data = await response.data.data;
      return data;
    } catch (error) {
      alert(error);
    }
  };
  //Toggle Reminder

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    await taskFinder.put(`/${id}`, {
      reminder: updatedTask.reminder,
    });
    setTasks(
      tasks.map((task) =>
        task._id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <Router>
      {isLoading ? (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass="circles"
          visible={true}
        />
      ) : (
        <div className="container">
          <Header
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {showAddTask && <AddTask onAdd={addTask} />}
                  {tasks.length > 0 ? (
                    <Tasks
                      tasks={tasks}
                      onDelete={deleteTask}
                      onToggle={toggleReminder}
                    />
                  ) : (
                    <p>No Tasks to Show</p>
                  )}
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}
export default App;
