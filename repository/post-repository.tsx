import matter from 'gray-matter'
import fs from 'fs'

const postsPath = 'posts'

type AnyPost = Post & { draft: boolean }

export type Post = {
  slug: string
  title: string
  description: string | null
  date: string
  content: string
}

const getSlugs = (): string[] =>
  fs
    .readdirSync(postsPath, { withFileTypes: true })
    .filter((dirend) => dirend.isFile())
    .map((filename) => filename.name.replace('.md', ''))

export const getPostSlugs = (): string[] => getSlugs()

export const getPosts = (): Post[] =>
  getPostSlugs()
    .map(getAnyPost)
    .reduce<Post[]>(
      (posts, post) => (post.draft ? posts : [...posts, post]),
      []
    )

const getAnyPost = (slug: string): AnyPost => {
  const { data, content } = matter(
    fs.readFileSync([postsPath, `${slug}.md`].join('/'), 'utf-8')
  )
  const { title, description, date, draft } = data

  return {
    slug,
    content,
    title,
    description,
    date: new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
    draft: !!draft,
  }
}

export const getPost = (slug: string): Post => getAnyPost(slug)
