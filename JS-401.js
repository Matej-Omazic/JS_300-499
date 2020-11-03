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

if (pojam == lista[0].ime || pojam == lista[0].prezime) return true
else return false

}

console.log(provjeri(student, "Matej"))