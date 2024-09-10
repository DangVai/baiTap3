document.getElementById('btn-red').addEventListener('click', function() {
    document.getElementById('light-red').src = 'vongFor/img1/green.png';
    document.getElementById('light-green').src = 'black-light.png';
});

document.getElementById('btn-green').addEventListener('click', function() {
    document.getElementById('light-green').src = 'green-light.png';
    document.getElementById('light-red').src = 'black-light.png';
});
