const addresses = [
  {
    "name": "John Doe",
    "streetAddress": "123 Main St",
    "city": "Springfield",
    "state": "IL",
    "zip": "62704"
  },
  {
    "name": "Jane Smith",
    "streetAddress": "456 Elm St",
    "city": "Los Angeles",
    "state": "CA",
    "zip": "90001"
  },
  {
    "name": "Alice Johnson",
    "streetAddress": "789 Oak St",
    "city": "Houston",
    "state": "TX",
    "zip": "77001"
  },
  {
    "name": "Michael Brown",
    "streetAddress": "101 Pine St",
    "city": "Miami",
    "state": "FL",
    "zip": "33101"
  },
  {
    "name": "Emily Davis",
    "streetAddress": "202 Maple St",
    "city": "Denver",
    "state": "CO",
    "zip": "80201"
  },
  {
    "name": "David Wilson",
    "streetAddress": "303 Birch St",
    "city": "Chicago",
    "state": "IL",
    "zip": "60601"
  },
  {
    "name": "Sarah Miller",
    "streetAddress": "404 Cedar St",
    "city": "New York",
    "state": "NY",
    "zip": "10001"
  },
  {
    "name": "Christopher Garcia",
    "streetAddress": "505 Spruce St",
    "city": "Seattle",
    "state": "WA",
    "zip": "98101"
  },
  {
    "name": "Jessica Martinez",
    "streetAddress": "606 Fir St",
    "city": "Austin",
    "state": "TX",
    "zip": "73301"
  },
  {
    "name": "Matthew Anderson",
    "streetAddress": "707 Redwood St",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94101"
  },
  {
    "name": "Ashley Thomas",
    "streetAddress": "808 Ash St",
    "city": "Boston",
    "state": "MA",
    "zip": "02101"
  },
  {
    "name": "Joshua Hernandez",
    "streetAddress": "909 Cherry St",
    "city": "Phoenix",
    "state": "AZ",
    "zip": "85001"
  },
  {
    "name": "Amanda Moore",
    "streetAddress": "1010 Walnut St",
    "city": "Philadelphia",
    "state": "PA",
    "zip": "19101"
  },
  {
    "name": "Daniel Jackson",
    "streetAddress": "1111 Willow St",
    "city": "Columbus",
    "state": "OH",
    "zip": "43201"
  },
  {
    "name": "Megan White",
    "streetAddress": "1212 Poplar St",
    "city": "Charlotte",
    "state": "NC",
    "zip": "28201"
  },
  {
    "name": "Andrew Harris",
    "streetAddress": "1313 Cypress St",
    "city": "Indianapolis",
    "state": "IN",
    "zip": "46201"
  },
  {
    "name": "Hannah Lewis",
    "streetAddress": "1414 Chestnut St",
    "city": "Detroit",
    "state": "MI",
    "zip": "48201"
  },
  {
    "name": "Brandon Clark",
    "streetAddress": "1515 Hickory St",
    "city": "Memphis",
    "state": "TN",
    "zip": "38101"
  },
  {
    "name": "Samantha Robinson",
    "streetAddress": "1616 Magnolia St",
    "city": "Baltimore",
    "state": "MD",
    "zip": "21201"
  },
  {
    "name": "James Lewis",
    "streetAddress": "1717 Linden St",
    "city": "Milwaukee",
    "state": "WI",
    "zip": "53201"
  },
  {
    "name": "Olivia Walker",
    "streetAddress": "1818 Aspen St",
    "city": "Portland",
    "state": "OR",
    "zip": "97201"
  },
  {
    "name": "Benjamin Hall",
    "streetAddress": "1919 Redwood St",
    "city": "San Diego",
    "state": "CA",
    "zip": "92101"
  },
  {
    "name": "Natalie King",
    "streetAddress": "2020 Cedar St",
    "city": "Dallas",
    "state": "TX",
    "zip": "75201"
  },
  {
    "name": "Ryan Wright",
    "streetAddress": "2121 Birch St",
    "city": "San Antonio",
    "state": "TX",
    "zip": "78201"
  },
  {
    "name": "Sophia Lopez",
    "streetAddress": "2222 Spruce St",
    "city": "San Jose",
    "state": "CA",
    "zip": "95101"
  },
  {
    "name": "Ethan Lee",
    "streetAddress": "2323 Fir St",
    "city": "Austin",
    "state": "TX",
    "zip": "73301"
  },
  {
    "name": "Victoria Martinez",
    "streetAddress": "2424 Ash St",
    "city": "Fort Worth",
    "state": "TX",
    "zip": "76101"
  },
  {
    "name": "Jacob Taylor",
    "streetAddress": "2525 Pine St",
    "city": "Jacksonville",
    "state": "FL",
    "zip": "32099"
  },
  {
    "name": "Ava Anderson",
    "streetAddress": "2626 Maple St",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94101"
  },
  {
    "name": "Noah Hernandez",
    "streetAddress": "2727 Redwood St",
    "city": "San Antonio",
    "state": "TX",
    "zip": "78201"
  },
  {
    "name": "Mia Brown",
    "streetAddress": "2828 Cedar St",
    "city": "Phoenix",
    "state": "AZ",
    "zip": "85001"
  },
  {
    "name": "William Thomas",
    "streetAddress": "2929 Birch St",
    "city": "Houston",
    "state": "TX",
    "zip": "77001"
  },
  {
    "name": "Emma Davis",
    "streetAddress": "3030 Spruce St",
    "city": "Chicago",
    "state": "IL",
    "zip": "60601"
  },
  {
    "name": "Alexander Wilson",
    "streetAddress": "3131 Fir St",
    "city": "San Diego",
    "state": "CA",
    "zip": "92101"
  },
  {
    "name": "Isabella Martinez",
    "streetAddress": "3232 Ash St",
    "city": "Dallas",
    "state": "TX",
    "zip": "75201"
  },
  {
    "name": "Lucas Robinson",
    "streetAddress": "3333 Pine St",
    "city": "Austin",
    "state": "TX",
    "zip": "73301"
  },
  {
    "name": "Charlotte Clark",
    "streetAddress": "3434 Maple St",
    "city": "San Jose",
    "state": "CA",
    "zip": "95101"
  },
  {
    "name": "Elijah Lewis",
    "streetAddress": "3535 Redwood St",
    "city": "San Antonio",
    "state": "TX",
    "zip": "78201"
  },
  {
    "name": "Amelia Hall",
    "streetAddress": "3636 Cedar St",
    "city": "Phoenix",
    "state": "AZ",
    "zip": "85001"
  },
  {
    "name": "Henry Walker",
    "streetAddress": "3737 Birch St",
    "city": "Los Angeles",
    "state": "CA",
    "zip": "90001"
  },
  {
    "name": "Grace King",
    "streetAddress": "3838 Spruce St",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94101"
  },
  {
    "name": "Sebastian Wright",
    "streetAddress": "3939 Fir St",
    "city": "Houston",
    "state": "TX",
    "zip": "77001"
  },
  {
    "name": "Zoe Martinez",
    "streetAddress": "4040 Ash St",
    "city": "Chicago",
    "state": "IL",
    "zip": "60601"
  },
  {
    "name": "Liam Lee",
    "streetAddress": "4141 Pine St",
    "city": "Philadelphia",
    "state": "PA",
    "zip": "19101"
  },
  {
    "name": "Harper Hernandez",
    "streetAddress": "4242 Maple St",
    "city": "Phoenix",
    "state": "AZ",
    "zip": "85001"
  },
  {
    "name": "Daniel Garcia",
    "streetAddress": "4343 Redwood St",
    "city": "Dallas",
    "state": "TX",
    "zip": "75201"
  },
  {
    "name": "Ella Clark",
    "streetAddress": "4444 Cedar St",
    "city": "San Diego",
    "state": "CA",
    "zip": "92101"
  },
  {
    "name": "James Anderson",
    "streetAddress": "4545 Birch St",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94101"
  },
  {
    "name": "Sofia Miller",
    "streetAddress": "4646 Spruce St",
    "city": "Los Angeles",
    "state": "CA",
    "zip": "90001"
  },
  {
    "name": "Aiden Wilson",
    "streetAddress": "4747 Fir St",
    "city": "Houston",
    "state": "TX",
    "zip": "77001"
  },
  {
    "name": "Aubrey Davis",
    "streetAddress": "4848 Ash St",
    "city": "Chicago",
    "state": "IL",
    "zip": "60601"
  },
  {
    "name": "Logan Thomas",
    "streetAddress": "4949 Pine St",
    "city": "Dallas",
    "state": "TX",
    "zip": "75201"
  },
  {
    "name": "Layla Johnson",
    "streetAddress": "5050 Maple St",
    "city": "Phoenix",
    "state": "AZ",
    "zip": "85001"
  },
  {
    "name": "Carter Brown",
    "streetAddress": "5151 Redwood St",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94101"
  },
  {
    "name": "Avery Lewis",
    "streetAddress": "5252 Cedar St",
    "city": "Houston",
    "state": "TX",
    "zip": "77001"
  },
  {
    "name": "Jayden Lee",
    "streetAddress": "5353 Birch St",
    "city": "Los Angeles",
    "state": "CA",
    "zip": "90001"
  },
  {
    "name": "Scarlett Walker",
    "streetAddress": "5454 Spruce St",
    "city": "San Diego",
    "state": "CA",
    "zip": "92101"
  },
  {
    "name": "Julian Martinez",
    "streetAddress": "5555 Fir St",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94101"
  },
  {
    "name": "Brooklyn Anderson",
    "streetAddress": "5656 Ash St",
    "city": "Phoenix",
    "state": "AZ",
    "zip": "85001"
  },
  {
    "name": "Evelyn Thomas",
    "streetAddress": "5757 Pine St",
    "city": "Houston",
    "state": "TX",
    "zip": "77001"
  },
  {
    "name": "Owen Harris",
    "streetAddress": "5858 Maple St",
    "city": "Chicago",
    "state": "IL",
    "zip": "60601"
  },
  {
    "name": "Hannah Wilson",
    "streetAddress": "5959 Redwood St",
    "city": "Dallas",
    "state": "TX",
    "zip": "75201"
  },
  {
    "name": "Jack Martinez",
    "streetAddress": "6060 Cedar St",
    "city": "San Diego",
    "state": "CA",
    "zip": "92101"
  },
  {
    "name": "Mila Johnson",
    "streetAddress": "6161 Birch St",
    "city": "Phoenix",
    "state": "AZ",
    "zip": "85001"
  },
  {
    "name": "Luke Lewis",
    "streetAddress": "6262 Spruce St",
    "city": "Houston",
    "state": "TX",
    "zip": "77001"
  },
  {
    "name": "Chloe Hernandez",
    "streetAddress": "6363 Fir St",
    "city": "Los Angeles",
    "state": "CA",
    "zip": "90001"
  },
  {
    "name": "David Garcia",
    "streetAddress": "6464 Ash St",
    "city": "Chicago",
    "state": "IL",
    "zip": "60601"
  },
  {
    "name": "Zoe Anderson",
    "streetAddress": "6565 Pine St",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94101"
  },
  {
    "name": "Jackson Thomas",
    "streetAddress": "6666 Maple St",
    "city": "Phoenix",
    "state": "AZ",
    "zip": "85001"
  },
  {
    "name": "Addison Lee",
    "streetAddress": "6767 Redwood St",
    "city": "Houston",
    "state": "TX",
    "zip": "77001"
  },
  {
    "name": "Michael Walker",
    "streetAddress": "6868 Cedar St",
    "city": "Los Angeles",
    "state": "CA",
    "zip": "90001"
  },
  {
    "name": "Ellie Martinez",
    "streetAddress": "6969 Birch St",
    "city": "Chicago",
    "state": "IL",
    "zip": "60601"
  },
  {
    "name": "Levi Davis",
    "streetAddress": "7070 Spruce St",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94101"
  },
  {
    "name": "Willow Brown",
    "streetAddress": "7171 Fir St",
    "city": "Phoenix",
    "state": "AZ",
    "zip": "85001"
  },
  {
    "name": "Aiden Martinez",
    "streetAddress": "7272 Ash St",
    "city": "Houston",
    "state": "TX",
    "zip": "77001"
  },
  {
    "name": "Sophia Lee",
    "streetAddress": "7373 Pine St",
    "city": "Los Angeles",
    "state": "CA",
    "zip": "90001"
  },
  {
    "name": "Logan Hernandez",
    "streetAddress": "7474 Maple St",
    "city": "Chicago",
    "state": "IL",
    "zip": "60601"
  },
  {
    "name": "Lily Johnson",
    "streetAddress": "7575 Redwood St",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94101"
  },
  {
    "name": "Lucas Wilson",
    "streetAddress": "7676 Cedar St",
    "city": "Phoenix",
    "state": "AZ",
    "zip": "85001"
  },
  {
    "name": "Mason Davis",
    "streetAddress": "7777 Birch St",
    "city": "Houston",
    "state": "TX",
    "zip": "77001"
  },
  {
    "name": "Stella Anderson",
    "streetAddress": "7878 Spruce St",
    "city": "Los Angeles",
    "state": "CA",
    "zip": "90001"
  },
  {
    "name": "Ethan Thomas",
    "streetAddress": "7979 Fir St",
    "city": "Chicago",
    "state": "IL",
    "zip": "60601"
  },
  {
    "name": "Charlotte Hernandez",
    "streetAddress": "8080 Ash St",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94101"
  },
  {
    "name": "Alexander Walker",
    "streetAddress": "8181 Pine St",
    "city": "Phoenix",
    "state": "AZ",
    "zip": "85001"
  },
  {
    "name": "Riley Martinez",
    "streetAddress": "8282 Maple St",
    "city": "Houston",
    "state": "TX",
    "zip": "77001"
  },
  {
    "name": "Daniel Lewis",
    "streetAddress": "8383 Redwood St",
    "city": "Los Angeles",
    "state": "CA",
    "zip": "90001"
  },
  {
    "name": "Aurora Johnson",
    "streetAddress": "8484 Cedar St",
    "city": "Chicago",
    "state": "IL",
    "zip": "60601"
  },
  {
    "name": "Oliver Brown",
    "streetAddress": "8585 Birch St",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94101"
  },
  {
    "name": "Hazel Martinez",
    "streetAddress": "8686 Spruce St",
    "city": "Phoenix",
    "state": "AZ",
    "zip": "85001"
  },
  {
    "name": "Lucas Hernandez",
    "streetAddress": "8787 Fir St",
    "city": "Houston",
    "state": "TX",
    "zip": "77001"
  },
  {
    "name": "Grace Walker",
    "streetAddress": "8888 Ash St",
    "city": "Los Angeles",
    "state": "CA",
    "zip": "90001"
  },
  {
    "name": "Benjamin Thomas",
    "streetAddress": "8989 Pine St",
    "city": "Chicago",
    "state": "IL",
    "zip": "60601"
  },
  {
    "name": "Levi Lewis",
    "streetAddress": "9090 Maple St",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94101"
  },
  {
    "name": "Mila Davis",
    "streetAddress": "9191 Redwood St",
    "city": "Phoenix",
    "state": "AZ",
    "zip": "85001"
  },
  {
    "name": "Elijah Martinez",
    "streetAddress": "9292 Cedar St",
    "city": "Houston",
    "state": "TX",
    "zip": "77001"
  },
  {
    "name": "Emma Walker",
    "streetAddress": "9393 Birch St",
    "city": "Los Angeles",
    "state": "CA",
    "zip": "90001"
  },
  {
    "name": "Henry Johnson",
    "streetAddress": "9494 Spruce St",
    "city": "Chicago",
    "state": "IL",
    "zip": "60601"
  },
  {
    "name": "Ella Hernandez",
    "streetAddress": "9595 Fir St",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94101"
  },
  {
    "name": "Carter Brown",
    "streetAddress": "9696 Ash St",
    "city": "Phoenix",
    "state": "AZ",
    "zip": "85001"
  },
  {
    "name": "Harper Martinez",
    "streetAddress": "9797 Pine St",
    "city": "Houston",
    "state": "TX",
    "zip": "77001"
  },
  {
    "name": "Liam Thomas",
    "streetAddress": "9898 Maple St",
    "city": "Los Angeles",
    "state": "CA",
    "zip": "90001"
  },
  {
    "name": "Sofia Walker",
    "streetAddress": "9999 Redwood St",
    "city": "Chicago",
    "state": "IL",
    "zip": "60601"
  }
];
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
      // Hide the rating widget forever
      document.querySelector('.rating').style.display = 'none';
      localStorage.setItem('hideRating', 'true');
    }
  });

  document.getElementById('card-info').addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-icon')) {
      const text = e.target.getAttribute('data-copy');
      copyToClipboard(text, e.target);
    }
  });

  if (localStorage.getItem('hideRating') === 'true') {
    document.querySelector('.rating').style.display = 'none';
  }

  function displayCardDetails(cardDetails) {
    document.getElementById('card-info').innerHTML = `
      <p><strong>Card number:</strong> <span>${cardDetails.cardNumber}</span> <img src="../icons/copy-icon.png" class="copy-icon" data-copy="${cardDetails.cardNumber}" /></p>
      <p><strong>CVV:</strong> <span>${cardDetails.cvv}</span> <img src="../icons/copy-icon.png" class="copy-icon" data-copy="${cardDetails.cvv}" /></p>
      <p><strong>Date:</strong> <span>${cardDetails.expiryDate}</span> <img src="../icons/copy-icon.png" class="copy-icon" data-copy="${cardDetails.expiryDate}" /></p>
      <p><strong>Name:</strong> <span>${cardDetails.name}</span> <img src="../icons/copy-icon.png" class="copy-icon" data-copy="${cardDetails.name}" /></p>
      <p><strong>Street Address:</strong> <span>${cardDetails.streetAddress}</span> <img src="../icons/copy-icon.png" class="copy-icon" data-copy="${cardDetails.streetAddress}" /></p>
      <p><strong>Country:</strong> <span>USA</span> <img src="../icons/copy-icon.png" class="copy-icon" data-copy="USA" /></p>
      <p><strong>Zip code:</strong> <span>${cardDetails.zip}</span> <img src="../icons/copy-icon.png" class="copy-icon" data-copy="${cardDetails.zip}" /></p>
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
      element.src = "../icons/check-icon.png";
      setTimeout(() => {
        element.src = "../icons/copy-icon.png";
      }, 2000);
    }, (err) => {
      alert('Failed to copy: ', err);
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
    const address = addresses[Math.floor(Math.random() * addresses.length)];

    return {
      cardNumber,
      cvv,
      expiryDate,
      name: address.name,
      streetAddress: address.streetAddress,
      city: address.city,
      state: address.state,
      zip: address.zip,
      country: 'USA'
    };
  }
});