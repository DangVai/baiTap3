var id = 0;
var total = 0; // Thêm biến để lưu tổng tiền

function Add() {
    id++;
    var pname = document.querySelector("#pname").value;
    var qty = parseFloat(document.querySelector("#qty").value);
    var price = parseFloat(document.querySelector("#up").value);
    var sub = qty * price;
    
    var table = document.querySelector("#tbl");
    var row = table.insertRow(table.rows.length - 1); // Thêm hàng trước hàng tổng
    
    // Tạo các ô trong hàng mới
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    
    cell1.textContent = id;  
    cell2.textContent = pname;  
    cell3.textContent = qty;  
    cell4.textContent = price;  
    cell5.textContent = sub.toFixed(2);  
    
    total += sub; // Cập nhật tổng tiền
    document.querySelector("#total").textContent = total.toFixed(2) + "$"; // Cập nhật tổng tiền hiển thị
}
