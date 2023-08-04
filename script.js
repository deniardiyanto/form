	var rupiah = document.getElementById('jumlahAwal');
rupiah.addEventListener('keyup', function(e){
  // tambahkan 'Rp.' pada saat form di ketik
  // gunakan fungsi formatRupiah() untuk mengubah angka yang di ketik menjadi format angka
  rupiah.value = formatRupiah(this.value, '');
});

/* Fungsi formatRupiah */
function formatRupiah(angka, prefix){
  var number_string = angka.replace(/[^,\d]/g, '').toString(),
  split   		= number_string.split(','),
  sisa     		= split[0].length % 3,
  rupiah     		= split[0].substr(0, sisa),
  ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if(ribuan){
    separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return prefix == undefined ? rupiah : (rupiah ? '' + rupiah : '');
}
let jumlahawal = document.getElementById("jumlahAwal");
let lajupenduduk = document.getElementById("lajuPenduduk");
var tahunsekarang ;
var tahuncari;
let result = document.getElementById("result");
let next = document.getElementById("next");
let n,olah;
next.style.display = "none";
document.addEventListener("submit", function(event) {
  event.preventDefault();
  tahunsekarang = $("#tahunSekarang").find("input").val();
  tahuncari = $("#tahunCari").find("input").val();
  // tahunnow = tahunsekarang.slice(-4);
  // tahunsearch = tahuncari.slice(-4);
  n = tahuncari - tahunsekarang;
  jumlah = parseFloat(jumlahawal.value.replace('.','').replace('.','').replace('.','').replace('.','').replace('.',''));
  correctAnswer = jumlah*(Math.pow((1+ parseFloat(lajupenduduk.value)),n));
  result.innerHTML = "Ramalan Jumlah Penduduk tahun "+ tahuncari +" adalah <b>"+correctAnswer;
  next.style.display = "inline";

});
document.addEventListener("click", function(event) {
  if (event.target.id == "next") {
    jumlahawal.value = "";
    lajupenduduk.value = "";
    tahunsekarang.value = "";
    jumlahawal.value = "";
    tahuncari.innerHTML = "";
    result.innerHTML = "";
    next.style.display = "none";
  }
});