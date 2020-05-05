var details=[["default","30","Default","fixed","hello"]];
var selectedRow=0;
var table=document.getElementById("Table").getElementsByTagName("tbody")[0]
updateTable()
function add(){
    var arr=[];
    arr[0]=document.getElementById("Name").value
    arr[1]=document.getElementById("mobile").value
    arr[2]=document.getElementById("email").value
    arr[3]=document.getElementById("business").value
    arr[4]=document.getElementById("address").value

    details.push(arr)
    updateTable();
    formClear();

}

function updateTable(){
    table.innerHTML=""
    var i=0;
    while(i<details.length){
        var row=table.insertRow(i);
        row.addEventListener("click",rowSelect.bind(null,i));
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        var cell3=row.insertCell(2);
        var cell4=row.insertCell(3);
        var cell5=row.insertCell(4);
        var cell6=row.insertCell(5);

        cell1.innerHTML=""
        cell2.innerHTML=details[i][0]
        cell3.innerHTML=details[i][1]
        cell4.innerHTML=details[i][2]
        cell5.innerHTML=details[i][3]
        cell6.innerHTML=details[i][4]

        if(selectedRow==i){
            row.style.background="rgb(65, 121, 243, 0.66)"

        }
        i++;
    }
}

function formClear(){//function to clear form

    document.getElementById("Name").value=""
    document.getElementById("mobile").value=""
    document.getElementById("email").value=""
    document.getElementById("business").value=""
    document.getElementById("address").value=""
}

function rowSelect(x){ //function to change selected row as the index of employeeList array.
    selectedRow=x
    updateTable()
}

function resetTable(){ //reset employeeList array to default value
    
    details=[["default","30","Default","fixed","hello"]]
    
    updateTable()
    formClear();
}
function deleteRow(){//delete selected row
    details.splice(selectedRow,1)
    updateTable();

}
function updateRow(){ //update values of selected row from values from form
    details[selectedRow][0]=document.getElementById("Name").value==""?"add value":document.getElementById("Name").value
    details[selectedRow][1]=document.getElementById("mobile").value==""?"add value":document.getElementById("mobile").value
    details[selectedRow][2]=document.getElementById("email").value==""?"add value":document.getElementById("email").value
    details[selectedRow][3]=document.getElementById("business").value==""?"add value":document.getElementById("busines").value
    details[selectedRow][4]=document.getElementById("address").value==""?"add value":document.getElementById("address").value
    updateTable()
    formClear()
}