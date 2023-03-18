import matter from 'gray-matter'
import fs from 'fs'
import { getSlugs } from './get-slugs'

const recipesPath = 'recipes'

export type Recipe = {
  slug: string
  title: string
  content: string
}

export const getRecipeSlugs = (): string[] => getSlugs(recipesPath)

export const getRecipes = (): Recipe[] =>
  getRecipeSlugs()
    .map(getRecipe)
    .slice()
    .sort((a, b) => a.slug.localeCompare(b.slug))

export const getRecipe = (slug: string): Recipe => {
  const { content } = matter(
    fs.readFileSync([recipesPath, `${slug}.md`].join('/'), 'utf-8')
  )

  return {
    slug,
    content,
    title: slug
      .replace(/^./, (firstLetter) => firstLetter.toUpperCase())
      .replace(/-/, ' '),
  }
}
