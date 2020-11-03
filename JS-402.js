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

if (pojam.toLowerCase() == lista[0].ime.toLowerCase() || pojam.toLowerCase() == lista[0].prezime.toLowerCase())
	return true
else if (pojam.toLowerCase() == lista[1].ime.toLowerCase() || pojam.toLowerCase() == lista[1].prezime.toLowerCase()) 
	return true
else if (pojam.toLowerCase() == lista[2].ime.toLowerCase() || pojam.toLowerCase() == lista[2].prezime.toLowerCase()) 
	return true
else if (pojam.toLowerCase() == lista[3].ime.toLowerCase() || pojam.toLowerCase() == lista[3].prezime.toLowerCase()) 
	return true
else if (pojam.toLowerCase() == lista[4].ime.toLowerCase() || pojam.toLowerCase() == lista[4].prezime.toLowerCase()) 
	return true
else
	return false

}

console.log(provjeri(student, "mamula"))

//nisam bas razumio dio sa statusom