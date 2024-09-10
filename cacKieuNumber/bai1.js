let age = 24;
let pi = 3.14;

// Thay thế phép chia không hợp lệ bằng một phép tính hợp lệ
let result = age / 2;

// Kiểm tra NaN
if (isNaN(result)) {
  console.log("Kết quả không hợp lệ");
} else {
  console.log(result);
}

let sum = age + pi;
console.log(sum);

// Thêm phần tử HTML có id 'text'
let text = document.getElementById('text');

// Thêm sự kiện tải trang
window.addEventListener('load', function() {
  let x = 0;
  let y = 0;
  let speedX = 2;
  let speedY = 2;

  function moveText() {
    x += speedX;
    y += speedY;

    if (x > window.innerWidth - text.offsetWidth || x < 0) {
      speedX = -speedX;
    }

    if (y > window.innerHeight - text.offsetHeight || y < 0) {
      speedY = -speedY;
    }

    text.style.top = y + 'px';
    text.style.left = x + 'px';

    requestAnimationFrame(moveText);
  }

  moveText();
});