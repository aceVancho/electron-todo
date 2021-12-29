import { v4 as uuidv4 } from 'uuid';
import store from '../Stores/ToDoStore';

const ToDoList = () => {
  return (
    <ul>
      {store.toDoItemList.toDoItems.map((todo) => (
        <li key={uuidv4()}>{todo.name}</li>
      ))}
    </ul>
  );
};

export default ToDoList;
