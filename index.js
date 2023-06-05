
const objet = [
    {prenom: "eleve1", age: 13, note: 10},
    {prenom: "eleve2", age: 14, note: 8},
    {prenom: "eleve3", age: 12, note: 17},
    {prenom: "eleve4", age: 15, note: 14},
    {prenom: "eleve5", age: 16, note: 20},
    {prenom: "eleve6", age: 17, note: 15}

]


for(let i in objet){ 
    document.getElementById("#").innerHTML += (`<p>${i}</p>`)
    document.getElementById("nom").innerHTML += (`<p>${objet[i].prenom}</p>`)
    document.getElementById("age").innerHTML += (`<p>${objet[i].age}</p>`)
    document.getElementById("note").innerHTML += (`<p>${objet[i].note}</p>`)
    
}
document.write(`<p>eleve3 est le plus jeune</p>`)
document.write(`<p>eleve6 est le plus vieux</p>`)
document.write(`<p>eleve2 a eu la plus faible note</p>`)
document.write(`<p>eleve5 a eu la plus forte note</p>`)


