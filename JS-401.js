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

if (pojam == lista[0].ime || pojam == lista[0].prezime) 
	return true
else if (pojam == lista[1].ime || pojam == lista[1].prezime) 
	return true
else if (pojam == lista[2].ime || pojam == lista[2].prezime) 
	return true
else if (pojam == lista[3].ime || pojam == lista[3].prezime) 
	return true
else if (pojam == lista[4].ime || pojam == lista[4].prezime) 
	return true
else
	return false

}

console.log(provjeri(student, "Troha"))