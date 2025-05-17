# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 14, Decap CMS, and Tailwind CSS. This project features a beautiful UI with dark mode support, blog functionality, image gallery, and contact form integration.

## Features

- 🎨 Modern UI with dark/light mode
- 📱 Fully responsive design
- 📝 Blog with markdown support
- 🖼️ Image gallery with filtering
- 📅 Calendly integration for scheduling
- 🔍 SEO optimized
- 🚀 Static site generation
- 📊 Content management with Decap CMS

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Decap CMS
- Headless UI
- Heroicons
- Framer Motion

## Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Git
- GitHub account
- Vercel account (for deployment)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio-site.git
   cd portfolio-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_CMS_URL=http://localhost:3000/admin
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Decap CMS Setup

1. Create a new GitHub repository for your content.

2. Update the `public/admin/config.yml` file with your repository details:
   ```yaml
   backend:
     name: github
     repo: your-username/your-repo
     branch: main
   ```

3. Access the CMS at `http://localhost:3000/admin` during development.

## Deployment

### Vercel Deployment

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Import your repository in Vercel:
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure the following settings:
     - Framework Preset: Next.js
     - Build Command: `next build`
     - Output Directory: `out`
     - Install Command: `npm install`

3. Add environment variables in Vercel:
   - `NEXT_PUBLIC_CMS_URL`: Your production CMS URL

4. Deploy!

### Static Export

To generate a static export:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Project Structure

```
portfolio-site/
├── public/
│   ├── admin/
│   │   └── config.yml
│   └── images/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── gallery/
│   │   └── layout.tsx
│   └── components/
├── content/
│   ├── blog/
│   ├── gallery/
│   └── testimonials/
├── .env.local
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Customization

1. Update the content in `public/admin/config.yml` to match your needs.
2. Modify the theme colors in `tailwind.config.ts`.
3. Replace placeholder images in `public/images/`.
4. Update social media links and contact information in the respective components.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Decap CMS](https://decapcms.org/)
- [Headless UI](https://headlessui.dev/)
- [Heroicons](https://heroicons.com/)
- [Framer Motion](https://www.framer.com/motion/)
