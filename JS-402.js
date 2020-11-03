let student = [
{
 ime: "Matej",
 prezime: "Omazic",
 upisan: true
},
{
 ime: "Tomislav",
 prezime: "Troha",
 upisan: true
},
{
 ime: "Sasa",
 prezime: "Mamula",
 upisan: true
},
{
 ime: "Denis",
 prezime: "Kodrin",
 upisan: true
},
{
 ime: "Danijel",
 prezime: "Dupor",
 upisan: true
},
]

function provjeri(lista, pojam){

if (pojam.toLowerCase() == lista[0].ime.toLowerCase() || pojam.toLowerCase() == lista[0].prezime.toLowerCase()) return true
else return false

}

console.log(provjeri(student, "Matej"))

//nisam bas razumio dio sa statusom