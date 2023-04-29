fetch('home.html')
    .then(response => response.text())
    .then(html => document.getElementById('pills-home').innerHTML = html);

fetch('producten.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('pills-producten').innerHTML = html;
        const script = document.createElement('script');
        script.src = 'producten.js';
        document.body.appendChild(script);
    });