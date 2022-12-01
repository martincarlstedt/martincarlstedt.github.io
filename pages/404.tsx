import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import image from '../public/404.svg'

const FourOhFour = () => (
  <>
    <div className="mx-auto max-w-sm">
      <Image src={image} alt="Picture of the author" className="mb-10" />
      <div className="flex justify-center">
        <Link
          type="button"
          className="mx-auto text-white bg-gray-700 rounded-lg px-4 py-2"
          href={'/'}
        >
          Go home, you&apos;re drunk
        </Link>
      </div>
    </div>
  </>
)

export default FourOhFour
