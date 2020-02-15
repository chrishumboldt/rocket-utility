/**
 * @author Chris Humboldt
 */

const { spawn } = require('child_process');

// Set the input arguments.
const package = 'Rocket Utility'; 
const version = process.argv[2] ? process.argv[2].split('=')[1] : 'patch';

const commands = [
  `npm run test`,
  `git add -A`,
  `git commit -m "Publishing ${version} version."`,
  `npm version ${version}`,
  `npm run build`,
  `npm publish --access public`
];

// Run the commands
console.log(`Publishing ${package} package`);
const runCommands = spawn(commands.join(' && '), {shell: true});

// Handle the spawn events.
runCommands.stdout.on('data', (data) => {
  console.log(data.toString());
});

runCommands.stderr.on('data', (data) => {
  console.error(data.toString());
});