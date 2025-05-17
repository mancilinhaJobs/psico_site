import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Professional Title & Expertise
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Book a Session
          </Link>
        </div>
      </section>

      {/* Bio Summary */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            A brief introduction about yourself and your expertise. This section should
            highlight your key skills and experience while maintaining a personal touch.
          </p>
          <Link
            href="/about"
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
          >
            Read more about me →
          </Link>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog post cards will be dynamically generated here */}
            {[1, 2, 3].map((post) => (
              <article
                key={post}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={`/images/blog-${post}.jpg`}
                    alt="Blog post thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Blog Post Title {post}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A brief excerpt from the blog post that gives readers a preview
                    of the content...
                  </p>
                  <Link
                    href={`/blog/post-${post}`}
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial cards will be dynamically generated here */}
            {[1, 2, 3].map((testimonial) => (
              <div
                key={testimonial}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={`/images/testimonial-${testimonial}.jpg`}
                      alt="Client photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Client Name {testimonial}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Client Role
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  "A wonderful testimonial from the client about their experience
                  working with you..."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
