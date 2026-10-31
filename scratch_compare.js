const fs = require('fs');
const sharp = require('sharp');

async function main() {
  const f1 = fs.readFileSync('public/images/photos/f_1.png').toString('base64');
  const bac = fs.readFileSync('public/images/photos/BAC.jpeg').toString('base64');

  const html = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #020a12; color: #fff; font-family: sans-serif; padding: 40px; }
    .box { width: 36px; height: 36px; border-radius: 9999px; overflow: hidden; border: 1px solid rgba(86, 211, 200, 0.4); background: #051322; position: relative; }
    .box img { width: 100%; height: 100%; object-fit: cover; }
    .row { display: flex; align-items: center; gap: 8px; margin-bottom: 24px; }
  </style>
</head>
<body>
  <h3>Default Rendering:</h3>
  <div class="row">
    <div class="box"><img src="data:image/png;base64,${f1}" /></div>
    <span>·</span>
    <div class="box"><img src="data:image/jpeg;base64,${bac}" /></div>
    <div><strong>EVERY DIVE</strong><div style="font-size:9px;color:#56d3c8">FREEDIVING · BAC</div></div>
  </div>
</body>
</html>`;
  fs.writeFileSync('public/compare.html', html);
  console.log('compare.html created successfully');
}
main();

