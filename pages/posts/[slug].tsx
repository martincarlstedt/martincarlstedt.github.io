import md from 'markdown-it'
import hljs from 'highlight.js'
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next'
import { getPost, getPostSlugs, Post } from '../../repository/post-repository'

type Props = {
  post: Post
}

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => ({
  paths: getPostSlugs().map((slug) => ({
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
  return slug ? { props: { post: getPost(slug) } } : { notFound: true }
}

const Post = ({ post }: Props) => {
  const { content, title, description } = post

  const html = md({
    highlight: (str, lang) =>
      `<pre>${hljs.highlight(str, { language: lang }).value}</pre>`,
  }).render(content)

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-8 mb-8 border-b border-slate-100">
        <div className="text-center text-3xl sm:text-4xl font-bold mb-4">
          {title}
        </div>
        <div className="text-center mb-4 text-lg text-gray-500">
          {description}
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 prose prose-gray">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </>
  )
}
export default Post
