import { observer } from 'mobx-react';
import store from '../Stores/ToDoStore';

const ToDo = (props) => {
  const { name, id, isComplete } = props;
  const todo = store.toDoItemList.findTodo(id);
  const completeStyle = isComplete
    ? { textDecorationLine: 'line-through' }
    : { textDecorationLine: 'none' };
  return (
    <li key={id} style={completeStyle}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={name}
        onChange={(e) => {
          if (e.currentTarget.checked) {
            todo.markComplete();
            e.style = completeStyle;
          }
          if (!e.currentTarget.checked) {
            todo.markIncomplete();
            e.style = completeStyle;
          }
        }}
      />
      <span>{'  '}</span>
      <label htmlFor={id}>{name}</label>
    </li>
  );
};

export default observer(ToDo);
