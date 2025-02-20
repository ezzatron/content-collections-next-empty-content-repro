import { spawn } from 'node:child_process';

const DELAY = 5_000;

const dev = spawn('npm', ['run', 'dev'], { stdio: 'inherit', detached: true });

setTimeout(() => {
  console.log("Sending SIGINT...");
  process.kill(-dev.pid, 'SIGINT');
}, DELAY);
