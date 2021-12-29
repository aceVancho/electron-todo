import { types, getSnapshot } from 'mobx-state-tree';
import ToDoList from '../Models/ToDoList';
import ToDo from '../Models/Todo';

const ToDoStore = types
  .model({
    toDoItemList: types.optional(ToDoList, { items: [] }),
  })
  .views((self) => ({
    // code here
  }))
  .actions((self) => ({
    // code here
  }));

const store = ToDoStore.create();

// TEST
const todo = ToDo.create({
  name: 'item1',
  isComplete: false,
});

store.toDoItemList.addNewItem(todo);
console.log('STORE SNAPSHOT ON START:', getSnapshot(store));

export default store;
