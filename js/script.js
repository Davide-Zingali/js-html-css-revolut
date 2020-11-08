// Descrizione:
// creare l’header come da screeshot allegato.
// Ogni voce di menù avrà un suo dropdown menù che viene fuori al click.
// Dettagli
// 1. prendiamo come ref lo screeshot;
// 2. il dropdown esce fuori al click non all’hover (sennò  a qualcuno giustamente glie verrebbe da fare in css);
// 3.basta che fate la parte di header/menu (appunto quello che c’è in screeshot);
// 4.tenete conto che su questo avete più elementi uguali da comandare e ognuno chiaramente rende visibile solo il proprio dropdown;
// 5.consiglio: degli eventuali casi limte/controlli (es. voglio che sia aperto solo un dropdown alla volta, preoccupatevi alla fine).

$(document).ready(function () {

    $('.relativo').click(function () {

        $(this).siblings().find('ul').removeClass('dblock');

        $(this).find('ul').toggleClass('dblock');

    });
});



// Bonus:
// gestione menù versione mobile;
// andare avanti a fare altro del layout fin dove si arriva, del layout reale del sito così anche da rinfrescare la memoria su html+css.
// sito reale: https://www.revolut.com/it-IT