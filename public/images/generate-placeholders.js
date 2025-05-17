const fs = require('fs');
const path = require('path');

const images = [
    'blog-1.jpg',
    'blog-2.jpg',
    'blog-3.jpg',
    'hero-bg.jpg',
    'testimonial-1.jpg',
    'testimonial-2.jpg',
    'testimonial-3.jpg',
    'gallery-1.jpg',
    'gallery-2.jpg',
    'gallery-3.jpg',
    'gallery-4.jpg',
    'gallery-5.jpg',
    'gallery-6.jpg',
    'profile.jpg'
];

// Create a simple SVG placeholder for each image
images.forEach(imageName => {
    const svg = `
        <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#f3f4f6"/>
            <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#6b7280" text-anchor="middle">
                ${imageName}
            </text>
        </svg>
    `;
    
    fs.writeFileSync(path.join(__dirname, imageName), svg);
}); 