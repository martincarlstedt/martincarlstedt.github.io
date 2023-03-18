import fs, { PathLike } from 'fs'

export const getSlugs = (path: PathLike): string[] =>
  fs
    .readdirSync(path, { withFileTypes: true })
    .filter((dirend) => dirend.isFile())
    .map((filename) => filename.name.replace('.md', ''))
