const fs = require('fs');
const path = require('path');

// Define the source and destination directories
const srcDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');

// Clean the dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}

// Create the dist directory
fs.mkdirSync(distDir, { recursive: true });

// Copy necessary files to dist
fs.copyFileSync(path.join(srcDir, 'index.js'), path.join(distDir, 'index.js'));
fs.copyFileSync(path.join(srcDir, 'math.js'), path.join(distDir, 'math.js'));

// Optional: Add minification or other build steps here
console.log('Build process completed successfully.');
