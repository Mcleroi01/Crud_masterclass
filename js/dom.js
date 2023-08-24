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
    // form.reset()
    View()




});

function View() {
    listView.innerHTML = ""

    for (let i = 0; i < contacts.length; i++) {
        let add = `<tr>
        <td class="">${contacts[i].name}</td>
        <td>${contacts[i].username}</td>
        <td>${contacts[i].mail}</td>
        <td><button type="button" onclick="delete" (${i})>Delete</button> <button type="button" onclick="Delete()" (${i})>Update</button></td>
        
        </tr>`
        listView.innerHTML += add

    }

}
function Delete(i) {
    contacts.splice(i, 1);

    View();


}
function reset() {

    listView
    
}
























