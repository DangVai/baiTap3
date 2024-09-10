document.getElementById("ok").addEventListener("click", tinhTb);
document.getElementById("cancel").addEventListener("click", myFunction2);

function tinhTb(){
    var a = document.getElementById("Laos").value;
    a = parseInt(a);
    var b = document.getElementById("Enlish").value;
    b = parseInt(b);
    var c = document.getElementById("year");
    var value = c.options[c.selectedIndex].value;
    var k;
    
    // Kiểm tra lỗi
    if (isNaN(a) || isNaN(b)) {
        alert("Please enter valid score");
        return;
    }
    
    switch (value){
        case "1":
            k = (a + (b * 2)) / 3;
            break;
        case "2":
            k = ((a * 2) + (b * 3)) / 5;
            break;
        case "3":
            k = ((a * 2) + (b * 3)) / 7;
            break;
        default:
            k = 0;
    }
    
    var resultElement = document.getElementById("kq");
    resultElement.innerHTML = ""; // Xóa nội dung trước
    
    if (k >= 9) {
        resultElement.innerHTML += "Học sinh xuất sắc";
        resultElement.style.color = "red";
    } else if (k >= 7 && k < 9) {
        resultElement.innerHTML += "Học sinh giỏi";
        resultElement.style.color = "blue";
    } else if (k >= 5 && k < 7) {
        resultElement.innerHTML += "Học sinh trung bình";
        resultElement.style.color = "green";
    } else {
        resultElement.innerHTML += "Học sinh yếu";
        resultElement.style.color = "black";
    }
}

function myFunction2 (){
    document.getElementById("diem1").value = "";
    document.getElementById("diem2").value = "";
}