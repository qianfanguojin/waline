const Application = require('../packages/server/index');

module.exports = Application({
  async postSave(comment) {
    // do what ever you want after save comment
  },
});
