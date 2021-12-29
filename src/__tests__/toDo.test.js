import ToDo from '../renderer/Models/Todo';
import store from '../renderer/Stores/ToDoStore';

describe('ToDo Tests', () => {
  it('should create a toDo item', () => {
    const testDo = ToDo.create({
      name: 'item1',
      isComplete: false,
    });
    expect(testDo).toBeDefined();
  });

  it('should add a toDo to item list', () => {
    const testDo = ToDo.create({
      name: 'item1',
      isComplete: false,
    });
    store.toDoItemList.addNewItem(testDo);
    expect(store.toDoItemList.toDoItems[0]).toStrictEqual(testDo);
  });
});
