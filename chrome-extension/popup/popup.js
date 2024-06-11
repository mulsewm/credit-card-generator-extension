document.getElementById('generate-btn').addEventListener('click', async () => {
  try {
    const response = await fetch('http://localhost:3002/generate-card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    document.getElementById('card-info').innerHTML = `
      <p><strong>Card number:</strong> ${data.cardNumber} <img src="../icons/copy.png" class="copy-icon" data-copy="${data.cardNumber}" /></p>
      <p><strong>CVV:</strong> ${data.cvv} <img src="../icons/copy.png" class="copy-icon" data-copy="${data.cvv}" /></p>
      <p><strong>Date:</strong> ${data.date}</p>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Zip code:</strong> ${data.zip}</p>
    `;
  } catch (error) {
    document.getElementById('card-info').innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
});

document.getElementById('rate-us').addEventListener('click', (e) => {
  const rating = e.target.getAttribute('data-value');
  if (rating) {
    highlightStars(rating);
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
    copyToClipboard(text);
  }
});

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

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Copied ');
  }, (err) => {
    alert('Failed : ', err);
  });
}