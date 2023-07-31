import { useState, useEffect } from 'react';
import axios from 'axios';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    async function fetchTodos() {
      try {
        const res = await axios.get<Todo[]>('/api/todos');
        setTodos(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchTodos();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = async () => {
    try {
      const res = await axios.post<Todo>('/api/todos', {
        title: inputValue,
        completed: false,
      });
      setTodos([...todos, res.data]);
      setInputValue('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleComplete = async (id: number) => {
    try {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      if (!todoToUpdate) {
        return;
      }
      const res = await axios.patch<Todo>(`/api/todos/${id}`, {
        completed: !todoToUpdate.completed,
      });
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, ...res.data } : todo))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
      if (selectedTodo?.id === id) {
        setSelectedTodo(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSelectTodo = async (id: number) => {
    try {
      const res = await axios.get<Todo>(`/api/todos/${id}`);
      setSelectedTodo(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div style={{ display: 'flex' }}>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <button onClick={() => handleSelectTodo(todo.id)}>
                {todo.title}
              </button>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <div style={{ marginLeft: '1rem' }}>
          {selectedTodo && (
            <div>
              <h2>{selectedTodo.title}</h2>
              <p>Completed: {selectedTodo.completed ? 'Yes' : 'No'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;