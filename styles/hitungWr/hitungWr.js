//Deklarasi variable dan memilih id dari HTML
//const karena angka yang akan di hitung nilainya tetap

const totalPertandingan = document.getElementById('totalPertandingan');
const totalWr = document.getElementById('totalWr');
const wrImpian = document.getElementById('wrImpian');
const hasilHitung = document.getElementById('hasilHitung');
const tampilkanHasil = document.getElementById('tampilkanHasil');

// fungsi untuk menghitung WR 
function menghitungWr(totalPertandingan, totalWr, wrImpian)
{
    let rumusTotalKemenangan = totalPertandingan * (totalWr / 100);
    let rumusTotalKekalahan = totalPertandingan - rumusTotalKemenangan;
    let rumusSelisihWr = 100 - wrImpian;
    let hasil = 100 / rumusSelisihWr;
    let persentase = rumusTotalKekalahan * hasil;
    let hasilAkhir = persentase - totalPertandingan;
    return Math.round(hasilAkhir);
}

// fungsi untuk menampilkan hasil perhitungan
function menampilkanHasilPerhitungan()
{
    let hasilPerhitungan = menghitungWr(totalPertandingan.value, totalWr.value, wrImpian.value);
    let pesan = 
    `Win Rate kamu : ${totalWr.value} <br> Total Pertandingan : ${totalPertandingan.value} <br> Untuk mendapatkan Win Rate : ${wrImpian.value}% <br>  Kamu harus menyelsaikan ${hasilPerhitungan} Pertandingan Tanpa kalah`;
    tampilkanHasil.innerHTML = pesan;
}

window.addEventListener("load", init);

function init()
{
    load();
   eventListener();
}

function load() {}

function eventListener()
{
    hasilHitung.addEventListener("click", menampilkanHasilPerhitungan);
}
