const fs = require('fs');
const path = require('path');

function getIcon(theme, category, iconName) {
  const iconPath = path.join(__dirname, 'icons', theme, category, `${iconName}.svg`);

  try {
    const iconData = fs.readFileSync(iconPath, 'utf-8');
    return iconData;
  } catch (error) {
    console.error(`Error loading icon: ${error.message}`);
    return null;
  }
}

module.exports = {
  getIcon
};
