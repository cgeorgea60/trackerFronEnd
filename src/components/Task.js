//import { useState } from "react";
import { FaTimes } from "react-icons/fa";
//import taskFinder from "../apis/taskFinder";
import Modal from "./Modal";

const Task = ({ onIsOpen, onClose, task, onDelete, onToggle, onOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // // Open Modal
  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // // colseModal
  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  // // DELETE TASK
  // const deleteTask = async (id) => {
  //   await taskFinder.delete(`/${id}`);
  //   setTasks(tasks.filter((task) => task._id !== id));
  //   closeModal();
  // };
  return (
    <div
      className={`task ${task.reminder ? "reminder" : " "}`}
      onDoubleClick={() => onToggle(task._id)}
      //onDelete={onDelete}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={onOpen}
          //task={task}
        />
      </h3>
      <p style={{ fontSize: "small" }}>{task.day}</p>
      <Modal
        onIsOpen={onIsOpen}
        onClose={onClose}
        onDelete={onDelete}
        task={task}
      />
    </div>
  );
};

export default Task;
