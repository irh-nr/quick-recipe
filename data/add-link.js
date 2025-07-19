// Simpan sebagai add-link.js di folder project-mu
const fs = require('fs');

const filePath = './_data/db.json'; // ganti jika path berbeda
const db = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

// Tambahkan field link pada setiap resep
db.resep = db.resep.map(r => ({
  ...r,
  link: `/recipe/${r.id}`
}));

fs.writeFileSync(filePath, JSON.stringify(db, null, 2));
console.log('Field link berhasil ditambahkan ke semua resep!');