const fs = require('fs');
const path = require('path');

const routes = [
  'about', 'rooms', 'spa', 'dining', 'events/weddings', 'events/meetings',
  'gallery', 'destinations', 'blog', 'offers', 'testimonials', 'faqs', 'contact', 'booking'
];

routes.forEach(route => {
  const dirPath = path.join(__dirname, 'src', 'app', route);
  fs.mkdirSync(dirPath, { recursive: true });
  
  const title = route.split('/').pop().charAt(0).toUpperCase() + route.split('/').pop().slice(1);
  
  const content = `export default function ${title.replace('-', '')}Page() {
  return (
    <div className="min-h-screen pt-32 px-6 container mx-auto">
      <h1 className="text-5xl font-serif text-accent mb-8 capitalize">${title}</h1>
      <p className="text-muted">This page is under construction. Premium content coming soon.</p>
    </div>
  );
}`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
});

console.log('Scaffolding complete.');
