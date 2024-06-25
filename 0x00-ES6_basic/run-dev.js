const { exec } = require('child_process');

const filename = process.argv[2];

if (!filename) {
  console.error('Please provide a filename to run.');
  process.exit(1);
}

exec(`npx babel-node ${filename}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error executing file: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);
});

