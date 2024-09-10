var container = document.getElementById('container');
var output = '';
var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Chữ cái để thêm vào mỗi hộp
var letterIndex = 0; // Chỉ số của chữ cái hiện tại

for (var i = 0; i < 5; i++) { 
    for (var j = 0; j < 10; j++) { 
        var letter = letters[letterIndex % letters.length];
        letterIndex++; 
        output += '<div class="box" onclick="showPosition(' + (i + 1) + ', ' + (j + 1) + ')">' + letter + '</div>';
    }
    output += '<br>';
}


container.innerHTML = output;

// Hàm hiển thị vị trí của hộp khi bấm vào
function showPosition(rowIndex, colIndex) {
    alert('Hàng ' + rowIndex + ', Cột ' + colIndex);
}