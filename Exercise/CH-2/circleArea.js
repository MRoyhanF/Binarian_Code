
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function displaySteps() {
    console.log("====================================");
    console.log("1. Mulai");
    console.log("2. Masukkan jari-jari lingkaran (r)");
    console.log("3. Hitung luas lingkaran dengan rumus: Luas = π * r^2");
    console.log("4. Tampilkan hasil luas lingkaran");
    console.log("5. Selesai");
    console.log("====================================");
}

displaySteps();

rl.question('Jari-jari lingkaran: ', (r) => {
    const area = Math.PI * Math.pow(r, 2);

    console.log(`Luas Lingkaran adalah: ${area.toFixed(2)}`);

    rl.close();
});
