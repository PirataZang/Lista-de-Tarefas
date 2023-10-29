import { useState } from "react";
import './App.css';
import Todo from "./components/todo";
import TodoForms from "./components/TodoForms";


function App() {

  const [todos, setTodos] = useState([

    {
      id: 1,
      text: "Criar funcionalidades X no Sistema",
      categoria: "Trabalho",
      isComplated: true,
    },
    {
      id: 2,
      text: "Ir para a Academia",
      categoria: "Pessoal",
      isComplated: false,
    },
    {
      id: 3,
      text: "Estudar React",
      categoria: "Estudos",
      isComplated: false,
    },

  ]);

  const addTodo = (text, categoria) => {
    const newtodo = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text: text,
      categoria: categoria,
      isComplated: false
    },
    ];

    setTodos(newtodo)
  };
  
  // Remove os Itens da Lista
  const removeTodo = (id) => {
    const newTodo = [...todos]
    const filteredTodo = newTodo.filter((todo) => todo.id !== id ? todo : null);
    setTodos(filteredTodo);
  }


  return (
    <div className="lista">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
      </div>
      <TodoForms addTodo={addTodo}/>
    </div>
  )
}

export default App
