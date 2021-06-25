let res;
fetch("https://jsonplaceholder.typicode.com/comments")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    consoleLogJson(json);
  });
function consoleLogJson(json) {
  let table = document.getElementById("data");
  res = json;
  for (let i = 0; i < res.length; i++) {
    let row = `<tr>
    <td>${res[i].id}</td>
    <td>${res[i].name}</td>
      <td>${res[i].email}</td>
        <td>${res[i].body}</td></tr>`;
    table.innerHTML += row;
  }
}
function addgData() {
    let table = document.getElementById("data");
    var id = prompt("ID")
    var name = prompt("NAME");
    var email = prompt("Email");
    var body = prompt("email body");
    var row = 
    `<tr><td>${id}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>${body}</td></tr>`;
    table.innerHTML += row;
  }
function searchData(){
        document.getElementById("data").innerHTML='';
        let table=document.getElementById("data");
        let idd = prompt("ID");
        for(let i=0; i<res.length ;i++){
          if(res[i].id==idd){
            let element=`<tr>
            <td>${res[i].id}</td>
            <td>${res[i].name}</td>
            <td>${res[i].email}</td>
            <td>${res[i].body}</td></tr>`;
            table.innerHTML+=element;
          }
        }
      }