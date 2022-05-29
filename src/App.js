import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [todo, setTodos] = useState([]);
  const [todoFilter, setTodoFilter] = useState(todo);
  const [SearchKey, setSearchKey] = useState({ search: "" });

  /**Api Call**/

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((api) => api.json())
      .then((allData) => setTodos(allData));
  }, []);

  /**Api Call End**/

  function searchvalue({ currentTarget: input }) {
    const key = { ...SearchKey };
    key[input.name] = input.value;
    setSearchKey(key);
  }

  useEffect(() => {
    const filter = todo.filter((f) => f.title.includes(SearchKey.search));
    setTodoFilter(filter);
  }, [todo, SearchKey]);

  return (
    <div className="App">
      <input
        onChange={searchvalue}
        type="text"
        name="search"
        placeholder="search"
        value={searchvalue.search}
      />
      <ul>
        {todoFilter.map((v) => (
          <li key={v.id}>
            <span style={{ color: "red" }}>[{v.id}] </span>
            {v.title}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
