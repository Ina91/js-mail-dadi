// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


var mails = ['pinco@email.com' , 'pallo@email.com' , 'tizio@email.com' ,'caio@email.com' , 'sempronio@email.com', 'sole@email.com' , 'luna@email.com' , 'mare@email.com' , 'onda@email.com'];
var utente = prompt('Inserisci la tua email');
var controllo = false;
for (var i = 0; i < mails.length; i++)
    {
        if (utente === mails[i])
            {
             controllo= true;
            }
    }
if (controllo == true){
    alert('email accettata');
    }
    else {
        alert('email non accettata');
    }

// Lancio Dado

alert('Lancia il dado se il tuo numero è maggiore di quello della macchina vinci.')
alert('Effetua il lancio');
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
