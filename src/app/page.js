"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const addHandler = () => {
    if (!newTodo) return alert("add something");

    setTodos([...todos, { todo: newTodo, isCompleted: false }]);
    setNewTodo("");
  };

  const deleteHandler = (index) => {
    const userConfirmed = confirm("Are you sure you want to delete this task?");
    if (!userConfirmed) return;
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const toggleIsCompleted = (incomingTodo) => {
    const updatedTodos = todos.map((t) =>
      t.todo === incomingTodo.todo ? { ...t, isCompleted: !t.isCompleted } : t
    );
    setTodos(updatedTodos);
  };

  const filteredTodos =
    activeFilter === "all"
      ? todos
      : todos.filter((todo) =>
          activeFilter === "active" ? !todo.isCompleted : todo.isCompleted
        );

  return (
    <div className={styles.mainDev}>
      <div className={styles.parentDev}>
        <h2 className={styles.Bigtitle}>Todo List</h2>
        <div className={styles.inputbutton}>
          <input
            type="text"
            value={newTodo}
            placeholder="Add a new task"
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={addHandler}>Add</button>
        </div>

        <div className={`${styles.flex} ${styles.filterButton}`}>
          <button
            className={activeFilter === "all" ? styles.activeStyle : ""}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          <button
            className={activeFilter === "active" ? styles.activeStyle : ""}
            onClick={() => setActiveFilter("active")}
          >
            Active
          </button>
          <button
            className={activeFilter === "completed" ? styles.activeStyle : ""}
            onClick={() => setActiveFilter("completed")}
          >
            Completed
          </button>
        </div>

        <div>
          {filteredTodos.length === 0 ? (
            <p className={styles.titlep}>No tasks yet. Add one above!</p>
          ) : (
            filteredTodos.map((todo, index) => (
              <div className={styles.mainSeaText} key={`${todo.todo}-${index}`}>
                <div className={styles.parentseaTeaxt}>
                  <div className={styles.checkbox}>
                    <input
                      type="checkbox"
                      onChange={() => toggleIsCompleted(todo)}
                      checked={todo.isCompleted}
                    />
                    <p className={todo.isCompleted ? styles.completed : ""}>
                      {todo.todo}
                    </p>
                  </div>
                  <button
                    className={styles.delete}
                    onClick={() => deleteHandler(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
          <div className={styles.textflex}>
            <p className={styles.titlep2}>Powered by </p>
            <p className={styles.titlep3}>Pinecone Academy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
