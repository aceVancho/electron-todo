import { types, getSnapshot } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';
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

const store = makeInspectable(ToDoStore.create());

// TEST
const todo = ToDo.create({
  name: 'Feed the spider.',
  isComplete: false,
  id: '0001',
});

store.toDoItemList.addNewItem(todo);
console.log('STORE SNAPSHOT ON START:', getSnapshot(store));

export default store;
