import md from 'markdown-it'
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next'
import {
  getRecipe,
  getRecipeSlugs,
  Recipe,
} from '../../repository/recipe-repository'

type Props = {
  post: Recipe
}

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => ({
  paths: getRecipeSlugs().map((slug) => ({
    params: {
      slug,
    },
  })),
  fallback: false,
})

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>): Promise<
  GetStaticPropsResult<Props>
> => {
  const slug = params?.slug
  return slug ? { props: { post: getRecipe(slug) } } : { notFound: true }
}

const RecipePage = ({ post }: Props) => {
  const { content } = post

  const html = md().render(content)

  return (
    <>
      <div className="mx-auto max-w-3xl px-4 prose prose-gray">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </>
  )
}
export default RecipePage
