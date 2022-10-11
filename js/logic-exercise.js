// Tugas Logic Diagonal Pattern

console.log("----Soal N0. 1----")
// Soal No. 1
function soal1(a) {
    let pola = "";
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (i === j) {
                pola+= "*";
            } else {
                pola+= " ";
            }
        }pola+= "\n";
    }console.log(pola)
}soal1(9)

console.log("----Soal No. 3----")
//Soal No. 3
function soal3(n) {
    let pola = ""
    for (let i = 0; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i === j || j === (n-i+1)) {
                pola+= "*"
            } else {
                pola+= " "
            }
        }
        pola+= "\n"
    }
    console.log(pola)
}soal3(9)

console.log("----Soal N0. 5----")
//Soal No. 5
function soal5(n) {
    let pola = ""
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || i === n || j === 0 || j === n-i+0 || i === j || j === n) {
                pola+= "*"
            } else {
                pola+= " "
            }
        }
        pola+= "\n"
    }
    console.log(pola)
}soal5(9)



console.log("----Soal N0. 7----")
// Soal No. 7
function soal7(n) {
    let pola = ""
    for (let i = 0; i < n; i++) {
        for (let j = n - 1; j >= i; j--) {
            pola+= " ";
        }
        for (let k = 0; k <= i; k++) {
            pola+= "*"
        }
        pola+= "\n"
    }console.log(pola)
}soal7(9)

console.log("----Soal No. 9----")
// Soal No. 9
function soal9(n) {
    let pola = ""
    for (let i=1;i<=n;i++) {
        for (let j=1; j <=i; j++){
            pola+= "*"
        }pola+= "\n"
    }
    for (let i = n-1; i >= 1; i--) {
        for (let j=1; j<=i; j++){
            pola+= "*"
        }pola+= "\n"
    }console.log(pola)
}soal9(5)