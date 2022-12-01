import { GetStaticPropsResult } from 'next'
import React from 'react'
import { getPosts, Post } from '../repository/post-repository'
import { PostListItem } from '../components/home/PostListItem'

type Props = {
  posts: Post[]
}

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => ({
  props: {
    posts: getPosts(),
  },
})

const Home = ({ posts }: Props) => {
  return (
    <div className="mx-auto max-w-3xl px-4">
      {posts.map((post) => (
        <PostListItem key={post.slug} post={post} />
      ))}
    </div>
  )
}

export default Home
