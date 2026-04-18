const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, '..', 'src', 'App.tsx');
let content = fs.readFileSync(appPath, 'utf-8');

// Replace ico.jpg with transparent PNG
content = content.replace("import lolIcon from '/ico.jpg';", "import lolIcon from '/app-ico-400x400.png';");

fs.writeFileSync(appPath, content, 'utf-8');

if (content.includes("/app-ico-400x400.png")) {
  console.log('✅ Updated to use transparent PNG icon');
} else {
  console.log('❌ Failed to update');
}
