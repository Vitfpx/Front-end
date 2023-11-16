import { useEffect, useState } from "react";

const tasks = [
  { id: "1", title: "Minha primeira tarefa" },
  { id: "2", title: "Minha segunda tarefa" },
  { id: "3", title: "Minha terceira tarefa" },
  { id: "4", title: "Minha quarta tarefa" },
];

export default function TaskList() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("https://jsonplaceholder.typicode.com/todos");
      const finalResult = await result.json();
      return finalResult;
    }

    fetchData().then((res) => setTasks(res));
  }, []);

  return (
    <div>
      <ol>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              {task.title} {task.completed? "- Task completed":null}
            </li>
          )
        })}
      </ol>
    </div>
  );
}
