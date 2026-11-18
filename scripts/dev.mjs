import { spawn } from 'node:child_process';
// Accept the preview daemon's host/port flags while retaining a normal Next.js dev command.
const raw = process.argv.slice(2), args = [];
for(let i=0;i<raw.length;i++) {
 if(raw[i]==='--strictPort') continue;
 args.push(raw[i]==='--host'?'--hostname':raw[i]);
}
const child=spawn(process.execPath,['node_modules/next/dist/bin/next','dev',...args],{stdio:'inherit',env:{...process.env,NEXT_TELEMETRY_DISABLED:'1'}});
for(const signal of ['SIGINT','SIGTERM']) process.on(signal,()=>child.kill(signal));
child.on('exit',code=>process.exit(code??0));
