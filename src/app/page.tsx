import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="/images/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Full Stack Developer & Creative Technologist
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/gallery"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3 rounded-lg transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Project 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/gallery/project-1.jpg"
                alt="Project 1"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Project 1</h3>
                  <p className="text-sm text-gray-300">Web Development</p>
                </div>
              </div>
            </div>

            {/* Featured Project 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/gallery/project-2.jpg"
                alt="Project 2"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Project 2</h3>
                  <p className="text-sm text-gray-300">UI/UX Design</p>
                </div>
              </div>
            </div>

            {/* Featured Project 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/gallery/project-3.jpg"
                alt="Project 3"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Project 3</h3>
                  <p className="text-sm text-gray-300">Mobile Development</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/blog/post-1.jpg"
                alt="Blog Post 1"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Getting Started with Next.js</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to build modern web applications with Next.js and React.
                </p>
                <Link
                  href="/blog/getting-started-with-nextjs"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/blog/post-2.jpg"
                alt="Blog Post 2"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mastering Tailwind CSS</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide to using Tailwind CSS for modern web design.
                </p>
                <Link
                  href="/blog/mastering-tailwind-css"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/blog/post-3.jpg"
                alt="Blog Post 3"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Building with TypeScript</h3>
                <p className="text-gray-600 mb-4">
                  Tips and tricks for writing better TypeScript code.
                </p>
                <Link
                  href="/blog/building-with-typescript"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </article>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/testimonials/client-1.jpg"
                  alt="Client 1"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold">John Doe</h4>
                  <p className="text-gray-600">CEO at Tech Company</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Working with this developer was an absolute pleasure. The attention to detail and commitment to quality was outstanding."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/testimonials/client-2.jpg"
                  alt="Client 2"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold">Jane Smith</h4>
                  <p className="text-gray-600">Product Manager</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The project was delivered on time and exceeded our expectations. Highly recommended!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/testimonials/client-3.jpg"
                  alt="Client 3"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold">Mike Johnson</h4>
                  <p className="text-gray-600">Startup Founder</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Incredible technical expertise and great communication throughout the project."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
