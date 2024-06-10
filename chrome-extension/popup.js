document.getElementById('generate-btn').addEventListener('click', async () => {
    const response = await fetch('http://localhost:3002/generate-card');
    const data = await response.json();
    document.getElementById('card-info').innerHTML = `
        <p>Card number: ${data.cardNumber}</p>
        <p>CVV: ${data.cvv}</p>
        <p>Date: ${data.date}</p>
        <p>Name: ${data.name}</p>
        <p>Zip code: ${data.zip}</p>
    `;
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