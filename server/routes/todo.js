var todos = {
  todo: [
    {
      id: 1,
      title: 'Learn Ember.js',
      isCompleted: true
    },
    {
      id: 2,
      title: 'Learn Ember CLI',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Profit!',
      isCompleted: false
    }
  ]
};

module.exports = function(app) {
  app.get('/todos', function (req, res) {
    res.send(todos);
  });

  app.post('/todos', function (req, res) {
    var params = req.body.todo,
        record = {};

    record.title = params.title;
    record.isCompleted = params.isCompleted;

    res.send({ todo: record });
  });

  app.put('/todos/:id', function (req, res) {
    res.send(204, 'No Content');
  });

  app.delete('/todos/:id', function (req, res) {
    res.send(204, 'No Content');
  });
};
