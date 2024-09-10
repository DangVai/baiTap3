var day = (document.getElementById("nhap").value);
function myFunction() {
    switch (day) {
        case 1:
            greeting = "thu 2";
            break;
        case 2:
            greeting = "thu 3";
            break;
        case 3:
            greeting = "thu 4";
            break;
        case 4:
            greeting = "thu 5";
            break;
        case 5:
            greeting = "thu 6";
            break;
        case 6:
            greeting = "thu 7";
            break;
        case 7:
            greeting = "chu nhat";
            break;
        default:
            greeting = "Ngày không hợp lệ";
    }
    document.getElementById("demo").innerHTML = greeting;
}