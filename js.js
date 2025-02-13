

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); //ajoute un écouteur d'événement sur le formulaire pour intercepter la soumission et empêcher son comportement par défaut. Décomposons-le en détail

    const user = {
        nom: document.getElementById('nom').value.trim(),//Sélectionne l'élément HTML <input> qui a l'ID "nom" //.value : Récupère la valeur saisie par l'utilisateur.//.trim() : Supprime les espaces avant et après la valeur
        prenom: document.getElementById('prenom').value.trim(),
        email: document.getElementById('email').value.trim(),
        age: parseInt(document.getElementById('age').value, 10),
        pays: document.getElementById('pays').value,
        guess: parseInt(document.getElementById('guess').value, 10)
    };//parseInt(..., 10) assure que la valeur est bien un nombre et non une chaîne de caractères.

    
    if (user.nom === '' || user.prenom === '' || user.email === '' || user.age ==='' || user.pays === '' || user.guess === '') {
        alert("il faut tout remplir");
        
    }else if(isNaN(user.age) || isNaN(user.guess)){
        alert("age et devinez un nombre doivent être des chiffres");
    }else if(!isNaN(user.nom) || !isNaN(user.prenom)){
        alert("nom et prenom doivent être des lettres");
    }else if(user.email.split('@').length !== 2 || user.email.split('.').length !== 2){
        alert("email invalide");
    }else if(user.age < 16 || user.age > 50){
        alert("age doit etre entre 16 et 50 ans");

    }else if(user.guess <8){
        alert("votre chifre est trop petit");
    }else if(user.guess > 8){
        alert("votre chifre est trop grand");
    }


    else{
        window.location.href = "https://2025.webdev-cf2m.be/omer/prefo/";
    }
});


 


   