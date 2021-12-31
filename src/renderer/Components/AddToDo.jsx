import { getSnapshot } from 'mobx-state-tree';
import { v4 as uuidv4 } from 'uuid';
import store from '../Stores/ToDoStore';
import ToDo from '../Models/Todo';

const AddItemButtonAndInput = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        store.toDoItemList.addNewItem(
          ToDo.create({
            // TODO: use input from value
            name: this.nameInput.value,
            isComplete: false,
            id: uuidv4(),
          })
        );
        console.log('STORE SNAPSHOT ON CLICK:', getSnapshot(store));
      }}
    >
      <label htmlFor="addToDo">
        <input
          type="text"
          id="addToDo"
          ref={(input) => {
            this.nameInput = input;
          }}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItemButtonAndInput;
