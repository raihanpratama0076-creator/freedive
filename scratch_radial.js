const sharp = require('sharp');

async function findCircles() {
  const f1 = await sharp('public/images/photos/f_1.png').raw().toBuffer({ resolveWithObject: true });
  const bac = await sharp('public/images/photos/BAC.jpeg').raw().toBuffer({ resolveWithObject: true });

  // Let's compute radial density for f1 and BAC from center (80, 80)
  const f1Radial = new Array(80).fill(0);
  const bacRadial = new Array(80).fill(0);
  const counts = new Array(80).fill(0);

  for (let y = 0; y < 160; y++) {
    for (let x = 0; x < 160; x++) {
      const r = Math.round(Math.hypot(x - 80, y - 80));
      if (r < 80) {
        counts[r]++;
        if (f1.data[(y*160+x)*4 + 3] > 50) f1Radial[r]++;
        // In BAC, check if pixel is part of the white ring
        const idx = (y*160+x)*3;
        if (bac.data[idx] > 200 && bac.data[idx+1] > 200) bacRadial[r]++;
      }
    }
  }

  console.log('Radius | f1 fill % | BAC ring count');
  for (let r = 50; r < 80; r += 2) {
    console.log(r + ' | ' + ((f1Radial[r]/counts[r])*100).toFixed(0) + '% | ' + bacRadial[r]);
  }
}
findCircles();

