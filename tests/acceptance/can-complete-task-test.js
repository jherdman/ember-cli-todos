import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Can Complete Task', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Todos: Completing a Task', function() {
  expect(2);

  visit('/');
  click('#todo-list input[type=checkbox]:not(:checked)');

  andThen(function() {
    equal(currentURL(), '/');
    equal(find('#todo-list input[type=checkbox]:checked').length, 3);
  });
});

test('Todos: Destroy a Task', function () {
  expect(1);

  visit('/');
  click('#todo-list li > button.destroy:first');

  andThen(function () {
    equal(find('#todo-list input[type=checkbox]').length, 2);
  });
});
