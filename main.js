function calc(L, l, a, wdl, conn, conl) {
    var N = Math.ceil(L/l) - 1
    var A = L * a + N * wdl + conn * conl
    return A
}

function getResult() {
    var L = document.getElementById("lineLength").value
    var l = document.getElementById("constructLength").value
    var a = document.getElementById("attenuationCoeff").value
    var wdl = document.getElementById("weldedLosses").value
    var conn = document.getElementById("connectionsNumber").value
    var conl = document.getElementById("connectionLosses").value
    
    var A = calc(L, l, a, wdl, conn, conl)
    console.log(A)

    document.getElementById("dat").innerHTML = "Потери на линии составят " + A + " дБ"
}
