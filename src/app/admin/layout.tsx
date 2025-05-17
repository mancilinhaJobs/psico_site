import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin | Portfolio CMS',
  description: 'Content management system for your portfolio website',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 