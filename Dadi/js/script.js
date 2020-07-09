var lancio = alert('Lancia il dado')
var x = Math.floor(Math.random()*6)+1; //numero casuale da 1 a 6 dado utente
var y = Math.floor(Math.random()*6)+1;//numero casuale da 1 a 6 dado COMPUTER
document.getElementById('utente').innerHTML = x;
document.getElementById('pc').innerHTML = y;

if (x>y) {
    var risultato = 'Hai vinto !';

}else if (x==y) {
    var risultato ='Questo è un pareggio !';
}else {
    var risultato = 'Hai perso !';
}

document.getElementById('risultato').innerHTML =  risultato;
