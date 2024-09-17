class SaldoManager {
    constructor() {
        this.saldo = 0;
        this.saldoElement = document.getElementById('saldo');
        this.updateSaldoDisplay();
    }

    formatRupiah(angka) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka).replace('IDR', 'Rp').replace(',00', '');
    }

    updateSaldoDisplay() {
        this.saldoElement.innerText = this.formatRupiah(this.saldo) + ',00';
    }

    tambahSaldo() {
        const tambah = parseInt(window.prompt("Masukkan jumlah saldo yang ingin ditambahkan:"), 10);
        if (!isNaN(tambah) && tambah > 0) {
            this.saldo += tambah;
            this.updateSaldoDisplay();
        } else {
            alert("Masukkan jumlah yang valid.");
        }
    }

    kurangiSaldo() {
        if (this.saldo === 0) {
            alert("Saldo Anda sudah 0.");
            return;
        }

        const kurangi = parseInt(window.prompt("Masukkan jumlah saldo yang ingin dikurangi:"), 10);
        if (!isNaN(kurangi) && kurangi > 0 && kurangi <= this.saldo) {
            this.saldo -= kurangi;
            this.updateSaldoDisplay();
        } else if (kurangi > this.saldo) {
            alert("Saldo tidak cukup.");
        } else {
            alert("Masukkan jumlah yang valid.");
        }
    }
}

const saldoManager = new SaldoManager();