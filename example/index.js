const Application = require('./server');

module.exports = Application({
  async postSave(comment) {
    // do what ever you want after save comment
  },
});
