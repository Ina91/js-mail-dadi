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
