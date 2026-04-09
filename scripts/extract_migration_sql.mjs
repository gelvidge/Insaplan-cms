import fs from 'fs'
import path from 'path'

const repoRoot = path.resolve(process.cwd())
const migrationPath = path.join(repoRoot, 'src', 'migrations', '20260207_070124.ts')

const src = fs.readFileSync(migrationPath, 'utf8')

function extractFirstTaggedTemplate(source, tag) {
  const needle = `${tag}\``
  const start = source.indexOf(needle)
  if (start === -1) throw new Error(`Could not find ${needle}`)

  // Find the matching closing backtick, accounting for escaped backticks.
  let i = start + needle.length
  let out = ''
  while (i < source.length) {
    const ch = source[i]
    if (ch === '`') {
      return out
    }
    if (ch === '\\\\') {
      // Preserve escapes as-is.
      out += ch
      i++
      if (i < source.length) out += source[i]
      i++
      continue
    }
    out += ch
    i++
  }
  throw new Error('Unterminated template string while extracting SQL')
}

// The migration uses `db.execute(sql`...`)` for both up and down. We'll grab the first `sql` template
// after each function declaration.
function extractForFn(fnName) {
  const fnIdx = src.indexOf(`export async function ${fnName}`)
  if (fnIdx === -1) throw new Error(`Could not find function ${fnName}`)
  const slice = src.slice(fnIdx)
  return extractFirstTaggedTemplate(slice, 'sql')
}

const upSql = extractForFn('up')
const downSql = extractForFn('down')

const outDir = path.join(repoRoot, 'scripts')
fs.mkdirSync(outDir, { recursive: true })

fs.writeFileSync(path.join(outDir, 'migration_up.sql'), upSql.trim() + '\n', 'utf8')
fs.writeFileSync(path.join(outDir, 'migration_down.sql'), downSql.trim() + '\n', 'utf8')

console.log('Wrote scripts/migration_up.sql and scripts/migration_down.sql')

