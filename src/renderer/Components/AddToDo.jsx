import { getSnapshot } from 'mobx-state-tree';
import store from '../Stores/ToDoStore';
import ToDo from '../Models/Todo';

const AddItemButtonAndInput = () => {
  return (
    // TODO: use a form instead
    <div>
      <button
        className="newButton"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          store.toDoItemList.addNewItem(
            ToDo.create({
              // TODO: use input from value
              name: 'hard coded test item',
              isComplete: false,
            })
          );
          // TODO: Make Observable State
          console.log('STORE SNAPSHOT ON CLICK:', getSnapshot(store));
        }}
      >
        Add:{' '}
      </button>
      <label htmlFor="addToDo">
        <input type="text" id="addToDo" />
      </label>
    </div>
  );
};

export default AddItemButtonAndInput;
