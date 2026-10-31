const sharp = require('sharp');

async function printInfo() {
  // Let's create an image with side-by-side comparison that we can inspect
  const f1 = await sharp('public/images/photos/f_1.png').resize(80, 80).toBuffer();
  const bac = await sharp('public/images/photos/BAC.jpeg').resize(80, 80).toBuffer();

  const combined = await sharp({
    create: {
      width: 200,
      height: 100,
      channels: 4,
      background: { r: 5, g: 19, b: 34, alpha: 1 }
    }
  })
  .composite([
    { input: f1, top: 10, left: 10 },
    { input: bac, top: 10, left: 110 }
  ])
  .png()
  .toFile('public/combined-logos.png');

  console.log('Saved combined-logos.png');
}
printInfo();

