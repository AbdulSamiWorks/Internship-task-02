import React from 'react'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'

const product = {
  name: '',
  price: '$192',
  href: '#',
  breadcrumbs: [
  ],
  images: [
    {
      src: 'https://media.wired.com/photos/649f108e6b2fffe52ad790cb/1:1/w_1386,h_1386,c_limit/Sony-SRS-XB-1000-SOURCE-Sony-Gear.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://wallpapercave.com/wp/wp1896530.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://wallpapercave.com/wp/wp4848076.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://st2.depositphotos.com/4678277/47236/i/450/depositphotos_472368528-stock-photo-photo-of-lovely-young-girl.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
 
  description:
    '',
  highlights: [
    '',
  ],
  details:
    '',
}
const reviews = {  }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const LayoutHome = () => {
  
    return (
      <div className="  bg-[#ffffff] lg:visible">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              {product.breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                      {breadcrumb.name}
                    </a>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                  {product.name}
                </a>
              </li>
            </ol>
          </nav>
  
          {/* Image gallery */}
          <div className=" mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-full lg:grid-cols-3 lg:gap-x-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-3xl lg:block">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-3xl">
                <img
                  src={product.images[1].src}
                  alt={product.images[1].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-3xl">
                <img
                  src={product.images[2].src}
                  alt={product.images[2].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-3xl">
              <img
                src={product.images[3].src}
                alt={product.images[3].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
  
          {/* Product info */}
          <div className=" mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16 lg:visible">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            </div>
  
  
          
          </div>
        </div>
      </div>
    )
}

export default LayoutHome