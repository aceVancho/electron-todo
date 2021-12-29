import { types } from 'mobx-state-tree';

const ToDo = types.model('ToDo', {
  name: types.string,
  isComplete: types.boolean,
});

export default ToDo;
