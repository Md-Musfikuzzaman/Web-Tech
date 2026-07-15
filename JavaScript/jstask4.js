document.getElementById("addStudent").addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let department = document.getElementById("department").value;

    if (name == "" || roll == "" || department == "") {
        alert("All fields are required");
        return;
    }

    let table = document.getElementById("studentTable");

    let row = document.createElement("tr");

    let cell1 = document.createElement("td");
    cell1.innerText = name;

    let cell2 = document.createElement("td");
    cell2.innerText = roll;

    let cell3 = document.createElement("td");
    cell3.innerText = department;

    let cell4 = document.createElement("td");

    let button = document.createElement("button");
    button.innerText = "Delete";

    button.addEventListener("click", function () {
        row.remove();
    });

    cell4.appendChild(button);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);

    table.appendChild(row);

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("department").value = "";

});