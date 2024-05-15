const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const fileName = core.getInput('file-name');
  const secretMappings = core.getInput('secret-mappings');
  const variableMappings = core.getInput('variable-mappings');

  console.log(`file: ${fileName}`);
  console.log(`secret mappings: ${secretMappings}`);
  console.log(`variable mappings: ${variableMappings}`);


  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

} catch (error) {
  core.setFailed(error.message);
}