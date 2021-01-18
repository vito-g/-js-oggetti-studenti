// TRACCIA:
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
var student = {
  'nome' : 'Sandro',
  'cognome' : 'Giacomelli',
  'età' : 25
};
console.log(student);

// Stampare a schermo attraverso il for tutte le proprietà.
for (var key in student) {
  console.log(student[key]);
  alert(student[key]);
}

// Creare un array di oggetti di studenti.
var students = {
  'iscritti' : []
};

var studentDue = {
  'nome' : 'Piero',
  'cognome' : 'Sabatini',
  'età' : 22
};

var studentTre = {
  'nome' : 'Giuseppe',
  'cognome' : 'Guida',
  'età' : 23
};

students.iscritti.push(student);

students.iscritti.push(studentDue);

students.iscritti.push(studentTre);
// console.log(students.iscritti);

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var studentForeign = {};
studentForeign.nome = capitalizeFirstLetter(prompt('Il tuo nome?'));
studentForeign.cognome = capitalizeFirstLetter(prompt('Il tuo cognome'));
studentForeign.età = prompt('La tua età?');

// console.log(studentForeign);
students.iscritti.push(studentForeign);

// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
for ( var i = 0; i < students.iscritti.length; i++ ) {
  alert(students.iscritti[i].nome + ' ' + students.iscritti[i].cognome);
  console.log(students.iscritti[i]);
}
console.log(students.iscritti);

//N.B.: In alternativa, per quanto riguarda l'array di oggetti, avrei potuto crearlo di getto, come segue:
// var students = [
//     {nome: 'Piero', cognome: 'Sabatini', eta: 22},
//     {nome: 'Giuseppe', cognome: 'Guida', eta: 23}
// ];
//E pushare tutto direttamente nell'array di oggetti "students".
//
function capitalizeFirstLetter(string) {// Questa FX consente di impostare in maiuscolo la prima lettera di una stringa. La richiamo direttamente nel prompt
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//N.B.: Altri casi interessanti per l' UPPERCASE:
// function capitalizeFirstLetter(string) {// Questa FX consente di impostare in maiuscolo la prima lettera di una stringa. La richiamo direttamente nel prompt
//   // return string.charAt(0).toUpperCase(); //Ritorna solo la prima lettera della stringa inserita e la riporta in maiuscolo
//   return string.toUpperCase();//Ritorna tutta la stringa in maiuscolo
// }
