'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const categories = ['All', 'Category 1', 'Category 2', 'Category 3']

const images = [
  {
    id: 1,
    src: '/images/gallery-1.jpg',
    alt: 'Gallery Image 1',
    category: 'Category 1',
  },
  {
    id: 2,
    src: '/images/gallery-2.jpg',
    alt: 'Gallery Image 2',
    category: 'Category 2',
  },
  {
    id: 3,
    src: '/images/gallery-3.jpg',
    alt: 'Gallery Image 3',
    category: 'Category 1',
  },
  {
    id: 4,
    src: '/images/gallery-4.jpg',
    alt: 'Gallery Image 4',
    category: 'Category 3',
  },
  {
    id: 5,
    src: '/images/gallery-5.jpg',
    alt: 'Gallery Image 5',
    category: 'Category 2',
  },
  {
    id: 6,
    src: '/images/gallery-6.jpg',
    alt: 'Gallery Image 6',
    category: 'Category 3',
  },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null)

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter((image) => image.category === selectedCategory)

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Gallery Header */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Gallery
          </h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative max-w-4xl w-full">
            {selectedImage && (
              <>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300"
                >
                  <XMarkIcon className="h-8 w-8" />
                </button>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-4 text-white text-center">
                  {selectedImage.alt}
                </p>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </main>
  )
} 