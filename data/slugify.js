const fs = require('fs');

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

const file = JSON.parse(fs.readFileSync('./data/db.json', 'utf-8'));
const resepBaru = file.resep.map((item) => ({
  ...item,
  slug: slugify(item.title),
}));

resepBaru.forEach((r) => delete r.link);

fs.writeFileSync('./resep-migrasi.json', JSON.stringify({ resep: resepBaru }, null, 2));
console.log('Migrasi selesai! Lihat: resep-migrasi.json');