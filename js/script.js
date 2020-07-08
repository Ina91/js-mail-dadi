// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


var mails = ['pinco@email.com' , 'pallo@email.com' , 'tizio@email.com' ,'caio@email.com' , 'sempronio@email.com', 'sole@email.com' , 'luna@email.com' , 'mare@email.com' , 'onda@email.com'];
var utente = prompt('Inserisci la tua email');
var registro;

for (var i = 0; i < mails.length; i++) {
    if (utente === mails[i]){
        registro = prompt('email accettata');

    }else {
        registro = alert('email non registrata');
    }
}
