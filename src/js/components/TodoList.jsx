import React, { useState } from "react";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            setTasks([...tasks, inputValue.trim()]);
            setInputValue("");
        }
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-container">
            <h1 className="text-center">todos</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        type="text"
                        placeholder="What needs to be done?"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="form-control border-0 shadow-none"
                    />
                </li>
                {tasks.length === 0 ? (
                    <li className="list-group-item text-muted">
                        No hay tareas, añadir tareas
                    </li>
                ) : (
                    tasks.map((task, index) => (
                        <li
                            key={index}
                            className="list-group-item d-flex justify-content-between align-items-center task-item"
                        >
                            {task}
                            <button
                                className="btn btn-sm btn-danger d-none delete-btn"
                                onClick={() => removeTask(index)}
                            >
                                ✖
                            </button>
                        </li>
                    ))
                )}
            </ul>
            <div className="text-muted mt-2">
                {tasks.length} {tasks.length === 1 ? "item" : "items"} left
            </div>
        </div>
    );
};

export default TodoList;
