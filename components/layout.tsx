import Link from 'next/link'
import React from 'react'

const Layout = ({ children }: React.PropsWithChildren) => (
  <>
    <div className="mx-auto px-4 py-10 max-w-7xl flex justify-between">
      <Link href="/">Home</Link>
    </div>

    {children}

    <div className="py-8" />
  </>
)
export default Layout
