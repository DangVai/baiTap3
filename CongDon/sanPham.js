var id = 0;
function sell(){
    id++;
    var pname = document.querySelector("#pname").value;
    var qty = document.querySelector("#qty").value;
    var price = document.querySelector("#up").value;
    var dc = document.querySelector("#dc").value;
    var sub = qty * price * (1 - dc / 100);
    
    var row = "<tr>";
    row += "<td>" + id + "</td>";  
    row += "<td>" + pname + "</td>";  
    row += "<td>" + qty + "</td>";  
    row += "<td>" + price + "</td>";  
    row += "<td>" + dc + "</td>";  
    row += "<td>" + sub.toFixed(2) + "</td>";  
    row += "</tr>";

    document.querySelector("#tbl").innerHTML += row;
}
