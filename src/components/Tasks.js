import Task from "./Task";

const Tasks = ({
  onIsOpen,
  onClose,
  task,
  onDelete,
  onToggle,
  onOpen,
  tasks,
}) => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <Task
            key={task._id}
            task={task}
            tasks={tasks}
            onOpen={onOpen}
            onToggle={onToggle}
            onDelete={onDelete}
            onIsOpen={onIsOpen}
            onClose={onClose}
            
          />
        );
      })}
    </>
  );
};
export default Tasks;
