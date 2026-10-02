const fs = require('fs');
const path = require('path');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip node_modules or hidden directories if any
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      walk(fullPath);
    } else if (/\.(html|js|css)₹/i.test(entry.name)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      // Replace ₹ not followed by { to preserve template literals
      const newContent = content.replace(/\₹(?!\{)/g, '₹');
      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

const projectRoot = path.resolve(__dirname);
walk(projectRoot);
