"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
export default function Home() {
  const [todo, setTodo] = useState([]);
  const [newtodo, setNewtodo] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const addHandler = () => {
    setTodo([...todo, newtodo]);
  };
  const deleteHandler = (index) => {
    alert("are you shure delete");
    const trash = todo.filter((todoo, idx) => idx != index);
    setTodo(trash);
  };
  return (
    <div>
      <div>
        <h2>todolist</h2>
        <div className={styles.flex}>
          <input
            type="text"
            placeholder="text"
            onChange={(e) => setNewtodo(e.target.value)}
          />
          <button onClick={addHandler}>add</button>
        </div>
        <div className={styles.flex}>
          <button
            className={activeFilter == "all" && styles.activeStyle}
            onClick={() => setActiveFilter("all")}
          >
            all
          </button>
          <button
            className={activeFilter == "active" && styles.activeStyle}
            onClick={() => setActiveFilter("active")}
          >
            active
          </button>
          <button
            className={activeFilter == "complate" && styles.activeStyle}
            onClick={() => setActiveFilter("complate")}
          >
            complate
          </button>
        </div>
        <div>
          <h2>No tasks yet. Add one above!</h2>
        </div>

        {todo.map((todos, index) => {
          return (
            <div>
              <div className={styles.checkbox}>
                <input type="checkbox" />
              </div>
              <p>{todos}</p>
              <div>
                <button onClick={() => deleteHandler(index)}>delete</button>
              </div>
            </div>
          );
        })}
        <div>Powered by Pinecone academy</div>
      </div>
    </div>
  );
}
