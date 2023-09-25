
var selectedRow = null;
//show alert
function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = 'alert alert-${className}';

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);



}
//clar all field
function clearField() {
    document.querySelector("#fname").value = "";
    document.querySelector("#classTiming").value = "";
    document.querySelector("#fatherName").value = "";
    document.querySelector("#teacherName").value = "";
    document.querySelector("#rollNumber").value = "";
    document.querySelector("#contact").value = ""
    document.querySelector("#course").value = "";
    document.querySelector("#sectionName").value= "";

}

//add data
document.querySelector(".submitBtn").addEventListener("click" , (e) =>{
    e.preventDefault();
alert("are you sure that all information are true");
const name = document.getElementById("fname").value;
const rollNumber = document.getElementById("rollNumber").value;
const fatherName = document.getElementById("fatherName").value;
const teacherName = document.getElementById("teacherName").value;
const sectionName = document.getElementById("sectionName").value;
const contact =document.getElementById("contact").value;
const classTiming = document.getElementById("classTiming").value;
const course =document.getElementById("course").value;

console.log(
    name,
    rollNumber,
    fatherName,
    classTiming,
    teacherName,
    contact,
    course,
    sectionName
  );

   if(name == ""|| rollNumber == ""|| fatherName==""){
    showAlert("please filll all field", "danger")
   }

else{
if(selectedRow == null){
    constList = document.querySelector("#student-list");
    const row = document.createElement("tr");
    row.innerHTML = ` <td>${name}</td>
                    <td>${fatherName}</td> 
                    <td>${rollNumber}</td> 
                    <td>${contact}</td> 
                    <td>${sectionName}</td>     
                    <td>${classTiming}</td> 
                    <td>${teacherName}</td>
                    <td>${course}</td>
                    <td><a href ="#" class="btn btn-warning btn-sm edit">Edit</a>
                    <a href ="#" class="btn btn-danger btn-sm delete" >Delete</a>
                </td>`;

                     constList.appendChild(row);
                     selectedRow == null;
                     showAlert("student added","success");
}
else{
        selectedRow.children[0].textContent = name;
        selectedRow.children[1].textContent = fatherName ;
        selectedRow.children[2].textContent = rollNumber ;
        selectedRow.children[3].textContent = contact ;
        selectedRow.children[4].textContent = sectionName ;
        selectedRow.children[5].textContent = classTiming;
        selectedRow.children[6].textContent = teacherName ;
         selectedRow.children[7].textContent = course;
         selectedRow == null;
         showAlert("student info Edit" , "info")


         clearField();

    }
}
});



document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("edit")) {
       selectedRow = target.parentElement.parentElement;
       document.querySelector("#fname").value =selectedRow.children[0].textContent;
       document.querySelector("#fatherName").value =selectedRow.children[1].textContent;
       document.querySelector("#rollNumber").value =selectedRow.children[2].textContent;
       document.querySelector("#contact").value =selectedRow.children[3].textContent;
       document.querySelector("#sectionName").value =selectedRow.children[4].textContent;
       document.querySelector("#classTiming").value =selectedRow.children[5].textContent;
       document.querySelector("#teacherName").value =selectedRow.children[6].textContent;
       document.querySelector("#course").value =selectedRow.children[7].textContent;
   
    }
});





document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("student Data Deleted", "danger");
    }
});
