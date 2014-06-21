import Ember from 'ember';

export default Ember.ArrayController.extend({
  remaining: function () {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection: function () {
    return this.get('remaining') === 1 ? 'todo' : 'todos';
  }.property('remaining'),

  actions: {
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
