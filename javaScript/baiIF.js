function myFunction(){
    var number = document.getElementById('nhap').value;
    var greeting;
    
    if (number == 0) {
        greeting = "Bạn được 0 điểm";
        document.getElementById('demo').style.color = "black";

    } else if (number > 0) {
        greeting = "Đó là số dương";
        document.getElementById('demo').style.color = "gold";
        
    } else {
        greeting = "Đây là số âm";
        document.getElementById('demo').style.color = "red";
    }

    document.getElementById('demo').innerHTML = greeting;
}

