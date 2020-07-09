alert('Lancia il dado se il tuo numero è maggiore di quello della macchina vinci.');
alert('Effettuare il lancio ? ');
var x = Math.floor(Math.random()*6)+1; //numero casuale da 1 a 6 dado utente
var y = Math.floor(Math.random()*6)+1;//numero casuale da 1 a 6 dado COMPUTER
var risultato;
document.getElementById('utente').innerHTML = x;
document.getElementById('pc').innerHTML = y;

if (x > y) {
     risultato = 'Hai vinto !';
}   else if (x == y) {
        risultato ='Questo è un pareggio !';
    }   else {
            risultato = 'Hai perso !';
        }
document.getElementById('risultato').innerHTML =  risultato;
