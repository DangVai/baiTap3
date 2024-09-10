const container = document.getElementById('container');
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
                         'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
                         'U', 'V', 'W', 'X', 'Y', 'Z'];
        let output = '';
        let letterIndex = 0;

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 10; j++) {
                const letter = letters[letterIndex]; // Lấy chữ cái từ mảng
                const index = i * 10 + j + 1; // Tính vị trí từ 1 đến hết
                output += `<div class="box" onclick="alert('Vị trí: ${index}')">${letter}</div>`;
                letterIndex++; // Tăng chỉ số chữ cái sau mỗi ô

                // Đặt lại chỉ số nếu vượt quá chiều dài mảng
                if (letterIndex >= letters.length) {
                    letterIndex = 0;
                }
            }
            output += '<br>';
        }

        container.innerHTML = output;