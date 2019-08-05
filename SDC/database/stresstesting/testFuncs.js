function generateId(context, events, done) {
  context.vars['id'] = Math.floor(Math.random() * 10000000) + 1; // set the "query" variable for the virtual user
  return done();
}

module.exports = { generateId }