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