function wybierzCement() {
    var rodzaj = parseInt(document.getElementById('rodzaj').value);
    var klasa = parseInt(document.getElementById('klasa').value);
    var kolor = parseInt(document.getElementById('kolor').value);

    var wynikDiv = document.getElementById('wynik');

    if (rodzaj == 2 && klasa == 1 && kolor == 1) {
        wynikDiv.innerHTML = 'Cement budowlany Lafarge';
    } else if (rodzaj == 1 && klasa == 4 && kolor == 1) {
        wynikDiv.innerHTML = 'Cement Premium';
    } else if (rodzaj == 5 && klasa == 2 && kolor == 1) {
        wynikDiv.innerHTML = 'Cement Adept';
    } else if (rodzaj == 1 && klasa == 6 && kolor == 2) {
        wynikDiv.innerHTML = 'Cement Aalborgportland';
    } else if (rodzaj == 2 && klasa == 1 && kolor == 1) {
        wynikDiv.innerHTML = 'Cement Lafarge Standard';
    } else if (rodzaj == 2 && klasa == 2 && kolor == 1) {
        wynikDiv.innerHTML = 'Cement Cemex Niebieski';
    } else if (rodzaj == 2 && klasa == 3 && kolor == 1) {
        wynikDiv.innerHTML = 'Cement Cemex Niebieski';
    } else if (rodzaj == 1 && klasa == 3 && kolor == 1) {
        wynikDiv.innerHTML = 'Cement Energo-Bet Portlandzki';
    } else if (rodzaj == 4 && klasa == 2 && kolor == 1) {
        wynikDiv.innerHTML = 'Cement Włodar Max';
    } else if (rodzaj == 3 && klasa == 3 && kolor == 2) {
        wynikDiv.innerHTML = 'Cement Heidelberg Materials';
    }
    else {
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