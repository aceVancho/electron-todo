import { types } from 'mobx-state-tree';

const ToDo = types
  .model('ToDo', {
    name: types.string,
    isComplete: types.boolean,
    id: types.string,
  })
  .views((self) => ({
  }))
  .actions((self) => ({
    markComplete() {
      self.isComplete = true;
    },
    markIncomplete() {
      self.isComplete = false;
    },
  }));

export default ToDo;
