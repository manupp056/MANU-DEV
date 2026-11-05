import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { basename, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(fileURLToPath(new URL('../..', import.meta.url)));
const sourceDir = join(projectRoot, 'contenido', 'actividades');
const generatedDir = join(projectRoot, 'web', 'src', 'content', 'docs', 'actividades');

async function directoryExists(path) {
	try { await readdir(path); return true; } catch { return false; }
}

await rm(generatedDir, { recursive: true, force: true });
await mkdir(generatedDir, { recursive: true });

if (!(await directoryExists(sourceDir))) {
	console.log('MANU.DEV: no existe contenido/actividades; se mantiene el estado vacío.');
	process.exit(0);
}

const entries = await readdir(sourceDir, { withFileTypes: true });
let published = 0;

for (const entry of entries) {
	if (!entry.isFile() || !['.md', '.mdx'].includes(extname(entry.name))) continue;
	const source = join(sourceDir, entry.name);
	const content = await readFile(source, 'utf8');
	const frontmatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	if (!frontmatter || !/^publicar:\s*true\s*$/m.test(frontmatter[1])) continue;

	const metadata = frontmatter[1]
		.replace(/^publicar:[ \t]*true[ \t]*\r?\n?/m, '')
		.replace(/^titulo:/m, /^title:/m.test(frontmatter[1]) ? 'titulo:' : 'title:');
	const safeContent = `---\n${metadata.trimEnd()}\n---${content.slice(frontmatter[0].length)}`;
	const target = join(generatedDir, `${basename(entry.name, extname(entry.name))}.md`);
	await writeFile(target, safeContent, 'utf8');
	published += 1;
}

console.log(`MANU.DEV: ${published} ficha(s) publicable(s) sincronizada(s).`);
