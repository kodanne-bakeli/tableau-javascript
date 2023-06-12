
const objet = [
    {prenom: "élève 1", age: 13, note: 10},
    {prenom: "élève 2", age: 14, note: 8},
    {prenom: "élève 3", age: 12, note: 17},
    {prenom: "élève 4", age: 15, note: 14},
    {prenom: "élève 5", age: 16, note: 20},
    {prenom: "élève 6", age: 17, note: 15}

]


for(let i in objet){ 
    
    document.getElementById('eleve').innerHTML  += 
    `<tr>
        <td class="py-3">${i}</td>
        <td class="w-25 py-3">${objet[i].prenom}</td>
        <td class="w-25 py-3">${objet[i].age}</td>
        <td class="w-25 py-3">${objet[i].note}</td>
      </tr>
      `   
    
}



