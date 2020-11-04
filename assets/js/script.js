document.getElementById('button_valider').onclick = showAlert;

function showAlert(){
    var age = document.getElementById('age').value;
    var result;
    if (age >= 18) {
        result= ('Vous êtes majeur');
    }
    else {
        result= ('Vous êtes mineur');
    }
    
    alert('Résultat : ' + result)
}