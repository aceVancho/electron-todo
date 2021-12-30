import { getSnapshot } from 'mobx-state-tree';
import store from '../Stores/ToDoStore';
import ToDo from '../Models/Todo';

const AddItemButtonAndInput = () => {
  return (
    // TODO: use a form instead
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log('I submited');
        store.toDoItemList.addNewItem(
          ToDo.create({
            // TODO: use input from value
            name: this.nameInput.value,
            isComplete: false,
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
