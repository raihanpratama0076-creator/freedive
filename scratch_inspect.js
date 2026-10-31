const sharp = require('sharp');

async function inspect() {
  const f1 = await sharp('public/images/photos/f_1.png').raw().toBuffer({ resolveWithObject: true });
  const bac = await sharp('public/images/photos/BAC.jpeg').raw().toBuffer({ resolveWithObject: true });

  // Let's inspect brightness distribution
  let f1BrightnessSum = 0;
  let f1PixelCount = 0;
  for (let i = 0; i < f1.data.length; i += 4) {
    if (f1.data[i+3] > 30) {
      const lum = 0.299 * f1.data[i] + 0.587 * f1.data[i+1] + 0.114 * f1.data[i+2];
      f1BrightnessSum += lum;
      f1PixelCount++;
    }
  }

  let bacBrightnessSum = 0;
  let bacPixelCount = 0;
  for (let i = 0; i < bac.data.length; i += 3) {
    const lum = 0.299 * bac.data[i] + 0.587 * bac.data[i+1] + 0.114 * bac.data[i+2];
    // check non-background
    const r = bac.data[i], g = bac.data[i+1], b = bac.data[i+2];
    const isBg = (Math.abs(r - 73) < 15 && Math.abs(g - 82) < 15 && Math.abs(b - 99) < 15);
    if (!isBg) {
      bacBrightnessSum += lum;
      bacPixelCount++;
    }
  }

  console.log('f1 visible pixel count:', f1PixelCount, 'avg lum:', (f1BrightnessSum / f1PixelCount).toFixed(1));
  console.log('bac non-bg pixel count:', bacPixelCount, 'avg lum:', (bacBrightnessSum / bacPixelCount).toFixed(1));

  // Let's also check if f_1 has an inner circle or diver figure
  // And what is the size of the diver / emblem inside f1 vs BAC
}
inspect();

