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
    findTodo(id) {
      return self.toDoItems.find((todo) => todo.id === id);
    },
  }));

export default ToDoList;
