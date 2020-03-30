#! /usr/bin/env node
const {spawn} = require('child_process');

const exec = (command, option) => {
  const child = spawn(command, option);
  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
};

const firstIndex = 2;
const parameters = process.argv;
const tag = parameters[firstIndex];

// Run command
exec('git', ['tag', tag]);
exec('git', ['push', 'origin', tag]);
exec('git', ['push']);
