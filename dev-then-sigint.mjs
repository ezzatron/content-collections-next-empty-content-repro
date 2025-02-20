
import { exec } from 'node:child_process';

const DELAY = 10_000;

const dev = exec('npm run dev');
dev.stdout.pipe(process.stdout);
dev.stderr.pipe(process.stderr);

setTimeout(() => {
  dev.kill('SIGINT');
}, DELAY);
