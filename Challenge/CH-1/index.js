let saldo = 0;

function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka).replace('IDR', 'Rp').replace(',00', '');
}

function tambahSaldo() {
    const tambah = parseInt(window.prompt("Masukkan jumlah saldo yang ingin ditambahkan:"), 10);
    if (!isNaN(tambah) && tambah > 0) {
        saldo += tambah;
        document.getElementById("saldo").innerText = formatRupiah(saldo) + ",00";
    } else {
        alert("Masukkan jumlah yang valid.");
    }
}

function kurangiSaldo() {
    if (saldo === 0) {
        alert("Saldo Anda sudah 0.");
        return;
    }

    const kurangi = parseInt(window.prompt("Masukkan jumlah saldo yang ingin dikurangi:"), 10);
    if (!isNaN(kurangi) && kurangi > 0 && kurangi <= saldo) {
        saldo -= kurangi;
        document.getElementById("saldo").innerText = formatRupiah(saldo) + ",00";
    } else if (kurangi > saldo) {
        alert("Saldo tidak cukup.");
    } else {
        alert("Masukkan jumlah yang valid.");
    }
}