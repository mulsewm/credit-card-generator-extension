document.addEventListener('DOMContentLoaded', () => {
  // Load saved card details from local storage
  const savedCardDetails = JSON.parse(localStorage.getItem('cardDetails'));
  if (savedCardDetails) {
    displayCardDetails(savedCardDetails);
  }

  document.getElementById('generate-btn').addEventListener('click', () => {
    const cardType = document.getElementById('card-type').value;
    const cardDetails = generateCardDetails(cardType);
    localStorage.setItem('cardDetails', JSON.stringify(cardDetails));
    displayCardDetails(cardDetails);
  });

  document.getElementById('rate-us').addEventListener('mouseover', (e) => {
    if (e.target.dataset.value) {
      highlightStars(e.target.dataset.value);
    }
  });

  document.getElementById('rate-us').addEventListener('click', (e) => {
    const rating = e.target.getAttribute('data-value');
    if (rating) {
      if (rating >= 4) {
        window.location.href = 'https://www.google.com/';
      } else {
        window.location.href = 'https://www.youtube.com/hashtag/funnyvideo';
      }
    }
  });

  document.getElementById('card-info').addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-icon')) {
      const text = e.target.getAttribute('data-copy');
      copyToClipboard(text, e.target);
    }
  });

  function displayCardDetails(cardDetails) {
    document.getElementById('card-info').innerHTML = `
      <p><strong>Card number:</strong> ${cardDetails.cardNumber} <img src="../icons/copy.png" class="copy-icon" data-copy="${cardDetails.cardNumber}" /></p>
      <p><strong>CVV:</strong> ${cardDetails.cvv} <img src="../icons/copy.png" class="copy-icon" data-copy="${cardDetails.cvv}" /></p>
      <p><strong>Date:</strong> ${cardDetails.expiryDate} <img src="../icons/copy.png" class="copy-icon" data-copy="${cardDetails.expiryDate}" /></p>
      <p><strong>Name:</strong> ${cardDetails.name} <img src="../icons/copy.png" class="copy-icon" data-copy="${cardDetails.name}" /></p>
      <p><strong>Street Address:</strong> ${cardDetails.streetAddress} <img src="../icons/copy.png" class="copy-icon" data-copy="${cardDetails.streetAddress}" /></p>
      <p><strong>Country:</strong> USA <img src="../icons/copy.png" class="copy-icon" data-copy="USA" /></p>
      <p><strong>Zip code:</strong> ${cardDetails.zip} <img src="../icons/copy.png" class="copy-icon" data-copy="${cardDetails.zip}" /></p>
    `;
  }

  function highlightStars(rating) {
    const stars = document.querySelectorAll('#rate-us span');
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add('highlighted');
      } else {
        star.classList.remove('highlighted');
      }
    });
  }

  function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
      element.src = "../icons/check.png";
      setTimeout(() => {
        element.src = "../icons/copy.png";
      }, 2000);
    }, (err) => {
      alert('Cant to copy: ', err);
    });
  }

  function generateCardDetails(cardType) {
    const cardPrefixes = {
      'Visa': '4',
      'Mastercard': '5',
      'American Express': '3'
    };
    const prefix = cardPrefixes[cardType] || '4';
    const cardNumber = prefix + Array.from({ length: 15 }, () => Math.floor(Math.random() * 10)).join('');
    const cvv = String(Math.floor(100 + Math.random() * 900));
    const expiryDate = `${String(Math.floor(1 + Math.random() * 12)).padStart(2, '0')}/${String(Math.floor(24 + Math.random() * 6))}`;
    const name = generateRandomName();
    const streetAddress = generateRandomAddress();
    const zip = String(Math.floor(10000 + Math.random() * 90000));

    return { cardNumber, cvv, expiryDate, name, streetAddress, country: 'USA', zip };
  }

  function generateRandomName() {
    const firstNames = ['John', 'Jane', 'Alex', 'Chris', 'Pat', 'Sam'];
    const lastNames = ['Doe', 'Smith', 'Johnson', 'Brown', 'Taylor', 'Anderson'];
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
  }

  function generateRandomAddress() {
    const streets = ['Main St', '2nd St', '3rd St', '4th St', '5th St'];
    const cities = ['Anytown', 'Somewhere', 'Anywhere', 'Everywhere', 'Nowhere'];
    return `${Math.floor(Math.random() * 1000)} ${streets[Math.floor(Math.random() * streets.length)]}, ${cities[Math.floor(Math.random() * cities.length)]}, USA`;
  }
});
