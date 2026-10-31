const sharp = require('sharp');

async function measureWhiteCircles() {
  const f1 = await sharp('public/images/photos/f_1.png').raw().toBuffer({ resolveWithObject: true });
  const bac = await sharp('public/images/photos/BAC.jpeg').raw().toBuffer({ resolveWithObject: true });

  // For f1: find circle radius where pixels are white/bright
  // For BAC: find where the white circle is!
  // In BAC, let's find the bounding box of the white circle (pixels with r > 200, g > 200, b > 200)
  let bacMinX = 160, bacMaxX = 0, bacMinY = 160, bacMaxY = 0;
  for (let y = 0; y < 160; y++) {
    for (let x = 0; x < 160; x++) {
      const idx = (y * 160 + x) * 3;
      if (bac.data[idx] > 220 && bac.data[idx+1] > 220 && bac.data[idx+2] > 220) {
        if (x < bacMinX) bacMinX = x;
        if (x > bacMaxX) bacMaxX = x;
        if (y < bacMinY) bacMinY = y;
        if (y > bacMaxY) bacMaxY = y;
      }
    }
  }

  let f1MinX = 160, f1MaxX = 0, f1MinY = 160, f1MaxY = 0;
  for (let y = 0; y < 160; y++) {
    for (let x = 0; x < 160; x++) {
      const idx = (y * 160 + x) * 4;
      if (f1.data[idx+3] > 50 && f1.data[idx] > 220) {
        if (x < f1MinX) f1MinX = x;
        if (x > f1MaxX) f1MaxX = x;
        if (y < f1MinY) f1MinY = y;
        if (y > f1MaxY) f1MaxY = y;
      }
    }
  }

  console.log('f1 white circle bounds:', { minX: f1MinX, maxX: f1MaxX, minY: f1MinY, maxY: f1MaxY, width: f1MaxX - f1MinX + 1, height: f1MaxY - f1MinY + 1 });
  console.log('BAC white circle bounds:', { minX: bacMinX, maxX: bacMaxX, minY: bacMinY, maxY: bacMaxY, width: bacMaxX - bacMinX + 1, height: bacMaxY - bacMinY + 1 });
}
measureWhiteCircles();

