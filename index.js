const core = require('@actions/core');
const github = require('@actions/github');

try {
  const action = github.context.action;
  console.log(action);
} catch (e) {
  console.error(e);
}
