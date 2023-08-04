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
  laju = parseFloat(lajupenduduk.value)/100;
  console.log(laju);
  correctAnswer = Math.ceil(jumlah*(Math.pow((1+ laju),n)));
  result.innerHTML = "Ramalan Jumlah Penduduk tahun "+ tahuncari +" adalah <b><div id='jumlahAkhir' value='"+correctAnswer+"'></div>";
  next.style.display = "inline";
  let rupiah2 =document.getElementById("jumlahAkhir").getAttribute('value');
// document.addEventListener('keyup', function(e){
  // tambahkan 'Rp.' pada saat form di ketik
  // gunakan fungsi formatRupiah() untuk mengubah angka yang di ketik menjadi format angka
  rupiah2 = formatRupiah2(rupiah2, '');
  juma = rupiah2;
  result.innerHTML = "Ramalan Jumlah Penduduk tahun "+ tahuncari +" adalah <b>"+juma;


/* Fungsi formatRupiah */
function formatRupiah2(angka, prefix){
  let number_string =angka.replace(/[^,\d]/g, '').toString(),
  split   		= number_string.split(','),
  sisa     		= split[0].length % 3,
  rupiah2     		= split[0].substr(0, sisa),
  ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if(ribuan){
    separator = sisa ? '.' : '';
    rupiah2 += separator + ribuan.join('.');
  }

  rupiah2 = split[1] != undefined ? rupiah2 + ',' + split[1] : rupiah2;
  return prefix == undefined ? rupiah2 : (rupiah2 ? '' + rupiah2 : '');
}

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

