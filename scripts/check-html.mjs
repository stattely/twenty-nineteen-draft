import fs from 'node:fs';
const html = fs.readFileSync('index.html', 'utf8');
const script = html.match(/<script>([\s\S]*)<\/script>/)?.[1];
if (!script) throw new Error('No inline script found.');
new Function(script);
console.log('OK: inline JS syntax checked.');
