import * as tl from 'azure-pipelines-task-lib/task';

async function run() {
  const projectName = tl.getInput('projectName', true);
  console.log('Starting Dependency Check...');
  console.log(`Project Name: ${projectName}`);
}

void run();
