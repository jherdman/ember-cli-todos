import Ember from 'ember';

var computed = Ember.computed;

export default Ember.ArrayController.extend({
  remaining: function () {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection: function () {
    return this.get('remaining') === 1 ? 'todo' : 'todos';
  }.property('remaining'),

  completed: function () {
    return this.filterBy('isCompleted', true).get('length');
  }.property('@each.isCompleted'),

  hasCompleted: computed.gt('completed', 0),

  allAreDone: function (key, value) {
    if (value === undefined) {
      return !!this.get('length') && this.isEvery('isCompleted');
    } else {
      this.setEach('isCompleted', value);
      this.invoke('save');
      return value;
    }
  }.property('@each.isCompleted'),

  actions: {
    clearCompleted: function () {
      var completed = this.filterBy('isCompleted', true);
      completed.invoke('deleteRecord');
      completed.invoke('save');
    },

    createTodo: function () {
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      this.set('newTitle', '');

      todo.save();
    }
  }
});
