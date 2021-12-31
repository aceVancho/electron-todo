import { observer } from 'mobx-react';
import store from '../Stores/ToDoStore';
import ToDo from './ToDo';

const ToDoList = () => {
  return (
    <ul>
      {store.toDoItemList.toDoItems.map((todo) => {
        const props = {
          name: todo.name,
          id: todo.id,
          isComplete: todo.isComplete,
        };
        return <ToDo {...props} />;
      })}
      <br />
    </ul>
  );
};

export default observer(ToDoList);
