import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ToDoList from './Components/ToDoList';
import store from './Stores/ToDoStore';
import AddToDo from './Components/AddToDo';

const Main = () => {
  // some code

  return (
    <div>
      <h1>TO DO LIST:</h1>
      <ToDoList />
      <AddToDo />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main toDoStore={store} />} />
      </Routes>
    </Router>
  );
}
