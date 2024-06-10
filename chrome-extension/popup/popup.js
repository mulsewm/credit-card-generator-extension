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
      <p>Card number: ${data.cardNumber} <button onclick="copyToClipboard('${data.cardNumber}')">Copy</button></p>
      <p>CVV: ${data.cvv} <button onclick="copyToClipboard('${data.cvv}')">Copy</button></p>
      <p>Date: ${data.date}</p>
      <p>Name: ${data.name}</p>
      <p>Zip code: ${data.zip}</p>
    `;
  } catch (error) {
    document.getElementById('card-info').innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
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

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Copied to clipboard');
  }, (err) => {
    alert('Failed to copy: ', err);
  });
}