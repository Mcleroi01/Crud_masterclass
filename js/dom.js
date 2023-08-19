//recuperation formulaire

let table = []



function newUser(e) {

    console.log(e)

    let name = document.getElementById("name")
    let lastname = document.getElementById("last-name")
    let mail = document.getElementById("mail")
    let tr = document.createElement("tr")
    table.appendChild(tr);
    let td= document.createElement("td")
    td.innerHTML=name.value
    tr.appendChild(td)
    name.value=""
    


    let p=document.createElement("p")
    p.innerHTML
    alert(table)



}







