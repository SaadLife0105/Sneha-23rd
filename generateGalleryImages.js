const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'domegallery');
const files = fs.readdirSync(dir);

const images = files
  .filter(file => /\.(jpe?g|png|gif|webp)$/i.test(file))
  .map(file => ({
    src: `/domegallery/${file}`,
    alt: file.replace(/\.[^/.]+$/, ''),
  }));

console.log(JSON.stringify(images, null, 2));