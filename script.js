function wybierzCement() {
    var rodzaj = parseInt(document.getElementById('rodzaj').value);
    var klasa = parseInt(document.getElementById('klasa').value);
    var kolor = parseInt(document.getElementById('kolor').value);

    var wynikDiv = document.getElementById('wynik');

    if (rodzaj == 1 && klasa == 1 && kolor == 1) {
        wynikDiv.innerHTML = 'Najlepiej wybrać cement X';
    } else if (rodzaj == 2 && klasa == 2 && kolor == 2) {
        wynikDiv.innerHTML = 'Można wybrać cement Y';
    } else {
        wynikDiv.innerHTML = 'Najlepiej skonsultować się z ekspertem';
    }
}

document.getElementById('rodzaj').addEventListener('input', function() {
    document.getElementById('rodzajValue').innerText = 'Rodzaj: ' + this.value;
});

document.getElementById('klasa').addEventListener('input', function() {
    document.getElementById('klasaValue').innerText = 'Klasa: ' + this.value;
});

document.getElementById('kolor').addEventListener('input', function() {
    document.getElementById('kolorValue').innerText = 'Kolor: ' + this.value;
});