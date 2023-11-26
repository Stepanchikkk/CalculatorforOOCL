// Функция для рассчета потерь на линии
function calc(L, l, a, wdl, conn, conl) {
    // Рассчитываем количество сегментов линии
    var N = Math.ceil(L/l) - 1
    // Рассчитываем общие потери на линии
    var A = L * parseFloat(a.replace(",", ".")) + N * parseFloat(wdl.replace(",", ".")) + parseFloat(conn.replace(",", ".")) * parseFloat(conl.replace(",", "."))
    // Возвращаем общие потери
    return A
}

// Функция для получения результата
function getResult() {
    // Получаем значения из полей ввода
    var L = document.getElementById("lineLength").value
    var l = document.getElementById("constructLength").value
    var a = document.getElementById("attenuationCoeff").value
    var wdl = document.getElementById("weldedLosses").value
    var conn = document.getElementById("connectionsNumber").value
    var conl = document.getElementById("connectionLosses").value

    // Вызываем функцию для рассчета потерь на линии
    var A = calc(L, l, a, wdl, conn, conl)
    // Формируем текст с результатом
    var resText = "Потери на линии составят " + A + " дБ"
    // Выводим результат на страницу
    document.getElementById("dat").innerHTML = resText
}
