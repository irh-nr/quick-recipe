const fs = require("fs");

const dbPath = "./data/db.json";

// Data tambahan (1 contoh dulu — bisa diperluas)
 const detailsMap = {
  1: {
    ingredients: [
      "1 bungkus mi instan goreng",
      "1 butir telur",
      "1 lembar keju slice atau 2 sdm keju parut",
      "Air secukupnya",
      "Minyak goreng"
    ],
    steps: [
      "Rebus mi instan hingga 80% matang, lalu tiriskan.",
      "Panaskan sedikit minyak dan goreng telur setengah matang.",
      "Campurkan bumbu mi di dalam piring.",
      "Masukkan mi ke piring, aduk rata dengan bumbu.",
      "Letakkan telur di atas mi dan taburi keju.",
      "Sajikan hangat."
    ],
    notes: "Keju akan meleleh sempurna jika langsung ditaruh di atas mi panas."
  },
  2: {
    ingredients: [
      "2 piring nasi putih",
      "2 siung bawang putih",
      "1 butir telur",
      "2 sdm kecap manis",
      "Cabai rawit sesuai selera",
      "Garam dan merica secukupnya",
      "Minyak goreng"
    ],
    steps: [
      "Panaskan minyak, tumis bawang putih hingga harum.",
      "Masukkan cabai dan telur, orak-arik.",
      "Masukkan nasi, aduk rata.",
      "Tambahkan kecap manis, garam, dan merica.",
      "Aduk rata hingga nasi panas dan sedikit kering.",
      "Angkat dan sajikan."
    ],
    notes: "Gunakan nasi dingin agar tidak lembek saat digoreng."
  },
  3: {
    ingredients: [
      "1 potong dada ayam, fillet",
      "Tepung bumbu serbaguna",
      "5 buah cabai rawit",
      "3 siung bawang putih",
      "Minyak goreng",
      "Garam secukupnya"
    ],
    steps: [
      "Balur ayam dengan tepung lalu goreng hingga krispi.",
      "Haluskan cabai dan bawang, tumis dengan sedikit minyak.",
      "Letakkan ayam di atas cobek, siram sambal tumis.",
      "Geprek ayam hingga menyatu dengan sambal.",
      "Sajikan dengan nasi hangat."
    ],
    notes: "Sambal makin nikmat kalau ditumis dengan sedikit margarin."
  },
  4: {
    ingredients: [
      "300 gram dada ayam, potong dadu",
      "Tusuk sate",
      "4 sdm kacang tanah goreng",
      "2 siung bawang putih",
      "2 sdm kecap manis",
      "1 buah jeruk nipis",
      "Garam secukupnya"
    ],
    steps: [
      "Tumbuk kasar kacang tanah dan bawang putih.",
      "Campur dengan kecap, air, dan sedikit garam.",
      "Tusuk potongan ayam, lalu panggang hingga matang.",
      "Siram bumbu kacang di atas sate.",
      "Sajikan dengan lontong atau nasi."
    ],
    notes: "Panggang dengan arang untuk rasa autentik kaki lima."
  },
  5: {
    ingredients: [
      "500 gram daging sapi",
      "500 ml santan kental",
      "4 siung bawang merah",
      "3 siung bawang putih",
      "2 batang serai",
      "2 lembar daun jeruk",
      "Cabai merah besar",
      "Rempah: ketumbar, kunyit, jahe, lengkuas"
    ],
    steps: [
      "Haluskan bumbu, tumis hingga wangi.",
      "Masukkan daging, aduk hingga berubah warna.",
      "Tuang santan, kecilkan api.",
      "Masak 2 jam hingga kuah menyusut dan berminyak.",
      "Aduk sesekali agar tidak gosong.",
      "Angkat saat warna rendang sudah cokelat kehitaman."
    ],
    notes: "Gunakan santan peras asli agar rasa lebih legit."
  },
  6: {
    ingredients: [
      "Mi kuning basah 1 bungkus",
      "2 butir telur",
      "3 bakso iris tipis",
      "1 siung bawang putih",
      "2 sdm kecap manis",
      "Air secukupnya",
      "Garam dan merica"
    ],
    steps: [
      "Tumis bawang putih hingga harum.",
      "Masukkan telur, orak-arik, lalu tambahkan bakso.",
      "Masukkan mi dan sedikit air.",
      "Tambahkan kecap, garam, dan merica.",
      "Masak hingga air menyusut dan mi matang.",
      "Angkat dan sajikan."
    ],
    notes: "Tambahkan sawi jika ingin versi sedikit lebih sehat."
  },
  7: {
    ingredients: [
      "250 gram ayam fillet",
      "2 siung bawang putih",
      "3 sdm kecap manis",
      "1 sdm saus tiram",
      "Air secukupnya",
      "Garam, merica",
      "Minyak goreng"
    ],
    steps: [
      "Tumis bawang putih hingga harum.",
      "Masukkan potongan ayam, masak hingga berubah warna.",
      "Tambahkan kecap, saus tiram, dan air.",
      "Bumbui dengan garam dan merica.",
      "Masak hingga kuah menyusut dan ayam matang.",
      "Sajikan dengan nasi putih."
    ],
    notes: "Bisa ditambahkan bawang bombay untuk rasa manis alami."
  },
  8: {
    ingredients: [
      "250 gram tepung terigu",
      "2 sdm gula",
      "1/2 sdt baking powder",
      "1 sdt ragi",
      "200 ml air hangat",
      "Margarin",
      "Topping: meses cokelat, keju parut, susu kental manis"
    ],
    steps: [
      "Campur bahan kering, lalu tambahkan air.",
      "Biarkan adonan mengembang 30 menit.",
      "Panaskan teflon, tuang adonan.",
      "Masak dengan api kecil hingga berlubang dan matang.",
      "Olesi margarin, tambahkan topping.",
      "Lipat martabak dan potong."
    ],
    notes: "Gunakan api kecil agar tidak gosong bawahnya."
  },
  9: {
    ingredients: [
      "200 gram daging sapi iris tipis",
      "2 sdm saus teriyaki",
      "1 sdm kecap asin",
      "1/2 bawang bombay",
      "Minyak goreng",
      "Nasi putih"
    ],
    steps: [
      "Tumis bawang bombay hingga harum.",
      "Masukkan daging, masak hingga matang.",
      "Tambahkan saus teriyaki dan kecap asin.",
      "Masak sampai meresap.",
      "Sajikan di atas nasi putih hangat."
    ],
    notes: "Gunakan daging sukiyaki agar empuk dan cepat matang."
  },
  10: {
    ingredients: [
      "250 gram dada ayam, potong dadu kecil",
      "Tepung bumbu krispi",
      "Air es",
      "Minyak goreng"
    ],
    steps: [
      "Celup ayam ke adonan basah, lalu balur tepung kering.",
      "Goreng dalam minyak panas hingga keemasan.",
      "Tiriskan dan sajikan dengan saus sambal."
    ],
    notes: "Goreng dua kali untuk hasil ekstra renyah."
  },
  11: {
    ingredients: [
      "1 kaleng kornet sapi",
      "2 buah kentang, potong dadu kecil",
      "2 siung bawang merah",
      "1 siung bawang putih",
      "Garam dan merica",
      "Minyak goreng"
    ],
    steps: [
      "Goreng kentang sampai kecokelatan, tiriskan.",
      "Tumis bawang merah & putih, masukkan kornet.",
      "Tambahkan kentang goreng, aduk rata.",
      "Bumbui garam dan merica, angkat."
    ],
    notes: "Enak dijadikan isian roti atau makan dengan nasi."
  },
  12: {
    ingredients: [
      "3 butir telur",
      "1 sdm cabai bubuk",
      "1 batang daun bawang, iris",
      "Garam dan merica",
      "Minyak goreng"
    ],
    steps: [
      "Kocok telur dengan cabai bubuk dan daun bawang.",
      "Bumbui dengan garam dan merica.",
      "Goreng dalam minyak panas, gunakan api kecil.",
      "Balik sekali agar matang merata.",
      "Sajikan selagi panas."
    ],
    notes: "Gunakan wajan kecil agar bentuknya tebal dan padat seperti di warung Padang."
  }
};


const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

const updatedRecipes = db.resep.map(resep => {
  const details = detailsMap[resep.id];
  return details
    ? { ...resep, ...details }
    : resep;
});

fs.writeFileSync(
  dbPath,
  JSON.stringify({ resep: updatedRecipes }, null, 2),
  "utf-8"
);

console.log("Data berhasil ditambahkan ke db.json ✅");
