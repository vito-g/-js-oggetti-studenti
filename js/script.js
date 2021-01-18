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
}

var studentTre = {
  'nome' : 'Giuseppe',
  'cognome' : 'Guida',
  'età' : 23
}

students.iscritti.push(student);
console.log(students);
students.iscritti.push(studentDue);
console.log(students);
students.iscritti.push(studentTre);
console.log(students);
console.log(students.iscritti);

// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
for ( var i = 0; i < students.iscritti.length; i++ ) {
  alert(students.iscritti[i].nome + ' ' + students.iscritti[i].cognome);
}
