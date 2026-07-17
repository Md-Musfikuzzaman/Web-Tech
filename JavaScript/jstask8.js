function showField() {

    let userType = document.getElementById("userType").value;

    let rollField = document.getElementById("rollField");
    let departmentField = document.getElementById("departmentField");

    if (userType == "Student") {

        rollField.style.display = "block";
        departmentField.style.display = "none";

    } else if (userType == "Teacher") {

        rollField.style.display = "none";
        departmentField.style.display = "block";

    } else {

        rollField.style.display = "none";
        departmentField.style.display = "none";

    }

}