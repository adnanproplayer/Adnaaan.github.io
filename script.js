let Penilaian = prompt("Masukkan Nilai Anda", )
let grade = "";

if(Penilaian >= 96){
    grade = "A"
}else if (Penilaian >= 90){
    grade = "B"
}else if (Penilaian >= 86){
    grade = "C"
}else if (Penilaian >= 81){
    grade = "D"
}else if (Penilaian >= 76){
    grade = "E"
}else if (Penilaian >= 66){
    grade = "F"
}else if (Penilaian >= 0){
    grade = "F-"
}

document.write(`<h1>Nilai Anda : ${Penilaian} dan grade anda : ${grade}<h1>`);