const sharp = require('sharp');

async function renderThumbnails() {
  // Resize both to 36x36 with circular mask
  const mask = Buffer.from(
    '<svg><circle cx="18" cy="18" r="17" fill="white" stroke="white" stroke-width="2"/></svg>'
  );

  const t1 = await sharp('public/images/photos/f_1.png')
    .resize(36, 36)
    .toBuffer();

  const t2 = await sharp('public/images/photos/BAC.jpeg')
    .resize(36, 36)
    .toBuffer();

  // Let's inspect the visual center of weight
  const raw1 = await sharp(t1).raw().toBuffer({ resolveWithObject: true });
  const raw2 = await sharp(t2).raw().toBuffer({ resolveWithObject: true });

  console.log('Thumbnail 1 (f_1): width', raw1.info.width, 'channels', raw1.info.channels);
  console.log('Thumbnail 2 (BAC): width', raw2.info.width, 'channels', raw2.info.channels);
}
renderThumbnails();

