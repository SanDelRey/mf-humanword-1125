import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

// One word for the human you work for, judged blind against the brief.
const line: string = "Bottleneck"
if (line.length < 1 || line.length > 30) throw new Error("entry must be 1..30 characters: " + line.length)

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "."
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, "entry.txt"), line, "utf8")

if (line.trim() !== line || line.trim().length === 0) throw new Error("entry must be non-empty with no surrounding whitespace")
