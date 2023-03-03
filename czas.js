// Formatowanie liczb
// zamiast wyświetlania miesiąc jako "1" -> "01"
// dla milisekund "8" -> "008"
function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

// Tablice z przetłumaczeniami
const monthNames = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
const dayOfWeek = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

//
// Zapraszam podejrzeć trochę kodu :)
//

// Pętla, wykonywana co milisekundę
setInterval(() => {
    // Obiekt data
    var date = new Date();
    // Rok
    var year = date.getFullYear();
    // Miesiac
    var month = date.getMonth();
    var monthName = monthNames[month];
    // Dzien tygodnia
    var day = date.getDay();
    var dayName = dayOfWeek[day-1];
    // Godzina
    var hour = date.getHours();
    // Minuta
    var minute = date.getMinutes();
    // Sekunda
    var secound = date.getSeconds();
    // Milisekunda
    var milis = date.getMilliseconds();
    // Formatowanie zmiennych w tekst
    var format = 
    year + " " + monthName + " " + dayName + " "
     + FormatNumberLength(date.getDate(), 2) + " " + FormatNumberLength(hour, 2) + ":" + FormatNumberLength(minute, 2) + ":" + FormatNumberLength(secound, 2) + ":" + FormatNumberLength(milis, 3);
    // Wyświetlanie tekstu na stronie
    document.getElementById("date").innerText = format;
}, 1);

// var - słowo kluczowe w js
// oznacza zminną o dowolnym typie, którą mozna zmieniac i odczytywac