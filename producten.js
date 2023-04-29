const cardContainer = document.getElementById('card-container');
const dropdownItems = document.querySelectorAll('.dropdown-item');

fetch('merken.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    dropdownItems.forEach(dropdownItem => {
        dropdownItem.addEventListener('click', () => {
            const herkomstData = data.filter(item => item.herkomst === dropdownItem.textContent);
            displayCards(herkomstData);
      });
    });
  });


function displayCards(data) {

    for (const item of data) {
        const herkomst = item.herkomst;
        const card = document.createElement('div');
        card.className = 'col-ms-12 col-md-4 col-lg-3 d-flex my-2';

        const cardBorder = document.createElement('div');
        cardBorder.className = 'card producten-images';
        card.appendChild(cardBorder);

        const cardImg = document.createElement('img');
        cardImg.className = 'card-img-top img-fluid';
        cardImg.src = item.img;
        cardBorder.appendChild(cardImg);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardBorder.appendChild(cardBody);

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = item.beschrijving;
        cardBody.appendChild(cardText);

        const cardLink = document.createElement('a');
        cardLink.className = 'card-link';
        cardLink.href = '#';
        cardLink.textContent = 'Lees meer';
        cardBody.appendChild(cardLink);

        cardContainer.appendChild(card);
    }
}
