import { GetStaticPropsResult } from 'next'
import React from 'react'
import { getRecipes, Recipe } from '../../repository/recipe-repository'
import Link from 'next/link'

type Props = {
  recipes: Recipe[]
}

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => ({
  props: {
    recipes: getRecipes(),
  },
})

const RecipesPage = ({ recipes }: Props) => {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <div className="mx-auto max-w-7xl px-4 py-8 mb-8 border-b border-slate-100">
        <div className="text-center text-3xl sm:text-4xl font-bold mb-4">
          Recept
        </div>
      </div>

      {recipes.map((post) => (
        <Link key={post.slug} href={`/recept/${post.slug}`} className="mb-2">
          <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
        </Link>
      ))}
    </div>
  )
}

export default RecipesPage
