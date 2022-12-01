import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Post } from '../../repository/post-repository'

type BlogPostListItemProps = {
  post: Post
}

export const PostListItem: React.FC<BlogPostListItemProps> = ({ post }) => {
  const { slug, title, description, date } = post
  const [formattedDate, setFormattedDate] = useState(date)

  useEffect(() => setFormattedDate(new Date(date).toLocaleDateString()), [date])

  return (
    <div className="mb-8">
      <Link href={`/posts/${slug}`}>
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
      </Link>
      {description && <p className="pb-2">{description}</p>}
      <div className="flex items-center space-x-2">
        <span className="text-xs text-gray-500">{formattedDate}</span>
      </div>
    </div>
  )
}
