let listView = document.querySelector('table tbody');
let form = document.getElementById('form');



// datas 
let contacts = [];



// add action ! 
form.addEventListener('submit', function (e) {
    e.preventDefault();

    let data = new FormData(e.target)


    let user = {
        'name': data.get('name'),
        'username': data.get('username'),
        'mail': data.get('mail'),

    };
    contacts.push(user)
    View()




});

function View() {
    listView.innerHTML = ""

    for (let i = 0; i < contacts.length; i++) {
        
        let add = `<tr>
        <td class="row">${contacts[i].name}</td>
        <td class="row">${contacts[i].username}</td>
        <td class="row">${contacts[i].mail}</td>
        <td class="row"><button type="button" onclick="Delete" (${i})>Delete</button> <button type="button" onclick="" (${i})>Update</button></td>
        
        </tr>`
        listView.innerHTML += add
        

    }

}
function Delete(i) {
    contacts.splice(i, 1);

    View();


}
function reset(e) {

    e=listView.innerHTML=''
    View();

    
}
























