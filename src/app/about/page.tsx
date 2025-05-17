import Image from 'next/image'
import { Navigation } from '@/components/navigation'

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-64 h-64 rounded-full overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Profile photo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Quem sou eu?
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Mãe de dois, esposa, psicóloga Gestalt terapeuta apaixonada pela minha profissão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Bio */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Professional Bio
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Your detailed professional bio goes here. Share your journey, experiences,
              and what drives you in your field. This is where you can really connect
              with your audience and showcase your personality.
            </p>
            <p>
              Include specific achievements, milestones, and the impact you've made
              in your career. This helps build credibility and trust with your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h3>
              <ul className="space-y-2">
                {['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'].map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Soft Skills
              </h3>
              <ul className="space-y-2">
                {['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'].map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Education
          </h2>
          <div className="space-y-8">
            {[
              {
                degree: 'Degree Name',
                institution: 'Institution Name',
                year: 'Year',
                description: 'Brief description of your studies and achievements.',
              },
              {
                degree: 'Degree Name',
                institution: 'Institution Name',
                year: 'Year',
                description: 'Brief description of your studies and achievements.',
              },
            ].map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {edu.year}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 