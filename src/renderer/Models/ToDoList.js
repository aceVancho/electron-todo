import { types } from 'mobx-state-tree';
import ToDo from './Todo';

const ToDoList = types
  .model({
    toDoItems: types.array(ToDo),
  })
  .actions((self) => ({
    addNewItem(toDoItem) {
      self.toDoItems.push(toDoItem);
    },
  }));

export default ToDoList;
