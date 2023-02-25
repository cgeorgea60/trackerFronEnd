import { useState } from "react";
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-clock/dist/Clock.css'
import { FaChevronDown } from "react-icons/fa";
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [value, onChange] = useState(new Date());
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Task cannot be empty");
      return;
    }
    onAdd({ text, value, reminder });
    setText("");
    onChange(new Date());
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label className="label">Task</label>
        <input
          type="text"
          placeholder="Add a task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength="30"
        />
        <span className="info">
          <i>Can take a maximum of 30 characters</i>
        </span>
      </div>
      <div className="form-control">
        <label>Date & Time</label>
        <DateTimePicker
          value={value}
          onChange={onChange}
          format="dd/MM/yyyy HH:mm a"
          dayPlaceholder="dd"
          monthPlaceholder="MM"
          yearPlaceholder="yyyy"
          hourPlaceholder="HH"
          minutePlaceholder="mm"
          locale="us-US"
          minDate={new Date()}
          amPmAriaLabel="am"
          calendarIcon={<FaChevronDown />}
          // className="datetime"
          clearIcon=""
          disableCalendar={false}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
