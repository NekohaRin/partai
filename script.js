let nama = prompt("Masukkan nama kamu");
document.getElementById("name").innerHTML = nama;
let umur = prompt("Masukkan usia anda");
document.getElementById("age").innerHTML =  umur;
let gender = prompt("Masukkan jenis kelamin anda");
document.getElementById("gender").innerHTML =  gender;

let cap = document.getElementById("cap");
function generateGolongan() {
  alert(
    "Kelompok CAPRES;                           1.  Anies:NasDem,PKS,PKB;                2.  Ganjar: PDIP,PSI,Hanura,PPP;                                                         3.Prabowo:GERINDRA,PAN,PPF,PBB,Golkar;            4.  Golput"
  );
  var partai = prompt("Masukkan nama partai yang kamu dukung");
  let kelompok;
  if (partai == 1) {
    kelompok = "Golongan Anies & Cak Imin";
  } else if (partai == 2) {
    kelompok = "Golongan Ganjar & Mahfud";
  } else if (partai == 3) {
    kelompok = "Golongan prabowo & Gibran";
  } else {
    kelompok = "Golongan Putih";
  }
  return (cap.innerHTML = kelompok);
}

generateGolongan();