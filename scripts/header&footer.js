fetch('elements/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });
fetch('elements/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

fetch('../../elements/headerin.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('headerin').innerHTML = data;
    });
fetch('../../elements/footerin.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footerin').innerHTML = data;
    });