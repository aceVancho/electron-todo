import { observer } from 'mobx-react';
import store from '../Stores/ToDoStore';
import ToDo from './ToDo';

const ToDoList = () => {
  return (
    <ul>
      {store.toDoItemList.toDoItems.map((todo) => {
        let props = {};
        return (
          <ToDo name={todo.name} id={todo.id} isComplete={todo.isComplete} />
        );
      })}
      <br />
    </ul>
  );
};

export default observer(ToDoList);
