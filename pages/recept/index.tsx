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
        <div
          key={post.slug}
          className="pb-4 pt-4 border-b-2 border-neutral-100 border-opacity-100"
        >
          <Link href={`/recept/${post.slug}`}>
            <h2 className="text-xl font-bold">{post.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default RecipesPage
